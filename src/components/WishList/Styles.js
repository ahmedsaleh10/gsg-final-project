import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    Container:{
        padding:'0rem 8rem',
        [theme.breakpoints.down('lg')]:{
            padding:'0rem 2rem'
        }
    },
    AddtoCartButton:{
        padding:'0.5rem 2.5rem',
        border:'1px solid balck',
        backgroundColor:theme.palette.common.white
    },
    GridContainer:{
        height:'150px',
        [theme.breakpoints.down('md')]:{
            height:'fit-content',
        }
    },
    GridImageItem:{
        textAlign:'center'
    },
    ProductTitle:{
        [theme.breakpoints.down('md')]:{
            textAlign:'center'
        }
    },
    ButtonsForNumberOfItems:{
        border:'2px solid gray',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        cursor:'pointer',
    },
})

export default useStyles