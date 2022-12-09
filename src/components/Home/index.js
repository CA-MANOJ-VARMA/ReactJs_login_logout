// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isloggedIn: true}

  toggleButton = () => {
    const {isloggedIn} = this.state
    this.setState({isloggedIn: !isloggedIn})
  }

  render() {
    const {isloggedIn} = this.state
    return (
      <div className="css-main-container">
        <div className="css-bg-container">
          <div>
            <h1>{isloggedIn ? 'Please Login' : 'Welcome User'}</h1>
          </div>
          <button
            className="css-button"
            type="submit"
            onClick={this.toggleButton}
          >
            {isloggedIn ? 'Login' : 'Logout'}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
