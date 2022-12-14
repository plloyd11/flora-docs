// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import { Page } from '@/components/Page'
import client from '../../../.tina/__generated__/client'

export default Page

export const getStaticProps = async ({ params }) => {
  const variables = { relativePath: `${params.filename}.md` }
  return { props: await client.queries.postAndLayout(variables) }
}

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection()

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  }
}
