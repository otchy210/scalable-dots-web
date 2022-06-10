import { getPreview } from './elements';

export const closePreview = () => {
  const preview = getPreview();
  preview.style.height = '0';
};
