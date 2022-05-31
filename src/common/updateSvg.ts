import { scalableDots } from '@otchy/scalable-dots-core';
import { ScalableDotsProps } from '@otchy/scalable-dots-core/dist/esm/types';
import { getGap, getSize, getSvgHolder, getType } from './elements';
import { getImageData } from './imageData';

export const updateSvg = () => {
  const sdProps: ScalableDotsProps = {
    imageData: getImageData(),
    type: getType(),
    size: getSize(),
    gap: getGap(),
  };
  const svg = scalableDots(sdProps).toMinifiedXml();
  const svgHolder = getSvgHolder();
  svgHolder.innerHTML = svg;
};
