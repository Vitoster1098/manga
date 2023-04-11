<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);

if (empty($arResult["ALL_ITEMS"]))
	return;

CUtil::InitJSCore();

if (file_exists($_SERVER["DOCUMENT_ROOT"].$this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css'))
	$APPLICATION->SetAdditionalCSS($this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css');

$menuBlockId = "catalog_menu_".$this->randString();
?>
<div class="ms-2 d-none d-md-flex align-items-center">
    <div class="header-nav dropdown d-flex align-items-center">
        <button class="header-nav-btn flex-shrink-0" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" data-bs-display="static">
            <span class="d-none d-lg-inline">
                <svg class="c-icon c-icon-burger " width="24" height="24">
                    <use xlink:href="#icon-burger"></use>
                </svg>
            </span>
            <span class="fw-bold align-middle">Меню</span>
        </button>
        <div class="dropdown-menu p-0">
            <div class="d-flex align-items-stretch">
                <div class="header-nav-side p-2">
                    <div class="d-flex flex-column align-items-stretch">
                        <?foreach ($arResult["ALL_ITEMS"] as $arItem):?>
                            <?if ($arItem["TEXT"] == 'Каталог'):?>
                                <a href="<?=$arItem["LINK"]?>" class="dropdown-item active justify-content-between">
                                        <span class="d-flex align-items-center">
                                            <svg class="c-icon c-icon-list dropdown-item-icon" width="16" height="16">
                                                <use xlink:href="#<?=$arItem["PARAMS"]["ICON"]?>"></use>
                                            </svg>
                                            <?=$arItem["TEXT"]?>
                                        </span>
                                    <svg class="c-icon c-icon-m-slider-left " width="14" height="14" style="transform: rotate(180deg)">
                                        <use xlink:href="#icon-m-slider-left"></use>
                                    </svg>
                                </a>
                            <?else:?>
                                <a href="<?=$arItem["LINK"]?>" class="dropdown-item justify-content-between">
                                    <span class="d-flex align-items-center">
                                        <svg class="c-icon <?=$arItem["ICON"]?> dropdown-item-icon" width="16" height="16">
                                            <use xlink:href="#<?=$arItem["PARAMS"]["ICON"]?>"></use>
                                        </svg>
                                        <?=$arItem["TEXT"]?>
                                    </span>
                                    <?if($arItem["TEXT"] == 'Обновления'):?>
                                        <span class="badge rounded-pill bg-primary">366</span>
                                    <?endif;?>
                                </a>
                            <?endif?>
                        <?endforeach;?>
                    </div>
                </div>
                <div class="header-nav-sub p-2 d-flex flex-column">
                    <div class="fs-2 fw-medium mb-2">Выберите категорию</div>
                    <div class="d-flex flex-column">
                        <a href="/explore/type-is-manga" class="dropdown-item">
                            Манга
                        </a>
                        <a href="/explore/type-is-manhwa" class="dropdown-item">
                            Манхва
                        </a>
                        <a href="/explore/type-is-manhua" class="dropdown-item">
                            Маньхуа
                        </a>
                        <a href="/explore/type-is-oel" class="dropdown-item">
                            OEL-манга
                        </a>
                        <a href="/explore/type-is-comix" class="dropdown-item">
                            Комикс западный
                        </a>
                        <a href="/explore/type-is-ranobe" class="dropdown-item">
                            Ранобэ
                        </a>
                    </div>
                    <div class="mt-auto">
                        <a href="/random" class="btn btn-primary w-100 mt-1">
                            <svg class="c-icon c-icon-dice ">
                                <use xlink:href="#icon-dice"></use>
                            </svg>
                            Случайный тайтл
                        </a>
                    </div>
                </div>
            </div>
        </div>

<script>
	BX.ready(function () {
		window.obj_<?=$menuBlockId?> = new BX.Main.MenuComponent.CatalogHorizontal('<?=CUtil::JSEscape($menuBlockId)?>', <?=CUtil::PhpToJSObject($arResult["ITEMS_IMG_DESC"])?>);
	});
</script>