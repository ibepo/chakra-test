import { atom } from 'jotai'
const post = {
  title: '水雷屯',
  content: `元亨利貞，勿用有攸往，利建侯。初九，磐桓，利居貞，利建侯。六二，屯如邅如，乘馬班如，匪寇婚媾。女子貞不字，十年乃字。六三，即鹿无虞，惟入于林中。君子幾不如舍。往吝。六四，乘馬班如，求婚媾，往，吉无不利。九五，屯其膏，小貞吉，大貞凶。上六，乘馬班如，泣血漣如。`,
  theme: '明白',
  slogan: '唐宋便签 数据驱动决策',
}
export const postAtom = atom(post)
