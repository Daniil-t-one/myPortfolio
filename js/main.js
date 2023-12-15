var arrLang = {
  'en': {
    'home': 'Home',
    'about': 'About',
    'projects': 'Projects',
    'contacts': 'Contacts',
  },
  'ru': {
    'home': 'Главная',
    'about': 'Обо мне',
    'projects': 'Проекты',
    'contacts': 'Контакты',
  }
}

var mainLang = {
  'en': {
    'title': "Hello, I'm",
    'pretitle': 'Dani.dev',
    'posttitle': 'And I am Web-Developer',
    'text': 'Hi, I am engaged in the layout of adaptive layouts and landing pages. Write for cooperation',
  },
  'ru': {
    'title': 'Привет, Я',
    'pretitle': 'Dani.dev',
    'posttitle': 'И я Веб-разработчик',
    'text': 'Привет, я занимаюсь вёрсткой и адаптивом веб-страниц и лэндингов.Пишите для сотрудничества.',
  }
}

var aboutLang = {
  'en': {
    'aboutTitle': "Hi everyone, my name is Dani.dev",
    'aboutPosttitle': 'I am a web developer with experience in creating web pages.',
    'target': 'My goal is to create beautiful and functional web pages and landings that enhance the user experience.',
  },
  'ru': {
    'aboutTitle': "Всем привет, меня зовут Dani.dev",
    'aboutPosttitle': 'Я веб-разработчик с опытом в создании веб-страниц.',
    'target': 'Моя цель - создавать красивые и функциональные веб-страницы и лэндинги, которые улучшают пользовательский опыт.',
  }
}

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, item) {
      $(this).text(mainLang[lang][$(this).attr('key')]);
    });
  });
});

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, item) {
      $(this).text(aboutLang[lang][$(this).attr('key')]);
    });
  });
});

const burgerMenu = document.querySelector('.burger_menu')

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu_mobile').classList.toggle('open');
})
