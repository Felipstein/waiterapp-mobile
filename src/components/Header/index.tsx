import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ConfirmModal } from '../ConfirmModal';
import { Text } from '../Text';

import * as S from './styles';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  function handleConfirmCancelOrder() {
    setIsModalVisible(false);
    onCancelOrder();
  }

  return (
    <>
      <ConfirmModal
        visible={isModalVisible}
        onConfirm={handleConfirmCancelOrder}
        onCancel={() => setIsModalVisible(false)}
      />

      <S.Container>
        {!selectedTable && (
          <>
            <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
            <Text size={24} weight="700">
              WAITER
              <Text size={24}>APP</Text>
            </Text>
          </>
        )}

        {selectedTable && (
          <S.Content>
            <S.OrderHeader>
              <Text size={24} weight='600'>Pedido</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Text color='#d73035' weight='600' size={14}>cancelar pedido</Text>
              </TouchableOpacity>
            </S.OrderHeader>

            <S.Table>
              <Text color='#666'>Mesa {selectedTable}</Text>
            </S.Table>
          </S.Content>
        )}
      </S.Container>
    </>
  );
}
