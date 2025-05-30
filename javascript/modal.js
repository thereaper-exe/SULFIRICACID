function openModal() {
	const modal = document.getElementById('contactModal')
	if (modal) {
		modal.style.display = 'block'
		setTimeout(() => {
			modal.classList.add('active')
		}, 10)
		document.body.style.overflow = 'hidden'
	}
}

function closeModal() {
	const modal = document.getElementById('contactModal')
	if (modal) {
		modal.classList.remove('active')
		setTimeout(() => {
			modal.style.display = 'none'
			document.body.style.overflow = ''
		}, 300)
	}
}

document.getElementById('contactModal')
	?.addEventListener('click', function (e) {
		if (e.target === this) {
			closeModal()
		}
	})

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		closeModal()
	}
})

if (window.location.hash === '#contacts') {
	openModal()
}
