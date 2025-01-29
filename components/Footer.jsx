import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return(
        <footer>
            <p>&copy; 2025 auto-mate</p>
            <ul>
                <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                <li><Link href="/legal/terms">Terms of Use</Link></li>
            </ul>
        </footer>
    )
}