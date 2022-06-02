import {
  getFileInput,
  getFileName,
  getPreviewThumbnail,
} from '../common/elements';

export const initOnChangeSelectFileHandler = () => {
  const fileInput = getFileInput();
  fileInput.addEventListener('change', () => {
    if (!fileInput.files || !fileInput.files[0]) {
      return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const fileName = getFileName();
      fileName.innerHTML = file.name;
      const dataURL = reader.result as string;
      const previewThumbnail = getPreviewThumbnail();
      previewThumbnail.setAttribute('src', dataURL);
    });
    reader.readAsDataURL(file);
  });
};
