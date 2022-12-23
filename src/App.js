import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  
  const [songs, setSongs] = useState([])

  useEffect( ()=>{
    getAllSongs()
  },[]);
  // Because the [] above is empty, the useEffect will only run one time
    
  async function getAllSongs() {
      // Whenever we are making request with Axios, we want to create a variable to HOLD THE EVENTUAL RESPONSE/RESOLUTION of the promise 
    const response = await axios.get('http://127.0.0.1:8000/music/');
      // The api get request 'response' will be held in the response variable above
    console.log(response.data)
    setSongs(response.data)

    }


  return (
    <div>
      <button onClick={()=> getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;

//? Is there a keyboard shortcut to get cursor from the middle of tag(s) to the end of that line in order to just click 'enter' to get to next line 🤔
//? How can I get my terminal to show me the speed at which my commands are loading