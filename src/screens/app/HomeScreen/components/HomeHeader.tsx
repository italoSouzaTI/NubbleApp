import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}} justifyContent="space-between">
      <SimpleLogo />
      <Box>
        <Box flexDirection="row" style={{gap: 24}}>
          <Icon name="search" />
          <Icon name="bellOn" />
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
}
const $wrapper: BoxProps = {
  flexDirection: 'row',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
