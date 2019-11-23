import React from 'react';
import {render} from '@testing-library/react';

import Main from 'wd-main/src/app/Main';

describe('Main', () => {
  test('simple', () => {
    const {asFragment} = render(<Main/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
