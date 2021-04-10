import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
const Navbar = ({ location, user, handleLogout, history }) => {
  const rightNavItem = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/profile'>
            <Menu.Item
              name='profile'
              id='profile'
              active={location.pathname === '/profile'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
        <Link to='/campgrounds'>
          <Menu.Item
            name='campgrounds'
            id='campgrounds'
            active={location.pathname === '/campgrounds'}
          />
        </Link>
        <Link to={{
          pathname: `/users/1/reservations`,
          state: {
            user: user
          }
        }}>
          <Menu.Item
            name='reservations'
            id='reservations'
            active={location.pathname === `/users/1/reservations`}
          />
        </Link>
        { rightNavItem() }
      </Menu>
    </>
  )
}
const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);