import { getPreviewThumbnail } from '../common/elements';
import { updateImageData } from '../common/imageData';
import { openPreview } from '../common/openPreview';
import { updateSvg } from '../common/updateSvg';

export const initOnLoadPreviewThumbnailHandler = () => {
  const previewThumbnail = getPreviewThumbnail();
  previewThumbnail.addEventListener('load', () => {
    updateImageData();
    updateSvg();
    openPreview();
  });
};
