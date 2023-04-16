import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className='canvas-load'>
        <p className='text-xl text-[#f1f1f1] mt-[40px] font-bold'>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader