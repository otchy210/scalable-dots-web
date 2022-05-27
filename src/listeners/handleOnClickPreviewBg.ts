import { ClickEventListener } from '../types';

export const handleOnClickPreviewBg: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'preview-bg';
  },
  handle: (target) => {
    const thumbnail = document.querySelector('.preview .img-thumbnail');
    const svg = document.querySelector('.svg');
    if (!thumbnail || !svg) {
      return;
    }
    [thumbnail, svg].forEach((el) => {
      el.classList.remove('bg-black', 'bg-white');
      el.classList.add(`bg-${target.getAttribute('value')}`);
    });
  },
};
