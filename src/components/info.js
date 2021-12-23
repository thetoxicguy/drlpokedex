import Break from './break';
import './info.css';
import InfoHeader from './info/infoheader';
import Description from './info/description';
import Graphics from './info/graphics';

const Info = () => {
    return(
      <>
          <InfoHeader />
          <Break />
          <div className="info-left column-6 push-1">
            <Graphics />
          </div>
          <div className="info-right column-6 push-7">
            <Description />
            Texto blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </div>
      </>
    )
}
/*
const interval = {
  offset: 36,
  limit: 12,
}
P.getPokemonsList(interval).then(function(response) {
  console.log(response)
})
*/

export default Info;