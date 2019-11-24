import React from 'react';
import {storiesOf} from 'storybook/utils';
import {text} from '@storybook/addon-knobs/react';

import CommonComponent from './CommonComponent';

storiesOf('components', module)
  .add('CommonComponent', () => {
    const textProp = text('text', 'initial text');

    return (
      <CommonComponent text={textProp}/>
    );
  });
