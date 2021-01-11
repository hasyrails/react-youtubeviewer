import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Image from '~/components/atoms/Image';
import Typography from '~/components/atoms/Typography';

const Root = styled.div`
  cursor: pointer;
  display: flex;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const Thumbnail = styled.div`
  flex-shrink: 1;
  min-width: 160px;
  max-width: 160px;
  > * {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  margin-left: 10px;
  word-break: break-all;
`;

const Description = styled(Typography)`
  margin-top: 5px;
  height: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ViewCount = styled(Typography)`
  margin-top: 5px;
`;

const VideosListItemPresenter = ({
  className,
  onClick,
  thumbnailUrl,
  title,
  description,
  viewCount,
}) => (
  <Root className={className} onClick={onClick}>
    <Thumbnail>
      <Image src={thumbnailUrl} alt={title} />
    </Thumbnail>
    <InfoWrapper>
      <Typography size="subtitle" bold display="inline-block">{title}</Typography>
      <Description>{description}</Description>
      <ViewCount size="xs" color="gray">
        {viewCount}
        回視聴
      </ViewCount>
    </InfoWrapper>
  </Root>
);

VideosListItemPresenter.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
};

VideosListItemPresenter.defaultProps = {
  className: '',
  onClick: null,
};

const VideosListItemContainer = ({
  className,
  video: {
    id,
    snippet: {
      title,
      description,
      thumbnails: {
        medium: {
          url: thumbnailUrl,
        },
      },
    },
    statistics: {
      viewCount,
    },
  },
  presenter,
}) => {
  // ページ遷移をさせるため、useHistoryを使ってhistoryオブジェクトを取得
  const history = useHistory();
  return presenter({
    className,
    onClick: () => {
      // クリックされたときにページ遷移する
      history.push(`/play/${id}`);
    },
    title,
    thumbnailUrl,
    description,
    viewCount,
  });
};

VideosListItemContainer.propTypes = {
  className: PropTypes.string,
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string,
        }),
      }).isRequired,
    }).isRequired,
    statistics: PropTypes.shape({
      viewCount: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

VideosListItemContainer.defaultProps = {
  className: '',
};

export default (props) => (
  <VideosListItemContainer
    presenter={VideosListItemPresenter}
    {...props}
  />
);
