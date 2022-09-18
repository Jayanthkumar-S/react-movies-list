import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://image.tmdb.org/t/p/w300_and_h450_bestv2";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
   
    <div className="movie">
       <abbr title={movie.Title}>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
         
        />
      </div>
      <div>
    <h5>{movie.Title}</h5>
      </div>
      </abbr>
    </div>
  );
};


export default Movie;







