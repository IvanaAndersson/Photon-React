import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import SearchField from "./SearchField";

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
      <SearchField />

      <Gallery isLoaded={isLoaded} items={items} />

      <section className="more-button">
        <button className="more">More</button>
      </section>
    </main>
  );
};

export default Main;
