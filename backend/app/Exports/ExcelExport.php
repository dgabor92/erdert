<?php

namespace App\Exports;

use App\Models\Kamion;
use App\Models\Teherauto;
use App\Models\Szemelygepkocsi;
use App\Models\Vagon;
use Maatwebsite\Excel\Concerns\Exportable;
use App\Exports\Sheets\KamionSheet;
use App\Exports\Sheets\TeherautoSheet;
use App\Exports\Sheets\SzemelygepkocsiSheet;
use App\Exports\Sheets\VagonSheet;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ExcelExport implements WithMultipleSheets
{
    use Exportable;

    public function __construct()
    {
    }

    public function sheets(): array
    {
        $kamionok = Kamion::all()->toArray();
        $teherautok = Teherauto::all()->toArray();
        $szemelygepkocsik = Szemelygepkocsi::all()->toArray();
        $vagonok = Vagon::all()->toArray();

        $sheets = [
            new KamionSheet($kamionok),
            new TeherautoSheet($teherautok),
            new SzemelygepkocsiSheet($szemelygepkocsik),
            new VagonSheet($vagonok),
        ];

        return $sheets;
    }
}
