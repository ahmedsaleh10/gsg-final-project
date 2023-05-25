import { createUseStyles } from "react-jss";
import theme from "../../theme";
const useStyles = createUseStyles({
    SliderContainer:{
        overflow:'hidden',
        margin:'8rem',
        [theme.breakpoints.down('lg')]:{
            margin:'2rem',
        }
    },
    CustomSwiper:{
        marginTop:"1.5rem",
        overflow:"visible",
        '& div':{
            '& div':{
                maxHeight:'577px',
                overflow:'hidden'
            }
        }
    },
    SwiperPrevButton:{
        backgroundImage: `url(${"/images/left.png"})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        position: 'absolute',
        top: "-95px",
        right: "90px",
        [theme.breakpoints.down('sm')]:{
            top: "-80px",
            right:'48px'
        },
        backgroundColor: theme.palette.common.white,
        borderRadius: "50%",
        width: "46px",
        textAlign: 'center',
        height: '46px',
        border: '3px solid #1a1a68',
        cursor:'pointer',
    },
    SwiperNextButton:{
        backgroundImage: `url(${"/images/right.png"})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        position: 'absolute',
        top: "-95px",
        right: "0px",
        [theme.breakpoints.down('sm')]:{
            top: "-80px",
        },
        backgroundColor: theme.palette.common.white,
        borderRadius: "50%",
        width: "46px",
        textAlign: 'center',
        height: '46px',
        border: '3px solid #1a1a68',
        cursor:'pointer',
},
})

export default useStyles