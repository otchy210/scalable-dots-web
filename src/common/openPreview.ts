import { getPreview } from './elements';

export const openPreview = () => {
  const preview = getPreview();
  const container = preview.children[0];
  const height = container.getBoundingClientRect().height;
  preview.style.height = `${height}px`;
};
