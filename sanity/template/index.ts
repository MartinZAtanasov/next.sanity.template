import {blockContent} from './util/blockContent'
import {seo} from './util/seo'
import {labelValueImage} from './util/labelValueImage'
import {labelValue} from './util/labelValue'
import {labelImage} from './util/labelImage'
import {labelBody} from './util/labelBody'
import {page} from './page/page'
import {sections} from './sections/sections'
import {textSection} from './sections/textSection'
import {backgroundImageSection} from './sections/backgroundImageSection'
import {doubleColumnsTextSection} from './sections/doubleColumnsTextSection'
import {iconsSection} from './sections/iconsSection'
import {imageSection} from './sections/imageSection'
import {sideImageSection} from './sections/sideImageSection'
import {listSection} from './sections/listSection'
import {post} from './post/post'
import {personalityCultHeroSection} from './sections/personalityCultHeroSection'

export const sanitySchemas = [
  blockContent,
  seo,
  labelImage,
  labelValue,
  labelBody,
  labelValueImage,
  page,
  sections,
  textSection,
  backgroundImageSection,
  doubleColumnsTextSection,
  personalityCultHeroSection,
  iconsSection,
  imageSection,
  sideImageSection,
  listSection,
  post,
]
