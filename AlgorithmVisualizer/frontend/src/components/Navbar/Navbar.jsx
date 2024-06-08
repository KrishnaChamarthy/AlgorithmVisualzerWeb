import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({algo, setAlgo, generateRandomArray, isSorting, setIsSorting}) => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <button onClick={() => {generateRandomArray();}}>Generate New Array</button>
      </div>
      <div className="options">
        <p>Sorting Algorithms</p>
        <ul>
          <li className={algo==="bubble"?"active":""} onClick={()=>{setAlgo("bubble")}}><Link to={isSorting?"#":"/"}>Bubble Sort</Link></li>
          <li className={algo==="insertion"?"active":""} onClick={()=>{setAlgo("insertion")}}><Link to={isSorting?"#":"/insertion"}>Insertion Sort</Link></li>
          <li className={algo==="merge"?"active":""} onClick={()=>{setAlgo("merge")}}><Link to={isSorting?"#":"/merge"}>Merge Sort</Link></li>
          <li className={algo==="selection"?"active":""} onClick={()=>{setAlgo("selection")}}><Link to={isSorting?"#":"/selection"}>Selection Sort</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button onClick={()=>setIsSorting(true)}>Start Sorting</button>
      </div>
    </div>
  )
}

export default Navbar
