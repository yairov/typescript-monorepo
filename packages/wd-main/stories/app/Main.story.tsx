import React from 'react';
import {storiesOf} from 'storybook/utils';

import Main from 'app/Main';

storiesOf('components', module)
  .add('Main', () => {
    return (
      <Main/>
    );
  });
