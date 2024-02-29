"use client";
import { motion } from 'framer-motion'

const TextSlide = ({text}:{text:any}) => {


  return (
    <div className="container">
      <motion.h1
        className="text"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
      {text}
      </motion.h1>
    </div>
  )
}
export default TextSlide