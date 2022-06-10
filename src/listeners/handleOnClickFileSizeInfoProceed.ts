import { getFileSizeInfo, getFileSizeInfoModal } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickFileSizeInfoProceed: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('id') === 'file-size-info-proceed';
  },
  handle: () => {
    const fileSizeInfo = getFileSizeInfo();
    fileSizeInfo.dataset.proceed = 'true';
    const fileSizeInfoModal = getFileSizeInfoModal();
    fileSizeInfoModal.hide();
  },
};
