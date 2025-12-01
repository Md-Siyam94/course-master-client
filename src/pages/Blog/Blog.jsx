import React from 'react';
import { useState } from "react";

const products = [
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ],
  [
    { id: 3, name: "C" },
    { id: 4, name: "D" }
  ],
  [
    { id: 5, name: "E" }
  ]
];

const Blog=()=> {
   const [groupIndex, setGroupIndex] = useState(0);  // কোন sub-array এ আছি
  const [itemIndex, setItemIndex] = useState(0);    // সেই sub-array এর item index

  const currentItem = products[groupIndex][itemIndex];

  const nextItem = () => {
    const group = products[groupIndex];

    // যদি current group এর শেষ item না হয়
    if (itemIndex < group.length - 1) {
      setItemIndex(itemIndex + 1);
    } 
    else {
      // যদি শেষ item হয়, তাহলে পরের group এ যাওয়া
      if (groupIndex < products.length - 1) {
        setGroupIndex(groupIndex + 1);
        setItemIndex(0);
      } else {
        alert("No more items!");
      }
    }
  };
  return (
     <div style={{ padding: "20px" }}>
      <h2>Current Product</h2>
      <p>Group: {groupIndex + 1}</p>
      <p>ID: {currentItem.id}</p>
      <p>Name: {currentItem.name}</p>

      <button onClick={nextItem}>Next</button>
    </div>
  );
}

export default Blog;