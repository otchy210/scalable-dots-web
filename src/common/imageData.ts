import {
  getFileSizeInfo,
  getFileSizeInfoModal,
  getFileSizeWarn,
  getFileSizeWarnModal,
  getPreviewThumbnail,
} from './elements';

let imageData: ImageData;
const loadImageData = () => {
  const thumbnail = getPreviewThumbnail();
  const { naturalWidth: width, naturalHeight: height } = thumbnail;
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

export const getImageData = async () => {
  if (imageData) {
    return imageData;
  }
  return updateImageData();
};

export const updateImageData = async () => {
  const thumbnail = getPreviewThumbnail();
  const { naturalWidth: width, naturalHeight: height } = thumbnail;
  if (!width || !height) {
    throw new Error("Can't get image size");
  }
  return new Promise<ImageData>((resolve, reject) => {
    // relatively large
    const showInfo = width * height > 64 * 64;
    // significantly large
    const showWarn = width * height > 256 * 256;
    if (!showInfo) {
      // safe size
      resolve(loadImageData());
      return;
    }
    const [elem, modal] = showWarn
      ? [getFileSizeWarn(), getFileSizeWarnModal()]
      : [getFileSizeInfo(), getFileSizeInfoModal()];
    const onHidden = () => {
      if (elem.dataset.proceed === 'true') {
        resolve(loadImageData());
      } else {
        reject();
      }
      elem.removeEventListener('hidden.bs.modal', onHidden);
    };
    elem.addEventListener('hidden.bs.modal', onHidden);
    elem.dataset.proceed = 'false';
    modal.show();
  });
};
