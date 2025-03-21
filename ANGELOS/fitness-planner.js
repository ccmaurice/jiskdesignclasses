// ✅ Load user data from localStorage (or initialize empty object)
let userData = JSON.parse(localStorage.getItem("fitnessData")) || {
    gender: null,
    birthYear: null,
    height: null,
    weight: null,
    goal: null,
    bodyFocus: [],
    difficulty: null,
    workoutFrequency: null
};

// ✅ Save user data to localStorage
function saveData(key, value) {
    userData[key] = value;
    localStorage.setItem("fitnessData", JSON.stringify(userData));
}

// ✅ Load page-specific functions when document is ready
document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;

    if (path.includes("gender.html")) loadGenderSelection();
    if (path.includes("your-goal.html")) loadGoalSelection();
    if (path.includes("body-selection.html")) loadBodyFocusSelection();
    if (path.includes("about-you.html")) loadAboutYouSelection();
    if (path.includes("final-plan.html")) loadDifficultySelection();
    if (path.includes("estimation-page.html")) estimateTime();
    if (path.includes("index.html")) generateWorkoutPlan();
});

// ✅ **ABOUT YOU PAGE** (Birth Year, Height, Weight)
function loadAboutYouSelection() {
    // Year Selector
    let currentYearIndex = userData.birthYear ? years.indexOf(userData.birthYear) : 15; // Default 2000
    const years = Array.from({ length: 37 }, (_, i) => 1985 + i);
    const yearDisplay = document.getElementById('selectedYear');

    function changeYear(direction) {
        currentYearIndex += direction;
        if (currentYearIndex < 0) currentYearIndex = 0;
        if (currentYearIndex > years.length - 1) currentYearIndex = years.length - 1;
        yearDisplay.textContent = years[currentYearIndex];
        saveData("birthYear", years[currentYearIndex]);
        checkFormCompletion();
    }

    // Height Unit Toggle
    let heightUnit = 'cm';
    function setHeightUnit(unit) {
        heightUnit = unit;
        document.getElementById('cmBtn').classList.toggle('active', unit === 'cm');
        document.getElementById('ftBtn').classList.toggle('active', unit === 'ft');
        updateHeight();
    }

    function updateHeight() {
        let height = document.getElementById('heightSlider').value;
        let displayHeight = heightUnit === 'cm' ? `${height} cm` : `${Math.floor(height / 30.48)} ft ${Math.round((height % 30.48) / 2.54)} in`;
        document.getElementById('heightValue').textContent = displayHeight;
        saveData("height", height);
        checkFormCompletion();
    }

    // Weight Unit Toggle
    let weightUnit = 'kg';
    function setWeightUnit(unit) {
        weightUnit = unit;
        document.getElementById('kgBtn').classList.toggle('active', unit === 'kg');
        document.getElementById('lbsBtn').classList.toggle('active', unit === 'lbs');
        updateWeight();
    }

    function updateWeight() {
        let weight = document.getElementById('weightSlider').value;
        let displayWeight = weightUnit === 'kg' ? `${weight} kg` : `${Math.round(weight * 2.205)} lbs`;
        document.getElementById('weightValue').textContent = displayWeight;
        saveData("weight", weight);
        checkFormCompletion();
    }

    // Enable "Next" Button When All Inputs Are Selected
    function checkFormCompletion() {
        let nextBtn = document.getElementById('nextBtn');
        let allSet = userData.birthYear && userData.height && userData.weight;
        nextBtn.classList.toggle('active', allSet);
        nextBtn.disabled = !allSet;
    }

    // Go To Next Page
    function goToNextPage() {
        if (userData.birthYear && userData.height && userData.weight) {
            window.location.href = "final-plan.html";
        }
    }

    // Set event listeners
    document.getElementById("yearLeft").addEventListener("click", () => changeYear(-1));
    document.getElementById("yearRight").addEventListener("click", () => changeYear(1));
    document.getElementById("heightSlider").addEventListener("input", updateHeight);
    document.getElementById("weightSlider").addEventListener("input", updateWeight);
    document.getElementById("cmBtn").addEventListener("click", () => setHeightUnit("cm"));
    document.getElementById("ftBtn").addEventListener("click", () => setHeightUnit("ft"));
    document.getElementById("kgBtn").addEventListener("click", () => setWeightUnit("kg"));
    document.getElementById("lbsBtn").addEventListener("click", () => setWeightUnit("lbs"));
    document.getElementById("nextBtn").addEventListener("click", goToNextPage);

    // Initialize stored values
    yearDisplay.textContent = userData.birthYear || years[currentYearIndex];
    document.getElementById("heightSlider").value = userData.height || 170;
    updateHeight();
    document.getElementById("weightSlider").value = userData.weight || 70;
    updateWeight();
    checkFormCompletion();
}

// ✅ **NAVIGATION FUNCTION**
function goToNextPage(nextPage) {
    window.location.href = nextPage;
}
