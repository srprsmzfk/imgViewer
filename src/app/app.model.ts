export interface Picture {
  cropped_picture: string;
  id: string;
  full_size?: FullSizePicture;
}

export interface PictureResponse {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: Picture[];
}

export interface FullSizePicture {
  author: string;
  camera: string;
  cropped_picture: string;
  full_picture: string;
  id: string;
  tags: string;
}
