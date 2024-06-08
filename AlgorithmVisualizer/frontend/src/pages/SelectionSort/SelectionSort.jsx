import React, { useEffect, useState } from 'react';
import "./SelectionSort.css"
import Graph from '../../components/Graph/Graph';
import add_icon from "../../assets/add_icon_green.png"
import remove_icon from "../../assets/remove_icon_red.png"

const SelectionSort = ({ setSortArray, sortArray, isSorting, setIsSorting, generateRandomArray, increaseSize, decreaseSize, size }) => {
    const [activeIndices, setActiveIndices] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

  
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    
    const selection_sort = async () => {
        const tempArr = [...sortArray]; 
        let n = tempArr.length;
      
        for (let i = 0; i < n - 1; i++) {
          let minIndex = i;
          //setActiveIndices([i, -1]);
          setSelectedIndex(i)
          
          for (let j = i + 1; j < n; j++) {
            setActiveIndices([j, -1]);
            setSelectedIndex(minIndex);

            if (tempArr[j] < tempArr[minIndex]) {
              minIndex = j;
            }
            await sleep(100); 
          }
      
          if (minIndex !== i) {
            const temp = tempArr[i];
            tempArr[i] = tempArr[minIndex];
            tempArr[minIndex] = temp;
            setSortArray([...tempArr]);
            await sleep(100);
          }
        }
        
        setActiveIndices([]); 
        setSelectedIndex(-1);
        setIsSorting(false);
      }
    useEffect(() => {
      generateRandomArray();
    }, []);
  
    useEffect(() => {
      if (isSorting) {
        selection_sort();
      }
    }, [isSorting]);
  
    return (
      <div className='selection-sort'>
        <div className="container">
            <img onClick={() => {increaseSize()}} src={add_icon} alt="" className='add'/>
            <img onClick={() => {decreaseSize()}} src={remove_icon} alt="" className='remove'/>
            <p className='size'>{size}</p>
          <Graph sortArray={sortArray} activeIndices={activeIndices} selectedIndex={selectedIndex}/>
          <div className="array-items">
            {sortArray.map((num, index) => {
              return <div><p>{num}</p></div>
            })}
          </div>
        </div>
      </div>
    );
  }


export default SelectionSort
