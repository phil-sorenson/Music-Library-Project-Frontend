//* Now that we know the data (from our async GET function) is being passed back through:
//ToDo • We have to pass it down to this file/'child component'
//ToDO • Create an HTML table & map over the songs passed down through props to generate the table data rows
//* DisplayMusic = DisplayEntries.jsx (weight-tracker)




const DisplayMusic = (props) => {
    return (
        <table className="music-table">
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
                {props.songEntries.map((entry,index) => {
                    return (
                        <tr key={index}>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.release_date}</td>
                        </tr>
                    )

                })}
            </tbody>

        </table>



    )
}

export default DisplayMusic;