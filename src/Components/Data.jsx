import { useState, useEffect } from "react";

const Data = () => {
  const [number, setNumber] = useState("1");
  const [fetchedData, setFetchedData] = useState({});

  async function logMovies() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${number}`
    );
    const movies = await response.json();
    setFetchedData(movies);
  }

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const fetchOnClick = () => {
    if (number < 10) {
      logMovies();
    } else {
      alert("Max Characters For Input Is 10");
    }
  };

  return (
    <div>
      <input type="text" onChange={changeNumber} />
      <button onClick={fetchOnClick}>Request</button>
      <br />

      <li>id: {fetchedData.id}</li>
      <li>title: {fetchedData.title}</li>
    </div>
  );
};

export default Data;
