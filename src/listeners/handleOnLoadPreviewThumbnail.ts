import { getPreviewThumbnail } from '../common/elements';
import { updateImageData } from '../common/imageData';
import { adjustPreviewHeight } from '../common/adjustPreviewHeight';
import { updateSvg } from '../common/updateSvg';
import { adjustSvgHolderHeight } from '../common/adjustSvgHolderHeight';

export const initOnLoadPreviewThumbnailHandler = () => {
  const previewThumbnail = getPreviewThumbnail();
  previewThumbnail.addEventListener('load', () => {
    updateImageData();
    updateSvg();
    adjustSvgHolderHeight();
    adjustPreviewHeight();
  });
};
