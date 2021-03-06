import { DocumentContext, DocumentInitialProps } from 'next/dist/next-server/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(documentContext: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(documentContext);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
