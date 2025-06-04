import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.confik';

const Authprovider = ({children}) => {
 const [loding,setloding]=useState(true)
const [user,setuser]=useState(null)
const googleprovider = new GoogleAuthProvider()
const Creatuser = (email,password)=>{
    setloding(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
const sigin = (email,password)=>{
    setloding(true)
   return signInWithEmailAndPassword(auth,email,password)
}

const Updateuser=(Updatedata)=>{
   setloding(true)
   return updateProfile(auth.currentUser,Updatedata)
}
const sigingoogle =()=>{
   setloding(true)
  return signInWithPopup(auth,googleprovider)
}

const sigout = ()=>{
   setloding(true)
     return signOut(auth)
}
useEffect(()=>{
  
  const unscripe = onAuthStateChanged(auth,(currentUser)=>{
    setuser(currentUser)
     setloding(false)
 })
 return ()=>{
    unscripe()
 }
},[])
    const authinfo={
    Creatuser,
      user,
      setuser,
      sigin,
      sigout,
      sigingoogle,
      Updateuser,
      loding
    }
    return (
       <Authcontext value={authinfo}>
        {children}
       </Authcontext>
    );
};

export default Authprovider;