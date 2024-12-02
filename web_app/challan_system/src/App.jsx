import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Input} from "@nextui-org/react";
import { LoginPage } from './pages/LoginPage';



function App() {
  const placements = [
    "inside",
    "outside",
    "outside-left",
  ];

  return (
    <LoginPage/>
    // <div className="flex flex-col gap-4">
    //   <div className="flex flex-col gap-2">
    //     <h3 className="text-default-500 text-small">Without placeholder</h3>
    //     <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
    //       {placements.map((placement) => (
    //         <Input
    //           key={placement}
    //           type="email"
    //           label="Email"
    //           labelPlacement={placement}
    //           description={placement}
    //         />
    //       ))}
    //     </div>
    //   </div>  
    //   <div className="flex flex-col gap-2">
    //     <h3 className="text-default-500 text-small">With placeholder</h3>
    //     <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
    //       {placements.map((placement) => (
    //         <Input
    //           key={placement}
    //           type="email"
    //           label="Email"
    //           labelPlacement={placement}
    //           placeholder="Enter your email"
    //           description={placement}
    //         />
    //       ))}
    //     </div>
    //   </div>  
    // </div>  
  );
}

export default App
