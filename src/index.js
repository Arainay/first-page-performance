const render = (state = false) => {
  if (!state) {
    const rootElement = document.getElementById('root');
    const h1Element = document.createElement('h1');
    h1Element.innerHTML = 'Native App';
    h1Element.addEventListener('click', () => {
      render(!state);
    });
    rootElement.appendChild(h1Element);

  } else {
    const reactRender = () => import(
      /* webpackPrefetch: true */
      /* webpackChunkName: 'react-app' */
      '@app/reactRender'
      );

    reactRender().then(arg => {
      arg.default();
    });
  }
};

render();
