import { getPreview } from './elements';

export const adjustPreviewHeight = () => {
  const preview = getPreview();
  const container = preview.children[0];
  const height = container.getBoundingClientRect().height;
  preview.style.height = `${height}px`;
};
