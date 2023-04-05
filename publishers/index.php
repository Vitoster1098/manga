<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Издательства");?>

    <filter-form enabled-sef-url="" submit-timeout="800">
        <turbo-frame class="row justify-content-center" id="publishers" data-target="filter-form.frame" data-turbo-action="advance" data-turbo-progress-bar="true">
            <div class="col-12 col-lg-8 col-xl-8">
                <div class="card">
                    <div class="card-header">
                        <h1 class="card-title">
                            Издательства
                            <span class="badge bg-primary ms-1">162</span>
                        </h1>
                    </div>
                    <div class="card-body p-0">
                        <div class="filter-mount p-3">
                            <form class="filter filter-horizontal" id="filter" action="/publishers" method="get" novalidate="" data-target="filter-form.form">
                                <div class="filter-opener align-items-center">
                                    <input-reset class="d-block position-relative flex-fill" event-type="input" data-morphdom-ignore="">
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <svg class="c-icon c-icon-search" width="14" height="14">
                                                    <use xlink:href="#icon-search"></use>
                                                </svg>
                                            </div>
                                            <input type="text" name="q" class="form-control pe-4" autocomplete="off" value="" placeholder="Введите название" data-action="input:filter-form#change" data-target="input-reset.input" />
                                        </div>
                                        <div class="position-absolute py-1 px-2 form-control-clear" data-target="input-reset.button" data-action="click:input-reset#reset" hidden="">
                                            <svg class="c-icon c-icon-cross" width="12" height="12">
                                                <use xlink:href="#icon-cross"></use>
                                            </svg>
                                        </div>
                                    </input-reset>

                                    <div class="filter-opener-options ms-2">
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
                                        <div class="filter-scroller"></div>
                                        <div class="filter-footer">
                                            <button type="submit" class="btn btn-lg btn-primary px-4 me-2">Применить</button>
                                            <a href="/publishers" class="btn btn-lg btn-secondary px-4">Сбросить</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="filter-choose-list"></div>
                            </form>
                        </div>

                        <div class="d-flex align-items-center card-padding-x py-3 border-bottom">
                            <a href="/publisher/bomtoon" class="flex-shrink-0 me-3">
                                <div
                                        class="cover cover-publisher"
                                        data-lazy-load=""
                                        data-background-image="https://static.mangahub.ru/uploads/media/publisher/0020/09/0da206c02c09953f92aa5cde3aa27ff12d21ffb6.jpeg"
                                        data-loaded="true"
                                        style='background-image: url("https://static.mangahub.ru/uploads/media/publisher/0020/09/0da206c02c09953f92aa5cde3aa27ff12d21ffb6.jpeg");'
                                ></div>
                            </a>

                            <div class="d-flex flex-column flex-md-row flex-fill justify-content-between">
                                <div class="d-flex flex-column">
                                    <a href="/publisher/bomtoon" class="mb-3 fs-3 fs-md-5 fw-medium" target="_self">Bomtoon</a>

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
                    <li class="page-item"><a class="page-link" href="/publishers?page=2">2</a></li>
                    <li class="page-item"><a class="page-link" href="/publishers?page=2" rel="next">→</a></li>
                </ul>
            </div>
            <div class="col-12 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Переводчики</div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="nav nav-tabs nav-tabs-line nav-tabs-medium card-padding-x mb-0">
                            <li class="nav-item">
                                <a href="#translator-popular" class="nav-link active" data-bs-toggle="tab">Популярные</a>
                            </li>
                            <li class="nav-item">
                                <a href="#translator-latest" class="nav-link" data-bs-toggle="tab">Новые</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="translator-popular">
                                <div class="py-2 card-padding-x border-bottom">
                                    <div class="d-flex align-items-center py-1">
                                        <div
                                                class="avatar avatar-0 flex-shrink-0"
                                                data-lazy-load=""
                                                data-background-image="https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/small/0010/30/929213.jpeg"
                                                data-loaded="true"
                                                style='background-image: url("https://static.mangahub.ru/uploads/media/crop_avatar/thumbnail/small/0010/30/929213.jpeg");'
                                        ></div>
                                        <a class="mx-2 text-truncate" href="/translator/shiratorizawa">
                                            Shiratorizawa
                                        </a>
                                        <div class="ms-auto text-primary">
                                            23383
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 card-padding-x border-bottom-0">
                                    <div class="d-flex align-items-center py-1">
                                        <div
                                                class="avatar avatar-0 flex-shrink-0"
                                                data-lazy-load=""
                                                data-background-image="https://static.mangahub.ru/uploads/media/avatar/thumbnail/small/0019/06/1805009.jpeg"
                                                data-loaded="true"
                                                style='background-image: url("https://static.mangahub.ru/uploads/media/avatar/thumbnail/small/0019/06/1805009.jpeg");'
                                        ></div>
                                        <a class="mx-2 text-truncate" href="/translator/sychik_protiv_kotov">
                                            Сычик против котов
                                        </a>
                                        <div class="ms-auto text-primary">
                                            11048
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="translator-latest">
                                <div class="py-2 card-padding-x border-bottom">
                                    <div class="d-flex align-items-center py-1">
                                        <div class="avatar avatar-0 flex-shrink-0" data-lazy-load="" data-background-image="https://static.mangahub.ru/uploads/media/avatar/thumbnail/small/0023/89/2288615.jpg"></div>
                                        <a class="mx-2 text-truncate" href="/translator/submissive">
                                            Submissive
                                        </a>
                                        <div class="ms-auto text-muted">
                                            04.04.2023
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 card-padding-x border-bottom-0">
                                    <div class="d-flex align-items-center py-1">
                                        <div class="avatar avatar-0 flex-shrink-0" data-lazy-load="" data-background-image="https://static.mangahub.ru/uploads/media/avatar/thumbnail/small/0023/86/2285155.jpg"></div>
                                        <a class="mx-2 text-truncate" href="/translator/zapadnaia_imperiia_western_empire">
                                            Западная империя | Western Empire
                                        </a>
                                        <div class="ms-auto text-muted">
                                            02.04.2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            Все жанры
                        </div>
                    </div>
                    <div class="card-body">
                        <collapse-multiple class="d-block">
                            <div class="tags">
                                <a class="tag fw-medium" href="/genre/bezumie" data-targets="collapse-multiple.items">
                                    Безумие
                                </a>
                            </div>

                            <button class="btn btn-primary w-100 mt-3" data-target="collapse-multiple.showButton" data-action="click:collapse-multiple#show">
                                <svg class="c-icon c-icon-thumb-down">
                                    <use xlink:href="#icon-thumb-down"></use>
                                </svg>
                                Показать все
                            </button>
                            <button class="btn btn-primary w-100 mt-3" data-target="collapse-multiple.hideButton" data-action="click:collapse-multiple#hide" hidden="">
                                <svg class="c-icon c-icon-thumb-up">
                                    <use xlink:href="#icon-thumb-up"></use>
                                </svg>
                                Скрыть
                            </button>
                        </collapse-multiple>
                    </div>
                </div>
            </div>
        </turbo-frame>
    </filter-form>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>