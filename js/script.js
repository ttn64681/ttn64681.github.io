
const yearId = document.getElementById("year");

document.addEventListener("DOMContentLoaded", function() {
    console.log("Timer added");

    function updateTime() {
        let date = new Date()
        let yr = date.getFullYear();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        mins = mins.toString().padStart(2, '0'); // pads minutes to have 2 0's
        let secs = date.getSeconds();
        secs = secs.toString().padStart(2, '0'); // pads seconds to have 2 0's

        yearId.textContent = `${yr}, ${hrs}:${mins}:${secs}`;
    }
    
    if (yearId) {
        updateTime();
        setInterval(updateTime, 1000); // repeats function every 1000ms

        console.log("Time updated");
    } else {
        console.log("Element #year not found");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Typewriter effect on splash name added");

    let name = document.querySelector("#splash_name h1");
    let nameText = name.textContent;
    let i = 0;
    name.innerText = "";

    function typewriter() {
        if (i < nameText.length) {
            name.textContent += nameText.charAt(i);
            i++;
            setTimeout(typewriter, 150);
        }
    }

    typewriter();
});