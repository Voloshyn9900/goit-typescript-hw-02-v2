export interface ImagePreview {
  webformatURL: string;
  largeImageURL: string;
}
export interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  likes: number;
  views: number;
  comments: number;
  downloads: number;
}
