<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Каталог");?>
    <div class="col-12 col-lg-4 col-xl-3">
        <form class="filter filter-vertical" id="filter" action="/explore" method="get" novalidate="" data-target="filter-form.form">
            <div class="filter-content">
                <div class="filter-content-dialog">
                    <div class="filter-main border-bottom">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="fw-medium fs-5">Фильтр</div>
                            <button type="button" class="no-focus p-0 text-reset d-inline-block d-sm-none" data-action="click:filter-form#hide">
                                <svg class="c-icon c-icon-cross" width="14" height="14">
                                    <use xlink:href="#icon-cross"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="filter-scroller">
                        <filter-group class="filter-group" id="filter_genres">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Жанры</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <filter-input class="filter-input" aria-owns="filter_genres_values" data-target="filter-group.filterInput" data-morphdom-ignore="" hidden="">
                                    <input-reset class="d-block position-relative" event-type="change">
                                        <input class="form-control pe-4" type="text" placeholder="Найти..." data-target="input-reset.input" autocomplete="off" spellcheck="false" />
                                        <div class="position-absolute py-1 px-1 form-control-clear" data-target="input-reset.button" data-action="click:input-reset#reset" hidden="">
                                            <svg class="c-icon c-icon-cross" width="12" height="12">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </div>
                                    </input-reset>
                                </filter-input>
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_genres_excludes" name="filter[genres][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_genres_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items" hidden="">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_genres_values_bezumie" name="filter[genres][values][]" class="form-check-input" value="bezumie" />
                                                    <label class="form-check-label" for="filter_genres_values_bezumie">Безумие</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                                <div class="mt-2">
                                    <button class="fw-bold px-0 link-primary" type="button" data-action="click:filter-group#show" data-target="filter-group.showButton">
                                        Посмотреть все
                                    </button>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_tags">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Теги</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <filter-input class="filter-input" aria-owns="filter_tags_values" data-target="filter-group.filterInput" data-morphdom-ignore="" hidden="">
                                    <input-reset class="d-block position-relative" event-type="change">
                                        <input class="form-control pe-4" type="text" placeholder="Найти..." data-target="input-reset.input" autocomplete="off" spellcheck="false" />
                                        <div class="position-absolute py-1 px-1 form-control-clear" data-target="input-reset.button" data-action="click:input-reset#reset" hidden="">
                                            <svg class="c-icon c-icon-cross" width="12" height="12">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </div>
                                    </input-reset>
                                </filter-input>
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_tags_excludes" name="filter[tags][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_tags_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items" hidden="">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_tags_values_azartnye_igry" name="filter[tags][values][]" class="form-check-input" value="azartnye_igry" />
                                                    <label class="form-check-label" for="filter_tags_values_azartnye_igry">Азартные игры</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                                <div class="mt-2">
                                    <button class="fw-bold px-0 link-primary" type="button" data-action="click:filter-group#show" data-target="filter-group.showButton">
                                        Посмотреть все
                                    </button>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_year">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label">Год выпуска</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <div class="d-flex gap-2">
                                        <input type="number" id="filter_year_left" name="filter[year][left]" placeholder="От" autocomplete="off" class="form-control" />
                                        <input type="number" id="filter_year_right" name="filter[year][right]" placeholder="До" autocomplete="off" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_type">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Тип</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_type_excludes" name="filter[type][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_type_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_type_values_manga" name="filter[type][values][]" class="form-check-input" value="manga" />
                                                    <label class="form-check-label" for="filter_type_values_manga">Манга</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_status">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Статус</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_status_excludes" name="filter[status][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_status_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_status_values_ongoing" name="filter[status][values][]" class="form-check-input" value="ongoing" />
                                                    <label class="form-check-label" for="filter_status_values_ongoing">Онгоинг</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_statusTranslation">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Статус перевода</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_statusTranslation_excludes" name="filter[statusTranslation][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_statusTranslation_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_statusTranslation_values_processing" name="filter[statusTranslation][values][]" class="form-check-input" value="processing" />
                                                    <label class="form-check-label" for="filter_statusTranslation_values_processing">Продолжается</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_formats">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Формат выпуска</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_formats_excludes" name="filter[formats][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_formats_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_formats_values_digest" name="filter[formats][values][]" class="form-check-input" value="digest" />
                                                    <label class="form-check-label" for="filter_formats_values_digest">Сборник</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_ageRating">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Возрастное ограничение</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_ageRating_excludes" name="filter[ageRating][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_ageRating_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_ageRating_values_16" name="filter[ageRating][values][]" class="form-check-input" value="16" />
                                                    <label class="form-check-label" for="filter_ageRating_values_16">16+</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                            </div>
                        </filter-group>

                        <filter-group class="filter-group" id="filter_country">
                            <div class="filter-header">
                                <div class="filter-title"><legend class="col-form-label required">Страна</legend></div>
                                <div class="filter-options">
                                    <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                        <svg class="c-icon c-icon-m-slider-right" width="12" height="15">
                                            <use xlink:href="#icon-m-slider-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="filter-body">
                                <filter-input class="filter-input" aria-owns="filter_country_values" data-target="filter-group.filterInput" data-morphdom-ignore="" hidden="">
                                    <input-reset class="d-block position-relative" event-type="change">
                                        <input class="form-control pe-4" type="text" placeholder="Найти..." data-target="input-reset.input" autocomplete="off" spellcheck="false" />
                                        <div class="position-absolute py-1 px-1 form-control-clear" data-target="input-reset.button" data-action="click:input-reset#reset" hidden="">
                                            <svg class="c-icon c-icon-cross" width="12" height="12">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </div>
                                    </input-reset>
                                </filter-input>
                                <div class="filter-fieldset">
                                    <tri-state>
                                        <input type="hidden" id="filter_country_excludes" name="filter[country][excludes]" data-target="tri-state.excludes" />

                                        <div id="filter_country_values" data-filter-list="true">
                                            <div class="filter-item" data-targets="filter-group.items" hidden="">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_country_values_australia" name="filter[country][values][]" class="form-check-input" value="australia" />
                                                    <label class="form-check-label" for="filter_country_values_australia">Австралия</label>
                                                </div>
                                            </div>

                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        </div>
                                    </tri-state>
                                </div>
                                <div class="mt-2">
                                    <button class="fw-bold px-0 link-primary" type="button" data-action="click:filter-group#show" data-target="filter-group.showButton">
                                        Посмотреть все
                                    </button>
                                </div>
                            </div>
                        </filter-group>
                    </div>
                    <div class="filter-footer d-flex d-sm-grid gap-2">
                        <button type="submit" class="btn btn-primary btn-lg">Применить</button>
                        <a href="/explore" class="btn btn-secondary btn-lg">Сбросить</a>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">
                    Каталог манги
                    <span class="badge bg-primary ms-1">14399</span>
                </h1>
                <div class="card-options">
                    <div class="d-block d-sm-none" data-turbo="true">
                        <div class="btn-group btn-group-rs">
                            <a href="/explore?catalog_view=grid" class="btn btn-secondary active">
                                <svg class="c-icon c-icon-grid" width="16" height="16">
                                    <use xlink:href="#icon-grid"></use>
                                </svg>
                            </a>
                            <a href="/explore?catalog_view=list" class="btn btn-secondary">
                                <svg class="c-icon c-icon-list" width="16" height="16">
                                    <use xlink:href="#icon-list"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="filter-mount p-3" data-turbo="true">
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="btn btn-primary px-4 d-sm-none" type="button" data-action="click:filter-form#toggle">
                            <svg class="c-icon c-icon-equalizer">
                                <use xlink:href="#icon-equalizer"></use>
                            </svg>
                            Фильтр
                        </button>

                        <details class="details-reset details-overlay" data-filter-sort="">
                            <summary>
                                <div class="btn btn-primary d-none d-ms-inline-flex">
                                    <svg class="c-icon c-icon-sort" width="16" height="16">
                                        <use xlink:href="#icon-sort"></use>
                                    </svg>
                                    <span class="text-truncate">По обновлениям</span>
                                    <span class="dropdown-toggle ms-1"></span>
                                </div>
                                <div class="btn btn-primary btn-icon btn-icon-position d-inline-flex d-ms-none">
                                    <svg class="c-icon c-icon-sort" width="16" height="16">
                                        <use xlink:href="#icon-sort"></use>
                                    </svg>
                                </div>
                            </summary>
                            <div class="select-menu select-menu-left">
                                <div class="select-menu-modal">
                                    <div class="select-menu-header">
                                        <div class="select-menu-title">Выберите сортировку</div>
                                        <button class="select-menu-close-button" type="button" data-dismiss="details">
                                            <svg class="c-icon c-icon-cross" width="14" height="14">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="select-menu-list">
                                        <label class="select-menu-item mb-0 selected" for="filter_sort_update" data-dismiss="details">
                                            <input class="d-none" type="radio" id="filter_sort_update" name="filter[sort]" value="update" checked="" form="filter" />
                                            <span class="select-menu-icon select-menu-icon-check">
											<svg class="c-icon c-icon-checked" width="12" height="16">
												<use xlink:href="#icon-checked"></use>
											</svg>
										</span>
                                            По обновлениям
                                        </label>
                                        <label class="select-menu-item mb-0" for="filter_sort_date" data-dismiss="details">
                                            <input class="d-none" type="radio" id="filter_sort_date" name="filter[sort]" value="date" form="filter" />
                                            <span class="select-menu-icon select-menu-icon-check">
											<svg class="c-icon c-icon-checked" width="12" height="16">
												<use xlink:href="#icon-checked"></use>
											</svg>
										</span>
                                            По дате
                                        </label>
                                        <label class="select-menu-item mb-0" for="filter_sort_rating" data-dismiss="details">
                                            <input class="d-none" type="radio" id="filter_sort_rating" name="filter[sort]" value="rating" form="filter" />
                                            <span class="select-menu-icon select-menu-icon-check">
											<svg class="c-icon c-icon-checked" width="12" height="16">
												<use xlink:href="#icon-checked"></use>
											</svg>
										</span>
                                            По рейтингу
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <div class="d-none d-sm-block">
                            <div class="btn-group btn-group-rs">
                                <a href="/explore?catalog_view=grid" class="btn btn-secondary active">
                                    <svg class="c-icon c-icon-grid" width="16" height="16">
                                        <use xlink:href="#icon-grid"></use>
                                    </svg>
                                </a>
                                <a href="/explore?catalog_view=list" class="btn btn-secondary">
                                    <svg class="c-icon c-icon-list" width="16" height="16">
                                        <use xlink:href="#icon-list"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="filter-choose-list"></div>
                </div>
                <!-- Шаблон -->
                <?$APPLICATION->IncludeComponent("bitrix:news", "manga.list", Array(
                    "ADD_ELEMENT_CHAIN" => "Y",	// Включать название элемента в цепочку навигации
                    "ADD_SECTIONS_CHAIN" => "Y",	// Включать раздел в цепочку навигации
                    "AJAX_MODE" => "N",	// Включить режим AJAX
                    "AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
                    "AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
                    "AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
                    "AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
                    "BROWSER_TITLE" => "title",	// Установить заголовок окна браузера из свойства
                    "CACHE_FILTER" => "N",	// Кешировать при установленном фильтре
                    "CACHE_GROUPS" => "Y",	// Учитывать права доступа
                    "CACHE_TIME" => "36000000",	// Время кеширования (сек.)
                    "CACHE_TYPE" => "A",	// Тип кеширования
                    "CATEGORY_CODE" => "CATEGORY",	// Код свойства
                    "CATEGORY_IBLOCK" => array(	// Инфоблоки
                        0 => "9",
                    ),
                    "CATEGORY_ITEMS_COUNT" => "5",	// Максимальное количество материалов из одного инфоблока
                    "CATEGORY_THEME_9" => "list",	// Стиль вывода материалов из инфоблока manga[9]
                    "CHECK_DATES" => "Y",	// Показывать только активные на данный момент элементы
                    "DETAIL_ACTIVE_DATE_FORMAT" => "d.m.Y",	// Формат показа даты
                    "DETAIL_DISPLAY_BOTTOM_PAGER" => "Y",	// Выводить под списком
                    "DETAIL_DISPLAY_TOP_PAGER" => "N",	// Выводить над списком
                    "DETAIL_FIELD_CODE" => array(	// Поля
                        0 => "",
                        1 => "",
                    ),
                    "DETAIL_PAGER_SHOW_ALL" => "Y",	// Показывать ссылку "Все"
                    "DETAIL_PAGER_TEMPLATE" => "",	// Название шаблона
                    "DETAIL_PAGER_TITLE" => "Манга",	// Название категорий
                    "DETAIL_PROPERTY_CODE" => array(	// Свойства
                        0 => "",
                        1 => "",
                    ),
                    "DETAIL_SET_CANONICAL_URL" => "N",	// Устанавливать канонический URL
                    "DISPLAY_AS_RATING" => "rating",	// В качестве рейтинга показывать
                    "DISPLAY_BOTTOM_PAGER" => "Y",	// Выводить под списком
                    "DISPLAY_DATE" => "Y",	// Выводить дату элемента
                    "DISPLAY_NAME" => "Y",	// Выводить название элемента
                    "DISPLAY_PICTURE" => "Y",	// Выводить изображение для анонса
                    "DISPLAY_PREVIEW_TEXT" => "Y",	// Выводить текст анонса
                    "DISPLAY_TOP_PAGER" => "Y",	// Выводить над списком
                    "FILE_404" => "Искомый комикс не найден",	// Страница для показа (по умолчанию /404.php)
                    "FILTER_FIELD_CODE" => array(
                        0 => "SHOW_COUNTER",
                        1 => "",
                    ),
                    "FILTER_NAME" => "",
                    "FILTER_PROPERTY_CODE" => array(
                        0 => "",
                        1 => "",
                    ),
                    "HIDE_LINK_WHEN_NO_DETAIL" => "N",	// Скрывать ссылку, если нет детального описания
                    "IBLOCK_ID" => "9",	// Инфоблок
                    "IBLOCK_TYPE" => "manga",	// Тип инфоблока
                    "INCLUDE_IBLOCK_INTO_CHAIN" => "Y",	// Включать инфоблок в цепочку навигации
                    "LIST_ACTIVE_DATE_FORMAT" => "d.m.Y",	// Формат показа даты
                    "LIST_FIELD_CODE" => array(	// Поля
                        0 => "SHOW_COUNTER",
                        1 => "",
                    ),
                    "LIST_PROPERTY_CODE" => array(	// Свойства
                        0 => "",
                        1 => "",
                    ),
                    "MAX_VOTE" => "5",	// Максимальный балл
                    "MESSAGE_404" => "",
                    "META_DESCRIPTION" => "description",	// Установить описание страницы из свойства
                    "META_KEYWORDS" => "category",	// Установить ключевые слова страницы из свойства
                    "NEWS_COUNT" => "20",	// Количество новостей на странице
                    "PAGER_BASE_LINK_ENABLE" => "N",	// Включить обработку ссылок
                    "PAGER_DESC_NUMBERING" => "N",	// Использовать обратную навигацию
                    "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",	// Время кеширования страниц для обратной навигации
                    "PAGER_SHOW_ALL" => "N",	// Показывать ссылку "Все"
                    "PAGER_SHOW_ALWAYS" => "N",	// Выводить всегда
                    "PAGER_TEMPLATE" => "modern",	// Шаблон постраничной навигации
                    "PAGER_TITLE" => "Главы",	// Название категорий
                    "PREVIEW_TRUNCATE_LEN" => "",	// Максимальная длина анонса для вывода (только для типа текст)
                    "SEF_MODE" => "N",	// Включить поддержку ЧПУ
                    "SET_LAST_MODIFIED" => "N",	// Устанавливать в заголовках ответа время модификации страницы
                    "SET_STATUS_404" => "Y",	// Устанавливать статус 404
                    "SET_TITLE" => "Y",	// Устанавливать заголовок страницы
                    "SHOW_404" => "Y",	// Показ специальной страницы
                    "SORT_BY1" => "ACTIVE_FROM",	// Поле для первой сортировки новостей
                    "SORT_BY2" => "SORT",	// Поле для второй сортировки новостей
                    "SORT_ORDER1" => "ASC",	// Направление для первой сортировки новостей
                    "SORT_ORDER2" => "DESC",	// Направление для второй сортировки новостей
                    "STRICT_SECTION_CHECK" => "N",	// Строгая проверка раздела
                    "USE_CATEGORIES" => "Y",	// Выводить материалы по теме
                    "USE_FILTER" => "N",	// Показывать фильтр
                    "USE_PERMISSIONS" => "N",	// Использовать дополнительное ограничение доступа
                    "USE_RATING" => "Y",	// Разрешить голосование
                    "USE_REVIEW" => "N",	// Разрешить отзывы
                    "USE_RSS" => "N",	// Разрешить RSS
                    "USE_SEARCH" => "Y",	// Разрешить поиск
                    "USE_SHARE" => "N",	// Отображать панель соц. закладок
                    "VARIABLE_ALIASES" => array(
                        "ELEMENT_ID" => "ELEMENT_ID",
                        "SECTION_ID" => "SECTION_ID",
                    ),
                    "VOTE_NAMES" => array(	// Подписи к баллам
                        0 => "1",
                        1 => "2",
                        2 => "3",
                        3 => "4",
                        4 => "5",
                        5 => "",
                    )
                ),
                    false
                );?>

            </div>
        </div>
    </div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>