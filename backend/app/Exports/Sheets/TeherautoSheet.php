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


class TeherautoSheet implements FromCollection, WithTitle, WithHeadings, WithStyles
{
  protected $teherautok;

  public function __construct(array $teherautok)
  {
    $this->teherautok = $teherautok;
  }

  public function collection()
  {
    return collect($this->teherautok);
  }

  public function title(): string
  {
    return 'Teherautok';
  }

  public function headings(): array
  {
    return [
      'Id',
      'Sofőr neve',
      'Rendszám',
      'Szállító levél száma',
      'Belépés dátuma',
      'Kilépés dátuma',
      'Súly üresen',
      'Súly tele',
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

    $sheet->getStyle('A1:K1')->applyFromArray($headerStyleArray);
    $sheet->getStyle('A2:K' . ($this->collection()->count() + 1))->applyFromArray($bodyStyleArray);

    foreach (range('A', 'L') as $column) {
      $sheet->getColumnDimension($column)->setAutoSize(true);
    }
  }
}
