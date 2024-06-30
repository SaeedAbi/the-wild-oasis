import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
    return (
     <BrowserRouter>
         <Routes>
             <Route path='dashboard' element={<Dashboard/>} />
             <Route path='bookings' element={<Bookings/>} />
             <Route path='cabins' element={<Cabins/>} />
             <Route path='users' element={<Users/>} />
             <Route path='setting' element={<Settings/>} />
             <Route path='account' element={<Account/>} />
             <Route path='login' element={<Login/>} />
             <Route path='*' element={<PageNotFound/>} />
         </Routes>
     </BrowserRouter>
    );
};

export default App;