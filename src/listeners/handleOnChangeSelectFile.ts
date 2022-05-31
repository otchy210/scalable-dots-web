import { getFileInput, getPreviewThumbnail } from '../common/elements';
import { updateImageData } from '../common/imageData';
import { openPreview } from '../common/openPreview';
import { updateSvg } from '../common/updateSvg';

export const initOnChangeSelectFileHandler = () => {
  const fileInput = getFileInput();
  const previewThumbnail = getPreviewThumbnail();
  fileInput.addEventListener('change', () => {
    if (!fileInput.files || !fileInput.files[0]) {
      return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const dataURL = reader.result as string;
      previewThumbnail.setAttribute('src', dataURL);
    });
    previewThumbnail.addEventListener('load', () => {
      updateImageData();
      updateSvg();
      openPreview();
    });
    reader.readAsDataURL(file);
  });
};
