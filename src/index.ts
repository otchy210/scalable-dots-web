import { initOnChangeSelectFileHandler } from './listeners/handleOnChangeSelectFile';
import { initOnInputSvgOptionsHandlers } from './listeners/handleOnInputSvgOptions';
import { handleOnClickDotType } from './listeners/handleOnClickDotType';
import { handleOnClickJumbotronBg } from './listeners/handleOnClickJumbotronBg';
import { handleOnClickPreviewBg } from './listeners/handleOnClickPreviewBg';
import { onWindowResize } from './listeners/onWindowResize';
import { ClickEventListener } from './types';
import { handleOnClickDropHere } from './listeners/handleOnClickDropHere';
import { initOnLoadPreviewThumbnailHandler } from './listeners/handleOnLoadPreviewThumbnail';
import { initOnChangeSampleImageHandler } from './listeners/handleOnChangeSampleImage';
import { initDragAndDrop } from './listeners/handleDragAndDrop';
import { handleOnClickSaveSvg } from './listeners/handleOnClickSaveSvg';
import { handleOnClickFileSizeInfoProceed } from './listeners/handleOnClickFileSizeInfoProceed';
import { handleOnClickFileSizeWarnProceed } from './listeners/handleOnClickFileSizeWarnProceed';
import { handleOnClickClosePreview } from './listeners/handleOnClickClosePreview';
import './style.scss';
import 'bootstrap'; // For all Bootstrap JavaScript. No need of manual optimization since it will be pretty well optimized by webpack.

const clickEventListeners: ClickEventListener[] = [
  handleOnClickJumbotronBg,
  handleOnClickPreviewBg,
  handleOnClickDotType,
  handleOnClickDropHere,
  handleOnClickFileSizeInfoProceed,
  handleOnClickFileSizeWarnProceed,
  handleOnClickSaveSvg,
  handleOnClickClosePreview,
];
document.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target) {
    return;
  }
  clickEventListeners
    .filter((listener) => {
      return listener.rule(target);
    })
    .forEach((listener) => {
      listener.handle(target);
    });
});

window.addEventListener('resize', onWindowResize);
window.addEventListener('load', () => {
  initOnLoadPreviewThumbnailHandler();
  initOnChangeSelectFileHandler();
  initDragAndDrop();
  initOnChangeSampleImageHandler();
  initOnInputSvgOptionsHandlers();
});
