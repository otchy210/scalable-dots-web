export const handleOnClickBgToggle: ClickEventListener = {
  rule: (target) => {
    return target.getAttribute('name') === 'bg-toggle';
  },
  handle: (target) => {
    const jumbotron = document.getElementsByClassName('jumbotron')[0];
    jumbotron.classList.remove('bg-svg', 'bg-png');
    jumbotron.classList.add(`bg-${target.getAttribute('value')}`);
  },
};
