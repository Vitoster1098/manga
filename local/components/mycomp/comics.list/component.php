<? use Bitrix\Main\Application;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(!empty($arParams["COMICS"])) {
    $arSelect = ["ID", "NAME", "TITLE", "PROPERTY_*", "COUNTRY", "TAGS", "GENRES", "UPDATED_AT",
        "PUBLISHERS", "TRANSLATION_TYPE", "DESCRIPTION", "BOOKMARKS", "PREVIEW_PICTURE", "DETAIL_PAGE_URL",
        "DETAIL_PICTURE"];

    $arFilter = ["IBLOCK_ID" => IntVal($arParams["COMICS"]), "ACTIVE" => "Y"];
    // постраничная навигация
    $arNavParams = array(
        'nPageSize' => $arParams["ITEMS"],   // количество элементов на странице
        'bShowAll' => true, // показывать ссылку «Все элементы»?
    );
    $res = CIBlockElement::GetList([], $arFilter, false, $arNavParams, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["COMICS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "TITLE" => $props['title']['VALUE'],
            "COUNTRY" => $props['country']['VALUE'],
            "CATEGORY" => $props['category']['VALUE'],
            "TAGS" => $props['tags']['VALUE'],
            "GENRES" => $props['genres']['VALUE'],
            "UPDATED_AT" => $props['updated_at']['VALUE'],
            "PUBLISHERS" => $props['publishers']['VALUE'],
            "TRANSLATION_TYPE" => $props['translation_type']['VALUE'],
            "DESCRIPTION" => $props['description']['VALUE'],
            "BOOKMARKS" => $props['bookmarks']['VALUE'],
            "ITEMS" => $arParams["ITEMS"],
            "PREVIEW_PICTURE" => CFile::GetFileArray($fields["PREVIEW_PICTURE"])["SRC"],
            "DETAIL_PICTURE" => CFile::GetFileArray($fields["DETAIL_PICTURE"])["SRC"],
            "LINK" => $fields["DETAIL_PAGE_URL"],
        ];

        /*foreach($props as $arItem) {
            echo '<pre>' . Key($arItem) . ": " . print_r($arItem, 1) . '</pre>';
            echo '<pre>' . var_dump($arItem) . '</pre>';
        }*/
    }
    $request = Application::getInstance()->getContext()->getRequest();
    $PAGEN = $request->getQuery('PAGEN_1');

    $res->NavStart($PAGEN*$arParams['I_PAGE']);
    $arResult['NAV'] = $res;


    unset($res, $ar_result);
}


$this->IncludeComponentTemplate();
?>