const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");

buttonStart.addEventListener('click', startTime);
buttonStop.addEventListener('click', stopTime);

class Timer {
	constructor(startTimer, stopTimer) {
		this.startTimer = startTimer;
		this.stopTimer = stopTimer;
		this.interval = 0;
	}

	start(values) {
		this.startTimer = values;
	}
	stop(values) {
		this.stopTimer = values;
	}
	getTime() {
		this.interval = this.stopTimer - this.startTimer;
		console.log(`Start time: ${this.startTimer}ms`);
		console.log(`Stop time: ${this.stopTimer}ms`);
		console.log(`Interval time: ${this.interval}ms`);
	}
	static timeToNY(dates) {
		const msPerDay = 24 * 60 * 60 * 1000;
		this.startTimer = dates;
		this.stopTimer = new Date(2018, 11, 31, 23, 59, 59, 999);
		this.interval = Math.round((this.stopTimer.getTime() - this.startTimer.getTime()) / msPerDay);		
		console.log(`${this.interval} days left before the new year`);		
	}
};

var firstVariantTime = new Timer (1323223, 6546546546);
var lestVariantTime = new Timer (546546565, 9879879879864);

console.log(`Start time: ${firstVariantTime.startTimer}`);
console.log(`Stop time: ${firstVariantTime.stopTimer}`);
console.log(`Interval time: ${firstVariantTime.interval}`);

console.log(`Start time: ${lestVariantTime.startTimer}`);
console.log(`Stop time: ${lestVariantTime.stopTimer}`);
console.log(`Interval time: ${lestVariantTime.interval}`);

var stopwatch = new Timer (0, 0);

function startTime(event) {
	stopwatch.start(Date.now());
};

function stopTime(event) {
	stopwatch.stop(Date.now());
	stopwatch.getTime();
};

Timer.timeToNY(new Date());


