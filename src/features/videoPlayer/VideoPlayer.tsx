import { ChangeEvent, useEffect, useRef, useState } from 'react'
import {
  Loader,
  Maximize,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react'
import shaka from 'shaka-player/dist/shaka-player.compiled'

type Props = {
  src: string
  drmConfig?: {
    servers: Record<string, string>
    advanced?: Record<string, any>
  }
}

export const VideoPlayer = ({ src, drmConfig }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    shaka.polyfill.installAll()

    if (shaka.Player.isBrowserSupported() && videoRef.current) {
      const player = new shaka.Player(videoRef.current)

      const initPlayer = async () => {
        try {
          if (drmConfig) {
            player.configure({
              drm: {
                servers: drmConfig.servers,
                advanced: drmConfig.advanced,
              },
            })
          }
          await player.load(src)
          setDuration(videoRef.current!.duration)
          setIsLoading(false)
        } catch (error) {
          console.error('Video download error:', error)
          setIsLoading(false)
        }
      }

      initPlayer()

      return () => {
        player.destroy()
      }
    }
  }, [src, drmConfig])

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleDurationChange = () => setDuration(video.duration)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('durationchange', handleDurationChange)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('durationchange', handleDurationChange)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)

    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) {
      return null
    }

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const preventScreenCapture = () => {
    if (videoRef.current) {
      videoRef.current.style.visibility = 'hidden'
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.style.visibility = 'visible'
        }
      }, 1000)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', preventScreenCapture)

    return () => {
      document.removeEventListener('keydown', preventScreenCapture)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden bg-black shadow-lg"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Loader className="animate-spin text-white" size={48} />
        </div>
      )}
      <video
        ref={videoRef}
        className="size-full object-contain"
        onClick={togglePlay}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-4">
        <div className="flex items-center justify-between gap-4 text-white">
          <div className="flex items-center space-x-3">
            <button onClick={() => (videoRef.current!.currentTime -= 10)}>
              <SkipBack fill="white" size={24} />
            </button>
            <button onClick={togglePlay}>
              {isPlaying ? <Pause fill="white" size={28} /> : <Play fill="white" size={28} />}
            </button>
            <button onClick={() => (videoRef.current!.currentTime += 10)}>
              <SkipForward fill="white" size={24} />
            </button>
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <span className="text-sm">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="mx-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/30 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              style={{
                background: `linear-gradient(to right, #fff ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%)`,
              }}
            />
            <span className="text-sm">{formatTime(duration)}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleMute}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button onClick={toggleFullscreen}>
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
