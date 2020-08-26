import React from 'react'

const Rate=({rate,starsIndex})=> {

const rating=(x)=>{
    let stars=[];
    
    for(let i=1 ;i<=5 ;i++){
        if (i <= x){
            stars.push(<span  onClick={()=>starsIndex(i)}style={{color:"yellow"}}>★</span>)
        }
        else {
            stars.push(<span onClick={()=>starsIndex(i)} style={{color:"yellow"}} >☆</span>)
    }


}
return stars
}
    return (
        <div>
      {rating(rate)}
        </div>
    )
}

export default Rate
