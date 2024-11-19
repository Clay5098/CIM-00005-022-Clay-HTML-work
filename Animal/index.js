const animals = [];

// Function to add a new animal
function addAnimal() {
    const name = document.getElementById("animalName").value;
    const age = document.getElementById("animalAge").value;
    const type = document.getElementById("animalType").value;

    if (name && age && type) {
        const animal = { name, age, type };
        animals.push(animal);
        renderAnimals();
        clearForm();
        alert(`${name} the ${type} has been added to the shelter!`);
    } else {
        alert("Please fill in all fields!");
    }
}

// Function to display all animals
function renderAnimals() {
    const animalList = document.getElementById("animalList");
    animalList.innerHTML = "<h2>Animals in the Shelter</h2>";

    animals.forEach((animal, index) => {
        const animalItem = document.createElement("div");
        animalItem.classList.add("animal-item");

        animalItem.innerHTML = `
            <strong>${animal.type}: ${animal.name}</strong> (Age: ${animal.age})<br>
            <span class="action">${getAnimalAction(animal.type, animal.name)}</span>
        `;
        animalList.appendChild(animalItem);
    });
}

// Function to get unique actions for each animal
function getAnimalAction(type, name) {
    switch (type) {
        case "Dog":
            return `${name} is barking, fetching a ball, and wagging its tail.`;
        case "Cat":
            return `${name} is meowing, scratching, and purring.`;
        case "Bird":
            return `${name} is chirping, flying, and singing.`;
        default:
            return `${name} is doing something unique.`;
    }
}

// Function to clear form fields
function clearForm() {
    document.getElementById("animalName").value = "";
    document.getElementById("animalAge").value = "";
    document.getElementById("animalType").value = "Dog";
}