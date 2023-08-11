import { defineComponent, h, hFragment } from 'fe-fwk'
import classes from './App.module.css'
import { HelloWorld } from './components/HelloWorld'

export const App = defineComponent({
  render() {
    return hFragment([
      h(Header, {}),
      h('main', { class: classes.main }, [h(HelloWorld, {})]),
      h(Footer, {}),
    ])
  },
})

const Header = defineComponent({
  render() {
    return h('header', { class: classes.header }, [
      h('h1', {}, ['Build a frontend framework']),
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
      ]),
    ])
  },
})
