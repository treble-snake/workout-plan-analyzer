import {Col, Layout, Row} from 'antd';
import {viewerEditingModeState, ViewerMode} from './state/ViewerConfigState';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {ViewerHeader} from './meta-info/ViewerHeader';
import {WorkoutRecommendations} from './meta-info/WorkoutRecommendations';
import {workoutDayIdsSelector} from './state/workout/WorkoutPlanState';
import {WorkoutDayEditor} from './day-card/WorkoutDayEditor';
import {AddDays} from './day-card/AddDays';

export const WorkoutEditor = () => {
  const mode = useRecoilValue(viewerEditingModeState);
  const dayIds = useRecoilValue(workoutDayIdsSelector);
  const isEditable = mode === ViewerMode.Edit;

  return <>
    <ViewerHeader />
    <Layout.Content className={'plans-content'}>
      <Row gutter={16}>
        {
          dayIds.map((id, i) => (
            <Col
              style={{marginBottom: 16}}
              xs={24}
              sm={12}
              md={12}
              xl={8}
              xxl={6}
              key={id}>
              <WorkoutDayEditor id={id} index={i} />
            </Col>
          ))
        }

        {
          isEditable &&
          <Col
            style={{marginBottom: 16}}
            xs={24}
            sm={12}
            md={8}
            xl={4}
            xxl={3}
          >
            <AddDays />
          </Col>
        }
      </Row>
    </Layout.Content>
    <WorkoutRecommendations />
  </>;
};
