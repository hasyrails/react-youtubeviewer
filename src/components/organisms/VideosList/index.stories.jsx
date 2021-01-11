import React from 'react';
import VideosList from '.';
import videos from './sampleData.json';

export default { title: 'organisms/VideosList' };

export const videosList = () => <VideosList videos={videos} />;

export const loading = () => <VideosList videos={[]} loading />;
loading.story = { name: '取得中' };

export const continuationLoading = () => <VideosList videos={videos} loading />;
continuationLoading.story = { name: '続き取得中' };

export const notFound = () => <VideosList videos={[]} />;
notFound.story = { name: '0件' };
