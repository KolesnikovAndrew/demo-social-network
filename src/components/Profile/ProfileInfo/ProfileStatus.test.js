import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="test" />);
    const instance = component.root;
    expect(instance.state.status).toBe("test");
  });

  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="test" />);
    const instance = component.getInstance();
    let span = instance.findAllByType("span");
    expect(span.length).toBe(1);
  });
});
