import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import tv from "../assets/tv.png";
import home from "../assets/home.svg";
import calendar from "../assets/calendar.svg";
import camCorder from "../assets/camCorder.svg";
import exit from "../assets/exit.svg";
import televison from "../assets/televison.svg";





const MovieDetails = () => {
  const API_KEY = "8e7a7d97fefd8b47be7bd7039b7aeb23";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState();

  // send api request to the movie details
  useEffect(() => {
    const fetchMovieDetails = async (id) => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );
        const data = response.data;
        setSelectedMovie(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieDetails(id);
  }, [id]);

  if (selectedMovie === undefined || selectedMovie.length < 1) {
    return <Spinner />;
  }

  const { title, release_date, runtime, backdrop_path, overview, genres } =
    selectedMovie;
  const releaseDate = release_date.split("-");

  


  
  const getGenres = genres.map((genre) => {
    return (
      <span
        key={genre.id}
        className="text-[#BE123C] mr-2 rounded-xl border border-[#F8E7EB] px-3"
      >
        {genre.name}
      </span>
    );
  });

  return (
    <div className="movie-details py-5 flex">
      <div className="h-100% w-[10vw] flex flex-col justify-evenly items-center border-black border-2 rounded-tr-[30px] rounded-br-[30px]">
        <Link to="/">
          <div className="flex items-center">
            <span className="inline-block">
              <img src={tv} />
            </span>
            MovieBox
          </div>
        </Link>
        <div className="flex items-center">
          <span className="inline-block mr-3">
            <img src={home} className="w-6" />
          </span>
          Home
        </div>
        <div className="flex items-center justify-between">
          <img src={camCorder} className="w-6 inline-block mr-3" />
          <span>Movies</span>
        </div>
        <div className="flex items-center">
          <img src={televison} className="w-6 inline-block mr-3" />
          <span>TV Series</span>
        </div>
        <div className="flex items-center">
          <img src={calendar} className="w-6 inline-block mr-3" />
          <span>Upcoming</span>
        </div>
        <div>
          <div>
            play some quizes and earn free tickets 50k people are playing now
          </div>
          <div>start Playing</div>
        </div>
        <div className="flex items-center">
          <img src={exit} className="w-6 inline-block mr-3" />
          <span>Log Out</span>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-[80vw]">
        <div
          className="movie-image bg-hero-poster bg-center bg-cover h-[50vh] rounded-xl"
          style={{ backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})` }}
        ></div>

        <div className="flex gap-4 pt-4">
          <div className="left-details">
            <div className="movie-header flex mr-2 font-bold gap-2 items-center ">
              <h2 className="movie-title" data-testid="movie-title">
                {title}
              </h2>
              <div className=" bg-black w-1 h-1 rounded"></div>
              <h2 className="movie-release" data-testid="movie-release-date">
                {releaseDate[0]}
              </h2>
              <div className="bg-black w-1 h-1 rounded"></div>
              <h2 className="movie-rating">PG-13</h2>
              <div className="bg-black w-1 h-1 rounded"></div>
              <h2 className="movie-duration" data-testid="movie-runtime">
                {runtime}m
              </h2>
              <h2 className="movie-genre">
                {getGenres}
                <span></span>
              </h2>
            </div>
            <div className="movie-plot my-4">
              <p>{overview}</p>
            </div>
            <div className="movie-cast">
              <div className="movie-director">
                Director:
                <span className="text-[#BE123C]">Joseph Kosinski</span>
              </div>
              <div className="movie-writer my-4">
                Writers:
                <span className="text-[#BE123C]">
                  Jim Begley, Robert Downey, Peter Craig
                </span>
              </div>
              <div className="movie-star">
                Stars:
                <span className="text-[#BE123C]">
                  Tom Cruise, Jennifer Lopez
                </span>
              </div>
            </div>
            <div className="movie-nomination flex  border rounded-xl w-[500px] my-4">
              <div className="movie-rating-details bg-[#BE123C] rounded py-2 px-4 text-white">
                Top rated movie #65
              </div>
              <div className="movie-awards py-2 px-4">Awards 9 nominations</div>
            </div>
          </div>
          <div className="right-details flex flex-col gap-4">
            
  );
};

export default MovieDetails;

