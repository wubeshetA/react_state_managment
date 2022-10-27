import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Contact} from './pages/contact';
import {Profile} from './pages/profile';
import { PageNotFound } from './pages/noPage';
import {useState, createContext} from 'react';
import {NavBar} from './NavBar';

export const AppContext = createContext('');
function App() {

  const [userName, setUserName] = useState("");
  

  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  );
}

export default App;
