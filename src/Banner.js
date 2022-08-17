import React, { useEffect, useState } from "react";
import requests from "./request";
import instance from "./axios";
import axios from "axios";
import './Banner.css';
function Banner() {
    const baseUrl = instance.baseURL;
    const [movie, setMovie] = useState([]);
    // console.log(baseUrl);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(baseUrl + requests.fetchNetflixOriginals);
            // console.log(baseUrl + requests.fetchNetflixOriginals);
            // for (let i = 0; i < 6; i++) {
            let i = 0;
            const interval = setInterval(() => {

                setMovie(request.data.results[i]);
                i++;
                // console.log(i);
                if (i == 5) {
                    i = 0;
                }
            }, 7000)
            // }
            return request;
        }
        fetchData();
        //     fetchData();
    }, []);
    // console.table(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>

            </div>
            <div className="banner_fadebutton"></div>

        </header>
    )
}

export default Banner;