<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Переводчики");?>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    Список переводчиков
                    <span class="badge bg-primary ms-1">5224</span>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="filter-mount card-padding-x py-3">
                    <form class="filter filter-horizontal" id="filter" action="/translators" method="get" novalidate="" data-target="filter-form.form">
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
                                            <span class="text-truncate">По подписчикам</span>
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
                                                <label class="select-menu-item mb-0 selected" for="filter_sort_subscription" data-dismiss="details">
                                                    <input class="d-none" type="radio" id="filter_sort_subscription" name="filter[sort]" value="subscription" checked="" />
                                                    <span class="select-menu-icon select-menu-icon-check">
													<svg class="c-icon c-icon-checked" width="12" height="16">
														<use xlink:href="#icon-checked"></use>
													</svg>
												</span>
                                                    По подписчикам
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
                                            <div class="filter-title clearfix"><legend class="col-form-label required">Проверенная группа</legend></div>
                                        </div>
                                        <div class="filter-body">
                                            <div id="filter_isVerify">
                                                <div class="form-check form-check-inline">
                                                    <input type="radio" id="filter_isVerify_0" name="filter[isVerify]" required="required" class="form-check-input" value="yes" />
                                                    <label class="form-check-label required" for="filter_isVerify_0">Да</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input type="radio" id="filter_isVerify_1" name="filter[isVerify]" required="required" class="form-check-input" value="no" />
                                                    <label class="form-check-label required" for="filter_isVerify_1">Нет</label>
                                                </div>
                                            </div>
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
                                </div>
                                <div class="filter-footer">
                                    <button type="submit" class="btn btn-lg btn-primary px-4 me-2">Применить</button>
                                    <a href="/translators" class="btn btn-lg btn-secondary px-4">Сбросить</a>
                                </div>
                            </div>
                        </div>

                        <div class="filter-choose-list"></div>
                    </form>
                </div>

                <div class="d-flex align-items-center card-padding-x py-3 border-bottom">
                    <div class="d-flex align-items-center flex-fill">
                        <a
                                href="/translator/shiratorizawa"
                                class="flex-shrink-0 avatar-3 avatar-sm-4 avatar-pill"
                                data-lazy-load=""
                                data-background-image="https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/big/0010/30/929213.jpeg"
                                data-loaded="true"
                                style='background-image: url("https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/big/0010/30/929213.jpeg");'
                        ></a>

                        <div class="ms-3 d-flex align-items-center justify-content-between flex-fill">
                            <div class="d-flex flex-column">
                                <a href="/translator/shiratorizawa" target="_self" class="mb-1 fw-bold">
                                    Shiratorizawa
                                    <span class="text-primary" title="Проверенный переводчик" data-bs-toggle="tooltip" data-bs-placement="top">
									<svg class="c-icon c-icon-verified-user" width="16" height="16">
										<use xlink:href="#icon-verified-user"></use>
									</svg>
								</span>
                                </a>
                                <div class="fs-1 text-muted">
                                    23383 подписчика
                                </div>
                            </div>
                            <div class="ms-2">
                                <a data-remote="modal" href="/login/form?_target_path=/translators" class="btn btn-secondary d-none d-sm-inline-flex">
                                    <svg class="c-icon c-icon-user-plus">
                                        <use xlink:href="#icon-user-plus"></use>
                                    </svg>
                                    Подписаться
                                </a>
                                <a data-remote="modal" href="/login/form?_target_path=/translators" class="btn btn-secondary btn-icon d-inline-flex d-sm-none">
                                    <svg class="c-icon c-icon-user-plus">
                                        <use xlink:href="#icon-user-plus"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center card-padding-x py-3 border-bottom-0">
                    <div class="d-flex align-items-center flex-fill">
                        <a
                                href="/translator/pochemu_by_i_net_esli_da"
                                class="flex-shrink-0 avatar-3 avatar-sm-4 avatar-pill"
                                data-lazy-load=""
                                data-background-image="https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/big/0023/88/2287973.png"
                                data-loaded="true"
                                style='background-image: url("https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/big/0023/88/2287973.png");'
                        ></a>

                        <div class="ms-3 d-flex align-items-center justify-content-between flex-fill">
                            <div class="d-flex flex-column">
                                <a href="/translator/pochemu_by_i_net_esli_da" target="_self" class="mb-1 fw-bold">
                                    Почему бы и нет, если да
                                    <span class="text-primary" title="Проверенный переводчик" data-bs-toggle="tooltip" data-bs-placement="top">
									<svg class="c-icon c-icon-verified-user" width="16" height="16">
										<use xlink:href="#icon-verified-user"></use>
									</svg>
								</span>
                                </a>
                                <div class="fs-1 text-muted">
                                    4544 подписчика
                                </div>
                            </div>
                            <div class="ms-2">
                                <a data-remote="modal" href="/login/form?_target_path=/translators" class="btn btn-secondary d-none d-sm-inline-flex">
                                    <svg class="c-icon c-icon-user-plus">
                                        <use xlink:href="#icon-user-plus"></use>
                                    </svg>
                                    Подписаться
                                </a>
                                <a data-remote="modal" href="/login/form?_target_path=/translators" class="btn btn-secondary btn-icon d-inline-flex d-sm-none">
                                    <svg class="c-icon c-icon-user-plus">
                                        <use xlink:href="#icon-user-plus"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ul class="pagination">
            <li class="page-item disabled"><span class="page-link">←</span></li>
            <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="/translators?page=2">2</a></li>
            <li class="page-item disabled"><span class="page-link">…</span></li>
            <li class="page-item"><a class="page-link" href="/translators?page=262">262</a></li>
            <li class="page-item"><a class="page-link" href="/translators?page=2" rel="next">→</a></li>
        </ul>
    </div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>