import { CustomModal } from "../Modal/Modal";
import React, { useState } from "react";
import { GalleryItem, Image } from "./GalleryItem.styled";
import { ImagePreview } from "../../types"; 

interface ImageGalleryItemProps {
  image: ImagePreview;
}

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { webformatURL, largeImageURL } = image;

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <GalleryItem onClick={openModal}>
        <Image src={webformatURL} alt="" />
      </GalleryItem>

      <CustomModal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        imageUrl={largeImageURL}
      />
    </>
  );
};
