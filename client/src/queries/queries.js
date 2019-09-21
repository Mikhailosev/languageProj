import { gql } from "apollo-boost";

export const getCoursesQuery = gql`
  {
    courses {
      id
      name
      language
      level
    }
  }
`;
export const getCategoriesQuery = gql`
  query($courseId: ID!) {
    categories(courseId: $courseId) {
      id
      name
      hasSubcategories
    }
  }
`;
export const getSubCategoriesQuery = gql`
  query($categoryId: ID!) {
    subCategories(categoryId: $categoryId) {
      id
      name
    }
  }
`;
export const getWordsQuery = gql`
  query($categoryId: ID, $subCategoryId: ID) {
    words(categoryId: $categoryId, subCategoryId: $subCategoryId) {
      categoryId
      subCategoryId
      word
      exampleSentence
      exampleSentenceHighlight
      exampleSentenceEng
      exampleSentenceEngHighlight
      grammarNuances
      grammarNuancesExtra
      translation
      verbGovernmentEng
      verbGovernment
      verbGovernmentHighlight
      verbGovernmentEngHighlight
      verbGovernmentSentence
      verbGovernmentSentenceEng
      verbGovernmentSentenceEngHighlight
      verbGovernmentSentenceHighlight
    }
  }
`;
