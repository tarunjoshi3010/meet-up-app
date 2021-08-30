import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import {useContext} from 'react';
import FavoriteContext from '../../store/favorite-context';

function MainNavigation(){
    const favoriteContext = useContext(FavoriteContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All MeetUps</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New MeetUps</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites MeetUps
                        <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;