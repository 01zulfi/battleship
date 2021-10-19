const Ship = (length) => {
  let shipArray = Array(length).fill("live");
  const hit = (position) => {
    shipArray = shipArray.map((element, index) => {
      if (index !== position) {
        return element;
      }
      return element.replace("live", "dead");
    });
  };
  return {
    get length() {
      return length;
    },
    get shipArray() {
      return [...shipArray];
    },
    hit,
  };
};

export default Ship;
