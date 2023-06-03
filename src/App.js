import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import ProductsProvider from './providers/ProductsProvider';
import Routing from './Routers';
import FavoraiteProvider from './providers/FavoraiteProvider';

function App() {

  return (
    <ProductsProvider>
      <FavoraiteProvider>
        <ThemeProvider theme={theme}>
          <Routing/>
        </ThemeProvider>
      </FavoraiteProvider>
    </ProductsProvider>
  );
}

export default App;
