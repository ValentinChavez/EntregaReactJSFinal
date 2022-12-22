import './App.css';
import ShopProvider from './contexts/ShopContext';
import MainNavigator from './navigation/MainNavigator';

function App() {

  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
  );
}

export default App