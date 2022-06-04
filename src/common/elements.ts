import { DotType } from '@otchy/scalable-dots-core/dist/esm/types';

const queryIfNoElementGiven = <T>(element: T, query: string): T => {
  if (element) {
    return element;
  }
  const result = document.querySelector(query);
  if (!result) {
    throw new Error(`Not found element: ${query}`);
  }
  return result as unknown as T;
};

const queryAllIfNoArrayGiven = <T>(elements: T[], query: string): T[] => {
  if (elements) {
    return elements;
  }
  return Array.from(document.querySelectorAll(query)) as unknown as T[];
};

let jumbotron: HTMLDivElement;
export const getJumbotron = () => {
  return (jumbotron = queryIfNoElementGiven(jumbotron, '.jumbotron'));
};

let dropHere: HTMLDivElement;
export const getDropHere = () => {
  return (dropHere = queryIfNoElementGiven(dropHere, '.drop-here'));
};

let fileInput: HTMLInputElement;
export const getFileInput = () => {
  return (fileInput = queryIfNoElementGiven(fileInput, '.file-input'));
};

let sampleImage: HTMLSelectElement;
export const getSampleImage = () => {
  return (sampleImage = queryIfNoElementGiven(sampleImage, '.sample-image'));
};

let preview: HTMLDivElement;
export const getPreview = () => {
  return (preview = queryIfNoElementGiven(preview, '.preview'));
};

let previewThumbnail: HTMLImageElement;
export const getPreviewThumbnail = () => {
  return (previewThumbnail = queryIfNoElementGiven(
    previewThumbnail,
    '.preview .img-thumbnail'
  ));
};

let fileName: HTMLDivElement;
export const getFileName = () => {
  return (fileName = queryIfNoElementGiven(fileName, '.file-name'));
};

let svgHolder: HTMLDivElement;
export const getSvgHolder = () => {
  return (svgHolder = queryIfNoElementGiven(svgHolder, '.svg-holder'));
};

let typeRadios: HTMLInputElement[];
export const getTypeRadios = () => {
  return (typeRadios = queryAllIfNoArrayGiven(typeRadios, 'input[name=type]'));
};
export const getType = (): DotType => {
  return getTypeRadios()
    .filter((r) => r.checked)[0]
    .value.toUpperCase() as DotType;
};

let sizeRange: HTMLInputElement;
export const getSizeRange = () => {
  return (sizeRange = queryIfNoElementGiven(sizeRange, '#size'));
};
export const getSize = () => {
  return Number(getSizeRange().value);
};
let sizeValue: HTMLSpanElement;
export const getSizeValue = () => {
  return (sizeValue = queryIfNoElementGiven(sizeValue, '#size-value'));
};

let gapRange: HTMLInputElement;
export const getGapRange = () => {
  return (gapRange = queryIfNoElementGiven(gapRange, '#gap'));
};
export const getGap = () => {
  return Number(getGapRange().value);
};
let gapValue: HTMLSpanElement;
export const getGapValue = () => {
  return (gapValue = queryIfNoElementGiven(gapValue, '#gap-value'));
};
