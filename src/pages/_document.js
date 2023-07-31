import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://storage.googleapis.com/graph-fonts/EuclidCircular/fonts.css"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://storage.googleapis.com/graph-web/favicon.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
