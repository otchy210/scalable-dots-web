import { closePreview } from '../common/closePreview';
import { getSampleImage } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickClosePreview: ClickEventListener = {
  rule: (target) => {
    return target.classList.contains('close-preview');
  },
  handle: () => {
    closePreview();
    getSampleImage().value = '';
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 200);
  },
};
