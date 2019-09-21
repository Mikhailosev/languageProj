import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { getSubCategoriesQuery } from "../../queries/queries";
class SubCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  componentDidMount() {}
  displaySubCategories = () => {
    var data = this.props.data;
    if (data.loading) {
      return <div>Select a category...</div>;
    } else {
      return data.subCategories.map(subCategory => {
        return (
          <Link
            to={this.props.history.location.pathname + "/" + subCategory.id}
          >
            <li
              onClick={e => {
                this.setState({ selected: subCategory.id });
              }}
              className="u-center-text"
              key={subCategory.id}
            >
              <h2>{subCategory.name}</h2>
            </li>
          </Link>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <h1>SubCategories!</h1>
        <ul className="list">{this.displaySubCategories()}</ul>
      </div>
    );
  }
}
export default graphql(getSubCategoriesQuery, {
  options: props => {
    return {
      variables: {
        categoryId: props.match.params.categoryId
      }
    };
  }
})(SubCategories);
