jQuery(document).ready(function() {
	
	const sliderItems = document.querySelectorAll('.slider__item_suptitle');
	const sliderItemsText = document.querySelectorAll('.slider__item_content');
	
	function activeSlider() {
		sliderItems.forEach((item) => {
			item.classList.remove('active', 'before_active', 'after_active');
		});
		sliderItemsText.forEach((item) => {
			item.classList.remove('active');
		})
		for(let i = 0; i <= sliderItems.length; i++) {
			if (sliderItems[i] == this) {
				sliderItemsText[i].classList.add('active');
				sliderItems[i].classList.add('active');
				if (i !== 0)
				sliderItems[i-1].classList.add('before_active')
				if (i !== sliderItems.length - 1)
				sliderItems[i+1].classList.add('after_active')
			}
		}
	}

	sliderItems.forEach((item) => {
			item.addEventListener('click', activeSlider);
		})
});
