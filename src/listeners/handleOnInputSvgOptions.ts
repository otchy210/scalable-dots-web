import { getGapRange, getGapValue, getSizeRange, getSizeValue, getSvgHolder, getZoom, getZoomRange, getZoomValue } from '../common/elements';
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
  const zoomRange = getZoomRange();
  const zoomValue = getZoomValue();
  zoomRange.addEventListener('input', () => {
    const zoom = getZoom();
    zoomValue.innerHTML = zoom;
    getSvgHolder().style.width = zoom;
  });
};
