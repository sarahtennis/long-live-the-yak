import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h3>Sign Up</h3>
        <form className="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
