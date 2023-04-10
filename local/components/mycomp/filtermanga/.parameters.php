<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
 * @var string $componentPath
 * @var string $componentName
 * @var array $arCurrentValues
 * */

use Bitrix\Main\Loader;

if( !Loader::includeModule("iblock") ) {
    throw new \Exception('Не загружены модули необходимые для работы компонента');
}

// типы инфоблоков
$arIBlockType = CIBlockParameters::GetIBlockTypes();

// инфоблоки выбранного типа
$arIBlock = [];
$iblockFilter = !empty($arCurrentValues['IBLOCK_TYPE'])
    ? ['TYPE' => $arCurrentValues['IBLOCK_TYPE'], 'ACTIVE' => 'Y']
    : ['ACTIVE' => 'Y'];

$rsIBlock = CIBlock::GetList(['SORT' => 'ASC'], $iblockFilter);
while ($arr = $rsIBlock->Fetch()) {
    $arIBlock[$arr['ID']] = '['.$arr['ID'].'] '.$arr['NAME'];
}
unset($arr, $rsIBlock, $iblockFilter);

$arComponentParameters = [
    // группы в левой части окна
    "GROUPS" => [
        "SETTINGS" => [
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_PROP_SETTINGS'),
            "SORT" => 550,
        ],
    ],
    // поля для ввода параметров в правой части
    "PARAMETERS" => [
        // Произвольный параметр типа СПИСОК
        "IBLOCK_TYPE" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_PROP_IBLOCK_TYPE'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlockType,
            "REFRESH" => "Y"
        ],
        // Произвольный параметр типа СТРОКА
        /*"PROP_COUNT" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_PROP_COUNT'),
            "TYPE" => "INT",
            "MULTIPLE" => "N",
            "DEFAULT" => "20",
            "COLS" => 25
        ],*/
        //Тэги
        "TAGS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_TAGS'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "GENRES" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_GENRES'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "COUNTRIES" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_COUNTRIES'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "CATEGORIES" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_CATEGORIES'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "AGE" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_AGE'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "STATUS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_STATUS'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "TRANSLATE_STATUS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_TRANSLATE_STATUS'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        "OUTPUT_FORMATS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_FORMAT_OUT'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "Y",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        // Настройки кэширования
        'CACHE_TIME' => ['DEFAULT' => 3600],
    ]
];