import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainer = isDarkTheme
        ? 'home-container-dark'
        : 'home-container'

      const homeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHeading = isDarkTheme ? 'dark-home-heading' : 'home-heading'
      return (
        <>
          <Navbar />

          <div className={homeContainer}>
            <img className="home-img" alt="home" src={homeImageURL} />
            <h1 className={homeHeading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
