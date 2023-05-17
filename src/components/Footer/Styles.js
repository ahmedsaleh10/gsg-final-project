import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles= createUseStyles({
    Image:{
        display:"block",
        marginBottom:"2rem",
    },
    Description:{
        color:`${theme.palette.text}`,
        marginBottom:"1rem"
    },
    GridBody:{
        width:"100%",
        margin:"0",
        padding:"0 8rem",
        [theme.breakpoints.down("lg")]:{
            padding:"0rem 2rem",
            paddingBottom:"3rem",
            
        },
        paddingBottom:"5rem",
    },
    Icons:{
        '& .MuiSvgIcon-root':{
            color:"white",
        }
    },
    Title:{
        display:"block",
        color:`${theme.palette.title}`,
        marginBottom:"3.8rem",
    },
    Container:{
        backgroundColor:`${theme.palette.background.dark}`,
    },
    Divider:{
        borderWidth:"0.1rem",
        borderColor:"#f0f0f033",
    },
    FooterBottom:{
        padding:"2.5rem 8rem",
        [theme.breakpoints.down("lg")]:{
            padding:"3rem 2rem",
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            alignItems:"flex-start"
        },
    }
})
export default useStyles