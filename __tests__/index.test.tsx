import { render, screen } from "@testing-library/react";
import searchApi from "../api/searchApi";
import { SearchType } from "../models/SearchType.enum";
// import { shallow } from 'enzyme';

const resposeObj = {
  incomplete_results: false,
  items: [],
  total_count: 1,
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve(resposeObj),
  })
);

describe("Git Hub Lite Test", () => {
  it("Should return users after API call", async () => {
    const responseData = await searchApi.search({
      page: 1,
      searchText: "Typescript",
      searchType: SearchType.Users,
    });

    expect(responseData).toMatchObject(resposeObj);
  });


  // it('should render')
});
