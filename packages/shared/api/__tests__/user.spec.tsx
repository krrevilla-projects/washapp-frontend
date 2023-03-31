/**
 * @jest-environment jsdom
 */
import { act, renderHook, waitFor } from "@testing-library/react";
import { reactQueryWrapper } from "../../mocks/reactQuery";
import {
  getAuthControllerLogin200Response,
  getUserControllerFindOne200Response,
} from "../../mocks/api-mock";
import { useUserStore } from "../../zustand";
import { useAuthedUser } from "../user";

describe("api/user", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setAccessToken(
        getAuthControllerLogin200Response().access_token
      );
    });
  });

  it("useAuthedUser", async () => {
    const mockData = getUserControllerFindOne200Response();
    const { result } = renderHook(() => useAuthedUser(), {
      wrapper: reactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toStrictEqual(mockData);
  });
});
