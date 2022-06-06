import { getSvgBox } from './elements';

export const adjustSvgBoxHeight = () => {
  const svgBox = getSvgBox();
  const rect = svgBox.getBoundingClientRect();
  svgBox.style.height = `${rect.width}px`;
};
