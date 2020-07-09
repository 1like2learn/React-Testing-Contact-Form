import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Labels exist for input fields", () => {
  render(<ContactForm />);
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const email = screen.getByLabelText(/email/i)
  const message = screen.getByLabelText(/message/i)

  fireEvent.change(firstName, {target: {value: "Jimmay"}});
  fireEvent.change(lastName, {target: {value: "DeBois"}});
  fireEvent.change(email, {target: {value: "jimmaydebois@gmail.com"}});
  fireEvent.change(message, {target: {value: "New hire"}});

  expect(firstName.value).toBe('Jimmay')
  expect(lastName.value).toBe('DeBois')
  expect(email.value).toBe('jimmaydebois@gmail.com')
  expect(message.value).toBe('New hire')
})