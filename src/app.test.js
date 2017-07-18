import React from 'react';
import ReactDOM from 'react-dom';
import add from './add';
import Shelf from './containers/shelf';

describe('Addition', () => {
  it('renders without crashing', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('testDom', () => {
    expect(new Shelf().add(1, 2)).toBe(3);
  });
});