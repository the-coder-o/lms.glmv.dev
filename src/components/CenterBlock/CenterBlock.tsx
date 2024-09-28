import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface CenterBlockProps extends PropsWithChildren {
  className?: string
}

export const CenterBlock = ({ children, className }: CenterBlockProps) => (
  <div className={cn(className)}>
    <div className="container max-md:px-3">{children}</div>
  </div>
)
