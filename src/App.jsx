import './App.css';
import ShopProvider from './contexts/ShopContext';
import MainNavigator from './navigation/MainNavigator';
import Formulario from './Formulario';


function App() {

  return (
    <ShopProvider>
      <Formulario/>
      <MainNavigator/>
    </ShopProvider>
  );
}

export default App