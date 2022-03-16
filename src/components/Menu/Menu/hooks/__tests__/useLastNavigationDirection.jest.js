import { renderHook, act } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { NAV_DIRECTIONS } from "../../../../../hooks/useFullKeyboardListeners";
import { useLastNavigationDirection } from "../useLastNavigationDirection";

describe("useLastNavigationDirection", () => {
  it("should return undefined when no direction key was pressed yet", () => {
    const { result } = renderHookForTest();

    expect(result.current.lastNavigationDirectionRef.current).toBeUndefined();
  });

  it("should return undefined when only non-direction keys were pressed", () => {
    const { result } = renderHookForTest();

    act(() => {
      userEvent.keyboard("f");
    });

    expect(result.current.lastNavigationDirectionRef.current).toBeUndefined();
  });

  [
    { key: "ArrowUp", direction: NAV_DIRECTIONS.UP },
    { key: "ArrowLeft", direction: NAV_DIRECTIONS.LEFT },
    { key: "ArrowRight", direction: NAV_DIRECTIONS.RIGHT },
    { key: "ArrowDown", direction: NAV_DIRECTIONS.DOWN }
  ].forEach(({ key, direction }) => {
    it(`should return direction "${direction}" when pressing the key "${key}"`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" after another direction key`, () => {
      const otherDirectionKey = key === "ArrowUp" ? "ArrowDown" : "ArrowUp";
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${otherDirectionKey}}{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" after another non-direction keys`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`something{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" and THEN non-direction keys`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${key}}something`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });
  });

  function renderHookForTest() {
    return renderHook(() => useLastNavigationDirection());
  }
});