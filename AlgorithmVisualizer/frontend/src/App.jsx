import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import BubbleSort from "./pages/BubbleSort/BubbleSort";
import InsertionSort from "./pages/InsertionSort/InsertionSort";
import MergeSort from "./pages/MergeSort/MergeSort";
import SelectionSort from "./pages/SelectionSort/SelectionSort";

const App = () => {
  const [algo, setAlgo] = useState("bubble");
  const [sortArray, setSortArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [size, setSize] = useState(20);

  const navigate = useNavigate();

  const generateRandomArray = () => {
    if (!isSorting) {
      const newArr = [];
      for (let i = 0; i < size; i++) {
        newArr[i] = Math.floor(Math.random() * 100 + 1);
      }
      setSortArray(newArr);
    }
  };

  const increaseSize = () => {
    if (!isSorting) {
      setSize((prev) => {
        if (prev < 30) {
          return prev + 1;
        } else {
          return prev;
        }
      });
      generateRandomArray();
    }
  };

  const decreaseSize = () => {
    if (!isSorting) {
      setSize((prev) => {
        if (prev > 10) {
          return prev - 1;
        } else {
          return prev;
        }
      });

      generateRandomArray();
    }
  };

  useEffect(() => {
    generateRandomArray();
    navigate("/");
  }, []);

  return (
    <div>
      <Navbar
        algo={algo}
        setAlgo={setAlgo}
        generateRandomArray={generateRandomArray}
        isSorting={isSorting}
        setIsSorting={setIsSorting}
      />
      <Routes>
        <Route
          path="/"
          element={
            <BubbleSort
              sortArray={sortArray}
              setSortArray={setSortArray}
              isSorting={isSorting}
              setIsSorting={setIsSorting}
              generateRandomArray={generateRandomArray}
              increaseSize={increaseSize}
              decreaseSize={decreaseSize}
              size={size}
            />
          }
        />
        <Route
          path="/insertion"
          element={
            <InsertionSort
            sortArray={sortArray}
            setSortArray={setSortArray}
            isSorting={isSorting}
            setIsSorting={setIsSorting}
            generateRandomArray={generateRandomArray}
            increaseSize={increaseSize}
            decreaseSize={decreaseSize}
            size={size}
            />
          }
        />
        <Route
          path="/merge"
          element={
            <MergeSort
            sortArray={sortArray}
            setSortArray={setSortArray}
            isSorting={isSorting}
            setIsSorting={setIsSorting}
            generateRandomArray={generateRandomArray}
            increaseSize={increaseSize}
            decreaseSize={decreaseSize}
            size={size}
            />
          }
        />
        <Route
          path="/selection"
          element={
            <SelectionSort
            sortArray={sortArray}
            setSortArray={setSortArray}
            isSorting={isSorting}
            setIsSorting={setIsSorting}
            generateRandomArray={generateRandomArray}
            increaseSize={increaseSize}
            decreaseSize={decreaseSize}
            size={size}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
