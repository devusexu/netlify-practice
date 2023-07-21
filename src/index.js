import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);
// render(<App />, document.getElementById('app'));


if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
