document.addEventListener('DOMContentLoaded', () => {
    let counter = 1;
    const addFieldButton = document.getElementById('addField');
    const inputFieldsContainer = document.getElementById('inputFields');
    const ageForm = document.getElementById('ageForm');

    addFieldButton.addEventListener('click', () => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';

        inputGroup.innerHTML = `
            <label for="name${counter}">Name:</label>
            <input type="text" id="name${counter}" name="name${counter}" required>
            <label for="age${counter}">Age:</label>
            <input type="number" id="age${counter}" name="age${counter}" required>
        `;
        inputFieldsContainer.appendChild(inputGroup);
        counter++;
    });

    ageForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = [];
        for (let i = 0; i < counter; i++) {
            const name = document.getElementById(`name${i}`);
            const age = document.getElementById(`age${i}`);
            if (name && age) {
                data.push({ name: name.value, age: parseInt(age.value, 10) });
            }
        }

        const seniors = data.filter(person => person.age >= 65);
        const params = new URLSearchParams();
        params.set('seniors', JSON.stringify(seniors));

        window.location.href = `result.html?${params.toString()}`;
    });
});
