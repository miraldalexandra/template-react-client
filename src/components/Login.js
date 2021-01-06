import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    // const [msgError, setMsgError] = useState("")

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // reset errors
        setEmail("")
        setPassword("")
    
        try {
          const res = await fetch('/login', { 
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          console.log(data);
          if (data.errors) {
            setEmailError(data.errors.email);
            setPasswordError(data.errors.password);
          }
          if (data.user) {
           // location.assign('/');
           console.log("data.user", data.user)
          }
    
        }
        catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            {emailError, passwordError}
            <form action="/signup" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={e=>setEmail(e.target.value)} />
                <div className="email error">{emailError}</div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
                <div className="password error">{passwordError}</div>
                <button type="submit">login</button>
            </form>

            {/* <Redirect to="/" /> */}
        </div>
    )
}
