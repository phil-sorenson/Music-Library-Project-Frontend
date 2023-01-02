//* Give user 5 different boxes to type in what they'd like and then a 'add song' button
import './SongForm.css'
import { useState } from "react";





    
function SongForm ({ onAddSong }) {
    const [song, setSong] = useState({
        title: '',
        artist:'',
        album:'',
        genre:'',
        release_date:''
    });

    const handleChange = (event)=> {
        setSong({...song, [event.target.name]:[event.target.value]});
    };

    function handleSubmit(event){
        event.preventDefault();
        onAddSong(song);
        setSong({
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        })
    }
    return (  
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input type='text' id='title' defaultValue={song.title} onChange={handleChange}/>
        </div>
        <br />
        <div>
            <label htmlFor="artist">Artist:</label>
            <input type='text' id='artist' defaultValue={song.artist} onChange={handleChange}/>
        </div>
        <br />
        <div>
            <label htmlFor="album">Album:</label>
            <input type='text' id='album' defaultValue={song.album} onChange={handleChange}/>
        </div>
        <br />
        <div>
            <label htmlFor="genre">Genre:</label>
            <input type='text' id='genre' defaultValue={song.genre} onChange={handleChange}/>
        </div>
        <br />
        <div>
            <label htmlFor="release_date">Release Date:</label>
            <input type='date' id='release_date' defaultValue={song.release_date} onChange={handleChange}/>
        </div>
        <br />
        <button type="submit">Add Song</button>
        </form>
    );


}


     
export default SongForm;





// const PostSong = (props) => {
    

    
//     const onSubmit = async(event) => {
//         event.preventDefault()
        
//         let newSong = {
//             title: title,
//             artist: artist,
//             album: album,
//             genre: genre,
//             release_date: release_date 
//         }
//         props.setSongs(newSong)
//         try {
//             const postResult = await axios.post('http://127.0.0.1:8000/music/', newSong)
//             console.log(postResult.data)
//         } catch(event) {
//             alert(event)
//         }

//     }
     
// }



//! May have to do POST request with .map in order to take each component of the song and pc it together one at a time to nake a full array
