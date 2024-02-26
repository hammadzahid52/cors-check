import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type imaegprops = {
  src: string;
  alt: string;
  onClose: () => void;
};
function ImageModal({ src, alt, onClose }: imaegprops) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div ref={modalRef} className="bg-white p-2 rounded-lg mx-5 sm:mx-0">
        <button
          className="absolute top-10 right-10 text-white"
          onClick={onClose}
        >
          Close
        </button>
        <Image src={src} alt={alt} width={500} />
      </div>
    </div>
  );
}

export default ImageModal;
