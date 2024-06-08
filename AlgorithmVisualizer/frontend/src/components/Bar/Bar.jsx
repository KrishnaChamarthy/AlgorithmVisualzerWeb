import React from 'react'
import "./Bar.css"

const Bar = ({height, active, selected}) => {
  let color = "";
  if (active){
    color = "red";
  }
  else if (selected){
    color = "green";
  }
  else{
    color = "#68D2E8"
  }
  return (
    <div className='bar' style={{height: `${height}%`, backgroundColor: color}}>
    </div>
  )
}

export default Bar
