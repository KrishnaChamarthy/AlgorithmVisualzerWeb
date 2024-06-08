import React, { useEffect, useState } from 'react';
import "./InsertionSort.css";
import Graph from '../../components/Graph/Graph';
import add_icon from "../../assets/add_icon_green.png"
import remove_icon from "../../assets/remove_icon_red.png"

const InsertionSort = ({ setSortArray, sortArray, isSorting, setIsSorting, generateRandomArray, increaseSize, decreaseSize, size }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  const insertion_sort = async () => {
    const tempArr = [...sortArray];
    let n = tempArr.length;
  
    for (let i = 1; i < n; i++) {
      let key = tempArr[i];
      let j = i - 1;
  
      setActiveIndices([j, -1]);
      setSelectedIndex(i);  
  
      while (j >= 0 && tempArr[j] > key) {
        tempArr[j + 1] = tempArr[j];
        j = j - 1;
        setSortArray([...tempArr]);
        await sleep(75);
        setActiveIndices([j, -1]);
      }
      tempArr[j + 1] = key;
      setSortArray([...tempArr]);
      await sleep(75);
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
      insertion_sort();
    }
  }, [isSorting]);

  return (
    <div className='insertion-sort'>
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

export default InsertionSort;
