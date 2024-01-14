import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps } from 'src/routes/navigationType';

import { Button, Screen, Text, FormTextInput } from '@components';
import { useResetNavigationSucess } from '@hooks';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './ForgotPasswordSchema';

export function ForgotPasswordScreen ({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSucess();
  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  function submitForm (formValues: ForgotPasswordSchema) {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ mb: 's40' }}
      />
      <Button
        mt="s40"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
