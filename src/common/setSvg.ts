import { scalableDots } from '@otchy/scalable-dots-core';
import { ScalableDotsProps } from '@otchy/scalable-dots-core/dist/esm/types';
import { getPreviewThumbnail, getSvgHolder } from './elements';

export const setSvg = () => {
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
  const imageData = context.getImageData(0, 0, width, height);
  const sdProps: ScalableDotsProps = {
    imageData,
    type: 'SQUARE',
    size: 16,
    gap: 1,
  };
  const svg = scalableDots(sdProps).toMinifiedXml();
  const svgHolder = getSvgHolder();
  svgHolder.innerHTML = svg;
};
