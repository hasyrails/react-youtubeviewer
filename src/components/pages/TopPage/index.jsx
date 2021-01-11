import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import VideosListTemplate from '~/components/templates/VideosListTemplate';
import Header from '~/components/organisms/Header';
import SearchForm from '~/components/organisms/SearchForm';
import VideosList from '~/components/organisms/VideosList';

export const TopPagePresenter = ({
  search,
  searchNext,
  defaultKeyword,
  videos,
  loading,
}) => (
  <VideosListTemplate
    headerContents={<Header/>}
    searchFormContents={(
      <SearchForm onSubmit={search} defaultValue={defaultKeyword} />
    )}
    videosListContents={<VideosList videos={videos} loading={loading} /> }
    onScrollEnd={searchNext}
  />
);

TopPagePresenter.propTypes = {
  search: PropTypes.func.isRequired,
  searchNext: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  videos: VideosList.propTypes.videos,
  loading: PropTypes.bool,
};

TopPagePresenter.defaultProps = {
  videos: null,
  loading: false,
  defaultKeyword: '',
};

// TODO コンテナー・コンポーネントはあとで実装する
export default TopPagePresenter;
