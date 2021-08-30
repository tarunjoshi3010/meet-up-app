import NewMeetuupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupPage(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://reat-getting-started-46cee-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return (
           <section>
               <h1>Add New Meetup</h1>
               <NewMeetuupForm onAddMeetup={addMeetupHandler}/>
           </section>
    );
}

export default NewMeetupPage;