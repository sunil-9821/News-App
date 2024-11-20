import React from "react";

function Card({ data }) {
  return (
    <div className="cardContainer">
      {data.map((item, index) => {
        if (!item.urlToImage) {
            return null; // Skip empty items in the array
        } else {
        return (
          <div key={index} className="card">
            <img src={item.urlToImage} alt={item.title} />
            <div className="cardContent">
              <h2>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </h2>
              <p>{item.description}</p>
              <button>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </button>
            </div>
          </div>
        );
        }
      })}
    </div>
  );
}

export default Card;
