import { getPreviewThumbnail, getSampleImage } from '../common/elements';

export const initOnChangeSampleImageHandler = () => {
  const sampleImage = getSampleImage();
  const previewThumbnail = getPreviewThumbnail();
  sampleImage.addEventListener('change', () => {
    const fileName = sampleImage.value;
    if (!fileName) {
      return;
    }
    const sampleImageUrl = `/sample-images/${fileName}`;
    previewThumbnail.setAttribute('src', sampleImageUrl);
  });
};
