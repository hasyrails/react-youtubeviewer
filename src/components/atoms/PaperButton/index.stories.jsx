import React from 'react';
import { actions } from '@storybook/addon-actions';
import PaperButton from '.';

export default { title: 'atoms/PaperButton' };

const props = actions('onClick');

export const paperButton = () => (
  <PaperButton {...props}>もっと見る</PaperButton>
);
