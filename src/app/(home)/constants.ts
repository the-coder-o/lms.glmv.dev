import { getCreateModule, isSwiper } from '@/helpers/utils'
import { Bonus } from '@/widgets/Bonus'
import { CourseFlow } from '@/widgets/CourseFlow'
import { EducationSolution } from '@/widgets/EducationSolution'
import { EssentialTools } from '@/widgets/EssentialTools'
import { Inquiries } from '@/widgets/Inquiries'
import { InstantlyBegin } from '@/widgets/InstantlyBegin'
import { Introduction } from '@/widgets/Introduction'
import { Partners } from '@/widgets/Partners'
import { Prices } from '@/widgets/Prices'

export const HomePageModules = {
  Introduction: getCreateModule(Introduction, isSwiper),
  Partners: getCreateModule(Partners),
  CourseFlow: getCreateModule(CourseFlow, isSwiper),
  EssentialTools: getCreateModule(EssentialTools, isSwiper),
  EducationSolution: getCreateModule(EducationSolution),
  Prices: getCreateModule(Prices, isSwiper),
  Bonus: getCreateModule(Bonus, isSwiper),
  Inquiries: getCreateModule(Inquiries, isSwiper),
  InstantlyBegin: getCreateModule(InstantlyBegin, isSwiper),
}
