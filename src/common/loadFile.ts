import { getFileName, getPreviewThumbnail } from './elements';

export const loadFile = (file: File) => {
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
