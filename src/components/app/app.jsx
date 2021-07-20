import Header from "../header/header";
import Movies from "../movies/movies";
import MoviePage from "../movie-page/movie-page";
import { Route, Switch } from "react-router-dom";

import './app.css';

const App = () => {

  return (
    <div className="app">
      <Header/>
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Movies/>}/>
          <Route path="/movie-page/:itemId?" render={() => <MoviePage/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
