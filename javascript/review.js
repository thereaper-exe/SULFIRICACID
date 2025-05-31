const itemsPerPage = 5
let currentPage = { reviews: 1, questions: 1 }
let currentTab = 'reviews'
let filters = { rating: 'all', verified: false, answered: false }
let sortOrder = 'newest'

const reviews = [
	{
		id: 1,
		reviewer_name: 'Айжан К.',
		rating: 5,
		title: 'Высококачественная кислота',
		text: 'Серная кислота отличного качества',
		is_verified: true,
		created_at: '2025-05-01'
	},
	{
		id: 2,
		reviewer_name: 'Бекзат М.',
		rating: 4,
		title: 'Хорошая кислота',
		text: 'Качество серной кислоты на уровне',
		is_verified: true,
		created_at: '2025-05-02'
	},
	{
		id: 3,
		reviewer_name: 'Динара С.',
		rating: 5,
		title: 'Рекомендую для лаборатории',
		text: 'Использую серную кислоту в лабораторных экспериментах, все идеально.',
		is_verified: false,
		created_at: '2025-05-03'
	},
	{
		id: 5,
		reviewer_name: 'Жулдыз А.',
		rating: 5,
		title: 'Отличная кислота',
		text: 'Серная кислота высокого качества, планирую заказывать еще.',
		is_verified: true,
		created_at: '2025-05-05'
	},
	{
		id: 6,
		reviewer_name: 'Кайрат Ж.',
		rating: 4,
		title: 'Качественно, но дорого',
		text: 'Серная кислота хорошая, но цена немного высоковата.',
		is_verified: false,
		created_at: '2025-05-06'
	},
	{
		id: 7,
		reviewer_name: 'Ляззат Б.',
		rating: 5,
		title: 'Надежный поставщик',
		text: 'Кислота хорошая рекомендую!',
		is_verified: true,
		created_at: '2025-05-07'
	},
	{
		id: 9,
		reviewer_name: 'Нурлан О.',
		rating: 5,
		title: 'Качество на высоте',
		text: 'Серная кислота полностью соответствует ожиданиям.',
		is_verified: true,
		created_at: '2025-05-09'
	},
	{
		id: 10,
		reviewer_name: 'Ольга П.',
		rating: 4,
		title: 'Хороший продукт',
		text: 'Качество серной кислоты отличное',
		is_verified: true,
		created_at: '2025-05-10'
	},
	{
		id: 11,
		reviewer_name: 'Рустем К.',
		rating: 5,
		title: 'Идеальная кислота',
		text: 'Концентрат серной кислоты идеально подходит для работы.',
		is_verified: true,
		created_at: '2025-05-11'
	},
	{
		id: 13,
		reviewer_name: 'Тимур В.',
		rating: 5,
		title: 'Все по стандартам',
		text: 'Серная кислота соответствует описанию',
		is_verified: true,
		created_at: '2025-05-13'
	},
	{
		id: 14,
		reviewer_name: 'Улжан Д.',
		rating: 4,
		title: 'Неплохая кислота',
		text: 'Качество серной кислоты хорошее, но цена немного завышена.',
		is_verified: true,
		created_at: '2025- unzhanД.'
	},
	{
		id: 15,
		reviewer_name: 'Фариза М.',
		rating: 5,
		title: 'Отличное качество',
		text: 'Серная кислота высокого уровня, идеально для моих нужд.',
		is_verified: true,
		created_at: '2025-05-15'
	},
	{
		id: 17,
		reviewer_name: 'Шолпан З.',
		rating: 5,
		title: 'Отличный выбор',
		text: 'Очень довольна серной кислотой, закажу еще раз.',
		is_verified: true,
		created_at: '2025-05-17'
	},
	{
		id: 18,
		reviewer_name: 'Эльдар А.',
		rating: 4,
		title: 'Хорошая кислота',
		text: 'Качество серной кислоты на уровне.',
		is_verified: true,
		created_at: '2025-05-18'
	},
	{
		id: 19,
		reviewer_name: 'Юлия Л.',
		rating: 5,
		title: 'Проверенный товар',
		text: 'Серная кислота отличного качества',
		is_verified: true,
		created_at: '2025-05-19'
	},
	{
		id: 20,
		reviewer_name: 'Асель Т.',
		rating: 5,
		title: 'Качественная кислота',
		text: 'Серная кислота отличная рекомендую к покупке',
		is_verified: true,
		created_at: '2025-05-20'
	},
	{
		id: 21,
		reviewer_name: 'Мурат С.',
		rating: 4,
		title: 'Хороший продукт',
		text: 'Серная кислота качественная, но есть мелкие недочеты',
		is_verified: true,
		created_at: '2025-05-21'
	},
	{
		id: 22,
		reviewer_name: 'Гаухар И.',
		rating: 5,
		title: 'Отличная кислота',
		text: 'Качество серной кислоты на высоте, рекомендую всем.',
		is_verified: false,
		created_at: '2025-05-22'
	},
	{
		id: 23,
		reviewer_name: 'Рамазан Н.',
		rating: 5,
		title: 'Надежная поставка',
		text: 'Серная кислота хорошо упакована, работает без нареканий.',
		is_verified: true,
		created_at: '2025-05-23'
	},
	{
		id: 24,
		reviewer_name: 'Алина Ю.',
		rating: 4,
		title: 'Приемлемое качество',
		text: 'Серная кислота неплохая, но есть небольшие недочеты.',
		is_verified: true,
		created_at: '2025-05-24'
	},
	{
		id: 25,
		reviewer_name: 'Ернар Б.',
		rating: 5,
		title: 'Быстрая доставка',
		text: 'Серная кислота отличная!!!',
		is_verified: true,
		created_at: '2025-05-25'
	},
	{
		id: 26,
		reviewer_name: 'Маржан М.',
		rating: 5,
		title: 'Все идеально',
		text: 'Серная кислота высокого качества, все работает отлично.',
		is_verified: false,
		created_at: '2025-05-26'
	},
	{
		id: 27,
		reviewer_name: 'Азамат Е.',
		rating: 5,
		title: 'Отличный сервис',
		text: 'Проблем с заказом серной кислоты не было',
		is_verified: true,
		created_at: '2025-05-27'
	},
	{
		id: 28,
		reviewer_name: 'Нурайым Ж.',
		rating: 4,
		title: 'Хорошая кислота',
		text: 'Серная кислота нравится, пока все устраивает.',
		is_verified: true,
		created_at: '2025-05-28'
	},
	{
		id: 29,
		reviewer_name: 'Сергей Ч.',
		rating: 5,
		title: 'Пять звезд',
		text: 'Серная кислота полностью оправдала ожидания, доволен на 100%.',
		is_verified: true,
		created_at: '2025-05-29'
	},
	{
		id: 30,
		reviewer_name: 'Айгуль Р.',
		rating: 4,
		title: 'Хорошая покупка',
		text: 'Серная кислота качественная, за свою цену отличный вариант.',
		is_verified: true,
		created_at: '2025-05-30'
	},
	{
		id: 31,
		reviewer_name: 'Максим К.',
		rating: 5,
		title: 'Лучшая кислота',
		text: 'Использую серную кислоту регулярно, никогда не подводила.',
		is_verified: true,
		created_at: '2025-05-30'
	},
	{
		id: 32,
		reviewer_name: 'Жания С.',
		rating: 5,
		title: 'Качество и скорость',
		text: 'Серная кислота отличная, рекомендую.',
		is_verified: true,
		created_at: '2025-05-30'
	},
	{
		id: 33,
		reviewer_name: 'Даурен Х.',
		rating: 4,
		title: 'Хороший выбор',
		text: 'Качество серной кислоты достойное, рекомендую.',
		is_verified: false,
		created_at: '2025-05-30'
	},
	{
		id: 34,
		reviewer_name: 'Камила В.',
		rating: 5,
		title: 'Отличный сервис',
		text: 'Серная кислота высокого качества',
		is_verified: true,
		created_at: '2025-05-30'
	}
]

