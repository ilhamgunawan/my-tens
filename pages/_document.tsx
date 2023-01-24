import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="corporate">
      <Head />
      <body className="bg-stone-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
