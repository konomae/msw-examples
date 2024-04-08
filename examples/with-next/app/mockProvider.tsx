'use client'

import { use, cache } from 'react'

const start = cache(async () => {
  const { worker } = await import('../mocks/browser')
  await worker.start()
})

function MockProvider() {
  if (typeof window !== 'undefined') {
    use(start())
  }

  return null
}

export default MockProvider
