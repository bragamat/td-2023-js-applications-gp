import { describe, it, vi } from 'vitest'
import { builder, buildSearch } from '../../../product/Search'
import { createUser } from '../support/fixtures/users/currentUser.fixture'

const createSearchFacade = ({ builder }) => {
  const api = { fetch: vi.fn() }

  const errorHandler = {
    handle: async (action) => {
      await action()
      return { err: { hasError: true }, res: null }
    }
  }

  const admin = createUser({ type: 'adminUser' })
  const searchBuilder = buildSearch()
  return builder
    .setCurrentUser(searchBuilder, admin)
    .setApi(searchBuilder, api)
    .setErrorHandler(searchBuilder, errorHandler)
    .build()
}

/*
  * fixtures: fakerjs
  * factoreis: criar tipos diferente de usarios COM ou SEM profiles: createUser({}, { withProfile: true })
  * tratar profiles de forma diferente para cada tipo de usuario
  * facade: usar no component para tratar erros, validar, fazer chamadas na api;
  * */
describe('SearchUtils', () => {
  context('admin', () => {
    context('#api', () => {
      it.todo('calls api.fetch once')
      it.todo('calls errorHandler.handle once after api failed')
    })
    it.todo('calls errorHandler.handle once')
  })
  context('guest', () => {

    context('#api', () => {
      it.todo('calls api.fetch once')
      it.todo('calls errorHandler.handle once after api failed')
    })
    it.todo('calls errorHandler.handle once')
  })
  context('regular', () => {
    context('#api', () => {
      it.todo('calls api.fetch once')
      it.todo('calls errorHandler.handle once after api failed')
    })
    it.todo('calls errorHandler.handle once')
  })



  it('search fachada', () => {
    const admin = createUser({ type: 'adminUser' })

    const search = createSearchFacade({ builder })

    expect(search.currentUser).toBe(admin)
  })

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

    const admin = createUser({ type: 'adminUser' })

    const searchBuilder = buildSearch()
    const search = builder
      .setCurrentUser(searchBuilder, admin)
      .setApi(searchBuilder, api)
      .setErrorHandler(searchBuilder, errorHandler)
      .build()

    expect(search).toBeTruthy()
    expect(search.currentUser.role).toBe(admin.role)
  })
})
