import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;
export function PostBottom({author, text, commentCount}: Props) {
  const comment = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.name}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {comment && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {comment}
        </Text>
      )}
    </Box>
  );
}
function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
