import React, { useState } from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';

import { Container1200 } from '../../components/shared/CustomContainer';
import { galleryData } from './galleryData';



const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => {
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ width: '100%', overflowY: 'auto' }}>
      <Container1200 className={" "} >
        {/* Image List */}
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {galleryData.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => handleOpen(index)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: 8,
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container1200>
      {/* Modal for Popup */}
      <Modal
        open={currentIndex !== null}
        onClose={handleClose}
        aria-labelledby="image-popup"
        aria-describedby="image-navigation"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ position: 'relative', maxWidth: '80%', maxHeight: '80%' }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'white',
              zIndex: 2,
              '&:hover': { backgroundColor: 'gray' },
            }}
          >
            <Close />
          </IconButton>

          {/* Image */}
          <img
            src={galleryData[currentIndex]?.img}
            alt={galleryData[currentIndex]?.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          />

          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: -50,
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              zIndex: 2,
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              '&:hover': { backgroundColor: 'gray' },
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: -50,
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              zIndex: 2,
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              '&:hover': { backgroundColor: 'gray' },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
