import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

interface ButtonProps {
  disabled?: boolean;
  onPress: () => void;
  children: string;
  loading?: boolean;
}

export function Button({ disabled, onPress, children, loading}: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='600' color='#fff'>{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="#fff"/>
      )}
    </S.Container>
  );
}
