import { getSvgHolder } from './elements';

export const adjustSvgHolderHeight = () => {
  const svgHolder = getSvgHolder();
  const rect = svgHolder.getBoundingClientRect();
  svgHolder.style.height = `${rect.width}px`;
};
