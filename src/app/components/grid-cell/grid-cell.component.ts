import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridCellComponent implements OnInit {

  @Input() src = '';
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
  }

}
