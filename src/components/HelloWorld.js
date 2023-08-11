import { defineComponent, h, hFragment } from 'fe-fwk'
import coverImage from '../assets/cover.png'
import classes from './HelloWorld.module.css'

export const HelloWorld = defineComponent({
  render() {
    return hFragment([
      h('h2', {}, ['Buy the book today and start learning today!']),
      h('img', {
        src: coverImage,
        alt: 'Build a frontend framework book cover',
        class: classes.cover,
        'data-qa': 'cover-img',
      }),
    ])
  },
})
