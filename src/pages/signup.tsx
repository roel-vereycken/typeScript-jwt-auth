import { useState, useRef } from "react"

export default function Signup() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    const [message, setMessage] = useState<any>(null)
    
    const handleLogin = async () => {
        const resp = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
        })

        const json = await resp.json()
        setMessage(json)
    }

    return <div>
        <h1>Create a new user</h1>
        {message && JSON.stringify(message)}
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passRef} />
        <button onClick={handleLogin}>Login</button>
    </div>
}