import { render, screen } from "@testing-library/react";
import searchApi from "../api/searchApi";
import { SearchType } from "../models/SearchType.enum";
// import { shallow } from 'enzyme';

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve(resposeObj),
//   })
// );

describe("Git Hub Lite Test", () => {
  it("Should return users after API call", async () => {
    const responseData = await searchApi.search({
      page: 1,
      searchText: "John",
      searchType: SearchType.Users,
    });

    expect(Array.isArray(responseData.items)).toBe(true);
    expect(responseData.items.length).toBeGreaterThan(0);
  });

  it("Should return repositories after API call", async () => {
    const responseData = await searchApi.search({
      page: 1,
      searchText: "Typescript",
      searchType: SearchType.Repository,
    });

    expect(Array.isArray(responseData.items)).toBe(true);
    expect(responseData.items.length).toBeGreaterThan(0);
  });


  // it('should render')
});
