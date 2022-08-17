
import requests from '../request';
import './Tab2.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import instance from '../axios';
import './Search.css';
function Search() {
    const insta = instance.baseURL;
    const photoURL = "https://image.tmdb.org/t/p/original";

    const [searchInput, setSearchInput] = useState("");
    const [searchfilter, setSearchFilter] = useState("");
    const [filteredmovies, setFilteredMovies] = useState([]);
    const [filteredmoviesname1, setFilteredMoviesName1] = useState([]);
    // const [filteredmoviesname2, setFilteredMoviesName2] = useState([]);
    const [movieFound, setMovieFound] = useState(false);
    const [movieName, setMovieName] = useState();
    // let urlfilter = "";

    //this is just to get the proper api for each category search. call-2
    const handleSubmit = (e) => {
        // alert('hi');
        let query = searchInput;  // this the value that is being put in search box
        e.preventDefault();
        console.log(query);
        if (query) {
            Object.entries(requests).forEach(entry => {
                const [key, value] = entry;
                const keyname = key.toLocaleLowerCase();
                console.log(keyname.includes(query) + keyname + query);
                if (keyname.includes(query)) {  //to compare the search box value to all api names
                    setMovieFound(true);
                    setSearchFilter(insta+value);
                }
                
            })
            // if(searchfilter==""){
            //     setMovieFound(false);
            // }
            // for(let i =0;i<filteredmoviesname1.length;i++){
            //     let Moviename= filteredmoviesname1[i].original_title.toLocaleLowerCase();
            //     console.log(Moviename + Moviename.includes(query));
            //     setMovieFound(Moviename.includes(query));
            //     if(Moviename.includes(query)){
            //         setMovieFound(true);
            //         // console.log(movieFound);
            //         setMovieName(filteredmoviesname1[i].original_title);
            //         // console.log(movieName);
            //         break;
            //     }
            // }
            // if(!movieFound){

                // for(let i =0;i<filteredmoviesname2.length;i++){
                //     let Moviename= filteredmoviesname2[i].original_title.toLocaleLowerCase();
                //     console.log(Moviename + Moviename.includes(query));
                //     if(Moviename.includes(query)){
                //         setMovieFound(true);
                //         setMovieName(filteredmoviesname2[i].original_title);
                //         break;
                //     }
                // }
            // }
                // console.log(movieName);


            if (!movieFound) {
                console.log("hello its not found");
                // setMovieFound(false);
            }
        }
        
    }
    // console.log(searchfilter);

    // let query ="";

    // This function is just to get the value from the textarea search. call-1
    const handleFilter = (e) => {
        //  query = e.target.value;
        setSearchInput(e.target.value);

        // alert('hi')

        // return urlname;
    };
    // let query = searchInput;
    // console.log(searchInput);


    //this is to get the movies from categories that are in search box. call-3
    useEffect(() => {
        async function fetchData() {
            // console.log(insta);
            const request = await axios.get(searchfilter);

            console.log(searchfilter);
            setFilteredMovies(request.data.results);
            console.log(filteredmovies);
            return request;
        }
       
        fetchData();
}, [searchfilter] );
    // console.table(filteredmovies);

    // this is to get the movies from the name . call-3
    // useEffect(() => {
    //     async function fetchMovies() {
    //         // console.log(Object.values(requests)[4]);
    //         const request1 = await axios.get(insta+Object.values(requests)[3]);
    //         // console.log(request1.data);
    //         setFilteredMoviesName1(request1.data.results);
    //         console.log(filteredmoviesname1);
    //         return request1;

    //     }
    //     fetchMovies();
    // },[movieFound])
    // console.log(movieFound);

    // useEffect(() => {
    //     async function fetchMovies() {
    //         // console.log(Object.values(requests)[4]);
            
    //         const request2 = await axios.get(insta+Object.values(requests)[4]);
    //         setFilteredMoviesName2(request2.data.results);
    //         console.log(filteredmoviesname1);
    //         return request2;

    //     }
    //     fetchMovies();
    // },[searchInput])


    //return from function component.
    return (
        <div className='searchbar_div'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search.." maxLength="15"
                    name="se" className="searchtab_search" onChange={handleFilter} value={searchInput}  ></input>
                {/* <button type="submit" className='searchbar_btn' onSubmit={() => handleSubmit()}>Search</button> */}
            </form>
            <div className='filter_posts'>
                {filteredmovies && filteredmovies.map(movie => (
                    <div className='filter_content'>
                        {movieFound && <img className="filter_poster" src={`${photoURL}${movie.backdrop_path}`} alt={movie.name} key={movie.id} />}
                        {movieFound && <span className='filtermovie_title'>{movie.original_title}</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Search;