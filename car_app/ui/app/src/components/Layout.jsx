import { useContext } from "react";
import { ThemeContext } from "../providers/AuthProvider";

const Layout = ({children}) => {

  const {type} = useContext(ThemeContext);

  return (
    <div className={type === 'Light' ? 'light-theme' : 'dark-theme'}>
      {children}
    </div>
  )
}

export default Layout;
