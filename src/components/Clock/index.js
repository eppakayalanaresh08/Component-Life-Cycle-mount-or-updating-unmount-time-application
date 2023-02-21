import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor')
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    console.log('components called')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componetWillUnmount called')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render', date)
    // console.log(date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
