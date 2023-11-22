import { Link } from 'react-router-dom';
import { AuthContext, ThemeContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const Nav = () => {

  const {admin, setAdmin} = useContext(AuthContext); 

  const {type, setType} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    console.log(type);
    setType(type === 'Light' ? 'Dark' : 'Light');
  }

  return (
    <nav>
        <Link to='/'>Home Page</Link>
        <Link to='/admin'>Admin</Link>
        <Link onClick={handleToggleTheme}>Toggle Theme</Link>
        {admin && <Link onClick={() => setAdmin(false)}>Exit</Link>}
    </nav>
  );
}

export default Nav;