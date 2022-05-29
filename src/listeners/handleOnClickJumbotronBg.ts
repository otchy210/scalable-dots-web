import { getJumbotron } from '../common/elements';
import { ClickEventListener } from '../types';

export const handleOnClickJumbotronBg: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'jumbotron-bg';
  },
  handle: (target) => {
    const jumbotron = getJumbotron();
    jumbotron.classList.remove('bg-svg', 'bg-png');
    jumbotron.classList.add(`bg-${target.getAttribute('value')}`);
  },
};
