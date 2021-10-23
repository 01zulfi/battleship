const DOMFactory = (element, attributes) => {
  const newElement = document.createElement(element);
  for (const attribute in attributes) {
    if (!newElement[attribute]) {
      if (attribute.toString().includes("data")) {
        newElement.setAttribute(attribute.toString(), attributes[attribute]);
      } else {
        newElement[attribute] = attributes[attribute];
      }
    }
  }
  return newElement;
};

export default DOMFactory;
