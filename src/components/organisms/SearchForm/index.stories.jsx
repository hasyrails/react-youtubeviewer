import React from 'react';
import { actions } from '@storybook/addon-actions';
import SearchForm from '.';

export default { title: 'organisms/SearchForm' };

const props = actions('onSubmit');

export const searchForm = () => (
  <SearchForm {...props} />
);

export const withDefaultValue = () => (
  <SearchForm {...props} defaultValue="ねこ" />
);
