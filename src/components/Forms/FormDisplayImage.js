import React, {useState} from "react";


export function FormDisplayImage () {
    const [url,setUrl]= useState("");
    const [image, isImageAvailable]=useState(false)

    function updateUrl (event){
       setUrl(event.target.value)
    }
    function showImage(){
        isImageAvailable(!image)
    }

    function hideImage(){
        setUrl("")
    }

    return (<div>
        <form>
            <label>Image URL: <input value={url} onChange={updateUrl}/></label>
            <button type="button" onClick={showImage}>Show Image</button>
            <button type="button" onClick={hideImage}>Clear Image</button>
            {image && <div><img src={url} alt="random" /></div>}
        </form>
    </div>)
}