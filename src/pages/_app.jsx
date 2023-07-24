import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  // Check if Component has layoutProps, if yes, pass it to the Layout component
  const layoutProps = Component.layoutProps || {};

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
