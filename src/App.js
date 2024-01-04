
import './App.css';
import { BrowserRouter, Route, Routes, Outlet, useParams } from 'react-router-dom';
import Login from './components/admin/login';
import MainAdmin from './components/admin/mainAdmin';
import MainUser from './components/users/mainUser';
import ServicesDetails from './components/admin/servicesDetails';
import MeetingsDetails from './components/admin/meetingsDetails';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import bussiness from './components/dataStores/bussiness';
import { createContext } from 'react';
export const ModeContext=createContext(null);
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={""} element={<MainUser />} ></Route>
            <Route path={"login"} element={<Login />} ></Route>
            <Route path={"admin"} element={<MainAdmin />} >
              <Route path={"Services"} element={<ModeContext.Provider value={{ isAdmin: true }}>
                <ServicesDetails />
              </ModeContext.Provider>} ></Route>
              <Route path={"Appointments"} element={<ModeContext.Provider value={{ isAdmin: true }}>
                <MeetingsDetails />
              </ModeContext.Provider>} ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;

function Layout() {
  return (<div>
    <header sx={{ position: 'sticky', top:"0px" }}>
      <nav >
        <ButtonAppBar ></ButtonAppBar>
      </nav>
    </header>
    <main > <br /> <br /><Outlet/></main>

  </div>)
}


function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{ position: "sticky", backgroundColor: 'orange' }}>
        <Toolbar >
          <Link href="/"><IconButton
            size="large"
            edge="start"

            aria-label="menu"
            sx={{ mr: 2, color: "White" }}
          >
            <HomeIcon />
          </IconButton></Link>
          <Link href="/login" underline='none' sx={{ color: 'white' }} >לניהול האתר</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
