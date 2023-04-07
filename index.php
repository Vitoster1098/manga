<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Манга");?>
<?$APPLICATION->IncludeComponent(
	"mycomp:filtermanga", 
	".default", 
	array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"IBLOCK_ID" => "9",
		"IBLOCK_TYPE" => "manga",
		"PROP_COUNT" => "20",
		"TAGS" => "11",
		"COMPONENT_TEMPLATE" => ".default",
		"GENRES" => "10",
		"COUNTRIES" => "13",
		"CATEGORIES" => "12",
		"AGE" => "16",
		"STATUS" => "17",
		"TRANSLATE_STATUS" => "14",
		"OUTRPUT_FORMATS" => "15"
	),
	false
);?>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>