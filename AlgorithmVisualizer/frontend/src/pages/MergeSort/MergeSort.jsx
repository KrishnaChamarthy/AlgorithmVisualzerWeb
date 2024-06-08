import React, { useEffect, useState } from 'react';
import "./MergeSort.css"
import Graph from '../../components/Graph/Graph';
import add_icon from "../../assets/add_icon_green.png"
import remove_icon from "../../assets/remove_icon_red.png"

const MergeSort = ({ setSortArray, sortArray, isSorting, setIsSorting, generateRandomArray, increaseSize, decreaseSize, size}) => {
    const [activeIndices, setActiveIndices] = useState([]);
  
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
  
    const merge_sort = async () => {
      const tempArr = [...sortArray];
      let n = tempArr.length;
    
      for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
          let mid = Math.min(leftStart + size, n);
          let rightEnd = Math.min(leftStart + 2 * size, n);
    
          await merge(tempArr, leftStart, mid, rightEnd);
        }
      }
    
      setIsSorting(false);
    };
    
    const merge = async (arr, leftStart, mid, rightEnd) => {
      let left = arr.slice(leftStart, mid);
      let right = arr.slice(mid, rightEnd);
      let i = 0, j = 0, k = leftStart;
    
      while (i < left.length && j < right.length) {
        setActiveIndices([k, -1]);
    
        if (left[i] < right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
    
        setSortArray([...arr]);
        await sleep(50);
        k++;
      }
    
      while (i < left.length) {
        setActiveIndices([k, -1]);
        arr[k] = left[i];
        setSortArray([...arr]);
        await sleep(50);
        i++;
        k++;
      }
    
      while (j < right.length) {
        setActiveIndices([k, -1]);
        arr[k] = right[j];
        setSortArray([...arr]);
        await sleep(50);
        j++;
        k++;
      }
    
      setActiveIndices([]);
    };
  
    useEffect(() => {
      generateRandomArray();
    }, []);
  
    useEffect(() => {
      if (isSorting) {
        merge_sort();
      }
    }, [isSorting]);
  
    return (
      <div className='merge-sort'>
        <div className="container">]
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

export default MergeSort
