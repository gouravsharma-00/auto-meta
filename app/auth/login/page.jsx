"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Page() {
    const route = useRouter()
    const[formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const[message, setMessage] = useState('');
    const handleInput = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json()
            console.log(result)
            if(result.ok) {
                setMessage('login successful')
                route.push('/')
            }else {
                setMessage(result.message || "login failed")
            }
        }catch(error) {
            setMessage("Error occured during login")
        }
    }

    return(
        <fieldset style={{width: 'max-content'}}>
            <legend>login</legend>
            { message && <p>{message}</p> }
            <form onSubmit={handleSubmit} method='post' style={{display: 'flex', flexDirection: 'column'}}>

                <label htmlFor="email">Email</label>
                <input type='email' name='email' id='email' placeholder='Enter your Email' 
                value={formData.email} 
                onChange={handleInput} />

                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' placeholder='Enter your Password' 
                value={formData.password} 
                onChange={handleInput} />

                <button type='submit'>submit</button>
                <button type='reset'>Reset</button>
            </form>
        </fieldset>
    )
}