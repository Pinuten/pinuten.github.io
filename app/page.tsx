"use client"
import React, { useState } from 'react';
import FlickrGallery from './components/FlickrImage';
import Banner from "./components/Banner";
const App = () => {
  // Define a state variable 'tag' and its corresponding setter 'setTag' using the useState hook
  // uses "cat" as default tag. 
  const [tag, setTag] = useState("cat");

  // Define a function 'handleSearch' that takes a searchTerm and updates the 'tag' state with the new value
  const handleSearch = (searchTerm:any) => {
    setTag(searchTerm);
  };

  return (
    <div>
      <Banner onSearch = {handleSearch}/>
      <FlickrGallery tag = {tag}/>
    </div>
  );
};

export default App;
