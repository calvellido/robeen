import { GraphData } from '@app/types/types';
import { hasDataIsNotempty } from '@app/utils/utils'

export const DEFAULT_GRAPH_DATA_BAR: GraphData = {
  barChart: {
    axis: {
      x: {
        visible: true,
        gridVisible: true,
        format: 'ANY'
      },
      y: {
        visible: true,
        gridVisible: true,
        format: 'ANY'
      },
    },
    margin: {
      top: 24,
      right: 48,
      bottom: 24,
      left: 128,
    },
  },
  styles: {
    width: '100%',
    height: '300px',
    margin: '24px 0',
  },
  colors: [
    '#337ab7',
  ],
  labels: [],
  data: [],
  hasData: (graphData: GraphData) => hasDataIsNotempty(graphData),
};