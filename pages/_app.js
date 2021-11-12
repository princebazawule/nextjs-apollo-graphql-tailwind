import { ApolloProvider } from '@apollo/client'
import client from '../src/apollo/client'
import Layout from '../src/components/Layout'
import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
