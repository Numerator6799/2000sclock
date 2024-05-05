
function updateClock() {
    const now = new Date();
    document.getElementById('clockDisplay').innerHTML = now.toLocaleTimeString()
}

setInterval(updateClock, 1000);
updateClock(); // initial update