<?php

namespace App\Exports\Sheets;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Worksheet\ColumnDimension;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;


class VagonSheet implements FromCollection, WithTitle, WithHeadings, WithStyles
{
  protected $vagonok;

  public function __construct(array $vagonok)
  {
    $this->vagonok = $vagonok;
  }

  public function collection()
  {
    return collect($this->vagonok);
  }

  public function title(): string
  {
    return 'Vagonok';
  }

  public function headings(): array
  {
    return [
      'Id',
      'Vagon száma',
      'Belépés dátuma',
      'Kilépés dátuma',
      'Megjegyzés',
      'Létrehozás dátuma',
      'Változtatás dátuma',
    ];
  }
  public function styles(Worksheet $sheet)
  {
    $headerStyleArray = [
      'font' => [
        'bold' => true,
        'color' => ['argb' => 'FFFFFFFF'],
      ],
      'fill' => [
        'fillType' => Fill::FILL_SOLID,
        'startColor' => [
          'argb' => 'FF2E75B6',
        ],
      ],
      'borders' => [
        'allBorders' => [
          'borderStyle' => Border::BORDER_THIN,
          'color' => ['argb' => 'FF000000'],
        ],
      ],
      'alignment' => [
        'horizontal' => Alignment::HORIZONTAL_CENTER,
        'vertical' => Alignment::VERTICAL_CENTER,
      ],
    ];

    $bodyStyleArray = [
      'font' => [
        'bold' => false,
        'color' => ['argb' => 'FF000000'],
      ],
      'fill' => [
        'fillType' => Fill::FILL_SOLID,
        'startColor' => [
          'argb' => 'FFF2F2F2',
        ],
      ],
      'borders' => [
        'allBorders' => [
          'borderStyle' => Border::BORDER_THIN,
          'color' => ['argb' => 'FF000000'],
        ],
      ],
      'alignment' => [
        'horizontal' => Alignment::HORIZONTAL_LEFT,
        'vertical' => Alignment::VERTICAL_CENTER,
      ],
    ];

    $sheet->getStyle('A1:G1')->applyFromArray($headerStyleArray);
    $sheet->getStyle('A2:G' . ($this->collection()->count() + 1))->applyFromArray($bodyStyleArray);

    foreach (range('A', 'H') as $column) {
      $sheet->getColumnDimension($column)->setAutoSize(true);
    }
  }
}
