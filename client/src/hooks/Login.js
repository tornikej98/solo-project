import { useState } from "react";
import { useAuthCtx } from "./useAuthCtx";
import { json } from "react-router-dom";


export const LoginUser = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuthCtx()


    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('http://127.0.0.1:5000/user/login/', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })

        })

        const jsonResponse = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(jsonResponse.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(jsonResponse))
            dispatch({ type: 'LOGIN', payload: json })
            setLoading(false)
        }
    }
    return { login, loading, error }
}