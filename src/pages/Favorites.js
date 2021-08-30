import MeetupList from "../components/meetups/MeetupList";
import {useContext} from 'react';
import FavoriteContext from "../store/favorite-context";

function FavoritesPage(){
    const favoriteContext = useContext(FavoriteContext);
    const favoriteCount = favoriteContext.totalFavorites;
     
    let content;
    if(favoriteCount === 0) {
        content = <p>There is no favorites yet, Start adding some.</p>
    } else {
        content = <MeetupList meetups={favoriteContext.favorites}/>
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;