import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InlineFrame = styled.iframe`
  // 親要素にあわせてサイズ調整できるようにしている
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const YouTubeInlineFrame = ({
  className,
  videoId,
}) => (
  <InlineFrame
    className={className}
    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
    allowFullScreen
    frameborder={0}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  />
);

YouTubeInlineFrame.propTypes = {
  className: PropTypes.string,
  videoId: PropTypes.string.isRequired,
};

YouTubeInlineFrame.defaultProps = {
  className: '',
};

export default YouTubeInlineFrame;
