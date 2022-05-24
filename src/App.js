import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import Home from "./pages/Home/Home"
import List from "./pages/User/ListUsers/List"
import New from "./pages/User/NewUsers/New"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
    
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    
      <BrowserRouter>
    <Routes>
        <Route path='/'>
          <Route path="login" element={<LoginPage/>}/>
          <Route index element = {<RequireAuth><Home/></RequireAuth>}/>
          <Route path="users">
            <Route
            index
              element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>}/>
            <Route 
            path='new'
            element={<RequireAuth>
                      <New/>
                    </RequireAuth>}/>
          </Route>
          <Route path="product">
            <Route
            index
              element={<RequireAuth>
                      <List />
                    </RequireAuth>}/>
            <Route
            path='New'
              element={<RequireAuth>
                      <New/>
                    </RequireAuth>}/>
          </Route>
          <Route path="lojas">
            <Route 
            index
            element={<RequireAuth>
                      <List />
                    </RequireAuth>}/>
            <Route 
            path='new'
            element={<RequireAuth>
                      <New/>
                    </RequireAuth>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
