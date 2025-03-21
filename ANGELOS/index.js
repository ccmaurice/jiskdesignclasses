const workouts = {
    abs: [
        { level: "Beginner", time: "11 mins", link: "abs-beginner.html" },
        { level: "Intermediate", time: "20 mins", link: "abs-intermediate.html" },
        { level: "Advanced", time: "30 mins", link: "abs-advanced.html" }
    ],
    chest: [
        { level: "Beginner", time: "15 mins", link: "chest-beginner.html" },
        { level: "Intermediate", time: "20 mins", link: "chest-intermediate.html" },
        { level: "Advanced", time: "35 mins", link: "chest-advanced.html" }
    ],
    arms: [
        { level: "Beginner", time: "10 mins", link: "arms-beginner.html" },
        { level: "Intermediate", time: "20 mins", link: "arms-intermediate.html" },
        { level: "Advanced", time: "25 mins", link: "arms-advanced.html" }
    ],
    "shoulder-back": [
        { level: "Beginner", time: "15 mins", link: "shoulder-beginner.html" },
        { level: "Intermediate", time: "20 mins", link: "shoulder-intermediate.html" },
        { level: "Advanced", time: "30 mins", link: "shoulder-advanced.html" }
    ],
    legs: [
        { level: "Beginner", time: "20 mins", link: "legs-beginner.html" },
        { level: "Intermediate", time: "30 mins", link: "legs-intermediate.html" },
        { level: "Advanced", time: "40 mins", link: "legs-advanced.html" }
    ]
};

// Function to display workouts based on muscle group
function showWorkouts(muscleGroup) {
    let workoutList = document.getElementById("workout-list");
    workoutList.innerHTML = ""; // Clear previous workouts

    workouts[muscleGroup].forEach(workout => {
        let div = document.createElement("div");
        div.className = "workout-option";
        div.innerHTML = `<strong>${workout.level}</strong> - ${workout.time}`;
        div.onclick = () => window.location.href = workout.link;
        workoutList.appendChild(div);
    });
}

// Carousel Scroll Functions
function scrollLeft() {
    document.querySelector(".carousel-track").scrollBy({ left: -100, behavior: "smooth" });
}

function scrollRight() {
    document.querySelector(".carousel-track").scrollBy({ left: 100, behavior: "smooth" });
}