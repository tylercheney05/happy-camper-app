import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import ProtectedRoute from './components/auth/ProtectedRoute'
import FetchUser from './components/auth/FetchUser'
import Profile from './components/auth/Profile'
import Campgrounds from './components/campgrounds/Campgrounds'
import Campground from './components/campgrounds/Campground'
import Reservations from './components/reservations/Reservations'
import MakeReservation from './components/reservations/MakeReservation'

const App = () => (
  <>
    <Navbar />
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/campgrounds/:state_code' component={Campgrounds} />
          <ProtectedRoute exact path='/campgrounds/:state_code/:id' component={Campground} />
          <ProtectedRoute exact path='/reservations' component={Reservations} />
          <ProtectedRoute exact path='/reservations/:id/new' component={MakeReservation} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;