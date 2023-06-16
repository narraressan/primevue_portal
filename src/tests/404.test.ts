import { mount } from "@vue/test-utils";
import locales from "../locales";
import page404 from "../pages/404.vue";
import { describe, expect, test } from "vitest";

describe("404", () => {
  test("should display 404 error", () => {
    const msg = "404";
    const wrapper = mount(page404, {
      props: {},
      global: {
        plugins: [locales],
      },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
