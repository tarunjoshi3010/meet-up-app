
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useContext} from 'react';
import FavoriteContext from '../../store/favorite-context';

function MeetupItem (props){
    const favoriteContext = useContext(FavoriteContext);
    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite) {
            favoriteContext.removeFavorite(props.id);
        } else {
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });

        }
    }

    return (
           <li className={classes.item}>
               <Card>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorite' : 'Add to Favorite'}</button>
                    </div>
               </Card>
                    
           </li> 

    );
}

export default MeetupItem;