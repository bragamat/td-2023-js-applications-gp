
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import SearchImagePage from "../../../views/SearchImagePage.vue";
import { createUser } from "../support/fixtures/users/currentUser.fixture";

const context = describe

describe("SearchImagePage", () => {
  describe('error', () => {
    context("Guest", () => {
      it("it asks guest user to signup", async () => {
        const expectedNumberOfCalls = 1
        const api = {
          fetch: vi.fn().mockImplementation(async () => ({ results: [0]}))
        }

        const spy = vi.spyOn(api, 'fetch')

        const errorHandler = {
          handle: async (action) => {
            await action()
            return { err: { hasError: true }, res: null }
          }
        }

        const currentUser = createUser({ type: 'guestUser' })

        const { getByTestId, getByText } = render(SearchImagePage, {
          props: {
            api,
            currentUser,
            errorHandler
          }
        });

        const input = getByTestId("image-search-input-api")
        const submitButton = getByText("buscar")

        await fireEvent.update(input, 'Planetas')
        await fireEvent.click(submitButton)

        expect(spy).toHaveBeenCalledTimes(expectedNumberOfCalls)
        // expect(await queryByText("Signup!")).resolves.toBeTruthy()
      })
    })
  })

  context("Api call breaks", () => {
    it.todo("it asks current user to submit support ticket")
    it.todo("it sends warning to sentry")
    it.todo("it loads modal showing error")
  })
});
