import { createUseStyles } from "react-jss";
import theme from "../../theme";
const useStyles = createUseStyles({
    SwiperContainer:{
        paddingBottom:"6rem",
        margin :"0 8rem",
        overflow:'hidden',
        [theme.breakpoints.down('lg')]:{
            margin:'0 2rem',
            padding:'0',
            paddingBottom:'10rem'
        }
    },
    CustomSwiper:{
        overflow:'visible',
    },
    ButtonContainer:{
        padding:'0 8rem',
        [theme.breakpoints.down('lg')]:{
            padding:'0 2rem'
        },
    },
    Filter:{
        paddingRight:'2rem',
        fontSize:'1.2rem',
        cursor:'pointer'
    },
    ActiveFilter:{
        color:'#1a2a3c',
        fontWeight:'700',
        paddingRight:'2rem',
        fontSize:'1.2rem',
        cursor:'pointer'
    },
    MenPageImage:{
        padding:'3rem 0',
        [theme.breakpoints.down('md')]:{
            padding:'2rem 0'
        }
    }
    
})

export default useStyles