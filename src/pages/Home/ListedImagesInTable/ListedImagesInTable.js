import React, { useState, useEffect } from "react";
import "./ListedImagesInTable.scss";

export function ListedImagesInTable() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(object => object.json())
      .then(pictures => setPictures(pictures));
  }, []);
  const INCREMENT = 3;
  const [pictures, setPictures] = useState([]);

  const [startNumber, setStartNumber] = useState(0);
    const [endNumber, setEndNumber] = useState(INCREMENT);

    // const [windowBounds, setWindowBounds] = useState({
    //     start: 0,
    //     end: 0
    // });


  function setNumbers() {
    setEndNumber(endNUmber => endNUmber + INCREMENT);
    setStartNumber(startNumber => startNumber + INCREMENT);
    //
    // setWindowBounds(windowBounds => {
    //     return {
    //         start: windowBounds.start + INCREMENT,
    //         end: windowBounds.end + INCREMENT
    //     }
    // })
  }
  function setPreviousPages() {
    setStartNumber(startNumber => startNumber - INCREMENT);
    setEndNumber(endNumber => endNumber - INCREMENT);

      // setWindowBounds(windowBounds => {
      //     return {
      //         start: windowBounds.start - INCREMENT,
      //         end: windowBounds.end - INCREMENT
      //     }
      // })
  }
  return (
    <div>
      <button onClick={setNumbers} disabled={endNumber >= pictures.length}>Next {INCREMENT} pictures </button>
      <button onClick={setPreviousPages} disabled={startNumber === 0}>
        Previous {INCREMENT} pictures{" "}
      </button>
      <table className="pictures-table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Picture</td>
          </tr>
        </thead>
        <tbody>
          {pictures &&
            pictures
              .filter(
                (picture, index) => index >= startNumber && index < endNumber
              )
              .map(picture => {
                return (
                  <tr>
                    <td>{picture.title}</td>
                    <td>
                      <img
                        className="api-pics"
                        src={picture.url}
                        alt="random-pic"
                      />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
