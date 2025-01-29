import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <h1>auto-mate</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/documentation">documentation</Link></li>
                    <li><Link href="/auth/signup">signup</Link></li>
                    <li><Link href="/auth/login">login</Link></li>
                    <li><Link href="/auth/logout">logout</Link></li>
                    <li><Link href="/client">client</Link></li>
                </ul>
            </nav>
        </header>
    )
}