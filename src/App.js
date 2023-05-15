import { ThemeProvider } from '@mui/material';
import './App.module.css';
import TopNav from './components/TopNav/TopNav';
import theme from './theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <TopNav/> 
     </ThemeProvider>
      
  );
}

export default App;
