import './App.css';
import React, { Suspense } from "react";
import { ImmobilizationFooter, ImmobilizationHeader } from './components/Immobilization';
import HomeAside from './views/home/components/HomeAsides';
import RouterList from './Router/Router';


function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ImmobilizationHeader />
      <RouterList/>
      <ImmobilizationFooter />
    </Suspense>
    
  );
}

export default App;
