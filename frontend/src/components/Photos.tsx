import React from "react";
import Gallery from "react-photo-gallery";
const photos = [
  {
    src: "frontend\src\assets\MM.jpg",
    height: 3,
  },
  {
    src: "frontend\src\assets\MM.jpg",
    width: 1,
    height: 1,
  },
];

const Photos = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
      <Gallery photos={photos} />
    </div>
  );
};

export default Photos;
