const getElements = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  new Error('no element selected');
};

export default getElements;
