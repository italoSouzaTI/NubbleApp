import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentAPI} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;
async function getList(postId: number, page: number): Promise<Page<PostComment>> {
  const postCommentPAgeAPI = await postCommentAPI.getList(postId, {page, per_page: PER_PAGE});
  return {
    data: postCommentPAgeAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPAgeAPI.meta),
  };
}

export const postCommentService = {
  getList,
};
