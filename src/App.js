import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Url from './Url/Url';
import Popularmovies from './Pages/Popularmovies';
import Latestmovies from './Pages/Latestmovies';
import Comedymovies from './Pages/Comedymovies';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Url />
      {/* <Popularmovies /> */}
      {/* <Latestmovies/> */}
      <Comedymovies />
    </div>
  );
}

export default App;