const questions = [
	{
		id: 1,
		user_name: 'Азамат',
		title: 'Можно ли хранить в гараже?',
		text: 'Подходит ли серная кислота для гаражного хранения?',
		is_question: true,
		parent_id: null,
		created_at: '2025-05-01',
	},
	{
		id: 2,
		user_name: 'Лаборант',
		title: 'Re: Хранение в гараже',
		text: 'Храните в прохладном, сухом месте, вдали от влаги.',
		is_question: false,
		parent_id: 1,
		created_at: '2025-05-02',
	},
	{
		id: 3,
		user_name: 'Гульнара',
		title: 'Какой срок годности?',
		text: 'Как долго можно хранить кислоту?',
		is_question: true,
		parent_id: null,
		created_at: '2025-05-03',
	},
	{
		id: 4,
		user_name: 'Лаборант',
		title: 'Re: Срок годности',
		text: 'При правильном хранении срок годности не ограничен.',
		is_question: false,
		parent_id: 3,
		created_at: '2025-05-04',
	},
	{
		id: 5,
		user_name: 'Дамир',
		title: 'Безопасно ли для дома?',
		text: 'Можно ли использовать дома для мелких работ?',
		is_question: true,
		parent_id: null,
		created_at: '2025-05-05',
	},
	{
		id: 6,
		user_name: 'Лаборант',
		title: 'Re: Безопасность дома',
		text: 'Используйте с осторожностью, в проветриваемом помещении.',
		is_question: false,
		parent_id: 5,
		created_at: '2025-05-06',
	},
	{
		id: 7,
		user_name: 'Екатерина',
		title: 'Какой объем выбрать?',
		text: 'Какой объем лучше для лабораторных нужд?',
		is_question: true,
		parent_id: null,
		created_at: '2025-05-07',
	},
	{
		id: 8,
		user_name: 'Лаборант',
		title: 'Re: Выбор объема',
		text: 'Для лабораторий рекомендуем 1–5 литров.',
		is_question: false,
		parent_id: 7,
		created_at: '2025-05-08',
	},
]

