import { createUseStyles } from "react-jss";
import theme from "../../theme";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text,
    width:"100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "80%",
    },
  }));

export const SearchField = styled(Box)(({ theme }) => ({
    position: "relative",
    display:"flex",
    borderRadius:"0",
    backgroundColor:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: "0.8rem",
    width: "50%",
    margin:"auto",
    [theme.breakpoints.down("lg")]:{
        width:"100%",
    },
  }));  

const useStyles= createUseStyles({
    Image:{
        display:"block",
        marginBottom:"2rem",
    },
    Description:{
        color:theme.palette.text,
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
            color:theme.palette.common.white,
        }
    },
    Title:{
        display:"block",
        color:theme.palette.title,
        marginBottom:"3.8rem",
    },
    Container:{
        paddingTop:"4rem",
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
    },
    MainFooter:{
        backgroundColor:theme.palette.background.dark,
        "& div":{
            "& div":{
                " & div":{
                    paddingLeft:'0 !important'
                }
            }
    }},
    HeaderTitle:{
        color:theme.palette.title,
        textAlign:'center',
        lineHeight:"1.3",
        '& span':{
            display:"block",
        },
        padding:"3rem 0",
        [theme.breakpoints.down("lg")]:{
                width:"100%",
                textAlign:"left"
        },
    },
    SendButton:{
        padding:"1.2rem 4rem",
        backgroundColor:theme.palette.primary.main,
        fontSize:"1.3rem",
        border:"none",
        color:theme.palette.title,
        [theme.breakpoints.down("md")]:{
            padding:"1.2rem 1.2rem"
        }

    },
    FooterHeader:{
        padding:"0 8rem",
        [theme.breakpoints.down("lg")]:{
            padding:"0rem 2rem",            
        },
    }
})
export default useStyles