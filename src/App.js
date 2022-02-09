import {
  Routes,
  Route
} from "react-router-dom";
import Auth from "./views/auth/login";
import Register from "./views/auth/register";
import Profile from "./views/profile";
import Windows from "./views/windows";
import Dashboard from "./views/dashboard";
import { useSelector } from "react-redux";

function App() {

  const {auth}= useSelector((state) => ({...state}));

  return (
    <Routes>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path={'/signup'} element={<Register/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route exact path="/login/success" element={<Windows/>}/>
      <Route path="/dashboard" element={
        auth ? <Dashboard/> : <Auth/>
      }/>

    </Routes>
  );
}

export default App;
