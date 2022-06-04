import { getFileInput } from '../common/elements';
import { loadFile } from '../common/loadFile';

export const initOnChangeSelectFileHandler = () => {
  const fileInput = getFileInput();
  fileInput.addEventListener('change', () => {
    if (!fileInput.files || !fileInput.files[0]) {
      return;
    }
    const file = fileInput.files[0];
    loadFile(file);
  });
};
