import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const SignoutButton = () => {
    const [user, setUser] = useState({})
    const Navigate = useNavigate();

    
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)  
             {sessionStorage.setItem("User", JSON.stringify(currentUser.email))}   
        })
        return () => unsubscribe();
        
   },[])

    const logout = async () => {
       await signOut(auth);
        localStorage.clear();
        Navigate("../")
    
    }

    return (
        <>
            <Typography component={"span"} > 
                         
                {!user ? true : <Button sx={{backgroundColor:"white", width: "5rem", height:"1.9rem", ml:15, }} onClick={logout}>logout</Button>}
            </Typography>
        </>)
}

export default SignoutButton