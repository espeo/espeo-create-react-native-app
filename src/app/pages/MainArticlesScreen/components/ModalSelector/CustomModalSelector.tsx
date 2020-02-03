import React from 'react';
import { PickerData } from '@pages/MainArticlesScreen/namespace';
import { StyledModalSelector } from './CustomModalSelector.styles';

interface ModalSelectorProps {
  data: PickerData[];
  initValue: string;
  onChange(value: unknown): void;
}

const CustomModalSelector = ({
  data,
  initValue,
  onChange,
}: ModalSelectorProps) => (
  <StyledModalSelector
    data={data}
    initValue={initValue}
    onChange={onChange}
    selectStyle={{ borderWidth: 0 }}
    initValueTextStyle={{ color: 'black' }}
  />
);

export default CustomModalSelector;
