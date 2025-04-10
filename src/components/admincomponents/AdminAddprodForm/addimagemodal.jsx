import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const AddImageModal = ({ isOpen, onClose,setFormData }) => {
  const [image, setimage] = useState('')

  const handleSetImage = () => {
    setFormData(prev => ({ ...prev, otherImages: [...prev.otherImages, image.trim()] }))
    setimage('')
    onClose(prev=>!prev)
  }


  if (!isOpen) return null;


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <input type='text' value={image} className=' inputAdmin mx-2' onChange={(e) => setimage(e.target.value)} placeholder='سایر عکس ها' />
            <button className='defaultBtn ' onClick={handleSetImage} type=''>افزودن</button>
            <button
              onClick={() => onClose(prev => !prev)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-base"
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};