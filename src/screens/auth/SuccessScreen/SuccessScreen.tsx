import { AuthScreenProps } from 'src/routes/navigationType';

import { Button, Icon, Screen, Text } from '@components';

export function SuccessScreen ({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin () {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} size={48} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s24">
        {route.params.description}
      </Text>
      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
