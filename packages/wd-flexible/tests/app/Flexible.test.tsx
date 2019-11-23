import React from 'react';
import {render} from '@testing-library/react';

import Flexible from 'wd-flexible/src/app/Flexible';

describe('Flexible', () => {
  test('simple', () => {
    const {asFragment} = render(<Flexible/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
