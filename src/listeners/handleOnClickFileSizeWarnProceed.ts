import { getFileSizeWarn, getFileSizeWarnModal } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickFileSizeWarnProceed: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('id') === 'file-size-warn-proceed';
  },
  handle: () => {
    const fileSizeWarn = getFileSizeWarn();
    fileSizeWarn.dataset.proceed = 'true';
    const fileSizeWarnModal = getFileSizeWarnModal();
    fileSizeWarnModal.hide();
  },
};
