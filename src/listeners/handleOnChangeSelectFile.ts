import { getFileInput, getPreviewThumbnail } from '../common/elements';

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
    reader.readAsDataURL(file);
  });
};
