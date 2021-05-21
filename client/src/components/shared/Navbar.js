import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
const Navbar = ({ location, user, handleLogout, history }) => {
  const rightNavItem = () => {
    // console.log(user.user.id)
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/profile'>
            <Menu.Item
              name={user.user.name}
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
          pathname: `/reservations`,
          state: {
            // user_id: user.user.id
          }
        }}>
          <Menu.Item
            name='reservations'
            id='reservations'
            // active={location.pathname === `/users/${user.user.id}/reservations`}
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