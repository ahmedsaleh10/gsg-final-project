import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import ProductsProvider from './providers/ProductsProvider';
import Routing from './Routers';
import FavouriteProvider from './providers/FavouriteProvider';

function App() {

  return (
    <ProductsProvider>
      <FavouriteProvider>
        <ThemeProvider theme={theme}>
          <Routing/>
        </ThemeProvider>
      </FavouriteProvider>
    </ProductsProvider>
  );
}

export default App;
