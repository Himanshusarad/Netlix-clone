import '../App.css';
import requests from '../request';
import ROW from '../Row';
import Banner from '../Banner';
import Nav from '../Nav';
import './Tab1.css';

function Tab1() {
    return (
        <>
            <Nav />
            <Banner />
            <ROW title="NETFLIX ORIGINALS" className="movie_row"
                fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <ROW title="Trending Now" className="movie_row"fetchURL={requests.fetchTrending} />
            <ROW title="Top Rated" className="movie_row"fetchURL={requests.fetchTopRated} />
            <ROW title="Action Movies"className="movie_row" fetchURL={requests.fetchActionMovies} />
            <ROW title="Comedy Movies"className="movie_row" fetchURL={requests.fetchComedyMovies} />
            <ROW title="Horrow Movies"className="movie_row" fetchURL={requests.fetchHorrorMovies} />
            <ROW title="Romance Movies" className="movie_row"fetchURL={requests.fetchRomanceMovies} />
            <ROW title="Documentaries"className="movie_row" fetchURL={requests.fetchDocumantaries} />
        </>
    )
}

export default Tab1;
