import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainer = isDarkTheme
        ? 'home-container-dark'
        : 'home-container'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const homeHeading = isDarkTheme ? 'dar-home-heading' : 'home-heading'

      return (
        <>
          <Navbar />

          <div className={homeContainer}>
            <img className="home-img" alt="about" src={aboutImageURL} />
            <h1 className={homeHeading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
