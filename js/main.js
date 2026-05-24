// hm2
const boxes = document.querySelectorAll('.four-box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.add('displaynone');
            }
        });
    });
    box.addEventListener('mouseleave', () => {
        boxes.forEach(otherBox => {
            otherBox.classList.remove('displaynone');
        });
    });
});

// hm7 & hm8
const buttons = document.querySelectorAll('.one-box');
const panels = document.querySelectorAll('.one-box-hidden');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        panels[index].classList.toggle('closed');

        const img = button.querySelector('img');
        img.classList.toggle('rotated');
    });
});

