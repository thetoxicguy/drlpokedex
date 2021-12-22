import Card from './card';
import './grid.css';
import SurpriseMe from './surpriseme';
import LoadMore from './loadmore';
import Break from '../break';

const Grid = () => {
    return(
        <div className = 'results'>
        <SurpriseMe />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Break />
        <LoadMore />
        </div>
    )
}

export default Grid;