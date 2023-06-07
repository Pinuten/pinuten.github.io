import React, { useState } from "react";
//displays a banner with a logo and a search bar
const Banner = ({ onSearch }:any) => {
  
  const [searchTerm, setSearchTerm] = useState("");
// Function to handle the search action
  const handleSearch = (searchTerm:any) => {
    onSearch(searchTerm);
  };
  // Function to handle input change in the search field

  const handleInputChange = (event:any) => {
    setSearchTerm(event.target.value);
  };
  // Function to handle form submission

  const handleSubmit = (event:any) => {
    event.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm("");
  };
  // styling to show Omegapoint logo and search bar
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/bannerImg.png" alt="omegapoint logo" style={{ width: "15%", height: "15%" }} />
      <form onSubmit={handleSubmit} style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ color: "black" }}
        />
        <button type="submit" style={{ color: "black", backgroundColor: "transparent", border: "none" }}>
          <img src ="/lookingglass.png" alt= "search" style ={{width: "25px", height: "25px"}}/>
        </button>
      </form>
    </div>
  );
};

export default Banner;
