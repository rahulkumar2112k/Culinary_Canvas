// Get the popup element
const popup = document.getElementById('popup');

// Function to show the popup and populate the ingredients list
function showIngredientsPopup(ingredients) {
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';

    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}


// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeLabel = document.getElementById('theme-toggle-label');
    if (body.classList.contains('dark-theme')) {
        themeLabel.textContent = 'Light Mode';
    } else {
        themeLabel.textContent = 'Dark Mode';
    }
}

// Event listener for theme toggle button
document.getElementById('theme-toggle-checkbox').addEventListener('change', toggleTheme);
