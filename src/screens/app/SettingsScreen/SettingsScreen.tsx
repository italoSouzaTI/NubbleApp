import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">SettingsScreen</Text>
      <Button
        title="New Post"
        onPress={() => {
          navigation.navigate('AppTabNavigation', {
            screen: 'NewPostScreen',
          });
        }}
      />
    </Screen>
  );
}
