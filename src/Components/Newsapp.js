import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "e16cf90572b0418aafe023afa6a376c8";

  const getData = async (req, res) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getData();
  }, []);

  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };
  return (
    <div>
      <Navbar handleChange={handleChange} getData={getData} />
      <div>
        <p className="update">Stay update with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
        <button onClick={userInput} value="business">
          Business
        </button>
        <button onClick={userInput} value="science">
          Science
        </button>
        <button onClick={userInput} value="world">
          World
        </button>
        <button onClick={userInput} value="technology">
          Technology
        </button>
        <button onClick={userInput} value="finance">
          Finance
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
      <Footer />
    </div>
  );
};

export default Newsapp;
