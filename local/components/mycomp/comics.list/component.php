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

        $arButtons = CIBlock::GetPanelButtons(
            $fields["IBLOCK_ID"], // идентификатор инфоблока, которому принадлежит элемент
            $fields['ID'], // идентификатор текущего элемента информационного блока
            null, // идентификатор раздела инфоблока (при наличии)
            array("SECTION_BUTTONS"=>false, "SESSID"=>false) //массив, содержащий локализацию названий
        );
        // ссылка в arResult на изменение эллемента
        $arResult["EDIT_LINK"] = $arButtons["edit"]["edit_element"]["ACTION_URL"];
        // ссылка в arResult на добавление эллемента
        $arResult["EDIT_ADD"] = $arButtons["edit"]["add_element"]["ACTION_URL"];
        // ссылка в arResult на удаление эллемента
        $arResult["DELETE_LINK"] = $arButtons["edit"]["delete_element"]["ACTION_URL"];
        // экшен изменения элемента

        $category = CIBlockElement::GetList([],
            ["IBLOCK_ID" => 12, "ACTIVE" => "Y", "ID" => $props['category']['VALUE']],
        false,false, ["ID", "NAME"]);
        $cat = $category->GetNext();

        $arResult["COMICS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "TITLE" => $props['title']['VALUE'],
            "COUNTRY" => $props['country']['VALUE'],
            "CATEGORY" => $cat['NAME'],
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
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];

        /*foreach($props as $arItem) {
            #echo '<pre>' . Key($arItem) . ": " . print_r($arItem, 1) . '</pre>';
            echo '<pre>' . var_dump($arItem) . '</pre>';
        }*/
    }
    #var_dump($arResult["COMICS"],$cat);
    $request = Application::getInstance()->getContext()->getRequest();
    $PAGEN = $request->getQuery('PAGEN_1');

    $res->NavStart($PAGEN*$arParams['I_PAGE']);
    $arResult['NAV'] = $res;


    unset($res, $ar_result);
}


$this->IncludeComponentTemplate();
?>