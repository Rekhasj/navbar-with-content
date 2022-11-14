import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
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
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              />
              <h1 className="dark-home-heading">Home</h1>
            </div>
          ) : (
            <div className="home-container">
              <img
                className="home-img"
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              />
              <h1 className="home-heading">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
