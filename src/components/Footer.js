import { defineComponent, h } from 'fe-fwk'
import classes from './footer.module.css'

export const Footer = defineComponent({
  render() {
    return h('footer', { class: classes.footer }, [
      h('p', {}, [
        'Made with ❤️ and ',
        h(
          'a',
          {
            href: 'https://github.com/angelsolaorbaiceta/fe-fwk-book',
            target: '_blank',
          },
          ['fe-fwk'],
        ),
        h('span', {}, [' | ']),
        h(
          'a',
          {
            href: 'http://mng.bz/aM2o',
            target: '_blank',
          },
          ['Buy the book'],
        ),
      ]),
    ])
  },
})
