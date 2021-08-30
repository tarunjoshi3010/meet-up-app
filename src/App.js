import {Route, Switch} from 'react-router-dom';
import AllMettupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMettupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
