import http from './http'

const WIZARD =
  "http://www.mocky.io/v2/5df4e6da3000005400111bf1";

const load = () => {
  return http
  .get(WIZARD)
  .then(response => {
    return response.data;
  });
};

const navigate = (selection, tree, numberOfSteps) => {
  if (numberOfSteps <= 0) {
    return undefined;
  }
  if (!tree) {
    return undefined;
  }
  if (!tree.children) {
    return undefined;
  }
  if (!selection) {
    return undefined;
  }
  if (selection.length < numberOfSteps) {
    return undefined;
  }
  const lastElement = selection.reduce((acc, currentSelection) => {
    if (!acc) {
      return acc;
    }
    return acc.children[currentSelection];
  }, tree);
  if (!lastElement) {
    return undefined;
  }
  return lastElement.results;
};

export default {
  navigate,
  load
};
