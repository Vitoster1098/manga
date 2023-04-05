<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);?>

<footer class="footer mt-auto">
    <div class="container">
        <div class="row py-5">
            <div class="col-12 col-lg-9 d-flex flex-wrap flex-lg-nowrap align-items-stretch justify-content-between justify-content-lg-start">
                <div class="footer-section d-flex flex-column">
                    <div class="footer-title">Каталог</div>
                    <div class="footer-menu">
                        <ul class="list-unstyled m-0">
                            <li class="pt-3 first">
                                <a href="/explore" class="footer-link">
                                    Манга
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/translators" class="footer-link">
                                    Переводчики
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/authors" class="footer-link">
                                    Авторы
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/publishers" class="footer-link">
                                    Издательства
                                </a>
                            </li>
                            <li class="pt-3 last">
                                <a href="/collections" class="footer-link">
                                    Коллекции
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section d-flex flex-column">
                    <div class="footer-title">Информация</div>
                    <div class="footer-menu">
                        <ul class="list-unstyled m-0">
                            <li class="pt-3 first">
                                <a href="/docs/processing_of_personal_data" class="footer-link">
                                    Обработка персональных данных
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/docs/terms-of-service/" class="footer-link">
                                    Пользовательское соглашение
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/docs/copyright" class="footer-link">
                                    Для правообладателей
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/feed" class="footer-link">
                                    Обновления
                                </a>
                            </li>
                            <li class="pt-3 last">
                                <a href="/help" class="footer-link">
                                    Помощь
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section d-flex flex-column">
                    <div class="footer-title">Аккаунт</div>
                    <div class="footer-menu">
                        <ul class="list-unstyled m-0">
                            <li class="pt-3 first">
                                <a href="/login" class="footer-link">
                                    Войти в аккаунт
                                </a>
                            </li>
                            <li class="pt-3">
                                <a href="/register" class="footer-link">
                                    Регистрация
                                </a>
                            </li>
                            <li class="pt-3 last">
                                <a href="/resetting/request" class="footer-link">
                                    Восстановление пароля
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3">
                <div class="row">
                    <div class="col-7 col-lg-12 d-lg-flex justify-content-end">
                        <div class="social-network ms-lg-auto">
                            <div class="social-network-title text-uppercase fw-bold mb-3 text-lg-end">Мы в сoц.сетях</div>
                            <ul class="list-unstyled list-inline m-0 text-lg-right">
                                <li class="list-inline-item me-1">
                                    <a class="social-network-link" href="//vk.com/mangahub" target="_blank">
                                        <svg class="c-icon c-icon-soc-vk ">
                                            <use xlink:href="#icon-soc-vk"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-1">
                                    <a class="social-network-link" href="//www.facebook.com/groups/mangahub" target="_blank">
                                        <svg class="c-icon c-icon-soc-facebook ">
                                            <use xlink:href="#icon-soc-facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-1">
                                    <a class="social-network-link" href="//twitter.com/HubManga" target="_blank">
                                        <svg class="c-icon c-icon-soc-twitter ">
                                            <use xlink:href="#icon-soc-twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-1">
                                    <a class="social-network-link" href="//instagram.com/mangahub_ru/" target="_blank">
                                        <svg class="c-icon c-icon-soc-instagram ">
                                            <use xlink:href="#icon-soc-instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-1">
                                    <a class="social-network-link" href="//www.tiktok.com/@mangahub_ru" target="_blank">
                                        <svg class="c-icon c-icon-soc-tiktok ">
                                            <use xlink:href="#icon-soc-tiktok"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-5 col-lg-12 d-flex justify-content-end mt-lg-4">
                        <form action="/preference" method="post">
                            <input type="hidden" name="preference[_token]" value="390ad2003e952a6fd3fd7a17479e1c.HccVyQLabE7FZcR1_jFsA--XWXAJyLC_4wmB6L0LzNA.d4Fi5GSzFQaWIYJBzHM1MIbzFENludTc2mveudA8mYIuqniTaug9dqgqiQ">
                            <div class="text-white text-uppercase fw-bold mb-3">Тема оформления</div>
                            <theme-switch class="theme-switch align-items-center justify-content-end">
                                <div class="me-2">
                                    <span class="theme-switch-name light">Светлая</span>
                                    <span class="theme-switch-name dark">Темная</span>
                                </div>
                                <input id="theme" type="hidden" name="preference[theme]" value="dark">
                                <label class="theme-switch-track" data-toggle="theme" data-target="#theme">
									<span class="theme-switch-icon">
										<svg class="c-icon c-icon-theme-light theme-switch-svg light ">
											<use xlink:href="#icon-theme-light"></use>
										</svg>
										<svg class="c-icon c-icon-theme-dark theme-switch-svg dark">
											<use xlink:href="#icon-theme-dark"></use>
										</svg>
									</span>
                                </label>
                            </theme-switch>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-subsection">
        <div class="container">
            <div class="d-flex align-items-center py-2">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <a href="/" class="logo d-flex">
                            <logo-loader class="logo-svg d-block" loop-time="40">
                                <svg viewBox="0 0 256 171" width="58" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="m3,70l39,-40l1,22l-40,18z" data-targets="logo-loader.paths"></path>
                                        <path fill="none" d="m57.3333,90.51811l6.6667,63.48189l35.66667,-41l-25.66667,-72.87435l-23.33334,-11.12565z" data-targets="logo-loader.paths"></path>
                                        <path fill="none" d="m102,95l39,-69l33,49l-9,15l-25,-26l-33,42l-5,-11z" data-targets="logo-loader.paths"></path>
                                        <path fill="none" d="m79,152l62,-74l18,18l-10,21l-70,35z" data-targets="logo-loader.paths"></path>
                                        <path fill="none" d="m162,112l71,-108l-21,114l-21,-21l-29,15z" data-targets="logo-loader.paths"></path>
                                        <path fill="none" d="m75,165l115,-57l51,40l-166,17z" data-targets="logo-loader.paths"></path>
                                    </g>
                                </svg>
                            </logo-loader>
                        </a>
                    </div>
                    <div class="text-white">
                        © 2023
                        <span class="d-none d-ms-inline">Все права защищены</span>
                    </div>
                </div>
                <div class="d-flex ms-auto">
                    <a href="/api/feedback/" class="btn btn-primary" data-remote="modal">Напишите нам</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="member-modal" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header align-items-center">
                <h4 class="modal-title">
                    Пользователи
                </h4>
                <button type="button" data-bs-dismiss="modal" class="p-0 m-0 no-focus text-reset">
                    <svg width="14" height="14" class="c-icon c-icon-cross ">
                        <use xlink:href="#icon-cross"></use>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div class="member-list"></div>
                <button type="button" class="btn btn-lg btn-secondary w-100 mt-3">
                    <svg class="c-icon c-icon-m-show-more ">
                        <use xlink:href="#icon-m-show-more"></use>
                    </svg>
                    Загрузить еще
                </button>
            </div>
        </div>
    </div>
</div>
<script>(function(){var js = "window['__CF$cv$params']={r:'7b298ebabcef373a',m:'CcHhVTRSlZZYyYOkBreGx6JW7og1YrE5Dcqt82OjoxI-1680611373-0-AToSZ9/MDgyFWwSzCitCOtBnKm2eJx5S8yuiHNkXE0km6dN9KCGmRoPiwrJpMPRYOUdtqo1VpItWO3fS90QMEpm80hXwY4wXaJKjFGNb96Uw7gaxl4/GyX5HPdse8BlsRw==',s:[0xc4dd8dd07a,0x104fd9c615],u:'/local/templates/personal/js'};var now=Date.now()/1000,offset=14400,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/local/templates/personal/js/invisible.js?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.nonce = '';_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>
<div style="position: fixed; left: -99px;">
    <div id="fa3dfc9765"><iframe frameborder="no" scrolling="no" allowtransparency="true" hidefocus="true" tabindex="-1" marginwidth="0" marginheight="0" src="https://yastatic.net/safeframe-bundles/0.83/1-1-0/render.html" id="id8634" style="opacity: 1;"></iframe></div>
</div>
</body>