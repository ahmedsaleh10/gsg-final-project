import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    container:{
        padding:"0 8rem",
        [theme.breakpoints.down("lg")]:{
            padding:"0 2rem"
        },
    },
    gridItem1:{
        paddingTop:'2rem',
        
    },
    gridItem2:{
        paddingTop:'2rem',
        paddingLeft:'4rem',
        [theme.breakpoints.down('md')]:{
            paddingLeft:'0'
        },
    },
    rating:{
        '& span':{
           '& span':{
            '& span':{
                '& svg':{
                    width:'1.5em',
                    height:'1.5em',
                } 
            }
           }
        }
        
    },
    informationContainer:{
        paddingBottom:'1.7rem',
        borderBottom:'2px solid #d5cccc'
    },
    optionsContainer:{
        padding:'2rem 0'
    },
    sizeSelectedButton:{
        border: "2px solid gray",
        borderRadius: "50%",
        padding: "3px 2px",
        minWidth: "50px",
        height:'50px',
        color: "white",
        backgroundColor: theme.palette.secondary.dark,
        cursor:'pointer'
    },
    sizeUnselectedButton:{
        border: "2px solid gray",
        borderRadius: "50%",
        padding: "3px 2px",
        minWidth: "50px",
        height:'50px',
        color: "black",
        backgroundColor: theme.palette.background.main,
        cursor:'pointer'
    },
    buttonsForNumberOfItems:{
        border:'2px solid gray',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        cursor:'pointer',
    },
    cartButton:{
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
        fontFamily:'Poppins',
        padding:'0.8rem 4rem',
        [theme.breakpoints.down('lg')]:{
            padding:'0.8rem 3rem'
        },
        [theme.breakpoints.down('sm')]:{
            padding:'1rem 4rem'
        },
        fontWeight:500,
        fontSize:'1rem',
        cursor:'pointer'
    },
    favoriteIcon:{
        backgroundColor:theme.palette.common.white,
        width:'60px',
        '& svg':{
            color:theme.palette.common.black,
            fontSize:'2.5rem',
            opacity:'0.6'
        },
        cursor:'pointer'
    },
    featuresButton:{
        fontSize: "2.5rem",
        paddingRight: "1.5rem"
    },
    buyingFeaturesContainer:{
        border: "0.5px solid black",
        padding: "1rem 0rem",
        borderRadius: "4px",
        marginTop:'1.5rem'
    }
})

export default useStyles