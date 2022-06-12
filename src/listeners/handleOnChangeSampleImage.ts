import { closePreview } from '../common/closePreview';
import { getFileName, getPreviewThumbnail, getSampleImage } from '../common/elements';

export const initOnChangeSampleImageHandler = () => {
  const sampleImage = getSampleImage();
  sampleImage.addEventListener('change', () => {
    const name = sampleImage.value;
    if (!name) {
      closePreview();
      return;
    }
    const fileName = getFileName();
    fileName.innerHTML = name;
    const sampleImageUrl = `/sample-images/${name}`;
    const previewThumbnail = getPreviewThumbnail();
    previewThumbnail.setAttribute('src', sampleImageUrl);
  });
};
