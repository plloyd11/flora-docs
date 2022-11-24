import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Prism } from 'tinacms/dist/rich-text/prism'
import { Callout } from '@/components/Callout'
import { Layout } from '@/components/Layout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'

export const Page = (props) => {
  const { data } = useTina(props)

  return (
    <Layout
      title={data.post.title}
      description={data.post.description}
      tableOfContents={[]}
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
