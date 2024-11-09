import './styles/common.css' 
import Header from './components/Header.jsx'
import Catalog from './components/Catalog.jsx'
import Routes from './components/Routes.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog/>
    <Routes/>
    </div>
  );
}

export default App;
