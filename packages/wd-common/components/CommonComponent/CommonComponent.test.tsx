import React from 'react';
import {render} from '@testing-library/react';

import CommonComponent from './CommonComponent';

describe('CommonComponent', () => {
  test('simple render', () => {
    const {asFragment} = render(<CommonComponent text="text"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
