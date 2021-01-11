import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideosListItem from '~/components/organisms/VideosListItem';
import Spinner from '~/components/atoms/Spinner';
import Typography from '~/components/atoms/Typography';

const StyledVideosListItem = styled(VideosListItem)`
  margin-top: 10px;
`;

const Loading = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

const VideosList = ({
  loading,
  videos,
}) => (
  <>
    {!loading && !videos.length && <Typography>ビデオがありません</Typography>}
    {/* videosの中身の数だけVideosListItemを表示 */}
    {videos.map((video) => (
      <StyledVideosListItem key={video.id} video={video} />
    ))}
    {/* ロード中はSpinnerを表示 */}
    {loading && <Loading><Spinner /></Loading>}
  </>
);

VideosList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

VideosList.defaultProps = {
  videos: [],
  loading: false,
};

export default VideosList;
