import React from 'react';
import './App.css';

import {Route,Routes} from "react-router-dom";

function App() {
  return (
   <>
     <Routes>
       <Route path={"/login"}/>
     </Routes>
   </>
  );
}

export default App;
