<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

function translit($value): string
{
    $converter = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd',
        'е' => 'e', 'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 'и' => 'i',
        'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n',
        'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't',
        'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch',
        'ш' => 'sh', 'щ' => 'sch', 'ь' => '', 'ы' => 'y', 'ъ' => '',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya',

        'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D',
        'Е' => 'E', 'Ё' => 'E', 'Ж' => 'Zh', 'З' => 'Z', 'И' => 'I',
        'Й' => 'Y', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N',
        'О' => 'O', 'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T',
        'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C', 'Ч' => 'Ch',
        'Ш' => 'Sh', 'Щ' => 'Sch', 'Ь' => '', 'Ы' => 'Y', 'Ъ' => '',
        'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',
    );

    return strtr($value, $converter);
}

/*
 * Обработка жанров
 */
if(!empty($arParams["GENRES"])) {
    \Bitrix\Main\Loader::includeModule('iblock');
    $arSelect = $arSelect = ["ID", "NAME", "PROPERTY_*"];;
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["GENRES"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["GENRES"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка тегов
 */
if(!empty($arParams["TAGS"])) {
    $arSelect = ["ID", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["TAGS"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["TAGS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка Категорий
 */
if(!empty($arParams["CATEGORIES"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["CATEGORIES"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["CATEGORIES"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка Стран
 */
if(!empty($arParams["COUNTRIES"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["COUNTRIES"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["COUNTRIES"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка возраста
 */
if(!empty($arParams["AGE"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["AGE"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["AGE"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка статуса перевода
 */
if(!empty($arParams["TRANSLATE_STATUS"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["TRANSLATE_STATUS"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["TRANSLATE_STATUS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка статуса комикса
 */
if(!empty($arParams["STATUS"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["STATUS"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["STATUS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}
/*
 * Обработка статуса перевода
 */
if(!empty($arParams["OUTPUT_FORMATS"])) {
    $arSelect = ["ID", "TITLE", "NAME", "PROPERTY_*"];
    $arFilter = ["IBLOCK_ID"=>IntVal($arParams["OUTPUT_FORMATS"]), "ACTIVE"=>"Y"];
    $res = CIBlockElement::GetList([], $arFilter, false, false, $arSelect);

    while($ar_result = $res->GetNextElement())
    {
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

        $props = $ar_result->GetProperties();
        $fields = $ar_result->GetFields();
        $arResult["OUTPUT_FORMATS"][] = [
            "ID" => $fields['ID'],
            "NAME" => $fields['NAME'],
            "CODE" => strtolower(translit($fields['NAME'])),
            "EDIT_LINK" => $arResult["EDIT_LINK"],
            "DELETE_LINK" => $arResult["DELETE_LINK"],
            "EDIT_ADD" => $arResult["EDIT_ADD"],
        ];
    }
    unset($res, $ar_result);
}

$this->IncludeComponentTemplate();

?>