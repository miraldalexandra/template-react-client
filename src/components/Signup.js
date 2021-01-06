import React, {useState} from 'react'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // reset errors
        setEmail("")
        setPassword("")
    
        try {
            const res = await fetch('/signup', { 
            method: 'POST', 
            body: JSON.stringify({ email, password }),
            headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data);
            if (data.errors) {
            setEmailError(data.errors.email);
            setPasswordError(data.errors.password);
            }
            if (!data.user) {
            // location.assign('/');
            setIsAuth(true)
            console.log("data.user", data.user)
            }
    
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form action="/signup" onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" required  onChange={e=>setEmail(e.target.value)} />
                <div className="email error">{emailError}</div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required onChange={e=>setPassword(e.target.value)} />
                <div className="password error">{passwordError}</div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
