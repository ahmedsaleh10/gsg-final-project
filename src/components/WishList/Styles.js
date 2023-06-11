import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    container:{
        padding:'0rem 8rem',
        [theme.breakpoints.down('lg')]:{
            padding:'0rem 2rem'
        }
    },
    addtoCartButton:{
        padding:'0.5rem 2.5rem',
        border:'1px solid balck',
        backgroundColor:theme.palette.common.white
    },
    gridContainer:{
        height:'150px',
        [theme.breakpoints.down('md')]:{
            height:'fit-content',
        }
    },
    gridImageItem:{
        textAlign:'center'
    },
    productTitle:{
        [theme.breakpoints.down('md')]:{
            textAlign:'center'
        }
    },
    buttonsForNumberOfItems:{
        border:'2px solid gray',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        cursor:'pointer',
    },
    productImage:{
        height:"100%",
        width:"auto",
        [theme.breakpoints.down('lg')]:{
            width:'50%'
        }
    }

})

export default useStyles