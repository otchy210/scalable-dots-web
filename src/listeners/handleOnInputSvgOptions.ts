import {
  getGapRange,
  getGapValue,
  getSizeRange,
  getSizeValue,
} from '../common/elements';
import { updateSvg } from '../common/updateSvg';

export const initOnInputSvgOptionsHandlers = () => {
  const sizeRange = getSizeRange();
  const sizeValue = getSizeValue();
  sizeRange.addEventListener('input', () => {
    sizeValue.innerHTML = sizeRange.value;
    updateSvg();
  });
  const gapRange = getGapRange();
  const gapValue = getGapValue();
  gapRange.addEventListener('input', () => {
    gapValue.innerHTML = gapRange.value;
    updateSvg();
  });
};
