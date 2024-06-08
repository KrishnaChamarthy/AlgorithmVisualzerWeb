import React, { useEffect, useState } from 'react';
import "./BubbleSort.css";
import Graph from '../../components/Graph/Graph';
import add_icon from "../../assets/add_icon_green.png"
import remove_icon from "../../assets/remove_icon_red.png"

const BubbleSort = ({ setSortArray, sortArray, isSorting, setIsSorting, generateRandomArray, increaseSize, decreaseSize, size }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  const bubble_sort = async () => {
    const tempArr = [...sortArray]; 
    let n = tempArr.length;

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        setActiveIndices([j, j + 1]);
        if (tempArr[j] > tempArr[j + 1]) {
          const temp = tempArr[j];
          tempArr[j] = tempArr[j + 1];
          tempArr[j + 1] = temp;
          setSortArray([...tempArr]); 
          swapped = true;
          await sleep(50); 
        }
        await sleep(50); 
      }
      if (!swapped) {
        break; 
      }
    }
    setActiveIndices([]); 
    setIsSorting(false);
  }

  useEffect(() => {
    generateRandomArray();
  }, []);

  useEffect(() => {
    if (isSorting) {
      bubble_sort();
    }
  }, [isSorting]);

  return (
    <div className='bubble-sort'>
      <div className="container">
        <img onClick={() => {increaseSize()}} src={add_icon} alt="" className='add'/>
        <img onClick={() => {decreaseSize()}} src={remove_icon} alt="" className='remove'/>
        <p className='size'>{size}</p>
        <Graph sortArray={sortArray} activeIndices={activeIndices} selectedIndex={-1}/>
        <div className="array-items">
          {sortArray.map((num, index) => {
            return <div><p>{num}</p></div>
          })}
        </div>
      </div>
    </div>
  );
}

export default BubbleSort;
