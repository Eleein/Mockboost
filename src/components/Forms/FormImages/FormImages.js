import React, { useState } from "react";

export function FormImages() {
  const [allUrls, setAllUrls] = useState("");
  const [imagesTableData, setImagesTableData] = useState([]);

  function storeImages(event) {
    const value = event.target.value;
    setAllUrls(value);
    // value.split(',').map( url => {
  }
  function showImage() {
   setImagesTableData( allUrls.split(",").map(url => {
          return <img src={url} alt="one-url" />; 
      }));
  }


  return (
    <form>
      <label>
        Images URL <textarea onChange={storeImages} value={allUrls} />{" "}
      </label>
      <button type="bottom" onClick={showImage}>
        Show Images
      </button>
      <button type="bottom">Clear Images</button>
      {/*<div>Images:{images} </div>*/}
    </form>
  );
}
