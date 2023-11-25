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
    })
    });