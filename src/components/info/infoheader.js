import './infoheader.css'

const InfoHeader = () => {
    return(
        <div className="info-header">
                    <a href="/us/pokedex/charmeleon" className="previous">
                      <div className="previous-page">
                        <span className="icon icon_arrow_sm_left"></span>
                        <span className="pokemon-number">#005</span>
                        <span className="pokemon-name">Charmeleon</span>
                      </div>
                    </a>

                    <a href="/us/pokedex/squirtle" className="next">
                      <div className="next-page">
                        <span className="icon icon_arrow_sm_right"></span>
                        <span className="pokemon-number">#007</span>
                        <span className="pokemon-name hidden-mobile">Squirtle</span>
                      </div>
                    </a>
        </div>
    )
}

export default InfoHeader;