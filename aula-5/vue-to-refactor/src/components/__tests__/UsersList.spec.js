import { describe, it, expect } from "vitest";

import Users from "../Users.vue";
import { render } from "@testing-library/vue";

describe("Users", () => {
  describe("when 5 users passed", () => {
    it("renders 5 li", () => {
      const { getByText, queryByTestId, queryAllByTestId, container } =
        render(Users, {
          props: { users: [1, 2, 3, 4, 5] },
        });

      expect(queryByTestId("users-list")).toBeTruthy();
      expect(queryAllByTestId("user")).toHaveLength(5);
      expect(container.querySelectorAll("li")).toHaveLength(5);
      expect(getByText("2")).toBeTruthy();
    });
  });

  describe("when empty", () => {
    it("does not render list", () => {
      const { queryByTestId } = render(Users, { props: { users: [] } });

      expect(queryByTestId("users-list")).toBeFalsy();
    });
  });
});
