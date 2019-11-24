// eslint-disable-next-line no-restricted-imports
import {storiesOf as origStoriesOf} from '@storybook/react';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import {StoryApi} from '@storybook/addons';

export function storiesOf(kind: string, modul: any): StoryApi<StoryFnReactReturnType> {
  const packageName = modul.id.replace(/^\.\/packages\//, '').replace(/\/.*?$/, '');
  return origStoriesOf(`${packageName}.${kind}`, modul);
}
