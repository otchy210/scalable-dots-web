import { getPreviewThumbnail } from './elements';

let imageData: ImageData;
export const getImageData = () => {
  if (imageData) {
    return imageData;
  }
  return updateImageData();
};

export const updateImageData = () => {
  const thumbnail = getPreviewThumbnail();
  const { naturalWidth: width, naturalHeight: height } = thumbnail;
  if (!width || !height) {
    throw new Error("Can't get image size");
  }
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error("Can't get canvas context");
  }
  context.drawImage(thumbnail, 0, 0);
  return (imageData = context.getImageData(0, 0, width, height));
};
