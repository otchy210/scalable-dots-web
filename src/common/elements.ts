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

let jumbotron: HTMLDivElement;
export const getJumbotron = () => {
  return (jumbotron = queryIfNoElementGiven(jumbotron, '.jumbotron'));
};

let fileInput: HTMLInputElement;
export const getFileInput = () => {
  return (fileInput = queryIfNoElementGiven(fileInput, '.select-file input'));
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

let svgHolder: HTMLDivElement;
export const getSvgHolder = () => {
  return (svgHolder = queryIfNoElementGiven(svgHolder, '.svg-holder'));
};
