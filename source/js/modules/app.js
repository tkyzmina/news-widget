const initApp = () => {

  let array = [{
      "source": {
        "id": null,
        "name": "Championat.com"
      },
      "author": "Андрей Панков",
      "title": "«Я объявил — Дзюба забил. Значит, всё правильно». Черчесов — о составе сборной - Чемпионат",
      "description": "Главный тренер объяснил, почему не пригласил Смолова.",
      "url": "https://www.championat.com/football/article-4295211-glavnyj-trener-sbornoj-rossii-stanislav-cherchesov-o-dzyube-miranchuke-golovine-i-sostave-na-matchi-otbora-chm-2022.html",
      "urlToImage": "https://img.championat.com/news/social/c/cb/4295211.jpg",
      "publishedAt": "2021-03-15T13:30:10Z",
    },
    {
      "source": {
        "id": null,
        "name": "Championat.com"
      },
      "author": "Чемпионат",
      "title": "ВАДА завершило расследование в отношении ливреи «Хааса» в цветах российского флага - Чемпионат",
      "description": "Всемирное антидопинговое агентство (ВАДА) завершило расследование в отношении ливреи болида «Хааса» на новый сезон Формулы-1, сообщает Formula1News.co.uk со ссылкой на собственные источники. По данным издания, ВАДА не будет предпринимать каких-либо дальнейших…",
      "url": "https://www.championat.com/auto/news-4295203-v-vada-zavershili-rassledovanie-v-otnoshenii-livrei-haasa-v-cvetah-rossijskogo-flaga.html",
      "urlToImage": "https://img.championat.com/news2/social/e/17/4295203.jpg",
      "publishedAt": "2021-03-15T13:19:59Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sport-express.ru"
      },
      "author": "Севастиан Терлецкий",
      "title": "«Это безобразие, руки опускаются». Президент «Ростова» Арутюнянц — о матче с «Химками» - Спорт-Экспресс",
      "description": "Руководитель донского клуба в интервью «СЭ» высказал свое мнение о скандальных решениях судей в матче 22-го тура с «Химками» (0:1).",
      "url": "https://www.sport-express.ru/football/rfpl/reviews/prezident-rostova-artashes-arutyunyanc-o-skandalnyh-resheniyah-sudey-v-matche-22-go-tura-rpl-s-himkami-intervyu-1767794/",
      "urlToImage": "https://ss.sport-express.ru/userfiles/materials/165/1659562/large.jpg",
      "publishedAt": "2021-03-15T13:15:00Z",
    },
    {
      "source": {
        "id": null,
        "name": "F1news.ru"
      },
      "author": "Михаил Смирнов",
      "title": "Подруга Боттаса разработала дизайн его гоночного шлема - Формула 1 на F1News.Ru",
      "description": "Валттери Боттас рассказал о дизайне гоночного шлема, в котором будет выступать в этом сезоне.",
      "url": "https://www.f1news.ru/news/f1-151376.html",
      "urlToImage": "https://cdn.f1ne.ws/userfiles/bottas/151376.jpg",
      "publishedAt": "2021-03-15T12:58:00Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sportbox.ru"
      },
      "author": null,
      "title": "Игорь Денисов: «3 года назад я отказался от алкоголя, и за это время у меня никого из друзей не осталось. Это парадоксально, но факт» - news.Sportbox.ru",
      "description": "Бывший полузащитник «Зенита», «Локомотива» и  «Динамо» Игорь Денисов рассказал, что отказ от алкоголя привел к тому, что у него не осталось друзей.",
      "url": "https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1326259_Igor_Denisov_3_goda_nazad_ja_otkazalsa_ot_alkogola_i_za_eto_vrema_u_mena_nikogo_iz_druzej_ne_ostalos_Eto_paradoksalno_no_fakt",
      "urlToImage": "https://s-cdn.sportbox.ru/images/shares/1200x600/node/8a/1326259.jpg",
      "publishedAt": "2021-03-15T11:58:57Z",
    },
    {
      "source": {
        "id": null,
        "name": "Motorsport.com"
      },
      "author": "Люк Смит",
      "title": "«Он пытался втянуть меня в свои игры». Райкконен об инциденте с Сайнсом - Motorsport.com Россия",
      "description": "В самом конце тестов в Бахрейне два гонщика едва не столкнулисьна трассе",
      "url": "https://ru.motorsport.com/f1/news/on-pytalsya-vtyanut-menya-v-svoi-igry-rajkkonen-ob-intsidente-s-sajnsom/5740506/",
      "urlToImage": "https://cdn-1.motorsport.com/images/amp/6O1oWEO2/s6/kimi-raikkonen-alfa-romeo-raci.jpg",
      "publishedAt": "2021-03-15T11:57:41Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sportbox.ru"
      },
      "author": "Михаил Кузнецов",
      "title": "Дмитрий Губерниев: «Дзюба принесет необходимое игровое возбуждение, силу, страсть и мастерство» - news.Sportbox.ru",
      "description": "Комментатор «Матч ТВ» Дмитрий Губерниев прокомментировал опубликованный состав игроков сборной России, которые примут участие в подготовке к мартовским матчам отбора на ЧМ-2022, а также состав молодежной команды, вызванный для участия в чемпионате Европы.",
      "url": "https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1326263_Dmitrij_Gubernijev_Dzuba_prineset_neobkhodimoje_igrovoje_vozbuzhdenije_silu_strast_i_masterstvo",
      "urlToImage": "https://s-cdn.sportbox.ru/images/shares/1200x600/node/6c/1326263.jpg",
      "publishedAt": "2021-03-15T11:52:28Z",
    },
    {
      "source": {
        "id": null,
        "name": "Rambler.ru"
      },
      "author": "Газета.Ru",
      "title": "Двукратная олимпийская чемпионка обвинила Тарасову в обмане - Рамблер/новости",
      "description": "Двукратная олимпийская чемпионка в танцах на льду Оксана Грищук обвинила заслуженного тренера СССР Татьяну Тарасову в обмане.",
      "url": "https://sport.rambler.ru/winter/46006450-dvukratnaya-olimpiyskaya-chempionka-obvinila-tarasovu-v-obmane/",
      "urlToImage": "https://news.store.rambler.ru/img/b6061b6b9afda34309492fd28cc43505?img-1-resize=width%3A600%2Cheight%3A315%2Cfit%3Acover&img-format=png%3Acomp%3A3",
      "publishedAt": "2021-03-15T11:22:20Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sportrbc.ru"
      },
      "author": null,
      "title": "CAS подтвердил запрет российскими олимпийцам использовать «Катюшу» - РБК Спорт",
      "description": "Причина запрета — явная ассоциация песни с Россией",
      "url": "https://sportrbc.ru/news/604f3c999a79479656fe6d91",
      "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/7/31/756158066210317.jpg",
      "publishedAt": "2021-03-15T11:12:02Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sports.ru"
      },
      "author": null,
      "title": "Азар не тренировался в общей группе «Реала». Он может пропустить матч с «Аталантой» - Sports.ru",
      "description": "Полузащитник Эден Азар не принял участия в сегодняшней общекомандной тренировке «Реала».",
      "url": "https://www.sports.ru/football/1095003513-azar-ne-trenirovalsya-v-obshhej-gruppe-reala-on-mozhet-propustit-match.html",
      "urlToImage": "https://www.sports.ru/dynamic_images/news/109/500/351/3/share/007362.jpg",
      "publishedAt": "2021-03-15T10:45:00Z",
    },
    {
      "source": {
        "id": null,
        "name": "Sportbox.ru"
      },
      "author": null,
      "title": "КХЛ объявила имена лучших игроков первого раунда плей-офф - news.Sportbox.ru",
      "description": "КХЛ определила лучших игроков первого раунда Кубка Гагарина.",
      "url": "https://news.sportbox.ru/Vidy_sporta/Hokkej/KHL/spbnews_NI1326218_KKhL_objavila_imena_luchshih_igrokov_pervogo_raunda_plej_off",
      "urlToImage": "https://s-cdn.sportbox.ru/images/shares/1200x600/node/06/1326218.jpg",
      "publishedAt": "2021-03-15T10:33:18Z",
    },
    {
      "source": {
        "id": "lenta",
        "name": "Lenta"
      },
      "author": "Василий Гусев",
      "title": "Стали известны последствия избиения 16-летнего футболиста «Локомотива» - Lenta.ru",
      "description": "Юлия Шнапцева, мать 16-летнего футболиста юношеской команды «Локомотива» Максима Шнапцева, избитого после матча юношеских команд железнодорожников и «Чертаново», рассказала о последствиях случившегося. Шнапцева заявила, что в данный момент решается вопрос, ст…",
      "url": "https://lenta.ru/news/2021/03/15/loko/",
      "urlToImage": "https://icdn.lenta.ru/images/2021/03/15/12/20210315123111274/share_f7e913d4ad617abad3845457d9b727ec.jpg",
      "publishedAt": "2021-03-15T10:25:00Z",
    },
    {
      "source": {
        "id": "Юрий Дудь",
        "name": "Eurosport.ru"
      },
      "author": "Дмитрий Зимин",
      "title": "Вратарь из Австралии играет в форме Яшина. Он мечтает приехать на матч «Динамо» и обожает Россию - Eurosport RU",
      "description": "Лев Яшин – мировая футбольная звезда. У него есть поклонник и подражатель из Австралии.",
      "url": "https://www.eurosport.ru/football/russian-premier-league/2020-2021/story_sto8174164.shtml",
      "urlToImage": "https://i.eurosport.com/2021/03/15/3012166-61799048-2560-1440.jpg",
      "publishedAt": "2021-03-15T10:00:00Z"
    },
    {
      "source": {
        "id": null,
        "name": "Sportbox.ru"
      },
      "author": null,
      "title": "Гендиректор «Тамбова»: «Процесс банкротства запущен». Футбол - news.Sportbox.ru",
      "description": "Генеральный директор «Тамбова» Ольга Коновалова отреагировала на решение властей Тамбовской области не выполнять обязательства перед РФС.",
      "url": "https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1326214_Gendirektor_Tambova_Process_bankrotstva_zapushhen",
      "urlToImage": "https://s-cdn.sportbox.ru/images/shares/1200x600/node/da/1326214.jpg",
      "publishedAt": "2021-03-15T09:49:16Z",
    },
    {
      "source": {
        "id": null,
        "name": "Business-gazeta.ru"
      },
      "author": "Юрий Дудь",
      "title": "Зарипов пропускает тренировку «Ак Барса» перед «зелёным дерби» - БИЗНЕС Online",
      "description": "",
      "url": "https://sport.business-gazeta.ru/news/263220",
      "urlToImage": "//img-sport.business-gazeta.ru/images/de/a105e1-89c7fc.jpg",
      "publishedAt": "2021-03-15T09:46:44Z",
    },
    {
      "source": {
        "id": null,
        "name": "76.ru"
      },
      "author": "76.ru",
      "title": "Пробило голову Тимуру Файзутдинову: видео, последние новости, комментарии врачей | 76.ru - Новости Ярославля – 76.ru",
      "description": "Ярославские врачи провели консилиум",
      "url": "https://76.ru/text/sport/2021/03/15/69812393/",
      "urlToImage": "https://static.ngs.ru/news/2021/social/6af8fe3f26eeec6de5fb4daacc4f4b.png",
      "publishedAt": "2021-03-15T09:15:00Z",
    },
    {
      "source": {
        "id": null,
        "name": "Championat.com"
      },
      "author": "Чемпионат",
      "title": "Кершоу: в Большунове смущает лишь одна деталь – вовлечённый в допинговые дела тренер - Чемпионат",
      "description": "Чемпион мира 2011 года, участник четырёх Олимпиад, канадский лыжник Девон Кершоу подробно рассказал, что думает о личности Александра Большунова и его значении для лыжного спорта.",
      "url": "https://www.championat.com/other/news-4295019-kershou-v-bolshunove-smuschaet-lish-odna-detal-vovlechyonnyj-v-dopingovye-dela-trener.html",
      "urlToImage": "https://img.championat.com/news2/social/6/a1/4295019.jpg",
      "publishedAt": "2021-03-15T09:14:05Z",
    },
    {
      "source": {
        "id": null,
        "name": "Livesport.ru"
      },
      "author": "LiveSport.Ru",
      "title": "Вулверхэмптон — Ливерпуль. Прогноз и ставка за 2.20 / Сегодня в 23:00 / Прогнозы на футбол / LiveSport.Ru - LiveSport.Ru",
      "description": "Вулверхэмптон — Ливерпуль: «Ливерпулю» пора набирать очки / Прогноз на матч + фрибет, ставка, статистика, коэффициенты",
      "url": "https://www.livesport.ru/tips/football/2021/03/15/wolverhampton_liverpool/",
      "urlToImage": "https://cdn.livesport.ru/l/tips/football/2021/03/15/wolverhampton_liverpool/picture.jpg?1615755891",
      "publishedAt": "2021-03-15T09:08:24Z",
    },
    {
      "source": {
        "id": null,
        "name": "Eurosport.ru"
      },
      "author": "Григорий Телингатер",
      "title": "Уильямс побеждает реже Ронни и Хиггинса. В чем секрет его величия? - Eurosport RU",
      "description": null,
      "url": "https://www.eurosport.ru/snooker/story_sto8177905.shtml",
      "urlToImage": "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1239x418:1241x416)/origin-imgresizer.eurosport.com/2021/03/15/3012144-61798608-2560-1440.jpg",
      "publishedAt": "2021-03-15T09:02:00Z",
    },
    {
      "source": {
        "id": null,
        "name": "Championat.com"
      },
      "author": "Григорий Телингатер",
      "title": "«Ростов» бойкотирует следующий матч? Судейство в России многих достало - Чемпионат",
      "description": "Важное заявление Червиченко. Разбираемся, что оно значит на самом деле.",
      "url": "https://www.championat.com/football/article-4293901-rostov-bojkotiruet-match-chempionata-rossii-po-futbolu-vsyo-iz-za-sudejstva-lapochkina.html",
      "urlToImage": "https://img.championat.com/news/social/e/65/4293901.jpg",
      "publishedAt": "2021-03-15T08:45:00Z",
    }
  ];

  const newsTypes = document.querySelectorAll('input[name="news"]');
  const newsList = document.querySelector('.news__list');
  const showMoreBtn = document.querySelector('.btn-more');
  let startIndex = 0;
  const newsToShow = 5;
  let restNews;
  let nextComments;
  const apiKey = '8704a4b4a91241cbb6d8eae96cc44966';
  const url = `https://newsapi.org/v2/top-headlines?country=ru&category=sport&apiKey=${apiKey}`;


  document.addEventListener("DOMContentLoaded", function () {
    fetch(url).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    }).then((data) => {
      array = data.articles;
      showStartInfo(array);
    });
  });


  const showStartInfo = (arr) => {
    const startBtn = document.querySelector('.btn-show');
    const startMessage = document.querySelector('.page-header');

    startMessage.innerHTML = `Найдено ${arr.length} новостей!`;

    startBtn.addEventListener('click', function () {
      startMessage.style.display = "none";
      startBtn.style.display = "none";
      showMoreBtn.classList.remove('btn--hidden');
      loadNews(arr);
    });
  }

  const loadNews = (arr) => {
    let firstNews = array.slice(startIndex, newsToShow);
    firstNews.forEach(item => {
      getNews(item);
    });
    markDone();
    startIndex += newsToShow;
  };

  const loadLastNews = () => {
    newsList.innerHTML = '';
    restNews = array.slice(startIndex, newsToShow + startIndex);
    startIndex += newsToShow;

    restNews.forEach(item => {
      getNews(item);
    });
    markDone();
    if (startIndex >= array.length) {
      showMoreBtn.classList.add('btn--hidden');
    }
  };

  showMoreBtn.addEventListener('click', function () {
    loadLastNews();
  });

  const getNews = function (obj) {
    const newsTemplate = document.querySelector('#news-item').content.querySelector('.news__item');
    const newsElement = newsTemplate.cloneNode(true);

    newsElement.querySelector('.news__img img').src = obj.urlToImage;
    newsElement.querySelector('.news__title').textContent = obj.title;
    newsElement.querySelector('.news__link').href = obj.url;
    newsElement.querySelector('.news__author').textContent = obj.author;
    newsElement.querySelector('.news__source').textContent = obj.source.name.toUpperCase();

    let date = Date.parse(obj.publishedAt);
    let newsDate = new Date(date);

    newsElement.querySelector('.news__time').textContent = `${newsDate.getHours()}:${newsDate.getMinutes()}`;
    newsElement.querySelector('.news__year').textContent = `${newsDate.getFullYear()}-${newsDate.getMonth()+1}-${newsDate.getDate()}`;

    newsList.append(newsElement);
  };

  const markDone = () => {
    const doneBtns = document.querySelectorAll('.news__btn');

    doneBtns.forEach(item => {
      item.addEventListener('click', function (evt) {
        let newsItem = item.nextElementSibling.classList.toggle('news__link--disabled');
        item.classList.toggle('news__btn--active');
      })
    })
  }
};

export {
  initApp
};
