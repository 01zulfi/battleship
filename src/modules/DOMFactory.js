const DOMFactory = (element, attributes) => {
  const newElement = document.createElement(element);
  for (const attribute in attributes) {
    if (!newElement[attribute]) {
      newElement[attribute] = attributes[attribute];
    }
  }
  return newElement;
};

export default DOMFactory;
