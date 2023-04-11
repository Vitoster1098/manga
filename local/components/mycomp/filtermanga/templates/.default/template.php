<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
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
                            <div class="filter-title">
                                <legend class="col-form-label required">Жанры</legend>
                            </div>

                            <div class="filter-options">
                                <button type="button" class="no-focus filter-options-collapse" data-action="click:filter-group#collapse">
                                    <svg class="c-icon c-icon-m-slider-right " width="12" height="15">
                                        <use xlink:href="#icon-m-slider-right"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="filter-body">
                            <filter-input class="filter-input" aria-owns="filter_genres_values" data-target="filter-group.filterInput" data-morphdom-ignore="" hidden="">
                                <input-reset class="d-block position-relative" event-type="change">
                                    <input class="form-control pe-4" type="text" placeholder="Найти..." data-target="input-reset.input" autocomplete="off" spellcheck="false">
                                    <div class="position-absolute py-1 px-1 form-control-clear" data-target="input-reset.button" data-action="click:input-reset#reset" hidden="">

                                        <svg class="c-icon c-icon-cross " width="12" height="12">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                </input-reset>
                            </filter-input>

                            <div class="filter-fieldset">
                                <tri-state>
                                    <input type="hidden" id="filter_genres_excludes" name="filter[genres][excludes]" data-target="tri-state.excludes">

                                    <div id="filter_genres_values" data-filter-list="true">
                                        <?if(!empty($arResult["GENRES"])):?>
                                            <?foreach ($arResult["GENRES"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                                <div class="filter-item" data-targets="filter-group.items" hidden="" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                    <div class="form-check">
                                                        <input type="checkbox" id="filter_genres_values_<?=$arItem["CODE"]?>" name="filter[genres][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>">
                                                        <label class="form-check-label" for="filter_genres_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                    </div>
                                                </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["TAGS"])):?>
                                            <?foreach ($arResult["TAGS"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" hidden="" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_tags_values_<?=$arItem["CODE"]?>" name="filter[tags][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_tags_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["CATEGORIES"])):?>
                                            <?foreach ($arResult["CATEGORIES"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_type_values_manga" name="filter[type][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_type_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["STATUS"])):?>
                                            <?foreach ($arResult["STATUS"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_status_values_ongoing" name="filter[status][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_status_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["TRANSLATE_STATUS"])):?>
                                            <?foreach ($arResult["TRANSLATE_STATUS"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_statusTranslation_values_<?=$arItem["CODE"]?>" name="filter[statusTranslation][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_statusTranslation_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["OUTPUT_FORMATS"])):?>
                                            <?foreach ($arResult["OUTPUT_FORMATS"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_formats_values_<?=$arItem["CODE"]?>" name="filter[formats][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_formats_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>

                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["AGE"])):?>
                                            <?foreach ($arResult["AGE"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_ageRating_values_<?=$arItem["CODE"]?>" name="filter[ageRating][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_ageRating_values_16"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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
                                        <?if(!empty($arResult["COUNTRIES"])):?>
                                            <?foreach ($arResult["COUNTRIES"] as $arItem):
                                                $this->AddEditAction($arItem["ID"], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                                // экшен добавления элемента
                                                $this->AddEditAction($arItem["ID"], $arItem["EDIT_ADD"], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_ADD"));
                                                // экшен удаления элемента
                                                $this->AddDeleteAction($arItem["ID"], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить?"]);
                                                ?>
                                            <div class="filter-item" data-targets="filter-group.items" hidden="" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                                                <div class="form-check">
                                                    <input type="checkbox" id="filter_country_values_<?=$arItem["CODE"]?>" name="filter[country][values][]" class="form-check-input" value="<?=$arItem["CODE"]?>" />
                                                    <label class="form-check-label" for="filter_country_values_<?=$arItem["CODE"]?>"><?=$arItem["NAME"]?></label>
                                                </div>
                                            </div>
                                            <?endforeach;?>
                                        <?else:?>
                                            <div class="pt-2 text-muted text-center" data-filter-empty-state="" hidden="">
                                                Ничего не найдено
                                            </div>
                                        <?endif;?>
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