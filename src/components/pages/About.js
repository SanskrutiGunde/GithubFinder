import React, { Fragment } from "react";
import Author from "./Author";
import Spinner from "../layout/Spinner";

class About extends React.Component {
  componentDidMount() {
    this.props.getAuthor();
  }

  render() {
    if (this.props.loading) return <Spinner />;
    return (
      <Fragment>
        <Author author={this.props.author} />
        <div className="text-center">
          <h1> About this App</h1>
          <p>App to search Github Users</p>
          <p>Version 1.0.0 </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
