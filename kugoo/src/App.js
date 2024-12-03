
import './styles/common.css' 
import Header from './components/Header.jsx'
import Routes from './components/Routes.jsx'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Loader from './components/loaders/Loader.jsx'


function App() {
const [loading, setLoading] = useState(true);

useEffect(()=> {
  setTimeout(() => {
    setLoading(false)
  }, 5000)
}, [])

if (loading) {
  return (<div> 
    <Loader/>
    </div> 
  )
};

  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
