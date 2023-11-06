import {router} from './services/router';
import {setState} from "./services/localStorageUtil";
import {render} from "./services/render";


document.addEventListener("DOMContentLoaded", function () {

setState();

render.header();

render.pageConteiner();

render.footer();

router.resolve();

});
