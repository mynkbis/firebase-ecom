import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
const SignoutButton = () => {
    const [user, setUser] = useState({})
    const Navigate = useNavigate();

    
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)  
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
            <div> 
            
                {!user ? true : <Button sx={{backgroundColor:"white", width: "5rem", height:"1.9rem", ml:15, hover :{background:"red"}}} onClick={logout}>logout</Button>}
            </div>
        </>)
}

export default SignoutButton