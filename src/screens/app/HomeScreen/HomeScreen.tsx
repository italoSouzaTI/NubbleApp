import React from 'react';

import { AppScreenProps } from 'src/routes/navigationType';

import { Button, Screen, Text } from '@components';

export function HomeScreen ({ navigation }: AppScreenProps<'HomeScreen'>) {
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button
                onPress={() => {
                    navigation.navigate('SettingsScreen');
                }}
                title="Settings"
            />
        </Screen>
    );
}
