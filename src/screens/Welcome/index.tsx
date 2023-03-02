import React from 'react';
import * as S from './styles';

import Logo from '../../assets/images/Logo.svg';
import Background from '../../assets/images/Background.png';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

export function Welcome() {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.utils.white}
        barStyle={'dark-content'}
      />

      <S.WelcomeContainer>
        <S.Header>
          <Logo />
        </S.Header>
        <S.Content>
          <S.Title>Olá, que bom te {'\n'}ver por aqui</S.Title>
          <S.Description>
            Vamos iniciar uma vida mais saudável, equilibrada e sem extremos?
            Clique no botão logo abaixo e inicie sua mudança ✨
          </S.Description>
          <S.BackgroundImage source={Background} />
          <S.SignInButtonContent>
            <S.SignInButtonTitle>Entrar</S.SignInButtonTitle>
          </S.SignInButtonContent>
        </S.Content>
      </S.WelcomeContainer>
    </>
  );
}
