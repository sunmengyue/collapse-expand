const buttons = document.querySelectorAll('.expand-button');

buttons.forEach((b) =>
  b.addEventListener('click', (e) => {
    // 1. get the card that being clicked
    const parent = e.target.closest('.card');
    parent.dataset.id = new Date().valueOf().toString();
    const cardBody = parent.children[1];
    // 2. Expand or collapse based on the card status
    if (cardBody.classList.contains('show')) {
      //button text change to collapse
      b.innerText = 'Expand';
      //remove the show class
      cardBody.classList.remove('show');
    } else {
      b.innerText = 'Collapse';
      cardBody.classList.add('show');
    }
  }),
);
