export function pickFeature(object) {
    const label = document.createElement('label');
    label.classList.add('feature');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'feature';
    radio.required = true;
    radio.value = object.id;
    label.textContent = object.description;
    label.appendChild(radio);
    
    // const description = document.createElement;
    // description.textContent = object.description;
    // label.appendChild(description);
    return label;
}


