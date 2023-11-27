$(function () {
    const picker = new easepick.create({
        element: document.getElementById('checkin'),
        css: [
            "./css/picker.css"
        ],
        zIndex: 3,
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

    })