<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>

<div class="col-12 col-lg-8 col-xl-9">
    <div class="card">
        <div class="card-header">
            <h1 class="card-title">
                <?=$this->title?>
                <span class="badge bg-primary ms-1"><?=count($arResult["COMICS"])?></span>
            </h1>
            <div class="card-options">
                <div class="d-block d-sm-none" data-turbo="true">
                    <div class="btn-group btn-group-rs">
                        <a href="/explore?catalog_view=grid" class="btn btn-secondary">
                            <svg class="c-icon c-icon-grid" width="16" height="16">
                                <use xlink:href="#icon-grid"></use>
                            </svg>
                        </a>
                        <a href="/explore?catalog_view=list" class="btn btn-secondary active">
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
                            <a href="/explore?catalog_view=grid" class="btn btn-secondary">
                                <svg class="c-icon c-icon-grid" width="16" height="16">
                                    <use xlink:href="#icon-grid"></use>
                                </svg>
                            </a>
                            <a href="/explore?catalog_view=list" class="btn btn-secondary active">
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
                    <?foreach ($arResult["COMICS"] as $arItem):?>
                        <div class="col-12 col-md-6 comic-list">
                            <div class="d-flex align-items-stretch">
                                <div class="flex-shrink-0 me-3">
                                    <a href="<?=$arItem["LINK"]?>" class="d-block rounded fast-view-layer fast-view-layer-sm" data-fast-view="/fast_view/39444">
                                        <div
                                            class="cover cover-list"
                                            data-lazy-load=""
                                            data-background-image="<?=$arItem["PREVIEW_PICTURE"]?>"
                                            data-loaded="true"
                                            style='background-image: url("<?=$arItem["PREVIEW_PICTURE"]?>");'
                                        ></div>

                                        <div class="fast-view-layer-loader"></div>
                                        <div
                                            class="fast-view-layer-scale"
                                            data-lazy-load=""
                                            data-background-image="<?=$arItem["PREVIEW_PICTURE"]?>"
                                            data-loaded="true"
                                            style='background-image: url("<?=$arItem["PREVIEW_PICTURE"]?>");'
                                        ></div>
                                        <div class="fast-view-layer-text fs-0 py-1">Быстрый просмотр</div>
                                    </a>
                                </div>

                                <div class="d-flex flex-column flex-fill justify-content-center">
                                    <div class="text-line-clamp">
                                        <a class="fw-medium fs-2" href="<?=$arItem["LINK"]?>">
                                            <?=$arItem["TITLE"]?>
                                        </a>
                                    </div>
                                    <div class="text-muted mt-1 fs-1">
                                        <?=substr($arItem["UPDATED_AT"], 6)?>, <?=$arItem["CATEGORY"]?>
                                    </div>
                                </div>
                            </div>
                            <div class="border-bottom mt-3 comic-list-break"></div>
                        </div>
                    <?endforeach;?>
                </div>
            </div>
        </div>
    </div>

    <?$APPLICATION->IncludeComponent(
        "bitrix:system.pagenavigation",
        "modern",
        Array()
    );?>

    <?/*
    $navStr = $arResult['NAV']->GetPageNavStringEx($navComponentObject, "Страницы:", "round");
    */?>
    <?#$navStr;?>

    <?/*if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
        <?=$arResult["NAV_STRING"]?>
    <?endif;*/?>
</div>
