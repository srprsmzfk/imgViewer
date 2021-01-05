import { Component, OnInit } from '@angular/core';
import { ImgService } from './services/img/img.service';
import { FullSizePicture, PictureResponse } from './app.model';

const PAGE_SIZE = 13;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'imgViewer';
  pictures: PictureResponse;
  modalOpen = false;
  picture: FullSizePicture;
  currentPictureIndex = 0;



  constructor(
    private imgService: ImgService,
  ) {
  }

  ngOnInit(): void {
    this.imgService.getImgs().subscribe((data: PictureResponse) => {
      this.pictures = data;
    });
  }

  openModal(id: string, index: number): void {
    if (this.pictures.pictures[index].full_size) {
      this.picture = this.pictures.pictures[index].full_size;
      this.modalOpen = true;
    } else {
      this.imgService.getFullSizeImg(id).subscribe((picture: FullSizePicture) => {
        this.pictures.pictures[index].full_size = picture;
        this.picture = picture;
        this.modalOpen = true;
      });
    }
    this.currentPictureIndex = index;
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  changePicture(direction: number): void {
    this.currentPictureIndex += direction;

    if (this.pictures.pictures[this.currentPictureIndex].full_size) {
      this.picture = this.pictures.pictures[this.currentPictureIndex].full_size;
    } else {
      this.imgService.getFullSizeImg(this.pictures.pictures[this.currentPictureIndex].id).subscribe((picture: FullSizePicture) => {
        this.pictures.pictures[this.currentPictureIndex].full_size = picture;
        this.picture = picture;
      });
    }
  }

  changePage(direction: number): void {
    this.imgService.getImgs(this.pictures.page + direction).subscribe((data: PictureResponse) => {
      this.pictures = data;
    });
  }
}
