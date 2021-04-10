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

const App = () => (
  <>
    <Navbar />
      <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;