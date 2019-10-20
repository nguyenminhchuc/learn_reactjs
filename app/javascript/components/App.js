import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      btnToggle: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => (
      {
        btnToggle: !state.btnToggle
      }
    ));
  }

  deleteRow = (name) => {
    console.log(name);
  }

  render () {
    return (
      <React.Fragment>
        <Welcome nation="Viet Nam!" />
        <Welcome nation="Viet Nam!" />
        <button onClick={this.handleClick}>
            {this.state.btnToggle ? "on" : "off"}
        </button>
        {/* Passing Arguments to Event Handlers */}
        <button onClick={this.deleteRow.bind(this, "nguyen minh chuc")}>
          Delete Row</button>
      </React.Fragment>
    );
  }
}

function Welcome(props) {
  return <h1>welcome to {props.nation}</h1>
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

export default App
