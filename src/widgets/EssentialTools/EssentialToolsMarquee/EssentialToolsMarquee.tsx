import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { partnersEssentialTool } from '../constants'

type Direction = 'left' | 'right' | 'up' | 'down'

type EssentialToolsMarqueeProps = {
  direction?: Direction
}

export const EssentialToolsMarquee = ({ direction = 'left' }: EssentialToolsMarqueeProps) => (
  <Marquee gradient gradientColor="#D6F1FF" gradientWidth={30} speed={50} direction={direction}>
    <div className="flex w-full gap-8">
      {partnersEssentialTool.map((item, index) => (
        <div key={index}>
          <Image src={item.logo} alt="logo" />
        </div>
      ))}
    </div>
  </Marquee>
)
