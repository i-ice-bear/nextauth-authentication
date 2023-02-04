import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import { Button } from '@nextui-org/react';

const LoginAuth = () => {
    const {data: session} = useSession();
    if(session){
        return(
            <div className="container my-5">
                <h3>Logined now as {session.user.email}</h3>
                <Button onClick={()=> signOut()}>Sign out</Button>
            </div>
        )
    } else{
        return(
            <div className="container my-5">
                <h3>Logged out</h3>
                <Button onClick={()=> signIn("google")}>Log in</Button>
            </div>
        )
    }
}

export default LoginAuth