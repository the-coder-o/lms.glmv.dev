import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { videoVariants } from '../motion'

const faceVideoLink =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'

export const VideoIntroduction = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div className="flex items-center md:justify-center lg:justify-end">
      <motion.div className="relative" variants={videoVariants}>
        <video
          ref={videoRef}
          className={cn(
            'size-full cursor-pointer rounded-[40px] object-cover md:size-96',
            'shadow-lg transition-all duration-300 ease-in-out'
          )}
          onEnded={() => setIsPlaying(false)}
          onClick={handlePlayVideo}
        >
          <source src={faceVideoLink} type="video/mp4" />
        </video>

        <Button
          size="icon"
          variant="secondary"
          className={cn(
            'absolute left-[-30px] top-[-30px] size-[70px] rounded-full',
            'bg-blue-light hover:bg-blue-hover',
            'shadow-md hover:shadow-lg'
          )}
          onClick={handlePlayVideo}
        >
          {isPlaying ? (
            <Pause fill="black" className="size-6" />
          ) : (
            <Play fill="black" className="size-6" />
          )}
        </Button>
      </motion.div>
    </motion.div>
  )
}
