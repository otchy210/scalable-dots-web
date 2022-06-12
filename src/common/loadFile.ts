import { getFileName, getFileTypeErrorModal, getPreviewThumbnail } from './elements';

const validFileTypes = new Set(['image/png', 'image/jpeg', 'image/gif', 'image/webp']);

export const loadFile = (file: File) => {
  if (!validFileTypes.has(file.type)) {
    const fileTypeErrorModal = getFileTypeErrorModal();
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
