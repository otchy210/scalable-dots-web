import { updateSvg } from '../common/updateSvg';
import { ClickEventListener } from '../types';

export const handleOnClickDotType: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'type';
  },
  handle: () => {
    updateSvg();
  },
};
