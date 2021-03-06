import {QtyRange} from '../../../types/workout';
import {useState} from 'react';
import {isValidTextRange, rangeToText, textToRange} from './RangeUtils';
import {AutoComplete, Input} from 'antd';

const options = [
  {
    label: 'Strength',
    options: [
      {value: '1'},
      {value: '1-3'},
      {value: '3-5'},
    ]
  },
  {
    label: 'Strength/Size',
    options: [
      {value: '4-6'},
      {value: '8-10'}
    ]
  },
  {
    label: 'Size',
    options: [
      {value: '8-12'},
      {value: '10-12'},
      {value: '12-15'},
      {value: '10-15'},
    ]
  },
  {
    label: 'Size/Endurance',
    options: [
      {value: '10-20'},
      {value: '15-20'},
    ]
  },
  {
    label: 'Endurance',
    options: [
      {value: '15-25'},
      {value: '20-25'},
      {value: '20-30'},
      {value: '25-30'},
    ]
  },
];

type Props = {
  range: QtyRange;
  update: (range: QtyRange) => void
}

export const RangeInput = ({range, update}: Props) => {
  const [text, setText] = useState(rangeToText(range));

  const onChange = (value: string) => {
    setText(value);
    if (isValidTextRange(value)) {
      update(textToRange(value));
    }
  };

  return <AutoComplete
    dropdownMatchSelectWidth={120}
    size={'small'}
    style={{width: '100%'}}
    filterOption={(inputValue, option) => {
      // TODO: replace with controlled options and onSearch()
      return Boolean(option?.options?.some(it => it.value.includes(inputValue)));
    }}
    options={options}
    onChange={onChange}
    value={text}
  >
    <Input size="small"
           status={isValidTextRange(text) ? '' : 'error'}
           style={{
             textAlign: 'center',
             padding: 0,
             borderWidth: '0 0 1px 0',
             width: '100%'
           }} />
  </AutoComplete>;
};