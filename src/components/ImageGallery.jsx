import React, { useState } from "react";
import Modal from "react-modal";
import "./ImageGallery.css"; // Make sure to create this CSS file
import Multiplethird from "./Multiplethird";


// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};



// Modal.setAppElement("#root");

const ImageGallery = ({ images }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



 

  return (
    <div className="second_blog">
      <div className="image-gallery flex gap-[20px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image image_blog imagepart"
            onClick={() => openModal(image)}
          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </Modal>
      </div>
      {/*  */}
      <div className="flexsbb flex gap-[60px] ">
        {/*  */}
        <div>
          <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="pl-[33px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation <br />
            that wow your colleagues and impress your managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="ml-[-37px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}

      {/* second */}
      <div className="image-gallery mt-[5%] flex gap-[20px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image image_blog imagepart"
            onClick={() => openModal(image)}
          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </Modal>
      </div>
      {/*  */}
      <div className="flexsbb flex gap-[60px] ">
        {/*  */}
        <div>
          <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="pl-[33px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation <br />
            that wow your colleagues and impress your managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="ml-[-37px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
      </div>
      {/* second */}
      {/* third */}
      <div className="image-gallery mt-[5%] flex gap-[20px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image image_blog imagepart"
            onClick={() => openModal(image)}
          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </Modal>
      </div>
      {/*  */}
      <div className="flexsbb flex gap-[60px] ">
        {/*  */}
        <div>
          <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="pl-[33px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation <br />
            that wow your colleagues and impress your managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="ml-[-37px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
      </div>
      {/* third */}
      {/* four */}
      <div className="image-gallery mt-[5%] flex gap-[20px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image image_blog imagepart"
            onClick={() => openModal(image)}
          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </Modal>
      </div>
      {/*  */}
      <div className="flexsbb flex gap-[60px] ">
        {/*  */}
        <div>
          <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="pl-[33px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation <br />
            that wow your colleagues and impress your managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="ml-[-37px]">
          <p className="p_date bg-[#694IC6] ">Sunday 1,jan 2024</p>
          <p className="p_date1 text-white text-[1rem]">
            UX review presentation
          </p>
          <p className="p_date2 text-[0.8rem]">
            How do you create compelling presentation
            <br /> that wow your colleagues and impress your <br /> managers
          </p>
          <div className="blog_button">
            <button className="btn  btn1">Design</button>
            <button className="btn btn2">Research</button>
          </div>
        </div>
        {/*  */}
      </div>
      {/* four */}
    </div>
  );
};


export default ImageGallery;
