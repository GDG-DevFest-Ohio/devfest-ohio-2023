import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout {...Component.layoutProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
