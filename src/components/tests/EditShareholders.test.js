import React from "react";
import { shallow } from "../../enzyme";

import EditShareholders from "../EditShareholders";

describe("<List />", () => {
  it("renders correct test", () => {
    const wrapper = shallow(<EditShareholders />);

    expect(
      wrapper.contains(
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      )
    ).toBeTruthy();
  });
});
