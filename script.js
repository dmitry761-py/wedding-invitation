// Счетчик до свадьбы
function updateCountdown() {
    const weddingDate = new Date('2025-06-23T17:00:00');
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();

// Инициализация карты
function initMap() {
    try {
        var myMap = new ymaps.Map('map', {
            center: [54.792063, 20.529091], // Точные координаты отеля Усадьба
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        // Создаем метку
        var myPlacemark = new ymaps.Placemark([54.792063, 20.529091], {
            balloonContent: 'Отель "Усадьба"<br>пос. Орловка, ул. Заречная, 8<br>Гурьевский район, Калининградская область'
        }, {
            preset: 'islands#redDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        console.log('Карта успешно инициализирована');
    } catch (error) {
        console.error('Ошибка при инициализации карты:', error);
    }
}

// Инициализируем карту после загрузки API
if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap);
} else {
    console.error('Yandex Maps API не загружен');
} 