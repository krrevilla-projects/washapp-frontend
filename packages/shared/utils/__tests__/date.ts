import { formatDate } from "../date";

describe("utils/date", () => {
  it("should format date correctly", () => {
    const formattedDate = formatDate("2022-08-07T06:24:10.071Z");

    expect(formattedDate).toBe("Aug 07, 2022");
  });
});
