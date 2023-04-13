import {Collapse, Segmented, Spin} from 'antd';
import React, {memo, Suspense, useState} from 'react';
import {System} from '../systems-data/SystemsCommon';
import {SystemsMeta} from '../systems-data/SystemsMeta';

const TotalDaySets = React.lazy(() => import('./TotalDaySets'));
const DayStatsBySystem = React.lazy(() => import('./DayStatsBySystem'));

export const WorkoutDayStatsComponent = () => {
  const [system, setSystem] = useState(System.Muscle);

  return (
    <Collapse ghost key={'1'}>
      <Collapse.Panel
        key="1"
        style={{textAlign: 'left'}}
        header={
          <Suspense fallback={<Spin size={'small'} />}>
            <TotalDaySets />
          </Suspense>
        }
      >
        <Segmented
          options={
            Object.values(System).map((it) => ({
              label: SystemsMeta[it].short, value: it
            }))
          }
          block
          value={system}
          onChange={(it) => setSystem(it as System)}
          size={'small'}
          style={{marginBottom: 10}}
        />
        <Suspense fallback={<Spin size={'small'} />}>
            <DayStatsBySystem system={system} />
        </Suspense>
      </Collapse.Panel>
    </Collapse>
  );
};

export const WorkoutDayStats = memo(WorkoutDayStatsComponent);