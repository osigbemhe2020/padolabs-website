import React from 'react'
import { motion } from 'framer-motion'

const Anime= () => {
  return (
    <div>
        <motion.div
        style={{width:"50px", height:"50px", backgroundColor:"blue"}}
        animate ={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90,  0],
            borderRadius: ["20%", "20%", "50%", "50%"],
        }}
        transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
        }}
        >

        </motion.div>
        <motion.div
        style ={{width:"50px", height:"50px", backgroundColor:"red", marginTop:"20px", cursor:"grab"}}
        drag
        dragConstraints={{ left: -125, right: 125, top: -125, bottom:125 }}
        dragTransition={{bounceStiffness:600, bounceDamping:10}}
        >


        </motion.div>
    </div>
  )
}

export default Anime