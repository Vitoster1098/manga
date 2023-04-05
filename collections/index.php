<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Коллекции"); ?>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">
                    Коллекции
                    <span class="badge bg-primary ms-1">18</span>
                </h1>
                <div class="card-options">
                    <a href="/pulls/new/collection" class="btn btn-success">
                        <svg class="c-icon c-icon-plus">
                            <use xlink:href="#icon-plus"></use>
                        </svg>
                        Добавить
                    </a>
                </div>
            </div>
            <div class="card-body p-3">
                <form class="filter filter-horizontal" id="filter" action="/collections" method="get" novalidate="" data-target="filter-form.form">
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
                                    <div class="btn btn-primary btn-icon btn-icon-position">
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
                                <a href="/collections" class="btn btn-lg btn-secondary px-4">Сбросить</a>
                            </div>
                        </div>
                    </div>

                    <div class="filter-choose-list"></div>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="collection-position">
                        <div class="collection-rating">
                            <svg class="c-icon c-icon-star-fill" width="14" height="14">
                                <use xlink:href="#icon-star-fill"></use>
                            </svg>
                            <span class="align-middle fw-bold">4.6</span>
                        </div>
                        <img class="collection-img" src="https://static.mangahub.ru/uploads/media/collection/thumbnail/medium/0022/35/2134629.png" alt="Манхвы про Аристократию." />
                        <a class="collection-link" href="/collection/mankhvy_pro_aristokratiiu"></a>
                    </div>
                    <div class="card-header">
                        <h2 class="card-title collection-title">
                            <a href="/collection/mankhvy_pro_aristokratiiu">Манхвы про Аристократию.</a>
                        </h2>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="text-muted">
                                53 тайтла в списке
                            </div>
                            <div class="ms-auto d-flex align-items-center">
                                <div class="text-muted">
                                    <svg class="c-icon c-icon-eye" width="16" height="16">
                                        <use xlink:href="#icon-eye"></use>
                                    </svg>
                                    34.44К
                                </div>
                                <a href="/collection/mankhvy_pro_aristokratiiu#fos_comment_thread" class="ms-2 text-muted">
                                    <svg class="c-icon c-icon-comments" width="14" height="14">
                                        <use xlink:href="#icon-comments"></use>
                                    </svg>
                                    9
                                </a>
                            </div>
                        </div>

                        <a href="/collection/mankhvy_pro_aristokratiiu" class="d-inline-block fw-medium mt-1">
                            Перейти на страницу коллекции
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <ul class="pagination">
            <li class="page-item disabled"><span class="page-link">←</span></li>
            <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="/collections?page=2">2</a></li>
            <li class="page-item"><a class="page-link" href="/collections?page=2" rel="next">→</a></li>
        </ul>
    </div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>