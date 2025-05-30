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
		title: 'Отличный продукт',
		text: 'Качественная кислота, быстрая доставка.',
		is_verified: true,
		created_at: '2025-05-01',
	},
	{
		id: 2,
		reviewer_name: 'Бекзат М.',
		rating: 4,
		title: 'Хорошее качество',
		text: 'Продукт хороший, но упаковка слабая.',
		is_verified: true,
		created_at: '2025-05-02',
	},
	{
		id: 3,
		reviewer_name: 'Динара С.',
		rating: 5,
		title: 'Рекомендую',
		text: 'Использую для лаборатории, все отлично.',
		is_verified: false,
		created_at: '2025-05-03',
	},
	{
		id: 4,
		reviewer_name: 'Ерлан Т.',
		rating: 3,
		title: 'Нормально',
		text: 'Качество нормальное, доставка задержалась.',
		is_verified: true,
		created_at: '2025-05-04',
	},
	{
		id: 5,
		reviewer_name: 'Жулдыз А.',
		rating: 5,
		title: 'Супер',
		text: 'Очень довольна, буду заказывать еще.',
		is_verified: true,
		created_at: '2025-05-05',
	},
	{
		id: 6,
		reviewer_name: 'Кайрат Ж.',
		rating: 4,
		title: 'Почти идеально',
		text: 'Продукт хороший, но цена высокая.',
		is_verified: false,
		created_at: '2025-05-06',
	},
	{
		id: 7,
		reviewer_name: 'Ляззат Б.',
		rating: 5,
		title: 'Лучший выбор',
		text: 'Надежная упаковка, быстрая доставка.',
		is_verified: true,
		created_at: '2025-05-07',
	},
	{
		id: 8,
		reviewer_name: 'Мади Н.',
		rating: 2,
		title: 'Ожидал большего',
		text: 'Качество среднее, быстро израсходовалась.',
		is_verified: false,
		created_at: '2025-05-08',
	},
	{
		id: 9,
		reviewer_name: 'Нурлан О.',
		rating: 5,
		title: 'Все супер',
		text: 'Продукт оправдал ожидания.',
		is_verified: true,
		created_at: '2025-05-09',
	},
	{
		id: 10,
		reviewer_name: 'Ольга П.',
		rating: 4,
		title: 'Хорошо',
		text: 'Качество хорошее, но инструкция неполная.',
		is_verified: true,
		created_at: '2025-05-10',
	},
	{
		id: 11,
		reviewer_name: 'Рустем К.',
		rating: 5,
		title: 'Превосходно',
		text: 'Отличный концентрат для работы.',
		is_verified: true,
		created_at: '2025-05-11',
	},
	{
		id: 12,
		reviewer_name: 'Салтанат Е.',
		rating: 3,
		title: 'Средне',
		text: 'Продукт нормальный, доставка долгая.',
		is_verified: false,
		created_at: '2025-05-12',
	},
	{
		id: 13,
		reviewer_name: 'Тимур В.',
		rating: 5,
		title: 'Идеально',
		text: 'Все как в описании, быстро доставили.',
		is_verified: true,
		created_at: '2025-05-13',
	},
	{
		id: 14,
		reviewer_name: 'Улжан Д.',
		rating: 4,
		title: 'Неплохо',
		text: 'Качество хорошее, но дороговато.',
		is_verified: true,
		created_at: '2025-05-14',
	},
	{
		id: 15,
		reviewer_name: 'Фариза М.',
		rating: 5,
		title: 'Отлично',
		text: 'Продукт высокого качества.',
		is_verified: true,
		created_at: '2025-05-15',
	},
	{
		id: 16,
		reviewer_name: 'Хасан Ш.',
		rating: 1,
		title: 'Не рекомендую',
		text: 'Качество низкое, быстро испортилась.',
		is_verified: false,
		created_at: '2025-05-16',
	},
	{
		id: 17,
		reviewer_name: 'Шолпан З.',
		rating: 5,
		title: 'Замечательно',
		text: 'Очень довольна, закажу снова.',
		is_verified: true,
		created_at: '2025-05-17',
	},
	{
		id: 18,
		reviewer_name: 'Эльдар А.',
		rating: 4,
		title: 'Хороший товар',
		text: 'Продукт хороший, упаковка слабая.',
		is_verified: true,
		created_at: '2025-05-18',
	},
	{
		id: 19,
		reviewer_name: 'Юлия Л.',
		rating: 5,
		title: 'Проверено',
		text: 'Качество отличное, доставка быстрая.',
		is_verified: true,
		created_at: '2025-05-19',
	},
	{
		id: 20,
		reviewer_name: 'Ярослав И.',
		rating: 3,
		title: 'Можно лучше',
		text: 'Продукт средний, ожидал большего.',
		is_verified: false,
		created_at: '2025-05-20',
	},
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
	{
		id: 9,
		user_name: 'Жанар',
		title: 'Проблемы с доставкой',
		text: 'Почему доставка задержалась?',
		is_question: true,
		parent_id: null,
		created_at: '2025-05-09',
	},
	{
		id: 10,
		user_name: 'Поддержка',
		title: 'Re: Проблемы с доставкой',
		text: 'Извините за задержку, свяжитесь с нами.',
		is_question: false,
		parent_id: 9,
		created_at: '2025-05-10',
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
