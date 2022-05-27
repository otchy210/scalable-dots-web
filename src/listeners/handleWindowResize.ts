import { WindowResizeListener } from '../types';

export const handleWindowResize: WindowResizeListener = {
  handle: () => {
    const svg = document.getElementsByClassName('svg')[0] as HTMLElement;
    const rect = svg.getBoundingClientRect();
    svg.style.height = `${rect.width}px`;
  },
};
