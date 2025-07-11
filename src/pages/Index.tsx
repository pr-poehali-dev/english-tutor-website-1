import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-900">
              Анна Петрова
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#methods"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Методики
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Цены
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Подготовка к ЕГЭ и ОГЭ по английскому языку
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Индивидуальные занятия с опытным преподавателем. Гарантирую
                повышение балла на 20+ пунктов при регулярных занятиях.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Записаться на пробный урок
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="lg:order-last">
              <img
                src="/img/b6d45a09-eb8e-47a9-8bd1-be5a3fe63eb9.jpg"
                alt="Преподаватель английского языка"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">
                учеников сдают ЕГЭ на 80+ баллов
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">7 лет</div>
              <div className="text-gray-600">опыта подготовки к экзаменам</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">успешно сданных экзаменов</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Обо мне
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Меня зовут Анна Петрова, и я помогаю школьникам успешно сдавать
              ЕГЭ и ОГЭ по английскому языку уже 7 лет
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Мой подход к обучению
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="text-green-500 mt-1 mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">
                    Индивидуальная программа для каждого ученика
                  </p>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="text-green-500 mt-1 mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">
                    Постоянный контроль прогресса и корректировка плана
                  </p>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="text-green-500 mt-1 mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">
                    Психологическая подготовка к экзамену
                  </p>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="text-green-500 mt-1 mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">
                    Разбор реальных заданий прошлых лет
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Образование и квалификация
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900">
                    МГУ им. М.В. Ломоносова
                  </h5>
                  <p className="text-gray-600">
                    Факультет иностранных языков, 2016
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">
                    Cambridge Certificate
                  </h5>
                  <p className="text-gray-600">CAE (Advanced Level), 2017</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">
                    Повышение квалификации
                  </h5>
                  <p className="text-gray-600">
                    Методика подготовки к ЕГЭ, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Методики обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Использую проверенные методики, адаптированные под формат ЕГЭ и
              ОГЭ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Icon name="BookOpen" className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Комплексная подготовка
              </h3>
              <p className="text-gray-600">
                Работаем над всеми аспектами: чтение, аудирование, грамматика,
                письмо и говорение
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Icon name="Target" className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Целевая подготовка
              </h3>
              <p className="text-gray-600">
                Фокусируемся на слабых местах ученика и отрабатываем сложные
                задания
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Icon name="Clock" className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Управление временем
              </h3>
              <p className="text-gray-600">
                Учимся правильно распределять время на экзамене и работать в
                условиях стресса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Цены на обучение
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите удобный формат занятий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Пробный урок
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">500₽</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Диагностика уровня</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">План подготовки</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">60 минут</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                Записаться
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Популярный
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Индивидуальные занятия
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">2000₽</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Персональная программа</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Домашние задания</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">90 минут</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Поддержка 24/7</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Выбрать
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Интенсив (8 занятий)
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                14000₽
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Скидка 12%</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Пробные экзамены</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span className="text-gray-600">Материалы в подарок</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                Выбрать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы учеников
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят мои ученики о подготовке к экзаменам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  М
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Мария К.</h4>
                  <p className="text-gray-600">ЕГЭ 2023, 94 балла</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Анна Петровна помогла мне поднять уровень с 60 до 94 баллов за
                6 месяцев! Очень понятно объясняет и всегда поддерживает."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  А
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Алексей В.</h4>
                  <p className="text-gray-600">ЕГЭ 2023, 89 баллов</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Благодаря занятиям с Анной Петровной смог поступить в МГУ.
                Особенно помогла подготовка к устной части."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  Е
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Елена С.</h4>
                  <p className="text-gray-600">ОГЭ 2023, отлично</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Сдала ОГЭ на отлично! Анна Петровна научила не бояться экзамена
                и правильно распределять время."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь со мной для записи на занятия
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Запишитесь на пробный урок
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Экзамен
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>ЕГЭ</option>
                    <option>ОГЭ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    placeholder="Расскажите о ваших целях и текущем уровне"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Отправить заявку
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      className="text-blue-600 mr-3"
                      size={20}
                    />
                    <span className="text-gray-600">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      className="text-blue-600 mr-3"
                      size={20}
                    />
                    <span className="text-gray-600">
                      anna.petrova@email.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      className="text-blue-600 mr-3"
                      size={20}
                    />
                    <span className="text-gray-600">
                      Telegram: @anna_english
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      className="text-blue-600 mr-3"
                      size={20}
                    />
                    <span className="text-gray-600">
                      Москва, онлайн-занятия
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Расписание
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div>Понедельник - Пятница: 14:00 - 20:00</div>
                  <div>Суббота: 10:00 - 18:00</div>
                  <div>Воскресенье: выходной</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Анна Петрова</h3>
              <p className="text-gray-300">
                Репетитор по английскому языку. Подготовка к ЕГЭ и ОГЭ с
                гарантированным результатом.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Подготовка к ЕГЭ</li>
                <li>Подготовка к ОГЭ</li>
                <li>Индивидуальные занятия</li>
                <li>Интенсивные курсы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div>+7 (999) 123-45-67</div>
                <div>anna.petrova@email.com</div>
                <div>Москва, онлайн</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Анна Петрова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
