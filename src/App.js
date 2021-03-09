import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movie1 = {
  title: 'The Fellowship of the Ring',
  hours: 2,
  minutes: 58,
}

const movie2 = {
  title: 'The Two Towers',
  hours: 2,
  minutes: 59,
}

const movie3 = {
  title: 'The Return Of The King',
  hours: 3,
  minutes: 21,
}
// Bonus array version!
const movies = [
  {
    title: 'The Fellowship of the Ring',
    hours: 2,
    minutes: 58,
  },
  {
    title: 'The Two Towers',
    hours: 2,
    minutes: 59,
  },
  {
    title: 'The Return Of The King',
    hours: 3,
    minutes: 21,
  }
]
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Movie title={movie1.title} hours={movie1.hours} minutes={movie1.minutes}/>
          <Movie title={movie2.title} hours={movie2.hours} minutes={movie2.minutes}/>
          <Movie title={movie3.title} hours={movie3.hours} minutes={movie3.minutes}/>
          {
          // Bonus Array-Based JSX!
          // Note that this actually means we're interpolating in an array of JSX components.
          // React handles that gracefully, just putting each one in order on the DOM.
          // Comment it back in to see!
          }
          {/* {movies.map((movie) => (
            <Movie
              title={movie.title}
              hours={movie.hours}
              minutes={movie.minutes}
            />
          ))} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
