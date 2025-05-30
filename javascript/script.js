const prices = {
	'one-time': {
		'1ton': '₸120000',
		'2ton': '₸240000',
		'5ton': '₸600000',
		'10ton': '₸1200000',
	},
	subscription: {
		'1ton': '₸112500',
		'2ton': '₸216000',
		'5ton': '₸517500',
		'10ton': '₸990000',
	},
}

let currentPurchaseType = 'one-time'

function toggleProtocol() {
	const content = document.getElementById('protocol-content')
	const toggleText = document.querySelector('.protocol-toggle span')

	content.classList.toggle('visible')

	if (content.classList.contains('visible')) {
		toggleText.textContent = '▼ Скрыть протокол испытаний'
	} else {
		toggleText.textContent = '▶ Показать протокол испытаний'
	}
}

function selectSize(size, event) {
	document
		.querySelectorAll('.volume-btn')
		.forEach(btn => btn.classList.remove('active'))
	event.target.classList.add('active')

	document.getElementById('product-price').textContent =
		prices[currentPurchaseType][size]

	const skus = {
		'1ton': 'SKU: SULF1TON',
		'2ton': 'SKU: SULF2TON',
		'5ton': 'SKU: SULF5TON',
		'10ton': 'SKU: SULF10TON',
	}
	document.getElementById('product-sku').textContent = skus[size]
}

function togglePurchaseType(type, event) {
	currentPurchaseType = type

	document
		.querySelectorAll('.purchase-type-btn')
		.forEach(btn => btn.classList.remove('active'))
	event.target.classList.add('active')

	const currentSize = document
		.querySelector('.volume-btn.active')
		.getAttribute('data-size')

	document.getElementById('product-price').textContent =
		prices[currentPurchaseType][currentSize]

	document.getElementById('one-time-price').style.display =
		type === 'one-time' ? 'block' : 'none'
	document.getElementById('subscription-price').style.display =
		type === 'subscription' ? 'block' : 'none'
}


function showConfirmation() {
	const msg = document.getElementById('confirmation-message')
	msg.style.display = 'block'
	setTimeout(() => (msg.style.display = 'none'), 3000)
}

function toggleTab(tabId) {
	document.querySelectorAll('.tab-content').forEach(function (content) {
		content.classList.remove('active')
	})
	document.getElementById(tabId).classList.add('active')
	const section = document.getElementById('review-section')
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' })
	}
}
