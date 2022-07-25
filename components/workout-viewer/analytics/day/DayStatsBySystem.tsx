import {QtyRange} from '../../../../types/workout';
import {Col, Row} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System} from '../systems-data/SystemsCommon';
import {SystemsMeta} from '../systems-data/SystemsMeta';

type Props<T> = {
  system: System,
  sets: Record<keyof T, QtyRange>,
}

export const DayStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {sets, system} = props;
  const {short: title, units} = SystemsMeta[system];
  return (
    <>
      <Row>
        <Col span={18}> <b>By {title}</b></Col>
        <Col span={6}><b>Sets</b></Col>
      </Row>
      {
        Object.values(units)
          .filter(it => sets[it].from > 0)
          .map((it) => {
            return (
              <Row key={it}>
                <Col span={18}>{it}</Col>
                <Col span={6}>{rangeToText(sets[it])}</Col>
              </Row>
            );
          })
      }
    </>
  );
};