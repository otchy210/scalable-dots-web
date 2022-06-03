import { getPreview, getSvgHolder } from '../common/elements';
import { setPreviewHeight } from '../common/setPreviewHeight';

export const onWindowResize = () => {
  const svgHolder = getSvgHolder();
  const rect = svgHolder.getBoundingClientRect();
  svgHolder.style.height = `${rect.width}px`;

  const preview = getPreview();
  const previewRect = preview.getBoundingClientRect();
  if (previewRect.height > 0) {
    setPreviewHeight();
  }
};
