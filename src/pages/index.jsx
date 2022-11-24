import { Page } from '@/components/Page'
import client from '../../.tina/__generated__/client'

export default Page

export const getStaticProps = async () => {
  const variables = { relativePath: `index.md` }
  return { props: await client.queries.postAndLayout(variables) }
}
