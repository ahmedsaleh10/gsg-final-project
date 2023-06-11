import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import ProductsProvider from './providers/ProductsProvider';
import Routing from './Routers';
import FavouriteProvider from './providers/FavouriteProvider';
import CartProvider from './providers/CartProvider';

function App() {

  return (
    <ProductsProvider>
      <FavouriteProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Routing/>
          </ThemeProvider>
        </CartProvider>
      </FavouriteProvider>
    </ProductsProvider>
  );
}

export default App;
