import React from 'react';
import { actions } from '@storybook/addon-actions';
import styled, { css } from 'styled-components';
import VideoPlayerTemplate from '.';

export default { title: 'templates/VideoPlayerTemplate' };

const commonStyle = css`
  background: #f0f0f0;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 33px;
  ${commonStyle};
`;

const Player = styled.div`
  width: 100%;
  height: 400px;
  ${commonStyle}
`;

const VideoInfo = styled.div`
  width: 100%;
  height: 200px;
  ${commonStyle};
`;

const RelatedVideosList = styled.div`
  width: 100%;
  height: 1000px;
  ${commonStyle}
`;

export const Default = () => (
  <VideoPlayerTemplate
    headerContents={<Header>header</Header>}
    playerContents={<Player>player</Player>}
    videoInfoContents={<VideoInfo>videoInfo</VideoInfo>}
    relatedVideosListContents={<RelatedVideosList>relatedVideosList</RelatedVideosList>}
    {...actions('onScrollEnd')}
  />
);
