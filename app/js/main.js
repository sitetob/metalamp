$(function () {
    const picker = new easepick.create({
        element: document.getElementById('checkin'),
        css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
        ],
        zIndex: 3,
        lang: "ru-RU",
        format: "DD.MM.YYYY",        
        RangePlugin: {
            elementEnd: document.getElementById('checkout'),            
        },
        plugins: ['RangePlugin']
    })
    });