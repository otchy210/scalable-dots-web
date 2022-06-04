import { getPreview } from '../common/elements';
import { adjustPreviewHeight } from '../common/adjustPreviewHeight';
import { adjustSvgHolderHeight } from '../common/adjustSvgHolderHeight';

export const onWindowResize = () => {
  adjustSvgHolderHeight();
  if (getPreview().style.height) {
    adjustPreviewHeight();
  }
};
