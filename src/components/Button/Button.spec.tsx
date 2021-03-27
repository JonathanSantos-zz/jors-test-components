import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '.';

test('Should render button component', async () => {
  const TEXT_CONTENT = 'Olá mundo!';
  const div = document.createElement('div');

  ReactDOM.render(<Button>{ TEXT_CONTENT }</Button>, div);

  expect(div.querySelector('button')).toHaveTextContent(TEXT_CONTENT);
});
