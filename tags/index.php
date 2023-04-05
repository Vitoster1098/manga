<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Тэги"); ?>

    <turbo-frame class="card" id="tags" data-turbo-action="advance" data-turbo-progress-bar="true">
        <div class="card-header">
            <h1 class="card-title">
                Список тегов
                <span class="badge bg-primary ms-1">98</span>
            </h1>
        </div>
        <div class="card-body pt-0">
            <div class="card-flush-x mb-4">
                <ul class="nav nav-tabs nav-tabs-line nav-tabs-medium card-padding-x mb-0" data-turbo="true">
                    <li class="nav-item">
                        <a href="/tags" class="nav-link active">По алфавиту</a>
                    </li>
                    <li class="nav-item">
                        <a href="/tags?popular=yes" class="nav-link">Популярные</a>
                    </li>
                </ul>
            </div>
            <div class="tag-columns">
                <section class="d-block mb-3">
                    <div class="fs-5 fw-bolder text-center mb-3">А</div>
                    <a class="tag fw-medium d-flex mb-2 pe-0" href="/tags/azartnye_igry"> <span class="flex-grow-1 fs-1">Азартные игры</span> <span class="tag-count small">17</span> </a>
                </section>
            </div>
        </div>
    </turbo-frame>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>