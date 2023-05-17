import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    padding:"0 " ,
                    '@media (min-width: 600px)': {
                        padding:0
                      },
                    margin:"0"
                }
            }
        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    padding:0
                }
            }
        },
        MuiButtonBase:{
            styleOverrides:{
                root:{
                    padding:"0",
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    padding:"0"
                }
            }
        },
    },
    palette:{
        primary:{
            dark: "#232C46", //Yankees Blue
            light:"#725C4D", //Boy Red
            main:"#694B38", //Coffee
        },
        secondary:{
            main:"#BAD9C2", // light green
            dark:"#ED843D", // Tiger's eye
            light:"#60636D", // Dark green text color
        },
        text: "gray",
        
    },

    typography:{
        fontFamily: ["Poppins", "sans-serif"].join(","),
        h1:{ 
            fontSize:"6rem",
            fontWeight:"700",
        },
        h2:{ 
            fontSize:"5.5rem",
            fontWeight:"400"
        },
        sectionTitle:{
            fontSize:"4rem",
            fontWeight:"700",
        },
        subtitle1:{
            fontSize:"2.5rem",
            fontWeight:"700"
        },
        body:{
            fontSize:"1.25rem",
            fontWeight:"400",
        },
        productText:{
            fontSize:"2rem",
            fontWeight:"700",
        },
        price:{
            fontSize:"1.25rem",
        },
        bigPrice:{
            fontSize:"2rem",
        },
        button:{
            fontSize:"1.25rem",
            fontWeight:"700"
        },
    }
    
})

theme=responsiveFontSizes(theme)
export default theme