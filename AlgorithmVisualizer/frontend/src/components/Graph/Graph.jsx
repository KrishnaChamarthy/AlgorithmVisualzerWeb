import React from 'react'
import "./Graph.css"
import Bar from '../Bar/Bar'


const Graph = ({sortArray, activeIndices, selectedIndex}) => {
   const [num1, num2] = activeIndices;

  return (
    <div className='graph'>
      {sortArray.map((num, index) => {
        if (index === num1 || (num2 !== -1 && index === num2)){
            return <Bar key={index} height={num} active={true} selected={false}/>
        }
        else if (selectedIndex !== -1 && selectedIndex === index){
          return <Bar key={index} height={num} active={false} selected={true}/>
        }
        return <Bar key={index} height={num} active={false} selected={false}/> 
      })}
    </div>
  )
}

export default Graph
