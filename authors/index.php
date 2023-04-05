<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Авторы"); ?>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">
                    Список авторов
                    <span class="badge bg-primary ms-1">14317</span>
                </h1>
            </div>
            <div class="card-body p-0">
                <div class="filter-mount p-3">
                    <form class="filter filter-horizontal" id="filter" action="/authors" method="get" novalidate="" data-target="filter-form.form">
                        <div class="filter-opener">
                            <button class="btn btn-primary px-4" type="button" data-action="click:filter-form#toggle">
                                <svg class="c-icon c-icon-equalizer">
                                    <use xlink:href="#icon-equalizer"></use>
                                </svg>
                                Фильтр
                            </button>
                            <div class="filter-opener-options ms-3">
                                <details class="details-reset details-overlay" data-filter-sort="">
                                    <summary>
                                        <div class="btn btn-primary d-none d-ms-inline-flex">
                                            <svg class="c-icon c-icon-sort" width="16" height="16">
                                                <use xlink:href="#icon-sort"></use>
                                            </svg>
                                            <span class="text-truncate">По рейтингу</span>
                                            <span class="dropdown-toggle ms-1"></span>
                                        </div>
                                        <div class="btn btn-primary btn-icon btn-icon-position d-inline-flex d-ms-none">
                                            <svg class="c-icon c-icon-sort" width="16" height="16">
                                                <use xlink:href="#icon-sort"></use>
                                            </svg>
                                        </div>
                                    </summary>
                                    <div class="select-menu select-menu-right">
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
                                                <label class="select-menu-item mb-0" for="filter_sort_date" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_date" name="filter[sort]" value="date" />
                                                    <span class="select-menu-icon select-menu-icon-check">
													<svg class="c-icon c-icon-checked" width="12" height="16">
														<use xlink:href="#icon-checked"></use>
													</svg>
												</span>
                                                    По дате
                                                </label>
                                                <label class="select-menu-item mb-0 selected" for="filter_sort_rating" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_rating" name="filter[sort]" value="rating" checked="" />
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
                            </div>
                        </div>
                        <div class="filter-content">
                            <div class="filter-content-dialog">
                                <div class="filter-main border-bottom">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-bold fs-5">Фильтр</div>
                                        <button type="button" class="no-focus p-0 text-reset" data-action="click:filter-form#hide">
                                            <svg class="c-icon c-icon-cross" width="14" height="14">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="filter-scroller">
                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Жанры</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_genres_excludes" name="filter[genres][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_genres_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_genres_values_bezumie" name="filter[genres][values][]" class="form-check-input" value="bezumie" />
                                                            <label class="form-check-label" for="filter_genres_values_bezumie">Безумие</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Страны</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_country_excludes" name="filter[country][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_country_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_country_values_australia" name="filter[country][values][]" class="form-check-input" value="australia" />
                                                            <label class="form-check-label" for="filter_country_values_australia">Австралия</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter-footer">
                                    <button type="submit" class="btn btn-lg btn-primary px-4 me-2">Применить</button>
                                    <a href="/authors" class="btn btn-lg btn-secondary px-4">Сбросить</a>
                                </div>
                            </div>
                        </div>

                        <div class="filter-choose-list"></div>
                    </form>
                </div>

                <div class="d-flex align-items-center card-padding-x py-3 border-bottom">
                    <a href="/author/dziundzi_ito" class="flex-shrink-0 me-3">
                        <div
                                class="cover cover-list"
                                data-lazy-load=""
                                data-background-image="https://static.mangahub.ru/uploads/media/author/thumbnail/big/0008/43/742248.jpeg"
                                data-loaded="true"
                                style='background-image: url("https://static.mangahub.ru/uploads/media/author/thumbnail/big/0008/43/742248.jpeg");'
                        ></div>
                    </a>

                    <div class="d-flex flex-column flex-md-row flex-fill justify-content-between">
                        <div class="d-flex flex-column">
                            <a href="/author/dziundzi_ito" class="mb-3 fs-3 fs-md-5 fw-medium" target="_self">Дзюндзи Ито</a>

                            <div class="d-flex flex-shrink-0 align-items-center">
                                <svg class="c-icon c-icon-mem-good" width="32" height="32">
                                    <use xlink:href="#icon-mem-good"></use>
                                </svg>
                                <div class="ms-2 text-muted">
                                    Рейтинг: 5
                                </div>
                            </div>
                        </div>

                        <div class="mt-3 mt-md-0">
                            <a class="d-inline-flex btn btn-primary" data-remote="modal" href="/login/form">
                                <svg class="c-icon c-icon-heart">
                                    <use xlink:href="#icon-heart"></use>
                                </svg>
                                Добавить в избранное
                            </a>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center card-padding-x py-3 border-bottom-0">
                    <a href="/author/penki" class="flex-shrink-0 me-3">
                        <div
                                class="cover cover-list"
                                data-lazy-load=""
                                data-background-image="https://static.mangahub.ru/dist/images/no-photo.png"
                                data-loaded="true"
                                style='background-image: url("https://static.mangahub.ru/dist/images/no-photo.png");'
                        ></div>
                    </a>

                    <div class="d-flex flex-column flex-md-row flex-fill justify-content-between">
                        <div class="d-flex flex-column">
                            <a href="/author/penki" class="mb-3 fs-3 fs-md-5 fw-medium" target="_self">Пенки</a>

                            <div class="d-flex flex-shrink-0 align-items-center">
                                <svg class="c-icon c-icon-mem-good" width="32" height="32">
                                    <use xlink:href="#icon-mem-good"></use>
                                </svg>
                                <div class="ms-2 text-muted">
                                    Рейтинг: 4.9
                                </div>
                            </div>
                        </div>

                        <div class="mt-3 mt-md-0">
                            <a class="d-inline-flex btn btn-primary" data-remote="modal" href="/login/form">
                                <svg class="c-icon c-icon-heart">
                                    <use xlink:href="#icon-heart"></use>
                                </svg>
                                Добавить в избранное
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ul class="pagination">
            <li class="page-item disabled"><span class="page-link">←</span></li>
            <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="/authors?page=2">2</a></li>
            <li class="page-item disabled"><span class="page-link">…</span></li>
            <li class="page-item"><a class="page-link" href="/authors?page=299">299</a></li>
            <li class="page-item"><a class="page-link" href="/authors?page=2" rel="next">→</a></li>
        </ul>
    </div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>