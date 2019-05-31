import styled from '@emotion/styled';

import { ExpandInteractiveArea } from '../types';
import { ignoreProps } from '../utils';

interface StyledBarProps {
  size?: number;
}

interface StyledInteractiveAreaProps extends ExpandInteractiveArea {
  vertical: boolean;
}

const customStyledBarProps = [
  // ChildProps
  'context',
  'innerRef',
  // BarProps
  'size',
  'onClick',
  'expandInteractiveArea',
  'onStatusChanged',
];

export const StyledBar = styled('div', {
  shouldForwardProp: ignoreProps(customStyledBarProps),
})<StyledBarProps>(({ size = 10 }) => ({
  position: 'relative',
  flex: `0 0 ${size}px`,
}));

export const StyledInteractiveArea = styled.div<StyledInteractiveAreaProps>(
  ({ top = 0, right = 0, bottom = 0, left = 0, vertical }) => ({
    position: 'absolute',
    top: -top,
    left: -left,
    right: -right,
    bottom: -bottom,
    cursor: vertical ? 'row-resize' : 'col-resize',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none', // disable ios long press popup
  }),
);
