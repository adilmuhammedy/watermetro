import React,{ useState } from 'react'
export const Register= () =>{
    const [email,setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit= () =>{
        email.prevenDefault();
        console.log(email);
    }
    return(
        <><form onSubmit={handleSubmit}>
            <label htmlfor="name">Full name</label>
            <input  value={name} type="text" id="name" name="name" placeholder="full name"/>
            <label htmlfor="email">Email</label>
            <input value={email} type="email" placeholder="abc@gmail.com " id="email" name="email" />
            <label htmlfor="Password">Password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form><button>Already have an account?Register here</button></>
    )

}