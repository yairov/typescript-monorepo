import React from 'react';
import {storiesOf} from 'storybook/utils';

import Flexible from 'app/Flexible';

storiesOf('components', module)
  .add('Flexible', () => {
    return (
      <Flexible/>
    );
  });
