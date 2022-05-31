import { initOnChangeSelectFileHandler } from './listeners/handleOnChangeSelectFile';
import { initOnInputSvgOptionsHandlers } from './listeners/handleOnInputSvgOptions';
import { handleOnClickDotType } from './listeners/handleOnClickDotType';
import { handleOnClickJumbotronBg } from './listeners/handleOnClickJumbotronBg';
import { handleOnClickPreviewBg } from './listeners/handleOnClickPreviewBg';
import { handleWindowResize } from './listeners/handleWindowResize';
import './style.scss';
import { ClickEventListener, WindowResizeListener } from './types';
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

const windowResizeListeners: WindowResizeListener[] = [handleWindowResize];
const windowResizeListener = () => {
  windowResizeListeners.forEach((listener) => {
    listener.handle();
  });
};
window.addEventListener('resize', windowResizeListener);
window.addEventListener('load', () => {
  windowResizeListener();
  initOnChangeSelectFileHandler();
  initOnInputSvgOptionsHandlers();
});
