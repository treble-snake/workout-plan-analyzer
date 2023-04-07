import {
  AnalyticsMode, SimpleViewMode,
  useViewerConfigContext
} from '../../../ViewerConfigProvider';
import {Segmented, Space, Tag} from 'antd';

export const AnalyticsModeSwitch = () => {
  const {
    analyticsMode,
    setAnalyticsMode,
    simpleViewMode,
    setSimpleViewMode
  } = useViewerConfigContext();

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