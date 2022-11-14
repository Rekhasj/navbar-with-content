import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onClickImage = () => {
            this.setState(prevState => ({
              isDarkTheme: !prevState.isDarkTheme,
            }))
          }
          return (
            <>
              {isDarkTheme ? (
                <nav className="navbar-container-dark">
                  <img
                    className="website-logo"
                    alt="website logo"
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  />
                  <ul className="nav-card">
                    <li className="dark-list">Home</li>
                    <li className="dark-list">About</li>
                  </ul>
                  <button type="button" onClick={onClickImage}>
                    <img
                      className="theme-logo"
                      alt="theme"
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    />
                  </button>
                </nav>
              ) : (
                <nav className="navbar-container">
                  <img
                    className="website-logo"
                    alt="website logo"
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  />
                  <ul className="nav-card">
                    <li>Home</li>
                    <li>About</li>
                  </ul>
                  <button type="button" onClick={onClickImage}>
                    <img
                      className="theme-logo"
                      alt="theme"
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    />
                  </button>
                </nav>
              )}{' '}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
