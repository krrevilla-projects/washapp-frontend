/**
 * @jest-environment jsdom
 */

import { act, renderHook, waitFor } from "@testing-library/react";
import { useLogin } from "../auth";
import { reactQueryWrapper } from "../../mocks/reactQuery";
import { getAuthControllerLogin200Response } from "../../mocks/api-mock";

describe("api/auth", () => {
  it("useLogin", async () => {
    const { result } = renderHook(() => useLogin(), {
      wrapper: reactQueryWrapper,
    });

    act(() => {
      result.current.onLogin({
        email: "karl.revilla@gmail.com",
        password: "Test1234",
      });
    });

    await waitFor(() => result.current.isLoading);
    expect(result.current.data?.access_token).toBe(
      getAuthControllerLogin200Response().access_token
    );
  });
});
