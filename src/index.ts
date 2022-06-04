import { initOnChangeSelectFileHandler } from './listeners/handleOnChangeSelectFile';
import { initOnInputSvgOptionsHandlers } from './listeners/handleOnInputSvgOptions';
import { handleOnClickDotType } from './listeners/handleOnClickDotType';
import { handleOnClickJumbotronBg } from './listeners/handleOnClickJumbotronBg';
import { handleOnClickPreviewBg } from './listeners/handleOnClickPreviewBg';
import { onWindowResize } from './listeners/onWindowResize';
import './style.scss';
import { ClickEventListener } from './types';
import { handleOnClickDropHere } from './listeners/handleOnClickDropHere';
import { initOnLoadPreviewThumbnailHandler } from './listeners/handleOnLoadPreviewThumbnail';
import { initOnChangeSampleImageHandler } from './listeners/handleOnChangeSampleImage';
import { initDragAndDrop } from './listeners/handleDragAndDrop';
// import 'bootstrap';
// TODO: optimize import https://getbootstrap.jp/docs/5.0/customize/optimize/

console.log('index.ts');

export const hello = (name: string) => {
  return `hello ${name}`;
};

const clickEventListeners: ClickEventListener[] = [
  handleOnClickJumbotronBg,
  handleOnClickPreviewBg,
  handleOnClickDotType,
  handleOnClickDropHere,
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
