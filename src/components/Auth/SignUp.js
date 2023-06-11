import React, { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import useStyles from './Styles'
import { Stack, Typography,Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const classes = useStyles()
    const navigate = useNavigate()
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
            setEmail('')
            setPassword('')
            navigate("/")
        })
        .catch((error)=>setError(error.message))
    }
  return (
    <div className={classes.formContainer}>
        <Typography variant='subtitle1' textAlign={'center'}>Create Account</Typography>
        <Stack direction={'row'} justifyContent={'center'}>
            <form onSubmit={signUp} className={classes.signInForm} autoComplete='true'>
                <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value) } />
                <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value) } />
                <Stack spacing={3} className={classes.logInButtonStack} alignItems={{xs:'center',md:'flex-start'}}>
                    <button type='submit'>Sign Up</button>
                    <Link className={classes.logInLink} onClick={()=>{navigate('/login')}}>Go to Login Page</Link>
                </Stack>
                
            </form>
        </Stack>
        {error ? <Alert className={classes.alertMessage}  severity="error">{error}</Alert> : <></>}
    </div>
  )
}

export default SignUp