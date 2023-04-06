<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Манга");?><?$APPLICATION->IncludeComponent(
	"mycomp:filtermanga",
	"",
	Array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"IBLOCK_ID" => "9",
		"IBLOCK_TYPE" => "manga",
		"PROP_COUNT" => "20",
		"TAGS" => ""
	)
);?><? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>