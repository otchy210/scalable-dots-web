export type ClickEventListener = {
  rule: (target: HTMLElement) => boolean;
  handle: (target: HTMLElement) => void;
};
