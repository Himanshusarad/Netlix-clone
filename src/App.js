
import './App.css';
import requests from './request';
import ROW from './Row';
// import axios from 'axios';
// import instance from './axios';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <ROW title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      {/* { console.log(requests.fetchNetflixOriginals)} */}
      <ROW title="Trending Now" fetchURL={requests.fetchTrending} />
      {/* <ROW title="Top Rated" fetchURL={requests.fetchTopRated} /> */}
      <ROW title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <ROW title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <ROW title="Horrow Movies" fetchURL={requests.fetchHorrorMovies} />
      <ROW title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <ROW title="Documentaries" fetchURL={requests.fetchDocumantaries} />

    </div>
  );
}

export default App;
