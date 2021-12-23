import './graphics.css'
import Stats from './stats';

const Graphics = () => {
    return (
        <section>
            <div className="column-6 push-1">
                <div className="pokedex-pokemon-profile">
                    <div className="profile-images">
                        <img className="active" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur"/>
                    </div>
                </div>
                <div className="pokemon-stats">
                    <h3 data-gtm-vis-first-on-screen-159551_82="4309" data-gtm-vis-first-on-screen-159551_85="4309" data-gtm-vis-total-visible-time-159551_82="3000" data-gtm-vis-total-visible-time-159551_85="3000" data-gtm-vis-recent-on-screen-159551_82="1754289" data-gtm-vis-recent-on-screen-159551_85="1754289" data-gtm-vis-has-fired-159551_82="1" data-gtm-vis-has-fired-159551_85="1">Stats</h3>
                    <Stats />
                </div>
  &gt;

            </div>


        </section>
    );
}

export default Graphics;