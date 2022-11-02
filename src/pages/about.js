import React from "react";
import { NavLink } from "react-router-dom";

class about extends React.Component {
    constructor(props) {
        super(props);
        console.log('contructor');
    }
    componentDidMount() {
        console.log('did');
    }
  render() {
    return (
      <div>
        <h1>About page</h1>
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

export default about;
