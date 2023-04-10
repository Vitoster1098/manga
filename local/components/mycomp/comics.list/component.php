<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(!empty($arParams["COMICS"])) {
    $arSelect = ["ID", "NAME", "TITLE", "PROPERTY_*", "COUNTRY", "TAGS", "GENRES", "UPDATED_AT",
        "PUBLISHERS", "TRANSLATION_TYPE", "DESCRIPTION", "BOOKMARKS", "PREVIEW_PICTURE", "DETAIL_PAGE_URL"];

    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["COMICS"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, []);

    while($ar_result = $res->GetNextElement())
    {
        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["COMICS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "TITLE" => $props['TITLE']['VALUE'],
            "COUNTRY" => $fields['COUNTRY'],
            "TAGS" => $fields['TAGS'],
            "GENRES" => $fields['GENRES'],
            "UPDATED_AT" => $fields['UPDATED_AT'],
            "PUBLISHERS" => $fields['PUBLISHERS'],
            "TRANSLATION_TYPE" => $fields['TRANSLATION_TYPE'],
            "DESCRIPTION" => $fields['DESCRIPTION'],
            "BOOKMARKS" => $fields['BOOKMARKS'],
            "ITEMS" => $fields["ITEMS"],
            "PREVIEW_PICTURE" => $fields["PREVIEW_PICTURE"],
            "LINK" => $fields["DETAIL_PAGE_URL"],
        ];
        //var_dump($props);
        foreach($props as $arItem) {
            echo '<pre>' . print_r($arItem, 1) . '</pre>';
        }
        var_dump($props['title']);
    }
    unset($res, $ar_result);
}


$this->IncludeComponentTemplate();

?>