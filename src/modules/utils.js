const getData = async (path) => {
  return fetch(path).then((response) => response.json());
};

export default getData;
