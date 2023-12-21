import moment from 'moment/min/moment.min'

const tariffsList = document.querySelectorAll('.tariff')

// Buttons
const onTariffBtnClick = (evt) => {
	const tariff = evt.target.closest('.tariff')
	const name = tariff.querySelector('.tariff__title').innerText
	console.log(name)
}

if(tariffsList.length) {
	tariffsList.forEach((tariff) => {
		const btn = tariff.querySelector('.tariff__action-btn')
		btn.addEventListener('click', onTariffBtnClick)
	})
}

// Timers
const timersList = document.querySelectorAll('.timer__time')

if (timersList.length) {
	const startTime = moment().add(15, 'seconds')

	const updateTimer = (timerEl, value) => timerEl.innerText = value

	const countdown = () => {
		const diff = startTime.diff(moment())

		if (diff > 0) {
			const newTimerValue = moment.utc(diff).format("HH:mm:ss")
			timersList.forEach((timer) => updateTimer(timer, newTimerValue))
			window.requestAnimationFrame(countdown)
		} else {
			timersList.forEach((timer) => {
				const tariff = timer.closest('.tariff')
				const btn = tariff.querySelector('.tariff__action-btn')
				btn.disabled = true
				btn.removeEventListener('click', onTariffBtnClick)
			})
		}
	}

	window.requestAnimationFrame(countdown)
}






