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
                <div class="px-3 px-sm-0">
                    <div class="row px-0 px-sm-3 py-3 g-3">
                        <div class="col-6 col-md-3 col-lg-4 comic-grid-col-xl">
                            <a href="/title/my_only" class="d-block rounded fast-view-layer" data-fast-view="/fast_view/46123">
                                <div
                                        class="comic-grid-image"
                                        data-lazy-load=""
                                        data-background-image="https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/07/2006394.jpeg"
                                        data-loaded="true"
                                        style='background-image: url("https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/07/2006394.jpeg");'
                                ></div>

                                <div class="fast-view-layer-loader"></div>
                                <div
                                        class="fast-view-layer-scale"
                                        data-lazy-load=""
                                        data-background-image="https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/07/2006394.jpeg"
                                        data-loaded="true"
                                        style='background-image: url("https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/07/2006394.jpeg");'
                                ></div>
                                <div class="fast-view-layer-text">Быстрый просмотр</div>

                                <div class="position-absolute fixed-bottom">
                                    <div class="d-flex flex-column">
                                        <div class="status-label-item">
                                            <span class="status-label status-label-sm status-label-primary status-label-rounded-right">Обновлено</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="text-line-clamp mt-2">
                                <a class="fw-medium" href="/title/my_only">
                                    Мой единственный
                                </a>
                            </div>

                            <div class="text-muted fs-0 fs-sm-1">2021, Манхва</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-turbo="true" data-turbo-pagination="true">
            <ul class="pagination">
                <li class="page-item disabled"><span class="page-link">←</span></li>
                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                <li class="page-item"><a class="page-link" href="/explore?page=2">2</a></li>
                <li class="page-item disabled"><span class="page-link">…</span></li>
                <li class="page-item"><a class="page-link" href="/explore?page=300">300</a></li>
                <li class="page-item"><a class="page-link" href="/explore?page=2" rel="next">→</a></li>
            </ul>
        </div>
    </div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>