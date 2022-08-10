import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "./axios";
import './Row.css';
import requests from "./request";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';
function ROW({ title, fetchURL,isLargeRow }) {
    const insta= instance.baseURL;
    // console.log(insta);
    const photoURL="https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]= useState("");
    useEffect(() => {
        async function fetchData() {
            // console.log(insta);
            const request = await axios.get(insta+fetchURL);
            
            // console.log(insta+fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    
    // console.table(movies);
    // console.log(movies); 
    const opts={
        height:"390",
        width:"100%",
        playVars:{
            autoplay:1,
        },
    };
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                // console.log(urlParams);
                // alert('hi');
                setTrailerUrl(urlParams.get("v"));
                console.log(trailerUrl);
            }).catch(error => console.log(error));
        }
    }
    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="row_posts">
                {movies.map(movie =>(
                    <img className={`row_poster ${isLargeRow && "row_posterlarger"}`} onClick ={() => handleClick(movie)} src={`${photoURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} key={movie.id}/>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default ROW;
