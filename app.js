window.addEventListener('DOMContentLoaded', () => {

    const burgerElem = document.querySelectorAll(".genres-2pge");
    const burger = document.querySelector(".fa-bars");


    const btn = document.querySelector('.button-4')
    const deleteBtn = document.querySelector('.delete')

    const info = [
        { filmName: '1+1', filmRate: 4.4, filmTime: '01:52 ч', img: './img/1+1.jpg' },
        { filmName: 'Побег из Шоушенка', filmRate: 4.6, filmTime: '02:22 ч', img: './img/побег из шоушенко.jpg' },
        { filmName: 'Волк с Уолл-стрит', filmRate: 4.0, filmTime: '03:00 ч', img: './img/Волк с Уолл-стрит.jpg' },
        { filmName: 'Брат', filmRate: 4.1, filmTime: '01:40 ч', img: './img/Брат.jpg' },
        { filmName: 'Зеленая миля', filmRate: 4.6, filmTime: '03:09 ч', img: './img/Зеленая миля.jpg' },
        { filmName: 'Форрест Гамп', filmRate: 4.4, filmTime: '02:22 ч', img: './img/Форрест Гамп.jpg' },
        { filmName: 'Джокер', filmRate: 4.0, filmTime: '02:02 ч', img: './img/Джокер.jpg' },
        { filmName: 'Достучаться до небес', filmRate: 4.3, filmTime: '01:27 ч', img: './img/Достучаться до небес.jpg' },
        { filmName: 'Игры разума', filmRate: 4.3, filmTime: '02:15 ч', img: './img/Игры разума.jpg' },
        { filmName: 'Хатико: Самый верный друг', filmRate: 4.2, filmTime: '01:29 ч', img: './img/хатико.jpg' },
        { filmName: 'Загадочная история Бенджамина Баттона', filmRate: 4.0, filmTime: '02:46 ч', img: './img/Загадочная история Бенджамина Баттона.jpg' },
        { filmName: 'Список Шиндлера', filmRate: 4.4, filmTime: '03:15 ч', img: './img/Список Шиндлера.jpg' },
        { filmName: 'Великий Гэтсби', filmRate: 4.0, filmTime: '02:23 ч', img: './img/Великий Гэтсби.jpg' },
        { filmName: 'Шоу Трумана', filmRate: 4.1, filmTime: '01:43 ч', img: './img/Шоу Трумана.jpg' },
        { filmName: 'Т-34', filmRate: 3.3, filmTime: '02:19 ч', img: './img/Т-34.jpg' },
        { filmName: 'Однажды в… Голливуде', filmRate: 3.8, filmTime: '02:41 ч', img: './img/Однажды в… Голливуде.jpg' },
        { filmName: 'Три билборда на границе Эббинга, Миссури', filmRate: 4.1, filmTime: '01:55 ч', img: './img/Три билборда на границе Эббинга, Миссури.jpg' },
        { filmName: 'Дьявол носит Prada', filmRate: 3.8, filmTime: '01:49 ч', img: './img/Дьявол носит Prada.jpg' },
        { filmName: 'Крестный отец', filmRate: 4.4, filmTime: '02:55 ч', img: './img/Крестный отец.jpg' },
        { filmName: 'Дневник памяти', filmRate: 4.1, filmTime: '02:04 ч', img: './img/Дневник памяти.jpg' },
        { filmName: 'Американская история X', filmRate: 4.1, filmTime: '01:59 ч', img: './img/Американская история X.jpg' },
        { filmName: 'Изгой', filmRate: 4.1, filmTime: '02:23 ч', img: './img/Изгой.jpg' },
        { filmName: 'Дурак', filmRate: 4.0, filmTime: '01:56 ч', img: './img/Дурак.jpg' },
        { filmName: 'Паразиты', filmRate: 4.0, filmTime: '02:11 ч', img: './img/Паразиты.jpg' },
        { filmName: 'Реквием по мечте', filmRate: 4.0, filmTime: '01:42 ч', img: './img/Реквием по мечте.jpg' },
        { filmName: 'Семь жизней', filmRate: 4.1, filmTime: '01:58 ч', img: './img/Семь жизней.jpg' },
        { filmName: 'Пролетая над гнездом кукушки', filmRate: 4.3, filmTime: '02:13 ч ', img: './img/Пролетая над гнездом кукушки.jpg' },
        { filmName: 'Одержимость ', filmRate: 4.2, filmTime: '01:46 ч', img: './img/Одержимость.jpg' },
        { filmName: 'Терминал ', filmRate: 4.0, filmTime: '02:04 ч', img: './img/Терминал.jpg' },
        { filmName: 'В погоне за счастьем ', filmRate: 4.1, filmTime: '01:57 ч', img: './img/В погоне за счастьем.jpg' },
        { filmName: 'Социальная сеть ', filmRate: 3.9, filmTime: '02:00 ч', img: './img/Социальная сеть.jpg' },
        { filmName: 'Далласский клуб покупателей ', filmRate: 4.0, filmTime: '01:58 ч', img: './img/Далласский клуб покупателей.jpg' },
        { filmName: 'Еще по одной ', filmRate: 3.8, filmTime: '01:50 ч', img: './img/Еще по одной.jpg' },
        { filmName: 'Малышка на миллион', filmRate: 4.1, filmTime: '02:12 ч', img: './img/Малышка на миллион.jpg' },
        { filmName: '12 лет рабства', filmRate: 3.9, filmTime: '02:13 ч', img: './img/12 лет рабства.jpg' },
        { filmName: 'Красота по-американскиа', filmRate: 4.0, filmTime: '02:02 ч', img: './img/Красота по-американски.jpg' }
    ]
    let newObj = []
    burgerElem.forEach((item, index) => {
        if (index == 0) {} else {
            item.classList.add("none");
        }
        //    burgerElem[index].addEventListener('click',()=>{ 
        //     if(burgerElem[index].style.background == 'none'){ 

        //     } 
        //     else{ 
        //         burgerElem[index].style.background = 'none' 
        //     } 
        // } 
        // )} 

        burgerElem[0].addEventListener("click", () => {
            if (burger.classList.contains("fa-bars") == true) {
                burger.classList.remove("fa-bars");
                burger.classList.add("fa-times");
                collapse.classList.add('none')
                burgerElem.forEach((item, index) => {
                    item.classList.remove("none");
                });
            } else {
                burger.classList.remove("fa-times");
                burger.classList.add("fa-bars");
                collapse.classList.remove('none')
                burgerElem.forEach((item, index) => {
                    if (index == 0) {} else {
                        item.classList.add("none");
                    }
                });
            }
        });
    });

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + ':' + minutes;
    };
    let newDiv = document.querySelector(".films");

    let nextPoint = 12;
    let deafoultStep = 12;

    function showFilms(arr) {

        let newDiv = document.querySelector(".films");



        arr.map((item, index) => {

            return newDiv.insertAdjacentHTML('beforeend', ` 
<div class="film-general" > 
<div class="film-poster"> 
   <img src=${item.posterUrl} alt="error"> 
   <div class="film-poster__info" > <div class="poster-info__time">${getTimeFromMins(item.filmLength)}ч</div> 
   
   <div class="poster-info__rating">${item.ratingKinopoisk}</div> </div> 
  </div> 
<h2 align = "center">${item.nameRu}</h2> 
  </div>`)



        });


    }
    let aray
    setTimeout(() => {

        aray = getStorage.slice(0, nextPoint)





        // console.log(sortLong);

        showFilms(aray)

    }, 2000)
    btn.addEventListener('click', () => {



        nextPoint = nextPoint + deafoultStep
        aray = getStorage.slice(0, nextPoint)
        deleteDiv()
        showFilms(aray)
        const newAr = document.querySelectorAll('.film-general')
        console.log(newAr);
        getPropertiesOfFilm(newAr)
        aa(clr)
    })





    // console.log(mydata[1].filmName); 


    //timer 





    const HTMLStorage = document.querySelectorAll('.time')

    const deadLine = '2022-05-17'

    function diffrents(lastTime) {


        const t = Date.parse(lastTime) - Date.parse(new Date())
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        const min = Math.floor((t / (1000 * 60)) % 60)
        const sec = Math.floor((t / (1000)) % 60)
        return [days, hours, min, sec, t]
    }

    function pasteTime() {
        const nameNum = ['дней ', 'часов', 'минут', 'секунд']
        let time = diffrents(deadLine)
        let timeTrue;
        if (time[4] <= 0) {
            HTMLStorage.forEach((value, i) => {
                value.innerHTML = '0'
            })
        } else {
            HTMLStorage.forEach((item, index) => {
                if (time[index] < 10 && time[index] > 0) {
                    timeTrue = `0${time[index]}`
                } else {
                    timeTrue = time[index]
                }
                item.innerHTML = `${timeTrue}<p>${nameNum[index]}</p> `
            })

        }
    }
    pasteTime()
    let setintervalId = setInterval(pasteTime

        , 1000);






    // modalWindow 
    const modalWindow = document.querySelector('.modal_promotion')
    const promotion = document.querySelector('.endOfPromotion')
    const closeModal = document.querySelector('.cross')


    promotion.addEventListener('click', () => {
        if (modalWindow.classList.contains('none')) {
            modalWindow.classList.add('open_anim')
            modalWindow.classList.remove('none')
            setTimeout(() => {
                modalWindow.classList.remove('open_anim')
            }, 1500)
        } else {
            modalWindow.classList.add('close_anim')
            setTimeout(() => {
                modalWindow.classList.add('none')
                modalWindow.classList.remove('close_anim')
            }, 1500)
        }
    });


    closeModal.addEventListener('click', () => {
        modalWindow.classList.add('close_anim')
        setTimeout(() => {
            modalWindow.classList.add('none')
            modalWindow.classList.remove('close_anim')
        }, 1500)



    })

    //change color
    const collapse = document.querySelector('.change__color')



    // 

    const form = document.querySelector('#check_color')
    const input = document.querySelector('#color-input')



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //   target  = event.target
        // araay.forEach((item,index)=>{
        //   if(target.checked=item){
        //     console.log(item.value);
        //   }
        // })

        var data = new FormData(form);
        var output;

        for (const entry of data) {
            output = entry[1];
        };
        localStorage.setItem('color', output)
        clr = localStorage.getItem('color')
        console.log(clr);


        aa(clr)



    })


    const headerColor = document.querySelector('header')
    const mainCtgContainer = document.querySelector('.main-categories-container')
    const btnColor = document.querySelector('.button-4')
    const botBg = document.querySelector('.bot-box')

    let clr = localStorage.getItem('color')
    aa(clr)

    function aa(clr) {
        const difrentColors = document.querySelector('.content-box__color');
        const submitClr = document.querySelector('#select_color')
        const filmPstInf = document.querySelectorAll('.film-poster__info')
        const btnRadius = document.querySelectorAll('.btn-for-help')
        filmPstInf.forEach((item, i) => {
            item.style.background = `${clr}`
        })
        btnRadius.forEach((item, i) => {
            item.style.border = `${clr} 2px solid`
        })
        difrentColors.style.border = `${clr} 2px solid`
        submitClr.style.border = `${clr} 2px solid`
        botBg.style.background = `${clr}`
        headerColor.style.background = `${clr}`
        mainCtgContainer.style.background = `${clr}`

        btnColor.style.border = `${clr} 1px solid`

    }



    const botArrow = document.querySelector('.arrow-bot')

    botArrow.addEventListener('click', () => {
        const difrentColors = document.querySelector('.content-box__color');
        if (difrentColors.classList.contains("none")) {
            difrentColors.classList.remove('none')
        } else {
            difrentColors.classList.add('none')
        }

        console.log('ok');
    })

    //bot
    const help = document.querySelector('.help')
    const bot = document.querySelector('.bot-box')
    const timeToAdd = 2000;
    setTimeout(() => {

        help.classList.remove('none')
    }, timeToAdd)

    const closeBot = document.querySelector('#close-bot')
    const botWind = document.querySelector('.bot-window')
    const closeWIn = document.querySelector('#close-win-bot')
    closeBot.addEventListener('click', () => {
        help.classList.add('none')
    })

    bot.addEventListener('click', () => {

        if (botWind.classList.contains('none')) {
            botWind.classList.remove('none')
        } else {
            botWind.classList.add('none')
        }


        if (help.classList.contains('none')) {
            setTimeout(() => {

                help.classList.add('none')
            }, 2000)
        } else {
            help.classList.add('none')
        }
    })

    closeWIn.addEventListener('click', () => {
        botWind.classList.add('none')
    })

    function deleteDiv() {
        const ele = document.querySelectorAll('.film-general')
        ele.forEach((it, i) => { it.parentNode.removeChild(it) })
    }

    //bot buttons
    const lotTime = document.querySelector('#lotOfTime')
    const smallTime = document.querySelector('#smallTime')
    const hightRate = document.querySelector('#hightRate')

    function sortLotTime() {
        aray.sort((a, b) => a.filmLength > b.filmLength ? -1 : 1)
        deleteDiv()
        showFilms(aray)
        aa(clr)
    }

    lotTime.addEventListener('click', () => {
        localStorage.setItem('lastClicked', 'lotTime')
        sortLotTime()
        const newAr = document.querySelectorAll('.film-general')
        getPropertiesOfFilm(newAr)
    })

    function sortSmlTime() {
        aray.sort((a, b) => a.filmLength < b.filmLength ? -1 : 1)
        deleteDiv()
        showFilms(aray)
        aa(clr)
    }

    smallTime.addEventListener('click', () => {
        localStorage.setItem('lastClicked', 'smallTime')
        sortSmlTime()
        const newAr = document.querySelectorAll('.film-general')
        getPropertiesOfFilm(newAr)
    })

    function sortHightRate() {
        aray.sort((a, b) => a.ratingKinopoisk > b.ratingKinopoisk ? -1 : 1)
        deleteDiv()
        showFilms(aray)
        aa(clr)
    }

    hightRate.addEventListener('click', () => {
        localStorage.setItem('lastClicked', 'hightRate')
        sortHightRate()
        const newAr = document.querySelectorAll('.film-general')
        getPropertiesOfFilm(newAr)
    })

    let flms = document.querySelectorAll(".film-general")




    function getPropertiesOfFilm(flms) {


        flms.forEach((it, i) => {
            it.addEventListener('click', () => {
                const obj = getStorage[i]
                const strng = JSON.stringify(obj)
                return localStorage.setItem('lastClickedFilm', strng)
            })
        })
    }

    getPropertiesOfFilm(flms)


    const getStorage = []

    // const ids = [435,1355139,4467988,1309570,1103803]
    // const ids1 =[1414470,1234853]

    // function cutArr(arr,cutNum){
    // for(let i;i<arr.lenght;i++){
    //   if(arr[i]<=5){
    //       const
    //   }
    // }

    // }


    function da(id) {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(json => getStorage.push(json))
            .catch(err => console.log(err))
    }

    const ids = [535341, 326, 462682, 41519, 435, 448, 1048334, 32898, 530, 387556, 81555, 329, 463724, 4541, 930878, 1047883, 944098, 104992, 325, 3561, 382, 627, 808639, 1043758, 367, 395787, 336, 725190, 6877, 104938, 427198, 260162, 1263705, 81297, 606646, 351]
    let i = 0;
    let interval = setInterval(() => {
            da(ids[i]);
            i++;
            console.log(getStorage);
            if (i == ids.length) {
                clearInterval(interval)
            }
        }, 100)
        // console.log(getStorage)




})