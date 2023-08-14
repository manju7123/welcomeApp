import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  textCondition = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevState => ({
        text: 'Subscribed',
      }))
    } else {
      this.setState(prevState => ({
        text: 'Subscribe',
      }))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome </h1>
        <p className="paragraph"> Thank you! Happy Learning </p>
        <button
          className="subscribe-btn"
          onClick={this.textCondition}
          type="button"
        >
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
