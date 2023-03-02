import styled from 'styled-components/native';

export const WelcomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.utils.white};
`;

export const Header = styled.View`
  padding: 15px 0 0 24px;
`;

export const BackgroundImage = styled.Image`
  margin-bottom: 32px;
  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.utils.white};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.bold};
  color: ${({theme}) => theme.colors.gray[700]};
  font-size: 32px;
  text-align: center;
  margin: 20px 0 8px 0;
`;

export const Description = styled.Text`
  font-size: 14px;
  width: 325px;
  text-align: center;
  color: ${({theme}) => theme.colors.gray[300]};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  line-height: 21px;
`;

export const SignInButtonContent = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 90%;
  padding: 15px 0;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.primary[500]};
`;
export const SignInButtonTitle = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.utils.white};
  font-family: ${({theme}) => theme.fonts.primary.semiBold};
`;
