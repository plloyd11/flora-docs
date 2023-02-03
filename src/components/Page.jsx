import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Prism } from 'tinacms/dist/rich-text/prism'
import { Callout } from '@/components/Callout'
import { Layout } from '@/components/Layout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { slugifyWithCounter } from '@sindresorhus/slugify'

export const Page = (props) => {
  const { data } = useTina(props)

  function collectHeadings(nodes, slugify = slugifyWithCounter()) {
    let sections = []

    for (let node of nodes) {
      if (node.type === 'h2' || node.type === 'h3') {
        let title = node.children[0].text
        if (title) {
          let id = slugify(title)
          node.id = id
          if (node.type === 'h3') {
            if (!sections[sections.length - 1]) {
              throw new Error(
                'Cannot add `h3` to table of contents without a preceding `h2`'
              )
            }
            sections[sections.length - 1].children.push({
              id,
              title,
            })
          } else {
            sections.push({ id, title, children: [] })
          }
        }
      }

      sections.push(...collectHeadings(node.children ?? [], slugify))
    }

    return sections
  }

  return (
    <Layout
      title={data.post.title}
      description={data.post.description}
      tableOfContents={collectHeadings(data.post.body.children)}
      links={data.layout}
    >
      <TinaMarkdown
        content={data.post.body}
        components={{
          code_block: Prism,
          QuickLinks: (props) => {
            return (
              <QuickLinks>
                {props.quickLinks.map((ql, i) => {
                  return <QuickLink key={i} {...ql} />
                })}
              </QuickLinks>
            )
          },
          Callout: ({ children, ...rest }) => {
            return (
              <Callout {...rest}>
                <TinaMarkdown content={children} />
              </Callout>
            )
          },
        }}
      />
    </Layout>
  )
}
