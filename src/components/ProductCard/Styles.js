import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    cardContainer:{
        display:"inline-block",
        width:"100%",
        maxHeight:'584px',
        overflow:'hidden'
    },
    cardImage:{
        width:"100%",
        height:"500px",
        objectFit:'cover',
        objectPosition:'top',
    },
    productTitle:{
        paddingTop:"0.5rem"
    },
    link:{
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
    buttons:{
        display:"none",
        position:"absolute",
        left:0,
        width:"100%",
        height:"-webkit-fill-available",
    },
    iconButton:{
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
    deletedPrice:{
        textDecoration:"line-through",
        color:"red",

    }
})

export default useStyles