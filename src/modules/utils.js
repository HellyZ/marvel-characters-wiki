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


export function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
