import React, { Component } from 'react'

class SampleComponent extends Component {
    render() {

      const {pushCount} = this.props

        return (
            <div className="counter">
              <p>You pushed the Mighty Button for {pushCount} times{pushCount == 0 ? '.' : '!'}</p>
            </div>
        )
    }
}

//export default withRouter(SampleComponent)
export default SampleComponent
