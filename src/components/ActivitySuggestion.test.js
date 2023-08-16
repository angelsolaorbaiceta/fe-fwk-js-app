import { test, expect, beforeEach, afterEach, vi } from 'vitest'
import { ActivitySuggestion } from './ActivitySuggestion'
import { createApp, nextTick } from 'fe-fwk'

let app

// Mock the fetch API
global.fetch = vi.fn().mockResolvedValue({
  json: vi.fn().mockResolvedValue({
    activity: 'feed the ducks',
    type: 'recreational',
  }),
})

beforeEach(() => {
  app = createApp(ActivitySuggestion)
  app.mount(document.body)
})

afterEach(async () => {
  await nextTick()
  app.unmount()

  document.body.innerHTML = ''
})

test('A "loading" message is shown while fetching a suggestion', () => {
  // Don't await nextTick() here, so the loading message is still shown.

  const loadingParagraph = document.querySelector('[data-qa="loading"]')

  expect(loadingParagraph).not.toBeNull()
  expect(loadingParagraph.textContent).toBe('Loading...')
})

test('When the suggestion is fetched, it is displayed', async () => {
  // Await nextTick() here, so the API request is resolved and the component is re-rendered.
  await nextTick()

  const activityParagraph = document.querySelector('[data-qa="activity"]')

  expect(activityParagraph.textContent).toContain('feed the ducks')
})

test('The suggestion can be reloaded', async () => {
  await nextTick()

  // Mock a different response from the API
  global.fetch.mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce({
      activity: 'play soccer',
      type: 'sport',
    }),
  })

  const reloadButton = document.querySelector('[data-qa="reload"]')
  reloadButton.click()

  // Before the next tick, the loading message is shown again.
  const loadingParagraph = document.querySelector('[data-qa="loading"]')
  expect(loadingParagraph).not.toBeNull()
  expect(loadingParagraph.textContent).toBe('Loading...')

  // After the next tick, the suggestion is shown again.
  await nextTick()
  const activityParagraph = document.querySelector('[data-qa="activity"]')

  expect(activityParagraph.textContent).toContain('play soccer')
})
