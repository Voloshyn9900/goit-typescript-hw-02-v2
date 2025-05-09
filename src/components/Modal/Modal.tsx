import React from 'react';
import Modal from 'react-modal';
import {
  ImageModal,
  ButtonModal,
} from '../GalleryItem/GalleryItem.styled';
import type { Styles } from "react-modal";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
  },
};

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ButtonModal onClick={onRequestClose}>close</ButtonModal>
      <ImageModal src={imageUrl} alt="" />
    </Modal>
  );
};
