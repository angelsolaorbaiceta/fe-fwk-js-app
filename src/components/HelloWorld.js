import { defineComponent, h, hFragment } from 'fe-fwk'
import coverImage from '../assets/cover.png'
import classes from './HelloWorld.module.css'
import { ActivitySuggestion } from './ActivitySuggestion'

export const HelloWorld = defineComponent({
  render() {
    return hFragment([
      h('h1', {}, ['Build your own frontend framework']),
      h('p', {}, [
        h(
          'a',
          {
            href: 'http://mng.bz/aM2o',
            target: '_blank',
          },
          ['Buy the book'],
        ),
        ' and start learning today!',
      ]),
      h(
        'a',
        {
          href: 'http://mng.bz/aM2o',
          target: '_blank',
        },
        [
          h('img', {
            src: coverImage,
            alt: 'Build a frontend framework book cover',
            class: classes.cover,
            'data-qa': 'cover-img',
          }),
        ],
      ),

      h(ActivitySuggestion),
    ])
  },
})
