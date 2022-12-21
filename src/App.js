import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido"}/>
    </>
  );
}

export default App;
