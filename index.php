<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Манга");?>
<?$APPLICATION->IncludeComponent(
	"mycomp:filtermanga",
	"",
	Array(
		"AGE" => "16",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CATEGORIES" => "12",
		"COUNTRIES" => "13",
		"GENRES" => "10",
		"IBLOCK_ID" => "9",
		"IBLOCK_TYPE" => "manga",
		"OUTPUT_FORMATS" => "15",
		"PROP_COUNT" => "20",
		"STATUS" => "17",
		"TAGS" => "11",
		"TRANSLATE_STATUS" => "14"
	)
);?>
<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>