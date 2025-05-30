const thumbnails = document.querySelectorAll('.thumbnail')
const mainImage = document.getElementById('product-image')
const modalImg = document.getElementById('product-image-modal-img')
const imageModal = document.getElementById('product-image-modal')
const modalCounter = document.getElementById('modal-counter')
const progressBar = document.getElementById('progress-bar')
const pauseButton = document.getElementById('pause-button')

let currentIndex = 0
const images = Array.from(thumbnails).map(thumb => thumb.src)
let slideshowInterval = null
let isPaused = false

thumbnails.forEach((thumb, index) => {
	thumb.addEventListener('click', () => {
		updateImage(index)
		pauseSlideshow()
	})
})

mainImage.addEventListener('click', () => {
	const currentSrc = mainImage.src
	const foundIndex = images.findIndex(img => img === currentSrc)
	currentIndex = foundIndex !== -1 ? foundIndex : 0
	modalImg.src = images[currentIndex]
	updateModalCounter()
	imageModal.classList.add('active')
	pauseSlideshow()
})

pauseButton.addEventListener('click', () => {
	if (isPaused) {
		resumeSlideshow()
	} else {
		pauseSlideshow()
	}
})

document.addEventListener('keydown', e => {
	if (!imageModal.classList.contains('active')) return
	if (e.key === 'Escape') closeProductImageModal()
	if (e.key === 'ArrowLeft') prevImage(e)
	if (e.key === 'ArrowRight') nextImage(e)
})

modalImg.addEventListener('click', e => {
	e.stopPropagation()
	modalImg.classList.toggle('zoomed')
})

function updateImage(index) {
	thumbnails.forEach(t => t.classList.remove('active'))
	thumbnails[index].classList.add('active')
	mainImage.classList.add('fade')
	setTimeout(() => {
		mainImage.src = images[index]
		mainImage.classList.remove('fade')
	}, 300)
	currentIndex = index
	resetProgressBar()
}

function closeProductImageModal() {
	imageModal.classList.remove('active')
	modalImg.src = ''
	modalImg.classList.remove('zoomed')
	resumeSlideshow()
}

function updateModalCounter() {
	modalCounter.textContent = `${currentIndex + 1} / ${images.length}`
}

function prevImage(event) {
	event.stopPropagation()
	currentIndex = (currentIndex - 1 + images.length) % images.length
	modalImg.src = images[currentIndex]
	updateModalCounter()
}

function nextImage(event) {
	event.stopPropagation()
	currentIndex = (currentIndex + 1) % images.length
	modalImg.src = images[currentIndex]
	updateModalCounter()
}

function resetProgressBar() {
	progressBar.style.transition = 'none'
	progressBar.style.width = '0%'
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			progressBar.style.transition = 'width 3s linear'
			progressBar.style.width = '100%'
		})
	})
}

function startSlideshow() {
	if (!isPaused) {
		resetProgressBar()
		slideshowInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length
			updateImage(currentIndex)
		}, 3000)
	}
}

function pauseSlideshow() {
	isPaused = true
	clearInterval(slideshowInterval)
	progressBar.style.transition = 'none'
	progressBar.style.width = progressBar.style.width
	pauseButton.classList.add('paused')
}

function resumeSlideshow() {
	isPaused = false
	pauseButton.classList.remove('paused')
	startSlideshow()
}

startSlideshow()
