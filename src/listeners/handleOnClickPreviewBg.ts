import { getPreviewThumbnail, getSvgBox } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickPreviewBg: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'preview-bg';
  },
  handle: (target) => {
    const thumbnail = getPreviewThumbnail();
    const svgBox = getSvgBox();
    [thumbnail, svgBox].forEach((el) => {
      el.classList.remove('bg-black', 'bg-gray', 'bg-white');
      el.classList.add(`bg-${target.getAttribute('value')}`);
    });
  },
};
