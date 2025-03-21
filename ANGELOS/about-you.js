// Year Selector
let currentYearIndex = 15; // Default to year 2000 (index 15 in array)
const years = Array.from({ length: 37 }, (_, i) => 1985 + i);
const yearDisplay = document.getElementById('selectedYear');
let yearSelected = false;

function changeYear(direction) {
    currentYearIndex += direction;
    if (currentYearIndex < 0) currentYearIndex = 0;
    if (currentYearIndex > years.length - 1) currentYearIndex = years.length - 1;
    yearDisplay.textContent = years[currentYearIndex];
    yearSelected = true;
    checkFormCompletion();
}

// Height Unit Toggle
let heightUnit = 'cm';
let heightSelected = true; // Default height is set

function setHeightUnit(unit) {
    heightUnit = unit;
    document.getElementById('cmBtn').classList.toggle('active', unit === 'cm');
    document.getElementById('ftBtn').classList.toggle('active', unit === 'ft');
    updateHeight();
}

// Update Height Display
function updateHeight() {
    let height = document.getElementById('heightSlider').value;
    let displayHeight = heightUnit === 'cm' ? `${height} cm` : `${Math.floor(height / 30.48)} ft ${Math.round((height % 30.48) / 2.54)} in`;
    document.getElementById('heightValue').textContent = displayHeight;
    heightSelected = true;
    checkFormCompletion();
}

// Weight Unit Toggle
let weightUnit = 'kg';
let weightSelected = true; // Default weight is set

function setWeightUnit(unit) {
    weightUnit = unit;
    document.getElementById('kgBtn').classList.toggle('active', unit === 'kg');
    document.getElementById('lbsBtn').classList.toggle('active', unit === 'lbs');
    updateWeight();
}

// Update Weight Display
function updateWeight() {
    let weight = document.getElementById('weightSlider').value;
    let displayWeight = weightUnit === 'kg' ? `${weight} kg` : `${Math.round(weight * 2.205)} lbs`;
    document.getElementById('weightValue').textContent = displayWeight;
    weightSelected = true;
    checkFormCompletion();
}

// Enable "Next" Button When All Inputs Are Selected
function checkFormCompletion() {
    let nextBtn = document.getElementById('nextBtn');
    if (yearSelected && heightSelected && weightSelected) {
        nextBtn.classList.add('active');
        nextBtn.disabled = false;
    } else {
        nextBtn.classList.remove('active');
        nextBtn.disabled = true;
    }
}

// Go To Next Page
function goToNextPage() {
    if (yearSelected && heightSelected && weightSelected) {
        window.location.href = "final-plan.html";
    }
}
