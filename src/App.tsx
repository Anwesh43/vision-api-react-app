import React, { useState } from 'react';
import './App.css';
import visionApi from './visionApi';

function App() {
  const visionApiObj = visionApi("What is this image about?")
  const [result, setResult] = useState<string>("")
  const [imageURL, setImageURL] = useState<string>("")
  return (
    <div className="App">
      <input type = "file" onChange={(e) => {
        if (e.target.files) {
          const fr = new FileReader()
          fr.readAsDataURL(e.target.files[0])
          setResult("Loading...")
          fr.onloadend = async (data) => {
            console.log("FR_RESULT", fr.result)
            setImageURL(fr.result as string)
            const message  = await visionApiObj.predictImage(fr.result as string)     
            setResult(message) 
          }
        }
      }}></input>
      {!!imageURL && <img src = {imageURL}></img>}
      <p>{result}</p>
    </div>
  );
}

export default App;
