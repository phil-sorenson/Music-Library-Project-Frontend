//* Give user 5 different boxes to type in what they'd like and then a 'add song' button
import './SongForm.css'
import { useState } from "react";


    
function SongForm ({ onAddSong }) {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let song = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: date,
        }
        onAddSong(song);
    }
    return (  
        <form onSubmit={handleSubmit}>
            <div className='post-song-form'>            
                <div className='title-box'>
                    <label htmlFor="title">Title:</label>
                    <input type='text' id='title' value={title} onChange={(event)=>{setTitle(event.target.value)} }/>
                </div>
                <br />
                <div className='artist-box'>
                    <label htmlFor="artist">Artist:</label>
                    <input type='text' id='artist' value={artist} onChange={(event)=> {setArtist(event.target.value)}}/>
                </div>
                <br />
                <div className='album-box'>
                    <label htmlFor="album">Album:</label>
                    <input type='text' id='album' value={album} onChange={(event)=> {setAlbum(event.target.value)}}/>
                </div>
                <br />
                <div className='genre-box'>
                    <label htmlFor="genre">Genre:</label>
                    <input type='text' id='genre' value={genre} onChange={(event)=> {setGenre(event.target.value)}}/>
                </div>
                <br />
                <div className='release-date-box'>
                    <label htmlFor="release_date">Release Date:</label>
                    <input  type='date' id='release_date' value={date} onChange={(event)=> {setDate(event.target.value)}}/>
                </div>
                <br />
                <button className='submit-song' type="submit">Add Song</button>
            </div>
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
