import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getWordsQuery } from "../../queries/queries";

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayWords = () => {
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Select a word...</div>;
    } else {
      return data.words.map(word => {
        return (
          <li
            onClick={e => {
              this.setState({ selected: word.id });
              console.log(this.state.selected);
            }}
            className="u-center-text"
            key={word.id}
          >
            <h2>{word.word}</h2>
            <p>Example sentence Eng:{word.exampleSentenceEng}</p>
            <p>Example Sentence:{word.exampleSentence}</p>
            <p>grammarNuances:{word.grammarNuances}</p>
            <p>translation:{word.translation}</p>
            <p>Verb Goverment{word.verbGoberment}</p>
          </li>
        );
      });
    }
  };
  render() {
    return (
      <div>
        {this.props.match.params.categoryId ? (
          <div>
            <h1>Words!</h1>
            <ul className="list">{this.displayWords()}</ul>
          </div>
        ) : null}
        {this.props.subCategoryId ? (
          <div>
            <h1>Words!</h1>

            <ul className="list">{this.displayWords()}</ul>
          </div>
        ) : null}
      </div>
    );
  }
}
export default graphql(getWordsQuery, {
  options: props => {
    return {
      variables: {
        categoryId: props.match.params.categoryId,
        subCategoryId: props.match.params.subCategoryId
      }
    };
  }
})(Words);
