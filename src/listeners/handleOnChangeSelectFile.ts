import { nullsafeQuerySelector } from '../common/nullsafeQuerySeletor';
import { openPreview } from '../common/openPreview';

export const initOnChangeSelectFileHandler = () => {
  const fileInput =
    nullsafeQuerySelector<HTMLInputElement>('.select-file input');
  const previewThumbnail = nullsafeQuerySelector<HTMLImageElement>(
    '.preview .img-thumbnail'
  );
  if (!fileInput || !previewThumbnail) {
    return;
  }
  fileInput.addEventListener('change', () => {
    if (!fileInput.files || !fileInput.files[0]) {
      return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const dataURL = reader.result as string;
      previewThumbnail.setAttribute('src', dataURL);
    });
    previewThumbnail.addEventListener('load', () => {
      openPreview();
    });
    reader.readAsDataURL(file);
  });
};
