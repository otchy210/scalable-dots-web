import { getSvgHolder } from '../common/elements';
import { WindowResizeListener } from '../types';

export const handleWindowResize: WindowResizeListener = {
  handle: () => {
    const svgHolder = getSvgHolder();
    const rect = svgHolder.getBoundingClientRect();
    svgHolder.style.height = `${rect.width}px`;
  },
};
