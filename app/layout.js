import Header from '@components/Header'
import Footer from '@components/Footer'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* meta */}
                <meta name="author" content="gourav-sharma" />
                <meta name="description" content="automate your professional life with auto-meta " />
                <meta name="keywords" content="automate, meta, facebook, Instagram, meta, api, professional, business" />
                <meta httpEquiv="Content-language" content="en" />
                {/* canonical */}
                <link rel='canonical' href='https://auto-meta-pi.vercel.app/' />
                {/* Opengraph */}
                <meta property='og:title' content='auto-meta' />
                <meta property='og:description' content='automate your professional life with auto-meta' />
                <meta property='og:url' content='https://auto-meta-pi.vercel.app/' />
                <meta property='og:image' content='https://auto-meta-pi.vercel.app/icon.png' />
                <meta property='og:type' content='website' />
                {/* Icon */}
                <link rel="icon" href="/favicon.ico" />
                {/* Title */}
                <title>auto-meta</title></head>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}