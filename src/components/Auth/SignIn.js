import React, { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Stack, Typography,Link } from '@mui/material'
import useStyles from './Styles'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';

const SignIn = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const classes = useStyles()
    const navigate = useNavigate()
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            navigate('/home')
        })
        .catch((error)=> setError(error.message))
        setEmail('')
        setPassword('')
    }
  return (
    <div className={classes.formContainer}>
        <Typography variant='subtitle1' textAlign={'center'}>Login</Typography>
        <Stack direction={'row'} justifyContent={'center'}>
            <form onSubmit={signIn} className={classes.signInForm} autoComplete>
                <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value) } />
                <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value) } />
                <Stack spacing={3} className={classes.logInButtonStack} alignItems={{xs:'center',md:'flex-start'}}>
                    <button type='submit'>Log In</button>
                    <Link className={classes.logInLink} onClick={()=>{navigate('/signUp')}}>You don't have an account?</Link> 
                </Stack>
                
            </form>
        </Stack>
        {error ? <Alert className={classes.alertMessage}  severity="error">{error}</Alert> : <></>}
    </div>
   
  )
}

export default SignIn