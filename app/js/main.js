$(function () {
    $('.header__btn-menu').on('click',function(){
        $('.menu').toggleClass('menu--open');   
        $('.menu__list-item').on('click',function(){
            $('.menu--open').removeClass('menu--open');
          });     
    });
    const picker = new easepick.create({
        element: document.getElementById('checkin'),
        css: [
            "./css/picker.css"
        ],
        zIndex: 44,
        lang: "ru-RU",
        format: "DD.MM.YYYY",    
        autoApply: false,
        locale: {
            cancel: "Очистить",
            apply: "Применить",
        },
        RangePlugin: {
            elementEnd: document.getElementById('checkout'), 
            locale: {
                one: "день",
                two: "дня",
                other: "дней",
            },           
        },
        plugins: ['RangePlugin']
    });
    
 $(document).ready(() => {
        var elem = $('.iqdropdown');
        var elem_two = $('.conveniences');
        elem.iqDropdown({
            onChange: (id, count, totalItems) => {
                console.log('On change count', id, count, totalItems);
                var targetItem = elem.find(`[data-id='${id}']`);
                updateEmptyClass(targetItem, count);
            }
        });
        elem
            .find('.iqdropdown-menu-option')
            .each((idx, el) => {
                updateEmptyClass($(el), parseInt($(el).find('.counter').text()))
            });    
     });

    function updateEmptyClass(targetItem, count) {
        if (count === 0 ^ targetItem.hasClass('empty')) {
            if (count === 0)
                targetItem.addClass('empty');
            else
                targetItem.removeClass('empty');
        }
    };
    var clickToHide = document.querySelector('#click-to-hide');    
    const newcard = document.querySelector('.rooms__search-form-additionally-more');
	clickToHide.addEventListener("click", hideVisibleElem);
	function hideVisibleElem() {
	let wpcraftBox2 = document.querySelector('.rooms__search-form-additionally-form');
	wpcraftBox2.classList.toggle("hide-element");	
    if (wpcraftBox2.classList.contains("hide-element")){	        
        newcard.setAttribute('src', './images/svg/expand_up.svg');
	}   else {
		newcard.setAttribute('src', './images/svg/expand_more.svg');
	}	
           }

$('.rooms__item-slider').slick({
    prevArrow: '<button type="button" class="rooms__item-slider__arrow rooms__item-slider__arrowleft"><img src="images/svg/next.svg" alt="Back"></button>',
    nextArrow: '<button type="button" class="rooms__item-slider__arrow rooms__item-slider__arrowright"><img src="images/svg/back.svg" alt="Next"></button>',
    dots: true,
    dotsClass: 'slick-dots',
        });       

 })