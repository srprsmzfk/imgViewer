import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FullSizePicture } from '../../app.model';
import { EventEmitter } from '@angular/core';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullSizeImgComponent implements OnInit {
  @ViewChild('mainImg') mainImg: ElementRef;

  @Input() picture: FullSizePicture;
  @Input() index: number;

  @Output() pictureChange: EventEmitter<number> = new EventEmitter(null);

  readonly pageSize = 10;

  constructor() { }

  ngOnInit(): void {
  }

  changePicture(event, direction: number): void {
    event.stopPropagation();
    this.pictureChange.emit(direction);
  }

  changeZoom($event: MouseEvent, size: number): void {
    $event.stopPropagation();
    this.mainImg.nativeElement.style.height = `${this.mainImg.nativeElement.height + size}px`;
  }

  shareURL($event: MouseEvent): void {
    $event.stopPropagation();
    const selBox = document.createElement('textarea');
    selBox.style.opacity = '0';
    selBox.value = this.picture.full_picture;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
