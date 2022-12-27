import { Modal } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';

import * as S from './styles';

interface ConfirmModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ visible, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <S.Overlay>
        <S.Container>
          <Text color='#d73035' weight='600' size={18}>
            Cancelar pedido
          </Text>

          <Text style={{ textAlign: 'center', marginTop: 12 }}>
            Você tem certeza que deseja cancelar esse pedido?
          </Text>

          <S.Actions>
            <S.NoButton onPress={onCancel}>
              <Text>Não</Text>
            </S.NoButton>

            <Button onPress={onConfirm}>
              Cancelar
            </Button>
          </S.Actions>
        </S.Container>
      </S.Overlay>
    </Modal>
  );
}
