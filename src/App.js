import { defineComponent, h, hFragment } from 'fe-fwk'
import classes from './App.module.css'
import { HelloWorld } from './components/HelloWorld'

export const App = defineComponent({
  render() {
    return hFragment([
      h('main', { class: classes.main }, [h(HelloWorld, {})]),
      h(Footer, {}),
    ])
  },
})

const Footer = defineComponent({
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
