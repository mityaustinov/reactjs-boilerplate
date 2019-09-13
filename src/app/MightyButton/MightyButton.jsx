import React, { Component } from 'react'
import { SampleComponent } from 'components'

class MightyButton extends Component {
    constructor() {
        super()

        this.state = {
          pushCount: 0,
        }

        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter () {
      this.setState({
        pushCount: this.state.pushCount + 1
      })
    }

    render() {

      const {pushCount} = this.state
      console.log(pushCount);

        return (
            <div className="mighty-button-container">
              <button onClick={this.updateCounter}>Mighty Button</button>
              <SampleComponent pushCount={pushCount} />
            </div>
        )
    }
}

export default MightyButton
