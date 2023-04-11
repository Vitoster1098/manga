<?php
/*
* local/templates/шаблон/components/bitrix/modern/template.php
*/

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();
$this->setFrameMode(true);

// ссылка на первую страницу
$firstPageUrl = $arResult['sUrlPath'];
if (!empty($arResult['NavQueryString'])) {
    $firstPageUrl = $firstPageUrl.'?'.$arResult['NavQueryString'];
}

// ссылка на последнюю страницу
$lastPageUrl = $arResult['sUrlPath'];
if (!empty($arResult['NavQueryString'])) {
    $lastPageUrl = $lastPageUrl.'?'.$arResult['NavQueryString'].'&PAGEN_'.$arResult['NavNum'].'='.$arResult['NavPageCount'];
} else {
    $lastPageUrl = $lastPageUrl.'?PAGEN_'.$arResult['NavNum'].'='.$arResult['NavPageCount'];
}
?>

<!-- Экземпляр пагинации -->
<!--div data-turbo="true" data-turbo-pagination="true">
        <ul class="pagination">
            <li class="page-item disabled"><span class="page-link">←</span></li>
            <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="/explore?page=2">2</a></li>
            <li class="page-item"><a class="page-link" href="/explore?page=3">3</a></li>
            <li class="page-item disabled"><span class="page-link">…</span></li>
            <li class="page-item"><a class="page-link" href="/explore?page=301">301</a></li>
            <li class="page-item"><a class="page-link" href="/explore?page=2" rel="next">→</a></li>
        </ul>
    </div-->

<div data-turbo="true" data-turbo-pagination="true">
        <ul class="pagination">
            <?php if ($arResult['NavPageNomer'] > 1): /* ссылка на первую страницу */ ?>
                <li class="page-item disabled">
                    <span class="page-link">
                        <a href="<?= $firstPageUrl ?>" title="Первая">←</a>
                    </span>
                </li>
            <?php endif; ?>
            <?php for ($i = $arResult['nStartPage']; $i <= $arResult['nEndPage']; $i++): ?>
                <?php
        // ссылка на очередную страницу
                $pageUrl = $arResult['sUrlPath'];
                if (!empty($arResult['NavQueryString'])) {
                    $pageUrl = $pageUrl.'?'.$arResult['NavQueryString'].'&PAGEN_'.$arResult['NavNum'].'='.$i;
                } else {
                    $pageUrl = $pageUrl.'?PAGEN_'.$arResult['NavNum'].'='.$i;
                }
                ?>
                <?php if ($arResult['NavPageNomer'] == $i): /* если это текущая страница */ ?>
                    <li class="page-item">
                        <a class="page-link" href="/explore?page=<?= $i; ?>"><?= $i; ?></a>
                    </li>
                <?php else: ?>
                    <li><a href="<?= $pageUrl; ?>"><?= $i; ?></a></li>
                <?php endif; ?>
            <?php endfor; ?>
            <?php if ($arResult['NavPageNomer'] < $arResult['NavPageCount']): /* ссылка на последнюю страницу */ ?>
                <li class="page-item">
                    <a class="page-link" href="<?= $lastPageUrl; ?>">→</a>
                </li>
            <?php endif; ?>
        </ul>
</div>