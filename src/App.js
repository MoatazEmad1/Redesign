import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import {useSelector} from 'react-redux'
import Login from './components/LogIn'
function App() {
  const page=useSelector((state)=>state.HomeState)

  const renderPage=()=>{
    switch(page){
      case 'LogIn':
        return <Login/>
        default: return (
          <>
          <NavBar/>
           <Home/>
           </>
        )
    }
  }
  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
