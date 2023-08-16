import { defineComponent, h, hFragment } from 'fe-fwk'
import classes from './ActivitySuggestion.module.css'

async function getRandomActivity() {
  const response = await fetch('https://www.boredapi.com/api/activity')
  return response.json()
}

export const ActivitySuggestion = defineComponent({
  state() {
    return {
      isLoading: true,
      activity: null,
    }
  },

  async onMounted() {
    const activity = await getRandomActivity()
    this.updateState({ isLoading: false, activity })
  },

  render() {
    const { isLoading, activity } = this.state

    return h('div', {}, [
      h('h3', {}, [
        'Activity suggestion',
        h(
          'span',
          {
            class: classes.reload,
            'data-qa': 'reload',
            on: { click: this.loadActivity },
          },
          ['⟲'],
        ),
      ]),
      isLoading
        ? h('p', { 'data-qa': 'loading' }, ['Loading...'])
        : Suggestion(activity),
    ])
  },

  async loadActivity() {
    this.updateState({ isLoading: true, activity: null })
    const activity = await getRandomActivity()
    this.updateState({ isLoading: false, activity })
  },
})

function Suggestion({ activity, type }) {
  return hFragment([
    h('p', { 'data-qa': 'activity' }, [
      activity,
      h('span', { class: classes.tag }, [type]),
    ]),
    h('p', { class: classes.footnote }, [
      'Provided by ',
      h('a', { href: 'https://www.boredapi.com/', target: '_blank' }, [
        'boredapi.com',
      ]),
    ]),
  ])
}
