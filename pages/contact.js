import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5tspbo",
        "template_yphrtpm",
        form.current,
        "oI6VDpQZDciv06xxl"
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <div className="h-screen">
        <div className="mx-auto rounded-xl w-5/6 h-2/5 bg-beige">
          <h3 className="text-3xl text-center py-4">Nous contacter</h3>
          <p className="mx-auto text-center w-1/2">
            Pour toutes demandes, n&apos;hésitez pas à nous envoyer un message
            ou nous appeler!
          </p>
        </div>

        <div className="max-w-2xl mx-auto -mt-40">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
          >
            <h1 className="text-2xl font-bold dark:text-gray-50">
              Nous écrire
            </h1>

            <label
              htmlFor="name"
              className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              Nom et Prénom
              <span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-beige font-light text-gray-500"
              required
            />

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="user_email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-beige font-light text-gray-500"
              required
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Objet<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-beige font-light text-gray-500"
            />

            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-beige font-light text-gray-500"
              required
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                value="Send"
                className="px-10 mt-8 py-2 bg-blue text-white font-light rounded-md text-lg flex flex-row items-center"
              >
                Envoyer
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-3xl flex justify-between my-4">
        <div>
          <p className="text-3xl uppercase font-bold">Où nous trouver</p>
          <div className="my-6 space-y-4">
            <h3 className="font-bold">Horaires:</h3>
            <p>
              Du lundi au vendredi
              <br /> De 8h à 12h puis de 13h à 17h
            </p>
            <p>
              Samedi <br />
              De 8h à 12h
            </p>
            <span>Fermé le dimanche</span>
          </div>
        </div>
        <div className="my-12 space-y-2">
          <div>
            <h3 className="font-bold">Adresse:</h3>
            <p>
              1 bis, rue Imam Abou Hanifa
              <br /> 2070 Marsa Plage
            </p>
          </div>
          <ul>
            <h3 className="font-bold">Téléphone:</h3>
            <li>
              <a href="tel:+21670858250">+216 70 858 250</a>
            </li>
            <li>
              <a href="tel:+21639106112">+216 39 106 112</a>
            </li>
            <li>
              <a href="tel:+21627607947">+216 27 607 947</a>
            </li>
          </ul>
          <div>
            <h3 className="font-bold">Email:</h3>
            <p>
              <a href="mailto:galeriedriba@gmail.com">galeriedriba@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383.168793070823!2d10.2685991!3d36.876365600000014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b56f9eca1331%3A0x419bad5d042f60d4!2sAtelier%20Driba!5e0!3m2!1sfr!2ses!4v1663847583176!5m2!1sfr!2ses"
        width="100%"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
