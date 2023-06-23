import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';

import './book-page.css';
import { Button } from '../../components/button';
import { Stars } from '../../components/stars';
import { ReviewAuthor } from '../../components/review-author';
import { ReactComponent as IconArrow } from './assets/arrow-up.svg';
import bookPageDefaultImage from './assets/book-page-default-image.jpg';

import data from '../../data/books.json'

export const BookPage = () => {
  const [open, setOpen] = useState(false);
  const [swiperThumbs, setSwiperThumbs] = useState(null);
  const params = useParams();
  const { bookId } = params;

  let book;
  let images = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].id.toString() === bookId) {
      book = data[i];
      images = data[i].images;
      break;
    }
  }

  const { title, author, year } = book;
  let swiperSlides = [];

  if (images.length > 0) {
    swiperSlides = images.map((img) => (
      <SwiperSlide key={img} data-test-id='slide-mini'>
        <img src={img} alt="slide card" />
      </SwiperSlide>
    ))
  } else {
    swiperSlides.push(
      <SwiperSlide key={bookPageDefaultImage} data-test-id='slide-mini'>
        <img src={bookPageDefaultImage} alt="slide card" />
      </SwiperSlide>
    )
  }

  const paramsMain = {
    modules: [FreeMode, Navigation, Pagination, Thumbs],
    thumbs: { swiper: swiperThumbs && !swiperThumbs.destroyed ? swiperThumbs : null },
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  }

  const paramsThumbs = {
    modules: [FreeMode, Navigation, Pagination, Scrollbar, Thumbs],
    onSwiper: setSwiperThumbs,
    spaceBetween: 30,
    slidesPerView: 5,
    centerInsufficientSlides: true,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  }

  return (
    <section className="book-page-section">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb" >Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
        </div>
      </div>
      <div className="book-page-wrapper">
        <div className="container">
          <div className="book-page" >
            <section className="book-page__description">
              <div className='book-page-swiper'>
                <div className='swiper-main-wrapper'>
                  <Swiper className='swiper-main' {...paramsMain} data-test-id='slide-big'>
                    {swiperSlides}
                  </Swiper>
                  <div className='swiper-pagination' />
                </div>
                <div className='swiper-thumbs-wrapper' style={swiperSlides.length === 1 ? { 'display': 'none' } : {}}>
                  <Swiper className='swiper-thumbs' {...paramsThumbs}>
                    {swiperSlides}
                  </Swiper>
                  <div className='swiper-thumbs-gradient' />
                  <div className='swiper-scrollbar' />
                </div>
              </div>
              <h1 className="book-page__title">{title}</h1>
              <p className="book-page__author">{author}, <span className="book-year">{year}</span> </p>
              <Button classnames='btn-book-page' title='Забронировать' />
              <div className="book-page__about-book">
                <div>О книге</div>
                <hr className="horizontal-divider book-page-hr-color" />
                <p>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                  <br /><br />
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </section>
            <section className="book-page__rating">
              <div>Рейтинг</div>
              <hr className="horizontal-divider book-page-hr-color" />
              <div className="book-page__stars">
                <Stars />
                <span className="book-rating-number">4.3</span>
              </div>
            </section>
            <section className="book-page__detail-info">
              <div>Подробная информация</div>
              <hr className="horizontal-divider book-page-hr-color" />
              <div className="book-page__detail-info-columns">
                <div className="book-page__detail-info-col-1">
                  <span>Издательство</span>
                  <span>Питер</span>
                  <span>Год издания</span>
                  <span>2019</span>
                  <span>Страниц</span>
                  <span>288</span>
                  <span>Переплет</span>
                  <span>Мягкая обложка</span>
                  <span>Формат</span>
                  <span>70x10</span>
                </div>
                <div className="book-page__detail-info-col-2">
                  <span>Жанр</span>
                  <span>Компьютерная литература</span>
                  <span>Вес</span>
                  <span>370 г</span>
                  <span>ISBN</span>
                  <span>978-5-4461-0923-4</span>
                  <span>Изготовитель</span>
                  <span>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</span>
                </div>
              </div>
            </section>
            <section className="book-page__reviews">
              <div className="accordion-item">
                <div className="accordion-title">
                  <div className="book-page__reviews-title">
                    <div>Отзывы</div><span>3</span>
                  </div>
                  <button className="accordion-buton" onClick={() => setOpen(!open)} type="button" data-test-id='button-hide-reviews'>
                    <IconArrow className={open ? 'arrow-up' : 'arrow-down'} />
                  </button>
                </div>
                <hr className="horizontal-divider book-page-hr-color" />
                {open &&
                  <div className="accordion-content">
                    <div className="book-page__review">
                      <ReviewAuthor name='Иван Иванов' />
                      <div className="margin-bottom-space-reviews-section" />
                      <Stars />
                      <div className="margin-bottom-space-reviews-section" />
                      <p />
                    </div>
                    <div className="book-page__review">
                      <ReviewAuthor name='Николай Качков' />
                      <div className="margin-bottom-space-reviews-section" />
                      <Stars />
                      <div className="margin-bottom-space-reviews-section" />
                      <p>Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    </div>
                    <div className="book-page__review">
                      <ReviewAuthor name='Екатерина Беляева' />
                      <div className="margin-bottom-space-reviews-section" />
                      <Stars />
                      <div className="margin-bottom-space-reviews-section" />
                      <p />
                    </div>
                  </div>
                }
              </div>
            </section>
            <Button classnames='btn-rate-book-page' title='Оценить книгу' data-test-id='button-rating' />
          </div>
        </div>
      </div>
    </section>
  )
};
