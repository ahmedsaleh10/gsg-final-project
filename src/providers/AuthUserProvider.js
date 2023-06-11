import AuthUserContext from '../contexts/AuthUserContext'
import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect,useState } from "react";
import {auth} from "../firebase"

const AuthUserProvider = ({children}) => {
    const [authUser,setAuthUser]= useState("")
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        })
        return()=>{
            listen()
        }
    },[])
  return (
    <AuthUserContext.Provider value={authUser}>
        {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserProvider