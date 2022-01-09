
var count = 120;
var countInterval;

function formatTimeLeft(time) {
    const minutes = Math.floor(count / 60);
    let seconds = time % 60;
    return `${minutes} : ${seconds}`;
}

var start = function () {
    countInterval = setInterval(function () {
        if (count === -1) {
            return count;
        }
        else {
            Time = '0' + formatTimeLeft(count)

        }
        count -= 1;
        document.getElementById('counter').innerHTML = Time
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
    }, 1000)


}

var pause = function () {
    clearInterval(countInterval)
    document.getElementById('pause').disabled = true;
    document.getElementById('start').disabled = false;

}
var reset = function () {
    clearInterval(countInterval)
    document.getElementById('counter').innerHTML = `02:00`
    document.getElementById('start').disabled = false;


}

