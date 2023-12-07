import { capitalize } from "@/utils/string"

describe("capitalize module", () => {
  test("capitalize abcdef -> Abcdef", () => {
    expect(capitalize("abcdef")).toBe("Abcdef")
  })
})
