import React from 'react'
import Rate from "../Rate"


function Search({setfilterName,setfilterStars,filterStars}) {
    return (
        <div style={{textAlign:'center'}}>
            <input style={{textAlign:'center',width:'89%'}}type="text" placeholder="search a movie..." 
            onChange={(e)=>setfilterName(e.target.value)}
            />

<Rate 
rate={filterStars}
starsIndex={setfilterStars}/>

        </div>
    )
}

export default Search
