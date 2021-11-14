const getData = async (path) => {
  try {
    let response = await fetch(path);
    let characters = await response.json();
    return characters;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getData;
