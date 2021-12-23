import './infoheader.css'

const InfoHeader = () => {
    return(
      <>
      <section className="section pokedex-pokemon-header overflow-visible">
  <div className="pokedex-pokemon-pagination">
    <a href="/us/pokedex/calyrex" className="previous">
      <div className="pokedex-pokemon-pagination-wrapper">
        <span className="icon icon_arrow_sm_left"></span>
        <span className="pokemon-number">#898</span>
        <span className="pokemon-name hidden-mobile">Calyrex</span>
      </div>
    </a>

    <a href="/us/pokedex/ivysaur" className="next">
      <div className="pokedex-pokemon-pagination-wrapper">
        <span className="icon icon_arrow_sm_right"></span>
        <span className="pokemon-number">#002</span>
        <span className="pokemon-name hidden-mobile">Ivysaur</span>
      </div>
    </a>
  </div>
  <div className="pokedex-pokemon-pagination-title">
    <div>
      Bulbasaur
      <span className="pokemon-number">#001</span>
    </div>
  </div>
</section>

<section class="section pokedex-pokemon-form">
  <div class="column-12 push-1">
    <div class="styled-select button-black right">
    </div>
  </div>
</section>

</>
    )
}

export default InfoHeader;