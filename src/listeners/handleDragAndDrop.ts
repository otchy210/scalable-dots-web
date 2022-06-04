import { getDropHere } from '../common/elements';
import { loadFile } from '../common/loadFile';

export const initDragAndDrop = () => {
  const dropHere = getDropHere();
  dropHere.addEventListener('dragenter', (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropHere.classList.add('dragging');
  });
  dropHere.addEventListener('dragover', (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  });
  dropHere.addEventListener('dragleave', (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropHere.classList.remove('dragging');
  });
  dropHere.addEventListener('drop', (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropHere.classList.remove('dragging');
    const file = e.dataTransfer?.files[0];
    if (!file) {
      return;
    }
    loadFile(file);
  });
};
