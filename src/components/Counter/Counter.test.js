import { render, screen, fireEvent } from "@testing-library/react";
import Counter from './index'

describe("Counter Tests", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  beforeAll(() => {
    console.log("bir kere çalışacağım")
  })

  afterAll(() => {
    console.log("en son bir kere çalışacağım")
  })

  afterEach(() => {
    console.log("her birinden sonra çalışacağım")
  })

  test("increase btn", () => {
    const increaseBtn = screen.getByText("Increase");
    const count = screen.getByText("0");
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    const decreaseBtn = screen.getByText("Decrease");
    const count = screen.getByText("0");
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});

// test("increase btn", () => {
//     render(<Counter />);
//     const count = screen.getByText("0");
//     const increaseBtn = screen.getByText("Increase");
//     fireEvent.click(increaseBtn);
//     expect(count).toHaveTextContent("1");
// });

// test("decrease btn", () => {
//     render(<Counter />);
//     const count = screen.getByText("0");
//     const decreaseBtn = screen.getByText("Decrease");
//     fireEvent.click(decreaseBtn);
//     expect(count).toHaveTextContent("-1");
// });


