/**
 * @jest-environment jsdom
 */
import { act, renderHook, waitFor } from "@testing-library/react";
import { useAddressList, useAddressCreate } from "../address";
import { reactQueryWrapper } from "../../mocks/reactQuery";
import {
  getAddressControllerCreateOne200Response,
  getAddressControllerFindByUser200Response,
  getAuthControllerLogin200Response,
} from "../../mocks/api-mock";
import { useUserStore } from "../../zustand";

describe("api/address", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setAccessToken(
        getAuthControllerLogin200Response().access_token
      );
    });
  });

  it("useAddressList", async () => {
    const { result } = renderHook(() => useAddressList(), {
      wrapper: reactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const mockData = getAddressControllerFindByUser200Response();
    expect(result.current.data).toStrictEqual(mockData);
  });

  it("useAddressCreate", async () => {
    const mockAddress = getAddressControllerCreateOne200Response();
    const { result } = renderHook(() => useAddressCreate(), {
      wrapper: reactQueryWrapper,
    });

    act(() => {
      result.current.onCreateAddress({
        address: mockAddress.address,
      });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toStrictEqual(mockAddress);
  });
});
