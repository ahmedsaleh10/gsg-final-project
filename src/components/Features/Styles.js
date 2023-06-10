import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    featuresContainer:{
        width:"100%",
        margin:"0",
        padding:"8rem",
        [theme.breakpoints.down('lg')]:{
            padding:" 2rem"
        }
    },
    featureContainer:{
        backgroundColor:theme.palette.background.main,
        padding:"1rem",
        display:"inline-flex",
        width:'-webkit-fill-available',
        maxHeight:'52px',
    },
    featureTitle:{
        color:"#3d3d79",
        fontSize:"1rem",
        fontWeight:700,
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.7rem'
        },
    },
    featureDescription:{
        fontSize:"0.75rem",
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.55rem'
        },  
    },
    icon:{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        backgroundColor:theme.palette.common.white
    },
    gridItem:{
        display:'inline-block',
    }
})

export default useStyles