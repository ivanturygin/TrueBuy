import {router} from './services/router';
import {render} from "./services/render";
import {setState} from "./utility/localStorageUtil";




document.addEventListener("DOMContentLoaded", function () {

// записываем дынные из localStorage в appState

setState();

// отрисовываем header

render.header();

// создаем контейнер для страниц

render.pageConteiner();

// отрисовываем footer;

render.footer();


// запускаем router

router.resolve();

});
