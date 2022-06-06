import { getPreview } from '../common/elements';
import { adjustPreviewHeight } from '../common/adjustPreviewHeight';
import { adjustSvgBoxHeight } from '../common/adjustSvgBoxHeight';

export const onWindowResize = () => {
  adjustSvgBoxHeight();
  if (getPreview().style.height) {
    adjustPreviewHeight();
  }
};
