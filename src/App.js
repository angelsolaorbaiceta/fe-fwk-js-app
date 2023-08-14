import { defineComponent, h, hFragment } from 'fe-fwk'
import classes from './App.module.css'
import { Footer } from './components/Footer'
import { HelloWorld } from './components/HelloWorld'

export const App = defineComponent({
  render() {
    return hFragment([
      h('main', { class: classes.main }, [h(HelloWorld, {})]),
      h(Footer, {}),
    ])
  },
})
