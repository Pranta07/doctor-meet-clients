import { render, screen } from "@testing-library/react";
import PharmacyHome from "./PharmacyHome";

test("everything is running fine", () => {
  render(<PharmacyHome />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
