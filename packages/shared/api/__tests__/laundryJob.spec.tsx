/**
 * @jest-environment jsdom
 */
import { act, renderHook, waitFor } from "@testing-library/react";
import { reactQueryWrapper } from "../../mocks/reactQuery";
import {
  getAuthControllerLogin200Response,
  getLaundryJobControllerCreateOne200Response,
  getLaundryJobControllerFindOne200Response,
  getUserControllerFindMyLaundryJob200Response,
} from "../../mocks/api-mock";
import { useUserStore } from "../../zustand";
import {
  useLaundryJob,
  useLaundryJobCreate,
  useUserLaundryJob,
} from "../laundryJob";

describe("api/laundryJob", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setAccessToken(
        getAuthControllerLogin200Response().access_token
      );
    });
  });

  it("useUserLaundryJob", async () => {
    const { result } = renderHook(() => useUserLaundryJob(), {
      wrapper: reactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const mockData = getUserControllerFindMyLaundryJob200Response();
    expect(result.current.data).toStrictEqual(mockData);
  });

  it("useLaundryJobCreate", async () => {
    const { result } = renderHook(() => useLaundryJobCreate(), {
      wrapper: reactQueryWrapper,
    });

    act(() => {
      result.current.onCreateLaundryJob();
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const mockData = getLaundryJobControllerCreateOne200Response();
    expect(result.current.data).toStrictEqual(mockData);
  });

  it("useLaundryJob", async () => {
    const mockData = getLaundryJobControllerFindOne200Response();
    const { result } = renderHook(() => useLaundryJob(1), {
      wrapper: reactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toStrictEqual(mockData);
  });
});
