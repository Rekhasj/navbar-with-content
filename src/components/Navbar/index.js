import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarContainer = isDarkTheme
        ? 'navbar-container-dark'
        : 'navbar-container'
      const listItem = isDarkTheme ? 'dark-list' : 'light-list'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const onClickImage = () => {
        toggleTheme()
      }
      return (
        <>
          <nav className={navbarContainer}>
            <img
              className="website-logo"
              alt="website logo"
              src={websiteLogoImageURL}
            />
            <ul className="nav-card">
              <li>
                <Link to="/" className={listItem}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={listItem}>
                  About
                </Link>
              </li>
            </ul>
            <button type="button" onClick={onClickImage} testid="theme">
              <img className="theme-logo" alt="theme" src={themeImageURL} />
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
