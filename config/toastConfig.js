import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export const toastConfig = {
  tomatoToast: props => (
    <StyleView>
      <Container>
        <Title>{props.text1}</Title>
        <Text>{props.text2}</Text>
      </Container>
    </StyleView>
  ),
};

const StyleView = styled.View`
  width: 90%;
  height: 60px;
  background-color: #90f5fc80;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 80%;
  height: 100%;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #3143e8;
`;
