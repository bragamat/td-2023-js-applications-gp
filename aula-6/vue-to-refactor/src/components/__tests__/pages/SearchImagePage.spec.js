
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import SearchImagePage from "../../../views/SearchImagePage.vue";
import { createUser } from "../support/fixtures/users/currentUser.fixture";


vi.mock('../../../fetch.js', () => ({
  default: {
    globalAPI: vi.fn().mockImplementation(async () => ({ results: ['plutao'] }))
  },
  fetchAPI: vi.fn().mockImplementation(async () => ({ results: ['mercurio'] }))
}))

const context = describe

describe("SearchImagePage", () => {
  describe("Current user", () => {

    it("it calls api fetch as prop", async () => {
      const apiUtils = {
        fetch: vi.fn().mockImplementation(async () => ({ results: [0]}))
      }

      const spy = vi.spyOn(apiUtils, 'fetch')

      const validator = {
        validate: (attr) => {
          if (attr === 'word' && attr.length < 3) {
            return { error: 'Too small' }
          }
        }
      }
      const errorHandler = {
        handle: async (action) => {
          try {
            const res = await action()
            return { err: null, res }
          } catch (error) {
            await apiUtils.fetch()
            return { error, res: null }
          }
        }
      }

      const currentUser = createUser({ type: 'guestUser' })

      const { getByTestId, getByText } = render(SearchImagePage, {
        props: {
          currentUser,
          validator,
          errorHandler,
          api: apiUtils,
        }
      });

      const input = getByTestId("image-search-input-api")
      const submitButton = getByText("buscar")
      await fireEvent.update(input, 'Planetas')
      await fireEvent.click(submitButton)

      expect(spy).toHaveBeenCalledTimes(1)
    })

    context("admin", () => {
      it('renders warning message instead of image', async () => {

        const currentUser = createUser({ type: 'adminUser' })

        const { getByTestId, getByText, queryByTestId, queryByText } = render(SearchImagePage, {
          props: {
            currentUser
          }
        });

        const input = getByTestId("image-search-input-api")
        const submitButton = getByText("buscar")

        await fireEvent.update(input, 'Planetas')
        await fireEvent.click(submitButton)

        expect(queryByTestId("image-with-src")).toBeFalsy()
        expect(queryByTestId("warning-message-container")).toBeTruthy()
        expect(queryByText("API demorou menos de 5 segundos pra retornar")).toBeTruthy()
      })
    })
  })

  it("renders image when search is done", async () => {
    const { getByTestId, getByText, queryByTestId } = render(SearchImagePage);

    const input = getByTestId("image-search-input-api")
    const submitButton = getByText("buscar")

    await fireEvent.update(input, 'Planetas')
    await fireEvent.click(submitButton)

    expect(queryByTestId("image-with-src")).toBeTruthy()
  });
});
