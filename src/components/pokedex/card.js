import './card.css'

// Get props from the pokémon id
const Card = () => {
    return(
    <div className="card">
      <figure>
        {/* Set here the specific pokémon info */}
          <a href="/info">
              <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png' alt="01"/>
        </a>
      </figure>
      <div className="pokemon-info">
        <p className="id"><span className="number-prefix">#</span>001</p>
        <h5>Bulbasaur</h5>      
        <div className="abilities">
          <span className="pill background-color-grass">Grass</span>
        </div>
        <div className="abilities">
          <span className="pill background-color-poison">Poison</span>
        </div>
      </div>
    </div>
    )
};

export default Card;