function filterAndSortData(type, page) {
	let data = type === 'reviews' ? [...reviews] : [...questions]
	if (type === 'reviews') {
		if (filters.rating !== 'all') {
			data = data.filter(item => item.rating === parseInt(filters.rating))
		}
		if (filters.verified) {
			data = data.filter(item => item.is_verified)
		}
	} else if (type === 'questions') {
		if (filters.answered) {
			const answeredIds = questions
				.filter(q => !q.is_question)
				.map(q => q.parent_id)
			data = data.filter(
				item => item.is_question && answeredIds.includes(item.id)
			)
		}
		data = data.filter(item => item.is_question)
	}

	if (sortOrder === 'newest') {
		data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
	} else if (sortOrder === 'oldest') {
		data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
	} else if (sortOrder === 'highest') {
		data.sort((a, b) => b.rating - a.rating)
	} else if (sortOrder === 'lowest') {
		data.sort((a, b) => a.rating - b.rating)
	}

	const start = (page - 1) * itemsPerPage
	const end = start + itemsPerPage
	const paginatedData = data.slice(start, end)
	const totalPages = Math.ceil(data.length / itemsPerPage)

	return { data: paginatedData, totalPages }
}

function renderList(type, items) {
	const list = document.getElementById(
		type === 'reviews' ? 'reviews-list' : 'questions-list'
	)
	if (!list) {
		console.error(`Element with ID ${type}-list not found`)
		return
	}
	list.innerHTML = ''
	items.forEach(item => {
		const card = document.createElement('div')
		card.className = 'review-card'
		if (type === 'reviews') {
			card.innerHTML = `
        <p class="reviewer-name">
          <img src="icons/kazakhstan.png" alt="KZ">
          <strong>${item.reviewer_name}</strong> – ${
				item.is_verified ? 'Проверенный покупатель' : 'Гость'
			}
        </p>
        <p class="stars">${'★'.repeat(item.rating)}${'☆'.repeat(
				5 - item.rating
			)}</p>
        <p class="review-title"><strong>${item.title}</strong></p>
        <p class="review-text">${item.text}</p>
      `
		} else {
			card.innerHTML = `
        <p class="reviewer-name">
          <img src="icons/kazakhstan.png" alt="KZ">
          ${item.is_question ? '❓' : '💬'} <strong>${
				item.user_name
			}</strong> – ${item.is_question ? 'Спросил' : 'Ответил'}
        </p>
        <p class="review-title"><strong>${item.title}</strong></p>
        <p class="review-text">${item.text}</p>
      `
		}
		list.appendChild(card)
	})
}

