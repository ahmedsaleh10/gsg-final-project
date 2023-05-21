import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    padding:"0 " ,
                    '@media (min-width: 600px)': {
                        padding:"0"
                      },
                    margin:"0"
                }
            }
        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    padding:"0"
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
                    padding:"0",
                }
            }
        },
        MuiGrid:{
            styleOverrides:{
                root:{
                    padding:"0",
                    '&.MuiGrid-item':{
                        padding:"0.5rem",
                    }
                }
            }
        },
        MuiSvgIcon:{
            styleOverrides:{
                root:{
                    fontSize:"2.5rem",
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
        text: "#a6a6a6",
        title:"#e3dede",
        background:{
            main:"#EEEEEE",// Card background
            dark:"#27292C", // Footer background
        }
        
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
        subtitle1:{
            //sectionTitle
            fontSize:"4rem",
            fontWeight:"700",
        },
        subtitle2:{
            fontSize:"2.5rem",
            fontWeight:"700"
        },
        body1:{
            //price+body
            fontSize:"1.2rem",
            fontWeight:"400",
            color:"#a6a6a6",
        },
        caption:{
            //productText
            fontSize:"2rem",
            fontWeight:"700",
        },
        body2:{
            //bigPrice
            fontSize:"2rem",
            fontWeight:"700"
        },
        button:{
            fontSize:"1.25rem",
            fontWeight:"700"
        },
    }
    
})

theme=responsiveFontSizes(theme)
export default theme