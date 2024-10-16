import { cardsList } from './catalogList.js';

const clearInputBtn = document.querySelector('.search-and-pagination-wrapper .cross-search');
const catalogInputSearch = document.querySelector('.search-and-pagination-wrapper .search');
clearInputBtn.addEventListener('click', () => {
	catalogInputSearch.value = '';
	cardsList.search();
});
