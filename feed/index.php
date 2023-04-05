<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Обновления"); ?>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    Последние обновления
                    <span class="badge bg-primary ms-1">373</span>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="filter-mount card-padding-x py-3">
                    <form class="filter filter-horizontal" id="filter" action="" method="get" novalidate="" data-target="filter-form.form">
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
                                            <span class="text-truncate">По обновлениям</span>
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
                                                <label class="select-menu-item mb-0 selected" for="filter_sort_update" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_update" name="filter[sort]" value="update" checked="" />
                                                    <span class="select-menu-icon select-menu-icon-check">
													<svg class="c-icon c-icon-checked" width="12" height="16">
														<use xlink:href="#icon-checked"></use>
													</svg>
												</span>
                                                    По обновлениям
                                                </label>
                                                <label class="select-menu-item mb-0" for="filter_sort_date" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_date" name="filter[sort]" value="date" />
                                                    <span class="select-menu-icon select-menu-icon-check">
													<svg class="c-icon c-icon-checked" width="12" height="16">
														<use xlink:href="#icon-checked"></use>
													</svg>
												</span>
                                                    По дате
                                                </label>
                                                <label class="select-menu-item mb-0" for="filter_sort_rating" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_rating" name="filter[sort]" value="rating" />
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
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Тип</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_type_excludes" name="filter[type][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_type_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_type_values_manga" name="filter[type][values][]" class="form-check-input" value="manga" />
                                                            <label class="form-check-label" for="filter_type_values_manga">Манга</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Формат выпуска</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_formats_excludes" name="filter[formats][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_formats_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_formats_values_digest" name="filter[formats][values][]" class="form-check-input" value="digest" />
                                                            <label class="form-check-label" for="filter_formats_values_digest">Сборник</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

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
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Статус</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_status_excludes" name="filter[status][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_status_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_status_values_ongoing" name="filter[status][values][]" class="form-check-input" value="ongoing" />
                                                            <label class="form-check-label" for="filter_status_values_ongoing">Онгоинг</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Статус перевода</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_statusTranslation_excludes" name="filter[statusTranslation][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_statusTranslation_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_statusTranslation_values_processing" name="filter[statusTranslation][values][]" class="form-check-input" value="processing" />
                                                            <label class="form-check-label" for="filter_statusTranslation_values_processing">Продолжается</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Возрастное ограничение</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <tri-state>
                                                <input type="hidden" id="filter_ageRating_excludes" name="filter[ageRating][excludes]" data-target="tri-state.excludes" />

                                                <div id="filter_ageRating_values" class="filter-grid">
                                                    <div class="filter-grid-item">
                                                        <div class="form-check">
                                                            <input type="checkbox" id="filter_ageRating_values_16" name="filter[ageRating][values][]" class="form-check-input" value="16" />
                                                            <label class="form-check-label" for="filter_ageRating_values_16">16+</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tri-state>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-header">
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Страна</legend></div>
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
                                    <a href="/explore" class="btn btn-lg btn-secondary px-4">Сбросить</a>
                                </div>
                            </div>
                        </div>

                        <div class="filter-choose-list"></div>
                    </form>
                </div>

                <div class="row card-padding-x py-3 g-0 d-none d-md-flex border-bottom">
                    <div class="feed-header col-8 col-md-5">Тайтл</div>
                    <div class="feed-header col-md-4">Новые главы</div>
                    <div class="feed-header col-4 col-md-3 text-end">Дата обновления</div>
                </div>
                <div class="d-flex flex-column">
                    <div class="feed-item d-flex align-items-stretch card-padding-x py-3">
                        <div class="flex-shrink-0 me-3">
                            <a
                                    href="/title/otome_game_no_heroine_de_saikyou_survival"
                                    class="cover cover-feed"
                                    data-lazy-load=""
                                    data-background-image="https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/08/2007769.jpeg"
                                    data-loaded="true"
                                    style='background-image: url("https://static.mangahub.ru/uploads/media/manga_cover/thumbnail/big/0021/08/2007769.jpeg");'
                            ></a>
                        </div>
                        <div class="row d-flex align-content-start align-content-md-center align-items-md-center flex-fill min-w-0">
                            <div class="col-12 col-md-4 d-flex d-md-block">
                                <div class="w-100">
                                    <div class="d-flex d-md-none align-items-center justify-content-between mb-2">
                                        <div class="text-truncate text-muted">
                                            Манга
                                        </div>
                                        <div class="ms-2 flex-shrink-0">
                                            <svg class="c-icon c-icon-m-clock" width="12" height="12">
                                                <use xlink:href="#icon-m-clock"></use>
                                            </svg>
                                            <span class="align-middle">1 час назад</span>
                                        </div>
                                    </div>
                                    <a class="feed-item-title fs-2" href="/title/otome_game_no_heroine_de_saikyou_survival">
                                        Выживание сильнейшей героини отомэ-игры
                                    </a>
                                </div>
                                <div class="d-none d-md-block ms-auto ms-md-0">
                                    <div class="text-muted text-nowrap ms-2 ms-md-0">
                                        1 новая глава
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-5 mt-3 mt-md-0">
                                <div class="d-table w-100">
                                    <div class="d-table-row">
                                        <div class="d-table-cell text-end">
                                            <div class="avatar-list avatar-list-stacked text-nowrap">
                                                <a
                                                        class="avatar avatar-0 mb-0"
                                                        href="/translator/sawanchik"
                                                        title="Banana Milk"
                                                        data-lazy-load=""
                                                        data-background-image="https://static.mangahub.ru/uploads/media/avatar/thumbnail/profile/0020/23/1922367.jpeg"
                                                        data-bs-toggle="tooltip"
                                                        data-loaded="true"
                                                        style='background-image: url("https://static.mangahub.ru/uploads/media/avatar/thumbnail/profile/0020/23/1922367.jpeg");'
                                                ></a>
                                            </div>
                                        </div>
                                        <div class="d-table-cell w-100 max-w-0 text-truncate align-middle">
                                            <a class="feed-item-chapter ms-3" href="/read/548331">
                                                Том 3. Глава 15
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 d-none d-md-block">
                                <div class="text-muted text-end">
                                    <svg class="c-icon c-icon-m-clock" width="14" height="14">
                                        <use xlink:href="#icon-m-clock"></use>
                                    </svg>
                                    1 час назад
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ul class="pagination">
            <li class="page-item disabled"><span class="page-link">←</span></li>
            <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="/feed?page=2">2</a></li>
            <li class="page-item disabled"><span class="page-link">…</span></li>
            <li class="page-item"><a class="page-link" href="/feed?page=8">8</a></li>
            <li class="page-item"><a class="page-link" href="/feed?page=2" rel="next">→</a></li>
        </ul>
    </div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>