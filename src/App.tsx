import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import visionApi from './visionApi';
import { ChatCompletion } from 'openai/resources';

function App() {
  const visionApiObj = visionApi("What is this image about?")
  const [result, setResult] = useState<string>("")
  return (
    <div className="App">
      <input type = "file" onChange={(e) => {
        if (e.target.files) {
          const fr = new FileReader()
          fr.readAsBinaryString(e.target.files[0])
          fr.onloadend = async (data) => {
            const message  = await visionApiObj.predictImage(fr.result as string)
            setResult(message) 
          }
        }
      }}></input>
      <p>{result}</p>
    </div>
  );
}

export default App;
