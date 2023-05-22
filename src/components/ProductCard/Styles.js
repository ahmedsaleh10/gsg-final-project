import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    CardContainer:{
        display:"inline-block",
        width:"300px",
    },
    CardImage:{
        width:"100%",
        height:"310px",
        
    },
    ProductTitle:{
        paddingTop:"0.5rem"
    },
    Link:{
        position:"relative",
        '&:hover':{
            '& div':{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"row",
                columnGap:"1.5rem",
                backgroundColor:"#000000ad",
                
            },
        }
    },
    Buttons:{
        display:"none",
        position:"absolute",
        left:0,
        width:"100%",
        height:"-webkit-fill-available",
    },
    IconButton:{
        width:"45px",
        height:"45px",
        borderRadius:"50%",
        backgroundColor:"#26266b",
        color:theme.palette.common.white,
        opacity:0.6,
        '&:hover':{
            backgroundColor:"#26266b",
        }
    },
    DeletedPrice:{
        textDecoration:"line-through",
        color:"red",

    }
})

export default useStyles