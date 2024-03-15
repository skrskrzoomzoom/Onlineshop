import { render, screen } from "@testing-library/react";
import App from "./trial";

test("renders product grid", () => {
  render(<App />);

  // Assert that the product grid is rendered
  const productGridElement = screen.getByTestId("product-grid");
  expect(productGridElement).toBeInTheDocument();
});

test("renders all products", () => {
  render(<App />);

  // Assert that all products are rendered
  const productElements = screen.getAllByTestId("product");
  expect(productElements.length).toBe(4);
});

test("renders product details correctly", () => {
  render(<App />);

  // Assert that each product's details are rendered correctly
  const productElements = screen.getAllByTestId("product");
  expect(productElements[0]).toHaveTextContent("Product 1");
  expect(productElements[0]).toHaveTextContent("Lorem ipsum dolor sit amet");
  expect(productElements[0]).toHaveTextContent("$19.99");

  // Repeat the above assertions for other products
});
