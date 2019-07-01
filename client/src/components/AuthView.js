import React from "react";

import AUTH from "../constants/AUTH.js";

import SignUp from "../components/SignUp.js";

class AuthView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="auth-view">
        <SignUp />
      </div>
    );
  }
}

export default AuthView;