function renderPagination(type, totalPages, page) {
	const pagination = document.getElementById(
		type === 'reviews' ? 'reviews-pagination' : 'questions-pagination'
	)
	if (!pagination) {
		console.error(`Element with ID ${type}-pagination not found`)
		return
	}
	pagination.innerHTML = ''
	for (let i = 1; i <= totalPages; i++) {
		const button = document.createElement('button')
		button.textContent = i
		button.className = i === page ? 'active' : ''
		button.addEventListener('click', () => {
			currentPage[type] = i
			loadData(type)
		})
		pagination.appendChild(button)
	}
}

function loadData(type) {
	const { data, totalPages } = filterAndSortData(type, currentPage[type])
	renderList(type, data)
	renderPagination(type, totalPages, currentPage[type])
}

function switchTab(tabName) {
	document
		.querySelectorAll('.tab-button')
		.forEach(btn => btn.classList.remove('active'))
	document
		.querySelectorAll('.tab-content')
		.forEach(tab => tab.classList.remove('active'))
	document
		.querySelectorAll(`.tab-button[data-tab="${tabName}"]`)
		.forEach(btn => btn.classList.add('active'))
	document.getElementById(`${tabName}-tab`).classList.add('active')
	currentTab = tabName
	currentPage[currentTab] = 1
	loadData(currentTab)

	const reviewSection = document.getElementById('review-section')
	if (reviewSection) {
		reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
	} else {
		console.error('Element with ID review-section not found')
	}
}

document.addEventListener('DOMContentLoaded', () => {
	loadData('reviews')
	document.querySelectorAll('.tab-button').forEach(button => {
		button.addEventListener('click', () => {
			const tabName = button.dataset.tab
			switchTab(tabName)
		})
	})

	const ratingFilter = document.getElementById('rating-filter')
	if (ratingFilter) {
		ratingFilter.addEventListener('change', e => {
			filters.rating = e.target.value
			currentPage[currentTab] = 1
			loadData(currentTab)
		})
	} else {
		console.error('Element with ID rating-filter not found')
	}

	const verifiedFilter = document.getElementById('verified-filter')
	if (verifiedFilter) {
		verifiedFilter.addEventListener('change', e => {
			filters.verified = e.target.checked
			currentPage[currentTab] = 1
			loadData(currentTab)
		})
	} else {
		console.error('Element with ID verified-filter not found')
	}

	const answeredFilter = document.getElementById('answered-filter')
	if (answeredFilter) {
		answeredFilter.addEventListener('change', e => {
			filters.answered = e.target.checked
			currentPage[currentTab] = 1
			loadData(currentTab)
		})
	} else {
		console.error('Element with ID answered-filter not found')
	}

	const sortOrderSelect = document.getElementById('sort-order')
	if (sortOrderSelect) {
		sortOrderSelect.addEventListener('change', e => {
			sortOrder = e.target.value
			currentPage[currentTab] = 1
			loadData(currentTab)
		})
	} else {
		console.error('Element with ID sort-order not found')
	}
})
