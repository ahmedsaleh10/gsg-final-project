import { ThemeProvider } from '@mui/material';
import './App.module.css';
import theme from './theme';
import Footer from './components/Footer/Footer';
import TopNav from './components/TopNav/TopNav'
function App() {
  return (
      <ThemeProvider theme={theme}>
        <TopNav/>
        <Footer/> 
     </ThemeProvider>
      
      
  );
}

export default App;
