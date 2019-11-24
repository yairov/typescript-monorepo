import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-imports
// import theme from 'wd-common/styles/theme';

const req = require.context('../packages', true, /.story.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    {/* <ThemeProvider theme={theme}> */}
    <>
      {story()}
    </>
    {/* </ThemeProvider> */}
  </>
));

addDecorator(withKnobs);

configure(loadStories, module);
