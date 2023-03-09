
import { describe, it, expect } from "vitest";
import SearchImagePage from "../../../views/SearchImagePage.vue";
import { render, fireEvent } from "@testing-library/vue";
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
    context("admin", () => {
      it('renders warning message instead of image', async () => {

        const currentUser = createUser({ type: 'adminUser'})

        const { getByTestId, getByText, queryByTestId } = render(SearchImagePage, {
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
      })
    })
  })

  it.skip("renders image when search is done", async () => {
    const { getByTestId, getByText, queryByTestId } = render(SearchImagePage);

    const input = getByTestId("image-search-input-api")
    const submitButton = getByText("buscar")

    await fireEvent.update(input, 'Planetas')
    await fireEvent.click(submitButton)

    expect(queryByTestId("image-with-src")).toBeTruthy()
  });
});
