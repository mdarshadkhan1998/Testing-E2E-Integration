//  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[     BASIC PART-1       ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3 style={{color:"red"}}>Ohh Yeah It's Working smooth</h3>
//         <h6 style={{height:"20px"}}>Cypress</h6>
//         <p>
//           <button type="button" 
//             onClick={() => setCount((count) => count + 1) } 
//             className="counterBtn" 
//           >
//             count is: {count}
//           </button>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App

//  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[     ADVANCE PARRT-2     ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [count, setCount] = useState(0)

  const getSData = () => {
    axios.get("https://http://localhost:8080/counter")
    .then(({data})=>{
      setCount(data.value)
    })
  }
  useEffect(()=>{
    getSData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" 
            onClick={() => setCount((count) => count + 1) } 
            className="counterBtn" 
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App