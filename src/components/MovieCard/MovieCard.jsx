import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, url }) => {
  //   console.log(movie);

  const releaseDate = movie.release_date.split("-");

  const handleClick = () => {
    console.log(movie.id);
  };

  return (
    <li
        className="border col-span-1 mb-4 row-span-1"
        data-testid="movie-card"
        key={movie.id}
        onClick={() => handleClick()}
      >
    <Link
      to={{
        pathname: `movies/${movie.id}`,
      }}
    >
      
      
        <img data-testid="movie-poster" src={`${url}${movie.poster_path}`} />
      
      <p className=" font-light text-[12px] my-2"data-testid="movie-release-date"> {releaseDate[0]}</p>
      <h3 className="title font-semibold" data-testid="movie-title">
        {movie.title}
      </h3>
      <div className="genre"></div>
    </Link>
      </li>
  );
};

export default MovieCard;
