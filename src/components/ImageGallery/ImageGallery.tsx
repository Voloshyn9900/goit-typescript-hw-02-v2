import React from "react";
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../GalleryItem/GalleryItem";
import { Image as ImageType } from "../../types";

interface ImageGalleryProps {
  images: ImageType[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </Gallery>
  );
};
