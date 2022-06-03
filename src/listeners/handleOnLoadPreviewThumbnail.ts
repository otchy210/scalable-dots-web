import { getPreviewThumbnail } from '../common/elements';
import { updateImageData } from '../common/imageData';
import { setPreviewHeight } from '../common/setPreviewHeight';
import { updateSvg } from '../common/updateSvg';

export const initOnLoadPreviewThumbnailHandler = () => {
  const previewThumbnail = getPreviewThumbnail();
  previewThumbnail.addEventListener('load', () => {
    updateImageData();
    updateSvg();
    setPreviewHeight();
  });
};
