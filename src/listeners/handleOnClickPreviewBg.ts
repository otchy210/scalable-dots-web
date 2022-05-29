import { getPreviewThumbnail, getSvgHolder } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickPreviewBg: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'preview-bg';
  },
  handle: (target) => {
    const thumbnail = getPreviewThumbnail();
    const svgHolder = getSvgHolder();
    [thumbnail, svgHolder].forEach((el) => {
      el.classList.remove('bg-black', 'bg-white');
      el.classList.add(`bg-${target.getAttribute('value')}`);
    });
  },
};
