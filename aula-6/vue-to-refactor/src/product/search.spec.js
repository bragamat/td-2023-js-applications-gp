import { describe, it, vi } from 'vitest'
import { builder } from './Search'

describe('SearchUtils', () => {
  it('builds all dependencies', () => {
    const api = {
      fetch: vi.fn()
    }
    const errorHandler = {
      handle: async (action) => {
        await action()
        return { err: { hasError: true }, res: null }
      }
    }

    const admin = createUser({ type: 'adminGuest' })

    const search = builder
      .setCurrentUser(admin)
      .setApi(api)
      .build()



    expect(search).toContain({ currentUser: {} })
  })
})
