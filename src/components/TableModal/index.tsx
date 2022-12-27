import { Modal, Platform, TouchableOpacity } from 'react-native';

import { Button } from '../Button';
import { Text } from '../Text';
import { Close } from '../Icons/Close';

import * as S from './styles';
import { useState } from 'react';

const isAndroid = Platform.OS === 'android';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();
  }

  function handleClose() {
    setTable('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <S.Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.Header>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={handleClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </S.Header>

          <S.Form>
            <S.Input
              keyboardType='number-pad'
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={!table}>
              Salvar
            </Button>
          </S.Form>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
