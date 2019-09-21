import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoriesQuery } from "../../queries/queries";
import { Link } from "react-router-dom";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  componentDidMount() {}
  displayCategories = () => {
    var data = this.props.data;
    if (data.loading) {
      return <div>Select a course...</div>;
    } else {
      return data.categories.map(category => {
        console.log(category);
        return (
          <Link
            key={this.props.match.params.courseId}
            to={
              category.hasSubcategories
                ? this.props.history.location.pathname +
                  "/subCategories/" +
                  category.id
                : this.props.history.location.pathname + "/" + category.id
            }
          >
            <li
              onClick={e => {
                this.setState({ selected: category.id });
              }}
              className="u-center-text"
              key={category.id}
            >
              <h2>{category.name}</h2>
              {category.language}
              {category.level}
            </li>
          </Link>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Categories!</h1>
        {this.props.match.params.courseId ? (
          <ul className="list">{this.displayCategories()}</ul>
        ) : null}
      </div>
    );
  }
}
export default graphql(getCategoriesQuery, {
  options: props => {
    console.log(props);
    return {
      variables: {
        courseId: props.match.params.courseId
      }
    };
  }
})(Categories);
