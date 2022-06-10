import { getPreviewThumbnail } from '../common/elements';
import { updateImageData } from '../common/imageData';
import { adjustPreviewHeight } from '../common/adjustPreviewHeight';
import { updateSvg } from '../common/updateSvg';
import { adjustSvgBoxHeight } from '../common/adjustSvgBoxHeight';
import { closePreview } from '../common/closePreview';

export const initOnLoadPreviewThumbnailHandler = () => {
  const previewThumbnail = getPreviewThumbnail();
  previewThumbnail.addEventListener('load', () => {
    updateImageData()
      .then(async () => {
        await updateSvg();
        adjustSvgBoxHeight();
        adjustPreviewHeight();
      })
      .catch(() => {
        closePreview();
      });
  });
};
