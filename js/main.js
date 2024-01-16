const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

infoBtns.forEach(btns => {
	btns.addEventListener('click', showHint)
})
function showHint(e) {
	e.stopPropagation()
	this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

document.addEventListener('click', closeHints)
function closeHints() {
	infoHints.forEach(hint => {
		hint.classList.add('none')
	})
}

infoHints.forEach(hint => hint.addEventListener('click', e => e.stopPropagation()))

// swiper-slider

const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 42,
	freeMode: true,
	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
	// breakpoints: {
	// 	640: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// 	1024: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 50,
	// 	},
	// },
})

// tabs

const tabsBtns = document.querySelectorAll('[data-tab]')
const tabItem = document.querySelectorAll('[data-tab-value]')

for (const btn of tabsBtns) {
	btn.addEventListener('click', function () {
		for (const btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active')
		}

		this.classList.add('tab-controls__btn--active')

		const currentItem = this.dataset.tab

		for (const tab of tabItem) {
			if (currentItem === 'all') {
				tab.classList.remove('none')
			} else {
				if (tab.dataset.tabValue === currentItem) {
					tab.classList.remove('none')
				} else tab.classList.add('none')
			}
		}

		swiper.update()
	})
}
