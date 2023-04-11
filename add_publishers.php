<?php
$countries = ['Bomtoon', 'Lezhin', 'Naver', 'Kakao', 'Ridibooks', 'BiliBili Comics', 'PeanuToon', 'Mr. Blue',
    'Kuaikan Manhua', 'Libre Shuppan', 'AC.QQ (Tencent)', 'Tapas', 'Kodansha', 'ManMan App', 'Takeshobo', 'Webtoon',
    'Shueisha', 'BookCube', 'Kenaz', 'Ichijinsha', 'Dongman Manhua', 'Daum', 'Postype', 'Toomics', 'Twitter', 'Weibo',
    'NHN Entertainment', 'Fusion Product', 'Shinshokan', 'Core Magazine', 'Tokyo Mangasha', 'Media Soft', 'Jjwxc',
    'Micro Magazine', 'Pixiv', 'Cygames', 'Julian Publishing', 'Red Ice Studio', 'Kidari Studio', 'U17',
    'Seoul Cultural', 'Houbunsha', 'Daon Creative', 'Shogakukan', 'FoxToon', 'Fujimi Shobo',
    'Square Enix', 'Enterbrain'];

$arr['title'] = $countries;

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

global $USER;
$counter = 0;
\Bitrix\Main\Loader::includeModule('iblock');

for ($i = 0; $i < count($countries) - 1; $i++) {
    $el = new CIBlockElement;
    $arFields = [
        "NAME" => $countries[$i],
        "SORT" => $counter,
        "TITLE" => $countries[$i],
        #"CODE" => translit($countries[$i]),
        "MODIFIED_BY" => $USER->GetID(), // элемент изменен текущим пользователем
        "IBLOCK_SECTION_ID" => false,          // элемент лежит в корне раздела
        "IBLOCK_ID" => 18,
        "ACTIVE" => "Y",            // активен
        "PROPERTY_VALUES" => [
            "title" => $countries[$i],
        ],
    ];

    if ($PRODUCT_ID = $el->Add($arFields)) {
        echo "New ID: " . $PRODUCT_ID . "<br>";
        $counter++;
    } else {
        echo "Error: " . $el->LAST_ERROR;
        die();
    }
}

?>