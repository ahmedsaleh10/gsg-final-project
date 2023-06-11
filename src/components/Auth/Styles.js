import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles=createUseStyles({
    signInForm:{
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
        '& input':{
            display:'block',
            margin:'2rem 0',
            width:'450px',
            padding:'0.8rem',
            border:'1px solid gray',
            borderRadius:'10px',
            fontSize:'1rem',
            fontFamily:'Poppins',
            [theme.breakpoints.down('sm')]:{
                width:'90%',
                margin:'2rem auto'
            }
        }
    },
    formContainer:{
        padding:'5rem 0',
        textAlign:'center'
    },
    logInButtonStack:{
        '& button':{
            width:'fit-content',
            padding:'0.8rem 4rem',
            fontSize:'1rem',
            fontFamily:'Poppins',
            fontWeight:600,
            color:theme.palette.common.white,
            backgroundColor:theme.palette.primary.dark,
            border:'none',
            borderRadius:'10px'
        }
    },
    alertMessage:{
        alignItems:'center',
        display:'inline-flex',
        textAlign:"center",
        marginTop:"2rem",
    },
})

export default useStyles