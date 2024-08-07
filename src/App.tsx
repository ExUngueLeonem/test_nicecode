import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Video from "pages/homePage/content/Video";
import Notes from "pages/homePage/content/Notes";
import Events from "pages/homePage/content/Events";
import HomePage from "pages/homePage/HomePage";
import Consultation from "pages/homePage/content/Consultation";
import './App.scss';

function App() {
 //AAAAAAA
  //BBBBBB
  //master
  return (
   <Routes>
       <Route path={"/"} element={<Navigate to="/notes" />} />
       <Route path={"/"} element={<HomePage/>}>
           <Route path={"notes"} element={<Notes/>}/>
           <Route path={"consultation"} element={<Consultation/>}/>
           <Route path={"video"} element={<Video/>}/>
           <Route path={"events"} element={<Events/>}/>
       </Route>
   </Routes>
  );
}

export default App;
