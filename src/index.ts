import { handleOnClickBgToggle } from './listeners/handleOnClickBgToggle';
import './style.scss';
// import 'bootstrap';
// TODO: optimize import https://getbootstrap.jp/docs/5.0/customize/optimize/

console.log('index.ts');

export const hello = (name: string) => {
  return `hello ${name}`;
};

const clickEventListeners: ClickEventListener[] = [handleOnClickBgToggle];
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
