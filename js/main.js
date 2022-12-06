"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const dbDesc = './db/descktop.json'
  const dbMobile = './db/mobile.json'

  let userWidth = null;

  updateDimension()
  sizeСhanges()

  function sizeСhanges() {
    window.addEventListener('resize', sizeСhanges)
    updateDimension()
  }


  function updateDimension() {
    userWidth = window.innerWidth

    if (userWidth <= 991) {
      //подключение к базе данныx 
      getData(dbMobile)


    } else {

      //подключение к базе данныx
      getData(dbDesc)



    }
  }

  function getData(name) {

    return fetch(name)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Данные получены с ошибкой')
        }
      })

      .then((data) => {
        render(data);
        // changeData(data)
        renderTime(data)

      })

      .catch((error) => {
        console.error(error.message);
      })
  }

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

  }


  //////////////////////////////////////////////////////////////////////////
  let stack = 4;
  let count = 1;

  const renderTime = (data) => {
    const cards = document.querySelectorAll('.time-data')
    const newStack = stack * count

    for (let i = 0; i < data.length; i++) {

      cards[i].innerHTML = ' '



      if (data[i].times.length < 5) {

        data[i].times.forEach(elem => {


          cards[i].insertAdjacentHTML('beforeend', `
                  <span class="time-data__time">`+ elem + `</span>`)

        })

      } else {

        sliceArray(data[i].times, newStack).forEach(elem => {


          cards[i].insertAdjacentHTML('beforeend', `
                  <span class="time-data__time">`+ elem + `</span>`)

        })
        cards[i].insertAdjacentHTML('afterend', `
                  <span class="time-data__btn"> еще...</span>`);

      }

      let btns = document.querySelectorAll('.time-data__btn')

      console.log(btns);

    }


  }


  function sliceArray(arr, index) {
    console.log(arr);
    return arr.slice(0, (index - 1))

  }

  let btns = document.querySelectorAll('.time-data__btn')

  console.log(btns);




  ////// 
})
//end

