import React,{ useState } from 'react'
export const Login= () =>{
    const [email,setEmail]=useState('');
    const [pass, setPass]=useState('');
   

    const handleSubmit= () =>{
         email.prevenDefault();
         console.log(email);
    }
    return(
        <><form onSubmit={handleSubmit}>
            
            <label htmlfor="email">Email</label>
            <input value={email} type="text" placeholder="abc@gmail.com " id="email" name="email" />
            <label htmlfor="Password">Password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form><button>Don't have an account?Register here</button></>
    )

}

        
          
