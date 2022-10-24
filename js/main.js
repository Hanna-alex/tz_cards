"use strict"

document.addEventListener("DOMContentLoaded", () => {

  let userWidth = document.documentElement.clientWidth;



  if (userWidth <= 991) {

    //подключение к базе данныx 
    const getData = () => {
      return fetch('./db/mobile.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Данные получены с ошибкой')
          }
        })

        .then((data) => {
          // console.log(data);
          render(data);
        })

        .catch((error) => {
          console.error(error.message);
        })
    }
    //

    getData()

    //отображение товара на странице
    const render = (data) => {
      const cardContainer = document.querySelector('.excursions__cards');

      cardContainer.innerHTML = '';
      data.forEach(card => {

        cardContainer.insertAdjacentHTML('beforeend', `
      <div class="excursions__card card">
            <div class="card__img">
              <img
                src="img/excursions_foto/${card.img}"
                alt="Картинка: экскурсия"
              />
              <div class="card__label ${card.labelClass}">
                <span>${card.labelText}</span>
              </div>
              <!-- /.card__label -->
            </div>
            <!-- /.card__img -->
            <div class="card__info">
              <div class="card__time time">
                <svg class="time__icon">
                  <use xlink:href="img/icons/sprite.svg#oclock"></use>
                </svg>
                <span class="time__text">2 часа</span>
              </div>
              <!-- /.card__time -->
              <h3 class="card__title">
                <span class="action">АКЦИЯ - </span>Обзорная экскурсия
                по&nbsp;рекам и&nbsp;каналам с&nbsp;остановками Hop on&nbsp;Hop
                Off 2019
              </h3>
              <ul class="card__list list">
                <li class="list__item">Билет на целый день</li>
                <li class="list__item">Неограниченное число катаний</li>
                <li class="list__item">
                  6 остановок у главных достопримечательностей
                </li>
                <li class="list__item">
                  Ближайший рейс сегодня
                  <span class="list__time-data time-data">
                    
                  </span>
                </li>
              </ul>
              <div class="card__price-more">
                <div class="card__price price">
                  <span class="price__sum">900 &#8381;</span>
                  <span class="price__on-pier">1200 р на причале</span>
                </div>
                <!-- /.card__price price -->
                <div class="card__more more">
                  <button class="card__btn">Подробнее</button>
                </div>
                <!-- /.more -->
              </div>
              <!-- /.card__price-more -->
            </div>
            <!-- /.card__info -->
          </div>
          <!-- /.excursions__card card -->`)
      })

      getTimeElems(data);

    }
    ///render




  } else if (userWidth > 991) {

    //подключение к базе данныx 
    const getData = () => {
      return fetch('./db/descktop.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Данные получены с ошибкой')
          }
        })

        .then((data) => {
          // console.log(data);
          render(data);


        })

        .catch((error) => {
          console.error(error.message);
        })
    }
    //

    getData()

    //отображение товара на странице
    const render = (data) => {
      const cardContainer = document.querySelector('.excursions__cards');

      cardContainer.innerHTML = '';

      data.forEach(card => {

        cardContainer.insertAdjacentHTML('beforeend', `
      <div class="excursions__card card">
            <div class="card__img">
              <img
                src="img/excursions_foto/${card.img}"
                alt="Картинка: экскурсия"
              />
              <div class="card__label ${card.labelClass}">
                <span>${card.labelText}</span>
              </div>
              <!-- /.card__label -->
            </div>
            <!-- /.card__img -->
            <div class="card__info">
              <div class="card__time time">
                <svg class="time__icon">
                  <use xlink:href="img/icons/sprite.svg#oclock"></use>
                </svg>
                <span class="time__text">2 часа</span>
              </div>
              <!-- /.card__time -->
              <h3 class="card__title">
                <span class="action">АКЦИЯ - </span>Обзорная экскурсия
                по&nbsp;рекам и&nbsp;каналам с&nbsp;остановками Hop on&nbsp;Hop
                Off 2019
              </h3>
              <ul class="card__list list">
                <li class="list__item">Билет на целый день</li>
                <li class="list__item">Неограниченное число катаний</li>
                <li class="list__item">
                  6 остановок у главных достопримечательностей
                </li>
                <li class="list__item">
                  Ближайший рейс сегодня
                  <span class="list__time-data time-data">   
                    
                  </span>

        </li >
              </ul >
              <div class="card__price-more">
                <div class="card__price price">
                  <span class="price__sum">900 &#8381;</span>
                  <span class="price__on-pier">1200 р на причале</span>
                </div>
                <!-- /.card__price price -->
                <div class="card__more more">
                  <button class="card__btn">Подробнее</button>
                </div>
                <!-- /.more -->
              </div>
              <!-- /.card__price-more -->
            </div >
            <!-- /.card__info -->
          </div >
          <!-- /.excursions__card card -->`)
      })

      getTimeElems(data);

    }
    ///render

  }
  //if

  const getTimeElems = (data) => {

    let timeContainers = document.querySelectorAll('.list__time-data');
    let stack = 4;
    let count = 1;
    const newStack = stack * count

    console.log(count);

    for (let d = 0; d < data.length; d++) {
      let timeElems = data[d].times

      let arrTimeElems = timeElems.slice(0, newStack - 1)


      if (timeElems.length <= newStack) {

        timeElems.forEach(timesElem => {
          timeContainers[d].insertAdjacentHTML('beforeend', `
                  <span class="time-data__time">`+ timesElem + `</span>`)
        })

      } else {


        arrTimeElems.forEach(timesElem => {
          timeContainers[d].insertAdjacentHTML('beforeend', `
                  <span class="time-data__time">`+ timesElem + `</span>`)
        })

        timeContainers[d].insertAdjacentHTML('beforeend', `
                  <span class="time-data__btn"> еще...</span>`)


        let btnMore = document.querySelector('.time-data__btn')

        btnMore.addEventListener('click', () => {

          if (timeElems.length > newStack) {

            ++count ///?????

            arrTimeElems.forEach(timesElem => {
              timeContainers[d].insertAdjacentHTML('beforeend', `
                  <span class="time-data__time">`+ timesElem + `</span>`)
            })


          } else {
            btn.style.display = 'none'
          }


        })


      }
      ///////////////////////////

    }

  }
  // getTimeElems


})
//end

