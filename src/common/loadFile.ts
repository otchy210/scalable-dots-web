import { getFileName, getFileTypeError, getPreviewThumbnail } from './elements';
import Modal from 'bootstrap/js/dist/modal';

const validFileTypes = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]);

export const loadFile = (file: File) => {
  if (!validFileTypes.has(file.type)) {
    const fileTypeErrorModal = new Modal(getFileTypeError());
    fileTypeErrorModal.show();
    console.error(`No support for the file type: ${file.type}`);
    return;
  }
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const fileName = getFileName();
    fileName.innerHTML = file.name;
    const dataURL = reader.result as string;
    const previewThumbnail = getPreviewThumbnail();
    previewThumbnail.setAttribute('src', dataURL);
  });
  reader.readAsDataURL(file);
};
