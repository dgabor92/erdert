<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ExcelExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    function getExcelExport(Request $request)
    {
        $excelname = "Erdért_" . date('Y-m-d_H-i') . ".xlsx";
        return Excel::download(new ExcelExport(), $excelname);
    }
}
