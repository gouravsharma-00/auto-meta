"use client"
import React, { useState } from 'react'

export default function Page() {
    const [message, setMessage] = useState('')
    const handleClick = async () => {
        const response = await fetch('/api/auth/logout', {
            method: 'POST'
        })
        const result = await response.json()
        setMessage(result.message)

    }
    return(
        <>
            <h1>Logout</h1>
            { message && <p>{message}</p> }
            <button type='logout' onClick={handleClick}>Logout</button>
        </>
    )
}