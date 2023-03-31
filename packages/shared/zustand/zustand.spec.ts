/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";
import { useUserStore } from "./user";
import { getUserControllerFindOne200Response } from "../mocks/api-mock";

describe("useUserStore", () => {
  test("should initiate store", () => {
    const { result } = renderHook(() => useUserStore());

    expect(result.current.isAuthed).toBe(false);
  });

  test("should set isAuthed to true", () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.isLoggedInSuccessful(getUserControllerFindOne200Response());
    });

    expect(result.current.isAuthed).toBe(true);
  });

  test("should set isAuthed to true", () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.isLoggedInSuccessful(getUserControllerFindOne200Response());
      result.current.isLoggedOutSuccessful();
    });

    expect(result.current.isAuthed).toBe(false);
  });
});
