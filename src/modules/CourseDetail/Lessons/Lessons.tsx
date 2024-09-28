import { useRouter, useSearchParams } from 'next/navigation'
import LockKeyhole from '@/assets/icon/Lock.svg'
import PlayCircle from '@/assets/icon/play.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { CourseModules } from '@/types'

type Props = {
  module: CourseModules[]
}

export const Lessons = ({ module }: Props) => {
  const value = (id: string) => `item-${id}`
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleLessonQuery = (id: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    newParams.set('lesson', id)
    router.push(`?${newParams.toString()}`, { scroll: true })
  }

  return (
    <div className="w-full">
      {module.map((item, index) => (
        <Accordion key={item._id} type="single" collapsible className="w-full">
          <AccordionItem
            value={value(item._id)}
            className="overflow-hidden rounded-md border border-primary/10"
          >
            <AccordionTrigger className="w-full bg-accent p-3 pl-4 text-start">
              <p className="text-xl font-bold">{`${index + 1}. ${item.name}`}</p>
            </AccordionTrigger>

            <AccordionContent className="mt-4 flex flex-col gap-4 bg-white pl-4">
              {item.lessons.map((lesson) => (
                <div
                  key={lesson._id}
                  onClick={() => lesson.is_open && handleLessonQuery(lesson._id)}
                  className={cn('flex items-center justify-start gap-5', {
                    'cursor-pointer': lesson.is_open,
                    'cursor-not-allowed opacity-80': !lesson.is_open,
                  })}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent p-3">
                    <div className="flex items-center justify-center text-primary/50">
                      {lesson.is_open ? <PlayCircle /> : <LockKeyhole />}
                    </div>
                  </div>
                  <p>{lesson.name}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}
