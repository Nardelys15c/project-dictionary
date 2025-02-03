import logo from './booksletters.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo}  className="App-logo" alt="logo" />
          </header>
          <main>
            <Dictionary defaultKeyword="Books"/>
          </main>
     
    <footer className="App-footer"><small>
      Coded by Nardelys Caraballo and hosted by <a href='https://github.com/Nardelys15c/project-dictionary.git'>Github</a></small>
    </footer>
    </div>
    </div>
  );
}

