import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Courses from "../../components/Courses/Courses";
import Words from "../../components/Words/Words";
import Subcategories from "../../components/SubCategories/Subcategories";
class Course extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Route path="/" exact component={Courses} />
        <Route
          path="/categories/:courseId"
          exact
          render={props => <Categories {...props}></Categories>}
        ></Route>
        <Route
          path="/categories/:courseId/:categoryId"
          exact
          render={props => <Words {...props}></Words>}
        ></Route>
        <Route
          path="/categories/:courseId/subCategories/:categoryId"
          exact
          render={props => <Subcategories {...props}></Subcategories>}
        ></Route>
        <Route
          path="/categories/:courseId/subCategories/:categoryId/:subCategoryId"
          exact
          render={props => <Words {...props}></Words>}
        ></Route>
      </div>
    );
  }
}
export default withRouter(Course);
