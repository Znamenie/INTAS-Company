## Структура проекта

```
gulp-template
├── src
│   ├── css
│   ├── fonts
│   ├── img
│   ├── svg
│   ├── js
│   ├── sass
│   ├── public
│   ├── templates
│   └── pages
├── package.json
├── README.md
├── gulpfile.js
├── .babelrc
├── .browserslistrc
├── .prettierrc
├── .prettierignore
└── .gitignore
```

* Корень проекта:
    * ```.babelrc``` — настройки Babel
    * ```.prettierrc``` — настройки Prettier
    * ```.prettierignore``` — запрет изменения файлов Prettier
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```package.json``` — список зависимостей
    * ```README.md``` — описание проекта
    * ```gulpfile.js``` — файл конфигурации Gulp
    * ```.browserslistrc``` — файл конфигурации поддерживаемых версий браузеров
    
* Папка ```src``` - используется во время разработки:
    * ```css``` — директория для файлов css библиотек, изначально тут лежит файл сброса стилей
    * ```fonts``` – директория для шрифтов
    * ```img``` — директория для изображений
    * ```svg``` — папка для SVG файлов, для последующей генерации SVG спрайта которые автоматически сгенерируется в папке img
    * ```js``` — директория для js библиотек. Здесь  лежит:
        - `app.js` для кастомного кода;
        - `ofi.min.js` - полифил для CSS-свойства `object-fit`;
        - `lazysizes.min.js` - [библиотека для lazy-load изображений](https://github.com/aFarkas/lazysizes);
        - `imask.min.js` - [библиотека маски](https://imask.js.org/guide.html).
    * ```sass``` — директория для sass файлов
    * ```public``` — директория для пользовательских файлов, все файлы из неё будут скопированы в корень собранного проекта
    * ```templates``` — директория для html файлов которые добавляются в проекте
    * ```pages``` — директория для html страниц
