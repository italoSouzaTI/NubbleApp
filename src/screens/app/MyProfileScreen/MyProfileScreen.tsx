import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
/* eslint-disable @typescript-eslint/no-unused-vars */
export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">MyProfileScreen</Text>
    </Screen>
  );
}
