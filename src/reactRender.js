import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from '@app/components/App';

export default () => {
  render(
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>,
    document.getElementById('root')
  );
};
