// Declare array of objects with id and image url.
// For pre/next functionality, we decrement/increment count of the index of active image.
// Update active image index with clicked option.

import React from "react";
import ImgData from "./ImgData";

function ImageSlider() {
  //write a state variable to have indexes of images
  const [activeIndex, setActiveindex] = React.useState(0);
  const imageSin = ImgData;
  // console.log(imageSin.length);

  // const checkObject = imageSin.map((single, index) =>
  //   console.log(single.id + "and" + single.url)
  // );

  // console.log(checkObject);

  // console.log(imageSin.length);
  // console.log(typeof imageSin);

  function imageChanger() {
    console.log("the button was clicked");
  }

  function prevImage() {
    setActiveindex((prevIndex) =>
      prevIndex === 0 ? imageSin.length - 1 : prevIndex - 1
    );
    console.log(activeIndex);
  }

  function nextImage() {
    setActiveindex((prevIndex) =>
      prevIndex === imageSin.length - 1 ? 0 : prevIndex + 1
    );
    console.log(activeIndex);
  }

  return (
    <div className="counter-body">
      <h1>Image slider</h1>
      <div className="image--box">
        {imageSin.map((singleItem, index) => (
          <div>
            <div
              className={`image--container ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
            >
              <img className="image--slider--single" src={singleItem.url} />
            </div>
          </div>
        ))}
      </div>
      <button className="btn--imageSlider btn--previous" onClick={prevImage}>
        ←
      </button>
      <button className="btn--imageSlider btn--next" onClick={nextImage}>
        →
      </button>
    </div>
  );
}

export default ImageSlider;
