import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    sliderContainer:{
        margin:'1.5rem 0',
        overflow:'hidden',
        [theme.breakpoints.down('lg')]:{
            margin:'2rem',
        }
    },
    containerTitle:{
        margin:'0rem 8rem',
        [theme.breakpoints.down('lg')]:{
            margin:'2rem',
        } 
    },
    customSwiper:{
        marginTop:"1.5rem",
        overflow:"visible",
        '& div':{
            '& div':{
                maxHeight:'577px',
                overflow:'hidden'
            }
        }
    },
    buttonStack:{
        '& button':{
            height:'50px',
            width:'180px',
            fontSize:'1.1rem',
            fontFamily:'Poppins',
            border:'none',
            cursor:'pointer',
            fontWeight:500,
        }
    },
    activeButton:{
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
    },
    newProductsImage:{
        width:'100%',
        paddingBottom:'2.5rem',
        [theme.breakpoints.down('lg')]:{
            paddingBottom:'0'
        }
    }

})

export default useStyles