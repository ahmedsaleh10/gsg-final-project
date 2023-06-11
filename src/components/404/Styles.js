import { createUseStyles } from "react-jss";
import theme from "../../theme";

const useStyles = createUseStyles({
    signButton:{
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
        padding:'1.5rem 4rem',
        fontSize:'1.2rem',
        marginBottom:'0.5rem'
    }
})

export default useStyles