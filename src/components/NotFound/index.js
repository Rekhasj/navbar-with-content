import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-container-dark">
              <img
                className="home-img"
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              />
              <h1 className="dark-home-heading">Lost Your Way?</h1>
              <p className="dark-details">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          ) : (
            <div className="home-container">
              <img
                className="home-img"
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              />
              <h1 className="home-heading">Lost Your Way?</h1>
              <p className="light-details">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
