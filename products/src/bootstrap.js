import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // document.querySelector('#dev-products').innerHTML = products;
  el.innerHTML = products;
  // ReactDOM.render(<App />, el);
}

export { mount };