import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "pages/homePage/HomePage";
import Notes from "./pages/homePage/content/Notes";
import Consultation from "./pages/homePage/content/Consultation";
import Video from "./pages/homePage/content/Video";
import Events from "./pages/homePage/content/Events";
import './App.scss';

function App() {
  return (
   <Routes>
       <Route path={"/"} element={<Navigate to="/notes" />} />
       <Route path={"/"} element={<HomePage/>}>
           <Route path={"/notes"} element={<Notes/>}/>
           <Route path={"/consultation"} element={<Consultation/>}/>
           <Route path={"/video"} element={<Video/>}/>
           <Route path={"/events"} element={<Events/>}/>
       </Route>
   </Routes>
  );
}

export default App;
