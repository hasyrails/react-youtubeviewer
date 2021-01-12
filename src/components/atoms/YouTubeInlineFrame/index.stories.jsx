import React from 'react';
import styled from 'styled-components';

import YouTubeInlineFrame from '.';

const Wrapper = styled.div`
  position: relative;
  width: 560px;
  height: 315px;
`;

export default { title: 'atoms/YouTubeInlineFrame' };

export const inlineFrame = () => (
  <Wrapper>
    <YouTubeInlineFrame
      videoId="39m7aKAT170"
    />
  </Wrapper>
);
