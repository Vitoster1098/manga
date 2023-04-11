<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

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
        // Настройки кэширования
        'CACHE_TIME' => ['DEFAULT' => 3600],
        "COMICS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_COMICS'),
            "TYPE" => "LIST",
            "ADDITIONAL_VALUES" => "N",
            "VALUES" => $arIBlock,
            "REFRESH" => "Y",
        ],
        //Количество элементов на странице
        "ITEMS" => [
            "PARENT" => "SETTINGS",
            "NAME" => GetMessage('EXAMPLE_COMPSIMPLE_ITEMS'),
            "TYPE" => "INT",
            "ADDITIONAL_VALUES" => "N",
            "DEFAULT_VALUE" => "20"
        ],
    ],
];
?>