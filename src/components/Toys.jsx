import React from 'react'

function Toys(props) {
  return (
    <div className='figures'>

        <img src={props.toyList.img} alt='poster' className='poster'></img>
            <h3>STARRING:</h3>
            <div className='box'>
                <ul>
                    {props.toyList.movie.stars.map((obj) => {
                        return(
                            <li>{obj}</li>
                        )
                    })}
                </ul>
            </div>

    <div className="flexBox">
        <div className="bigBox">
            <div className="movieBox">
                 <h1>{props.toyList.name}</h1>
            </div>
        <div className="infoBox">
            <h2>Friend: <span>{props.toyList.friend}</span></h2>
            <h2>Movie: <span>{props.toyList.movie.film}</span></h2>
            <h2>Release Date: <span>{props.toyList.movie.date}</span></h2>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Toys
