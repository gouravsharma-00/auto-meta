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
                {/* Opengraph */}

                {/* Icon */}

                {/* Title */}
                <title>auto-mate</title></head>
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