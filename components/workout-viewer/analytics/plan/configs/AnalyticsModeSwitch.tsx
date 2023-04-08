import {
  AnalyticsMode,
  analyticsModeState,
  SimpleViewMode,
  simpleViewModeState
} from '../../../ViewerConfigState';
import {Segmented, Space} from 'antd';
import {useRecoilState} from 'recoil';

export const AnalyticsModeSwitch = () => {
  const [analyticsMode, setAnalyticsMode] = useRecoilState(analyticsModeState);
  const [simpleViewMode, setSimpleViewMode] = useRecoilState(simpleViewModeState);

  return <Space>
      <span>View:</span>
      <Segmented
        value={analyticsMode}
        onChange={(value) => setAnalyticsMode(value as AnalyticsMode)}
        size={'small'}
        options={Object.values(AnalyticsMode).map((it) => ({
          label: it, value: it
        }))} />

    {
      analyticsMode === AnalyticsMode.Simple &&
      <Segmented
        value={simpleViewMode}
        onChange={(value) => setSimpleViewMode(value as SimpleViewMode)}
        size={'small'}
        options={Object.values(SimpleViewMode).map((it) => ({
          label: it, value: it
        }))} />
    }
  </Space>
};