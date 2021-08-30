import {createContext, useState} from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);


    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetUp => meetUp.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetUpId){
            return userFavorites.some(meetup => meetup.id == meetUpId);
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;