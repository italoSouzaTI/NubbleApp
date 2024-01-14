import React from 'react';
import { Screen, Text } from '@components';
import { AppScreenProps } from 'src/routes/navigationType';

export function SettingsScreen (props: AppScreenProps<'SettingsScreen'>) {
    return (
        <Screen>
            <Text preset='headingSmall'>SettingsScreen</Text>
        </Screen>
    )
}