// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import FetchUsers from "./Fetchusers";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <FetchUsers />
//     </>
//   )
// }

// export default App
// src/App.jsx
import { useState } from 'react';
import './App.css';
import FetchUsers from './Fetchusers';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FetchUsers />
    </div>
  );
}

export default App;

