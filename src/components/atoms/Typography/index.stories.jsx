import React from 'react';
import Typography, { colors, sizes, aligns } from '.';

export default { title: 'atoms/Typography' };

const sampleText = 'This component is Typography.';

export const colorVariation = () => colors.map((c) => (
  <Typography key={c} color={c}>
    {c}
    .
    {sampleText}
  </Typography>
));
colorVariation.story = {
  name: 'color',
};

export const sizeVariation = () => sizes.map((s) => (
  <Typography key={s} size={s}>
    {s}
    .
    {sampleText}
  </Typography>
));
sizeVariation.story = {
  name: 'size',
};

export const bold = () => sizes.map((s) => (
  <Typography key={s} size={s} bold>
    {s}
    .
    {sampleText}
  </Typography>
));

export const displayBlock = () => (
  <>
    <Typography display="block">
      {sampleText}
    </Typography>
    <Typography display="block">
      {sampleText}
    </Typography>
  </>
);
displayBlock.story = {
  name: 'display="block"',
};

export const displayInline = () => (
  <>
    <Typography display="inline">
      {sampleText}
    </Typography>
    <Typography display="inline">
      {sampleText}
    </Typography>
  </>
);
displayInline.story = {
  name: 'display="inline"',
};

export const displayInlineBlock = () => (
  <>
    <Typography display="inline-block" style={{ width: '100px' }}>
      {sampleText}
    </Typography>
    <Typography display="inline-block" style={{ width: '100px' }}>
      {sampleText}
    </Typography>
  </>
);

displayInlineBlock.story = {
  name: 'display="inline-block"',
};

export const align = () => aligns.map((a) => (
  <Typography key={a} align={a}>
    {a}
    .
    {sampleText}
  </Typography>
));
align.story = {
  name: 'align',
};
