//ToDO • Create a form w/ oninput...This is where the user will type term, they would like to the filter the table by
    //ToDO ▷ Once the form is submitted the value that the user entered should be passed to the function on the App component --> 
        // In turn, App then filters the songs by the term depending on if that term matches any of the song's properties
// Whatever the user searches, it filters the entire list (.includes JS function)

import React from "react";
// import { useState } from "react";

function SearchBar({ searchItems }){
    
    
    return (
       <form>
            <div>
                <label>Filter:</label>
                <input type='text' placeholder='Filter...' id='filter'  onInput={(event)=>{searchItems(event.target.value)}}/>
                <button type="submit">Submit</button>
            </div>
       </form> 
    )
}

export default SearchBar;