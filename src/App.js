import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import './App.css';
import SongForm from './components/SongForm/SongForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  

  useEffect(()=> {
    getAllSongs();
},[]);
  // Because the [] above is empty, the useEffect will only run one time
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data)
    console.log(response.data)
    setFilteredSongs(response.data)
    
  }
  
  async function handleAddSong(song){
    const response = await axios.post('http://127.0.0.1:8000/music/', song)
    setSongs(response.data);
    setFilteredSongs(response.data);
  };
  

  function searchItems(searchValue) {
      setSearchInput(searchValue)
      if (searchInput !== ''){
        const filteredData = songs.filter((song)=>{
          return Object.values(song).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredSongs(filteredData)
      }
      else {
        setFilteredSongs(songs)
      }}

 
      
  // }
  
  // const removeSong = async (id) => {
  //   await axios.delete('http://127.0.0.1:8000/music/<pk>');
  //   setSongs(songs.filter((song) => song.id !== id));
  //   setFilteredSongs(filteredSongs.filter((song) => song.id !== id));
 


  return (
  
      <div className='App'>
        <h2>Music Library</h2>
          <div>
            <button className='get-all-songs' style={{'margin': '1em'}} onClick={() => getAllSongs()}>Get All Songs</button>
          </div>
        <div>
          <DisplayMusic filteredSongs={filteredSongs} />
        </div>
        <div>
          <SongForm onAddSong={handleAddSong}/>
        </div>
        <div>
          <SearchBar searchItems={searchItems} />
        </div>
      </div>
    
    
  );
};

export default App;

//? Is there a keyboard shortcut to get cursor from the middle of tag(s) to the end of that line in order to just click 'enter' to get to next line 🤔
//? How can I get my terminal to show me the speed at which my commands are loading