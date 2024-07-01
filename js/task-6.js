
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';

      const fragments = document.createDocumentFragment(); 

      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragments.appendChild(box);
        size += 10;
      }

      boxesContainer.appendChild(fragments); 
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    const input = document.querySelector('input[type="number"]');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');

    createButton.addEventListener('click', () => {
      const amount = parseInt(input.value);
      if (isNaN(amount) || amount < 1 || amount > 100) {
        return;
      }

      createBoxes(amount);
      input.value = '';
    });

    destroyButton.addEventListener('click', destroyBoxes);