import { scalableDots } from '@otchy/scalable-dots-core';
import { ScalableDotsProps } from '@otchy/scalable-dots-core/dist/esm/types';
import { getGap, getSize, getSvgHolder, getType } from './elements';
import { getImageData } from './imageData';

export const updateSvg = async () => {
  const sdProps: ScalableDotsProps = {
    imageData: await getImageData(),
    type: getType(),
    size: getSize(),
    gap: getGap(),
  };
  const svg = scalableDots(sdProps).toMinifiedXml();
  const svgHolder = getSvgHolder();
  svgHolder.innerHTML = svg;
};
