<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Жанры"); ?>

    <div class="col-12 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">
                    Жанры
                    <span class="badge bg-primary ms-1">48</span>
                </h1>
            </div>
            <div class="card-body pt-0">
                <div class="card-flush-x mb-4" data-turbo="true">
                    <ul class="nav nav-tabs nav-tabs-line nav-tabs-medium card-padding-x mb-0">
                        <li class="nav-item">
                            <a href="/genres" class="nav-link active">По алфавиту</a>
                        </li>
                        <li class="nav-item">
                            <a href="/genres?popular=yes" class="nav-link">Популярные</a>
                        </li>
                    </ul>
                </div>
                <div class="mb-n3">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-xl-4">
                            <a
                                    href="/genre/bezumie"
                                    class="genre-item rounded d-flex align-items-center justify-content-center mb-3"
                                    style="background-image: url('https://static.mangahub.ru/uploads/media/genre/thumbnail/medium/0018/81/1780574.jpeg');"
                            >
                                <span class="genre-item-name fw-bold fs-3 fs-sm-4">Безумие (77)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>