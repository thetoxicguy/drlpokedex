import Grid from "./pokedex/grid";
import Search from './pokedex/search';
import Break from "./break";

const Pokedex = () => {
    return(
        <div className="App">
        <Search />
        <Break />
        <Grid />
        <Break />
      </div>

    )
}

export default Pokedex;