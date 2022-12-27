import styled from 'styled-components/native';

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;

  justify-content: center;

  padding: 0 24px;
`;

export const Container = styled.View`
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 8px;

  align-items: center;
`;

export const Actions = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`;

export const NoButton = styled.TouchableOpacity`
  margin-right: 16px;
`;
