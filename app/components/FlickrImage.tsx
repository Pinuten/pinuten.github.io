import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles.css";
// Interface for representing a photo object and a custom image object.

interface Photo {
  id: string;
  server: string;
  secret: string;
  title: string;
  width?: number;
  height?: number;
}

interface CustomImage {
  src: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  caption: string;
  width: number;
  height: number;
}

interface Props {
  tag: string;
}
// The CustomGallery component displays a grid of images with fading animation

const CustomGallery = ({ images }: { images: CustomImage[] }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([]);

  useEffect(() => {
    // Function to update the current image indices
    const updateImages = () => {
      const randomIndices = images.map((_, index) => index).sort(() => 0.5 - Math.random()).slice(0, 12); // Randomly select a subset of images
      setCurrentImageIndices(randomIndices);
    };

    updateImages(); // Initial update

    const timer = setInterval(updateImages, 30000); // Adjust the interval here

    return () => clearInterval(timer); //cleanup function to zero interval timer
  }, [images]);

  return (
    <div>
      <h2>Flickr Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gridAutoRows: 'minmax(260px, 280px)', // Adjust the number of rows here to match the number of images
          gridGap: '10px',
          justifyContent: "center",
          //alignItems: "center",
        }}
      >
        {currentImageIndices.map((index) => {
          const image = images[index];
          return (
            <div key={image.src} className="fade-in-out">
              <img
                src={image.src}
                alt={image.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FlickrGallery = ({ tag }: Props) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
        // Function to fetch photos from the Flickr API based on the provided tag
    const fetchPhotos = async () => {
      try {
        const apiKey = '9946f8a0988e53386bfe120cff3d26e8';
        const response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=30&format=json&nojsoncallback=1`
        );
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.error('Error fetching photos from Flickr:', error);
      }
    };

    fetchPhotos();
  }, [tag]);

  const galleryImages: CustomImage[] = photos.map((photo) => {
    const { id, server, secret, title, width = 0, height = 0 } = photo;
    const src = `https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    const thumbnail = `https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

    const image: CustomImage = {
      src,
      thumbnail,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: title,
      width: width || 0,
      height: height || 0,
    };

    return image;
  });

  return <CustomGallery images={galleryImages} />;
};

export default FlickrGallery;
