//* Now that we know the data (from our async GET function) is being passed back through:
//ToDo • We have to pass it down to this file/'child component'
//ToDO • Create an HTML table & map over the songs passed down through props to generate the table data rows
//* DisplayMusic = DisplayEntries.jsx (weight-tracker)
import Table from 'react-bootstrap/Table';

function DisplayMusic({songs}){

  return (
    <Table striped bordered hover size="sm">  
        <thead>
            <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            </tr>
        </thead>
      <tbody>
        {songs.map((song) => (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>
              ))}
      </tbody>
    </Table>
  );
}


export default DisplayMusic;

