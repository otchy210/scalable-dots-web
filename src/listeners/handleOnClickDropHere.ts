import { getFileInput } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickDropHere: ClickEventListener = {
  rule: (target) => {
    return target.classList.contains('drop-here');
  },
  handle: () => {
    getFileInput().click();
  },
};
