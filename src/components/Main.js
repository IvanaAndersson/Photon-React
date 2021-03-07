import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apikey = "563492ad6f917000010000018d4d5a67577e4c59a84c7de1b246edb1";
  const baseUrl = "https://api.pexels.com/v1";

  useEffect(() => {
    fetch(`${baseUrl}/curated?per_page=5`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setItems(data.photos);
      });
  }, []);

  return (
    <main>
      <section className="search" id="search">
        <h1 id="heading">What pictures would you like to see?</h1>

        <form className="search-form">
          <input
            type="text"
            name="search"
            id="search"
            className="search-input"
          />
          <button type="submit" className="submit-btn" id="submit-button">
            Search
          </button>
        </form>
      </section>

      <Gallery isLoaded={isLoaded} items={items} />

      <section className="more-button">
        <button className="more">More</button>
      </section>
    </main>
  );
};

export default Main;
