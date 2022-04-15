import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import CallMovies from './components/call-movies/CallMovies';

function App() {
  return (
    <div className="App bg-dark">
      <header>
        <Navbar/>
      </header>
      <div className='mt-5'>
        <Carousel/>
      </div>
      <div className='container'>
          <CallMovies/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
