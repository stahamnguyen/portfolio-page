import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>Staham Nguyen, Web and Mobile Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}