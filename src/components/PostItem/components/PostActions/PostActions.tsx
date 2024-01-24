import React from 'react';

import {Post} from '@domain';

import {Box, Icon, Text, IconProps, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({commentCount, favoriteCount, reactionCount}: Props) {
  function likePost() {}
  function navigationToComments() {}
  function favoritePost() {}
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        onPress={navigationToComments}
        text={commentCount}
      />
      <Item
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        onPress={favoritePost}
        text={reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}
function Item({marked, icon, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox flexDirection="row" alignItems="center" onPress={onPress} mr="s24">
      <Icon color={marked ? 'market' : undefined} name={marked ? icon.marked : icon.default} />
      {text > 0 && (
        <Text ml="s4" bold preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
