import React from "react";
import { shallow } from "enzyme";
import { PearsonUserProfile } from "./PearsonUserProfile";
import renderer from "react-test-renderer";

describe("PearsonUserProfile", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUserProfile />);
  });

  it("renders three divs", () => {
    expect(component.find("div")).toHaveLength(3);
  });

  it("renders an img tag for Avatar", () => {
    expect(component.find("img")).toHaveLength(1);
  });

  it("renders Pearson User Profile as per the snapshot", () => {
    const tree = renderer
      .create(
        <PearsonUserProfile
          key="1"
          id="1"
          first_name="Eve"
          last_name="Holt"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
