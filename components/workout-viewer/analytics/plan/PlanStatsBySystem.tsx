import {QtyRange} from '../../../../types/workout';
import {Col, Row} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System, SystemsMeta} from '../Systems';

type Props<T> = {
  system: System,
  sets: Record<keyof T, QtyRange>,
  frequency: Record<keyof T, QtyRange>,
}

export const PlanStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {title, units} = SystemsMeta[system];
  return (
    <Col span={8}>
      <b>By {title}</b>
      <p>Brief info about {title}.</p>
      <Row>
        <Col span={6} offset={12}><b>Sets</b></Col>
        <Col span={6}><b>Days/week</b></Col>
      </Row>
      {
        Object.values(units).map((it) => {
          return (
            <Row key={it}>
              <Col span={12}>{it}</Col>
              <Col span={6}>{rangeToText(sets[it])}</Col>
              <Col span={6}>{rangeToText(frequency[it])}</Col>
            </Row>
          );
        })
      }
    </Col>
  );
};