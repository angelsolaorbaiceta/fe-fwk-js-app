import { createApp } from 'fe-fwk'
import { afterEach, beforeEach, expect, test } from 'vitest'
import { HelloWorld } from './HelloWorld'

let app = null

beforeEach(() => {
  app = createApp(HelloWorld)
  app.mount(document.body)
})

afterEach(() => {
  app.unmount()
})

test('displays the book cover', () => {
  const image = document.querySelector('[data-qa="cover-img"]')
  expect(image).not.toBeNull()
  expect(image.src).toContain('cover.png')
})
