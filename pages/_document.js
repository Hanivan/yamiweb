import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="id"
        className="scroll-smooth scrollbar-thin scrollbar-thumb-murasakino scrollbar-track-yami-600"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Mulish:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/yami-web.png" type="image/x-icon" />
        </Head>
        <body className="bg-yami-900 text-yami-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
