import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import ProductsProvider from './providers/ProductsProvider';
import Routing from './Routers';

function App() {

  return (
    <ProductsProvider>
      <ThemeProvider theme={theme}>
        <Routing/>
      </ThemeProvider>
    </ProductsProvider>
  );
}

export default App;
