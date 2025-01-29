"use client"
import React, { useState } from 'react'

export default function Page() {
    const[formData, setFormData] = useState({
        name: '',
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
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json()
            if(result.ok) {
                setMessage('Signup successful')
                setFormData({ name: '', email: '', password: '' })
            }else {
                setMessage(result.message || "failed")
            }
        }catch(error) {
            setMessage("Error occured")
        }
    }

    return(
        <fieldset style={{width: 'max-content'}}>
            <legend>signup</legend>
            { message && <p>{message}</p> }
            <form onSubmit={handleSubmit} method='post' style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="name">Name</label>
                <input 
                type='text' name='name' id='name' placeholder='Enter your name' 
                value={formData.name} 
                onChange={handleInput} />

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