import { nullsafeQuerySelector } from './nullsafeQuerySeletor';

export const openPreview = () => {
  const preview = nullsafeQuerySelector<HTMLDivElement>('.preview');
  const container = preview.children[0];
  const height = container.getBoundingClientRect().height;
  preview.style.height = `${height}px`;
};
