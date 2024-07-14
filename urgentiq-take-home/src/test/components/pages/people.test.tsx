import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import People from "@/components/pages/people";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const testPeople = [
      {
        name: "Boo",
        height: "test",
        mass: "test",
        hair_color: "test",
        skin_color: "test",
        eye_color: "test",
        birth_year: "test",
        gender: "test",
        homeworld: "test",
        films: ["test"],
        species: ["test"],
        vehicles: ["test"],
        starships: ["test"],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "test",
        url: "https://swapi.dev/api/planets/1/",
      },
      {
        name: "test",
        height: "test",
        mass: "test",
        hair_color: "test",
        skin_color: "test",
        eye_color: "test",
        birth_year: "test",
        gender: "test",
        homeworld: "test",
        films: ["test"],
        species: ["test"],
        vehicles: ["test"],
        starships: ["test"],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "test",
        url: "https://swapi.dev/api/planets/1/",
      },
    ];

    const testRandomPics = [
      {
        url: "https://cdn2.thecatapi.com/images/37.gif",
        width: 499,
        height: 528,
      },
      {
        url: "https://cdn2.thecatapi.com/images/2iv.jpg",
        width: 500,
        height: 322,
      },
      {
        url: "https://cdn2.thecatapi.com/images/4ds.gif",
        width: 240,
        height: 240,
      },
      {
        url: "https://cdn2.thecatapi.com/images/6ok.gif",
        width: 166,
        height: 210,
      },
      {
        url: "https://cdn2.thecatapi.com/images/bkm.jpg",
        width: 650,
        height: 669,
      },
      {
        url: "https://cdn2.thecatapi.com/images/MTUxNzUyNA.jpg",
        width: 598,
        height: 900,
      },
      {
        url: "https://cdn2.thecatapi.com/images/MTc4NDUzMg.jpg",
        width: 1536,
        height: 729,
      },
      {
        url: "https://cdn2.thecatapi.com/images/MjAxODkyMQ.jpg",
        width: 741,
        height: 542,
      },
      {
        url: "https://cdn2.thecatapi.com/images/MjA2MTc4MA.jpg",
        width: 1024,
        height: 678,
      },
      {
        url: "https://cdn2.thecatapi.com/images/q3fsSXiaj.png",
        width: 1489,
        height: 1000,
      },
    ];

    const testFunc = () => {};
    const test = render(
      <People
        peopleList={testPeople}
        randomPics={testRandomPics}
        nextPage=""
        prevPage=""
        handlePagination={testFunc}
      />
    );
    expect(test).toMatchSnapshot();
  });
});
