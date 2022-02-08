import {
  Routes,
  Route
} from "react-router-dom";
import Auth from "./views/auth/login";
import Register from "./views/auth/register";
import Profile from "./views/profile";
import Windows from "./views/windows";

function App() {
  return (
    <Routes>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path={'/signup'} element={<Register/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route exact path="/login/success" element={<Windows/>}/>
    </Routes>
  );
}

export default App;
