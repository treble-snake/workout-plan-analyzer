import {QtyRange} from '../../../types/workout';
import {useState} from 'react';
import {isValidTextRange, rangeToText, textToRange} from './RangeUtils';
import {AutoComplete, Input} from 'antd';

const SET_RANGE_OPTIONS = [{
  label: 'Examples',
  options: [
    {value: '3'},
    {value: '2-3'},
    {value: '2-4'}
  ]
}];

const REP_RANGE_OPTIONS = [
  {
    label: 'Low',
    options: [
      {value: '1'},
      {value: '1-3'},
      {value: '3-5'},
      {value: '4-6'},
    ]
  },
  {
    label: 'Moderate',
    options: [
      {value: '6-8'},
      {value: '8-10'},
      {value: '8-12'},
      {value: '10-12'},
    ]
  },
  {
    label: 'High',
    options: [
      {value: '10-15'},
      {value: '12-15'},
      {value: '10-20'},
      {value: '15-20'},
    ]
  },
  {
    label: 'Ultra High',
    options: [
      {value: '15-25'},
      {value: '20-25'},
      {value: '20-30'},
      {value: '25-30'},
    ]
  },
];

export enum RangeType {
  Reps,
  Sets
}

type Props = {
  range: QtyRange;
  type: RangeType,
  update: (range: QtyRange) => void,
}

export const RangeInputComponent = ({range, update, type}: Props) => {
  const [text, setText] = useState(rangeToText(range));

  const onChange = (value: string) => {
    setText(value);
    if (isValidTextRange(value)) {
      update(textToRange(value));
    }
  };

  return <AutoComplete
    dropdownMatchSelectWidth={120}
    style={{width: '100%'}}
    filterOption={(inputValue, option) => {
      // TODO: replace with controlled options and onSearch()
      return Boolean(option?.options?.some(it => it.value.includes(inputValue)));
    }}
    options={type === RangeType.Sets ? SET_RANGE_OPTIONS : REP_RANGE_OPTIONS}
    onChange={onChange}
    value={text}
  >
    <Input
      size="small"
           status={isValidTextRange(text) ? '' : 'error'}
           style={{
             textAlign: 'center',
             padding: 0,
             borderWidth: '0 0 1px 0',
             width: '100%'
           }} />
  </AutoComplete>;
};

export const RangeInput = RangeInputComponent;