document.getElementById('start-btn').addEventListener('click', runSpeedTest);

function runSpeedTest() {
    const status = document.getElementById('status');
    const display = document.getElementById('speed-display');
    const imageAddr = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" + "?n=" + Math.random(); 
    const downloadSize = 5000000; // Ukuran estimasi file dalam bytes (contoh: 5MB)

    status.innerText = "Menguji...";
    display.innerText = "0";

    let startTime = new Date().getTime();
    let download = new Image();

    download.onload = function () {
        let endTime = new Date().getTime();
        showResults(startTime, endTime, downloadSize);
    };

    download.src = imageAddr;
}

function showResults(startTime, endTime, fileSize) {
    const duration = (endTime - startTime) / 1000; // dalam detik
    const bitsLoaded = fileSize * 8;
    const speedBps = bitsLoaded / duration;
    const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);

    document.getElementById('speed-display').innerText = speedMbps;
    document.getElementById('status').innerText = "Selesai!";
}
