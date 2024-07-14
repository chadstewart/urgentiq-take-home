import { Mock, afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import api from "../../../../lib/api/config/api";
import zod from "zod";

const testDataSchema = zod.object({
  test: zod.string(),
});

describe("API Layer Config", () => {
  beforeEach(() => {
    vi.mock("zod-fetch", () => {
      return {
        createZodFetcher:
          (fetchFunc: (...args: unknown[]) => unknown) =>
          (schema: unknown, ...args: unknown[]) =>
            fetchFunc(...args),
      };
    });

    vi.mock("../../../../lib/api/util/exponential-back-off", () => {
      return {
        exponentialBackOff: vi.fn,
      };
    });

    global.fetch = vi.fn(() =>
      Promise.resolve({ test: "test", json: vi.fn() })
    ) as Mock;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Get function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.get(testDataSchema, "test");
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Get function should call global fetch function with 'test' and method: 'GET' params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.get(testDataSchema, "test");
    expect(spy).toHaveBeenLastCalledWith("test", { method: "GET" });
  });
});
