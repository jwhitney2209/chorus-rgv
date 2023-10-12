import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "eGnAq4AH";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message });
    alert("Form submitted!");
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your name is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div>
      <div className="max-w-[1240px] text-zinc-800 mx-auto flex md:flex-row flex-col justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-link font-medium text-4xl">Contact Us</h1>
        </div>
      </div>
      <div className="py-8 max-w-[1240px] text-zinc-800 mx-auto flex justify-center text-center items-center">
          <div className="sm:text-xl font-['gothic']">
          Our Mailing Address:
          <br />
          P.O. Box 244 Los Fresnos, Texas 78566
          </div>
        </div>
      <section class="">
        <div class="lg:py-16 px-4 mx-auto max-w-screen-md">
          <p class="mb-8 lg:mb-16 text-center text-zinc-800 sm:text-xl font-['gothic']">
            Questions about ticketing? Want to know more information? Contact us
            below.
          </p>
          <form action="https://submit-form.com/eGnAq4AH" class="space-y-8" onSubmit={onSubmit}>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-zinc-800"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                class="shadow-sm bg-gray-50 border border-gray-300 text-zinc-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="ex. Wolfgang Amadeus Mozart"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-zinc-800"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                class="block p-3 w-full text-sm text-zinc-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="ex. queenofthenight@gmail.com"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-zinc-800"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="6"
                class="block p-2.5 w-full text-sm text-zinc-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submitting}
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-zinc-600 sm:w-fit hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
