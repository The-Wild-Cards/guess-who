export function createFeature(object) {
    const label = document.createElement('label');
    label.classList.add('feature-label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'feature';
    radio.classList.add('option');
    radio.required = true;
    radio.value = object.id;
    label.textContent = object.description;
    label.appendChild(radio);
    return label;
}


