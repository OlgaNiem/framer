import { motion, useScroll} from "framer-motion"



export default function Home() {
  const{scrollYProgress} = useScroll()
  return (
    <>
      <motion.div style={{scaleX: scrollYProgress, background: 'red', transformOrigin: 'left', position: 'fixed', top: 0, left: 0, right: 0, height: '20px', width: '100%'}}></motion.div>
      <div className="min-h-[300vh] w-full bg-state-100 gap-20 flex justify-center overflow-hidden items-center">
      <motion.div whileHover={{scale: 1.3}} whileTap={{scale: 0.6}} initial={{x: '-100vw'}} animate={{x: 0}} transition={{duration: 1}} className='h-48 w-48 bg-amber-700 shadow-sm rounded-sm'></motion.div>
      <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{duration: 1}} className='h-48 w-48 bg-lime-500 shadow-sm rounded-full'></motion.div>
    </div>
    </>
  )
}
