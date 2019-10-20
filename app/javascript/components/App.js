import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Welcome nation="Viet Nam!" />
        <Welcome nation="Viet Nam!" />
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
