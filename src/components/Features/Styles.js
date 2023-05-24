import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    FeaturesContainer:{
        width:"100%",
        margin:"0",
        padding:"8rem",
        [theme.breakpoints.down('lg')]:{
            padding:" 2rem"
        }
    },
    FeatureContainer:{
        backgroundColor:theme.palette.background.main,
        padding:"1rem",
        display:"inline-flex",
        width:'-webkit-fill-available',
        maxHeight:'52px',
    },
    FeatureTitle:{
        color:"#3d3d79",
        fontSize:"1rem",
        fontWeight:700,
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.7rem'
        },
    },
    FeatureDescription:{
        fontSize:"0.75rem",
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.55rem'
        },  
    },
    Icon:{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        backgroundColor:theme.palette.common.white
    },
    GridItem:{
        display:'inline-block',
    }
})

export default useStyles