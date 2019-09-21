import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCoursesQuery } from "../../queries/queries";
import { Link } from "react-router-dom";
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayCourses = () => {
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Loading courses...</div>;
    } else {
      return data.courses.map(course => {
        return (
          <Link key={course.id} to={"/categories/" + course.id}>
            <li
              onClick={e => {
                this.setState({ selected: course.id });
              }}
              className="u-center-text"
            >
              <h2>{course.name}</h2>
              {course.language}
              {course.level}
            </li>
          </Link>
        );
      });
    }
  };
  render() {
    return (
      <div className="list">
        <h1>Courses!</h1>
        <ul id="list">{this.displayCourses()}</ul>
      </div>
    );
  }
}
export default graphql(getCoursesQuery)(Courses);
