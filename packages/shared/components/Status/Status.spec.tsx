import { LaundryJobStatus } from "@laundry-app/shared/openapi";
import { render, screen } from "@laundry-app/shared/utils/testUtils";
import React from "react";

import Status from ".";

describe("<Status />", () => {
  it(`should display ${LaundryJobStatus.Pending}`, () => {
    render(<Status status={LaundryJobStatus.Pending} />);
    expect(screen.getByText(LaundryJobStatus.Pending)).toBeTruthy();
  });

  it(`should display ${LaundryJobStatus.Cancelled}`, () => {
    render(<Status status={LaundryJobStatus.Cancelled} />);
    expect(screen.getByText(LaundryJobStatus.Cancelled)).toBeTruthy();
  });

  it(`should display ${LaundryJobStatus.InProgress}`, () => {
    render(<Status status={LaundryJobStatus.InProgress} />);
    expect(screen.getByText(LaundryJobStatus.InProgress)).toBeTruthy();
  });

  it(`should display ${LaundryJobStatus.Paid}`, () => {
    render(<Status status={LaundryJobStatus.Paid} />);
    expect(screen.getByText(LaundryJobStatus.Paid)).toBeTruthy();
  });

  it(`should display ${LaundryJobStatus.Finished}`, () => {
    render(<Status status={LaundryJobStatus.Finished} />);
    expect(screen.getByText(LaundryJobStatus.Finished)).toBeTruthy();
  });
});
