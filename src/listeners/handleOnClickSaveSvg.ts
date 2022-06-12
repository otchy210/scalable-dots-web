import { getFileName, getGap, getSize, getSvgHolder, getType } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickSaveSvg: ClickEventListener = {
  rule: (target) => {
    return target.classList.contains('save-svg');
  },
  handle: () => {
    const originalName = getFileName().innerHTML;
    const nameBody = originalName.slice(0, originalName.lastIndexOf('.'));
    const typeChar = getType().charAt(0).toLowerCase();
    const size = getSize();
    const gap = getGap();
    const fileName = `${nameBody}-${typeChar}_${size}_${gap}.svg`;

    const svgHolder = getSvgHolder();
    const svg = svgHolder.innerHTML;
    const base64Svg = btoa(svg);
    const dataUrl = `data:image/svg;base64,${base64Svg}`;

    const a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', dataUrl);
    a.click();
  },
};
