import {router} from './services/router';
import {render} from "./services/render";


document.addEventListener("DOMContentLoaded", function () {

render.header();

render.pageConteiner();

render.footer();

router.resolve();

});
