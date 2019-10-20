import React from 'react';

class Welcome extends React.Component {
  render () {
    return (
      <div>
        <h2>welcome to {this.props.nation}!</h2>
      </div>
    )
  }
}

export default Welcome
