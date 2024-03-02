import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "./axiosConfig";

function PerfilForm() {
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [calle, setCalle] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar />
      <main className="flex flex-grow flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Datos de tu cuenta
            </h2>
          </div>
          <div className="">
            <div>
              <label
                htmlFor="actualEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="actualEmail"
                  name="actualEmail"
                  type="email"
                  autoComplete="email"
                  readOnly
                  className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="actualTelefono"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telefono de contacto
              </label>
              <div className="mt-2">
                <input
                  id="actualTelefono"
                  name="actualTelefono"
                  type="tel"
                  autoComplete="telefono"
                  readOnly
                  className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Telefono de contacto"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="actualProvincia"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provincia
              </label>
              <div className="mt-2">
                <input
                  id="actualProvincia"
                  name="actualProvincia"
                  type="text"
                  autoComplete="provincia"
                  readOnly
                  className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Provincia"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="actualCiudad"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  id="actualCiudad"
                  name="actualCiudad"
                  type="text"
                  autoComplete="ciudad"
                  readOnly
                  className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Ciudad"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <label
                  htmlFor="actualCalle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Calle
                </label>
                <div className="mt-2">
                  <input
                    type="actualCalle"
                    id="actualCalle"
                    name="actualCalle"
                    autoComplete="calle"
                    readOnly
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                    placeholder="Calle"
                  />
                </div>
              </div>

              <div className="w-1/3">
                <label
                  htmlFor="actualPostal"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Codigo postal
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="actualPostal"
                    name="actualPostal"
                    autoComplete="postal"
                    readOnly
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none"
                    placeholder="Codigo postal"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Actualizar datos de cuenta
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Telefono de contacto
                </label>
                <div className="mt-2">
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="telefono"
                    required
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setTel(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Provincia
                </label>
                <div className="mt-2">
                  <input
                    id="provincia"
                    name="provincia"
                    type="text"
                    autoComplete="provincia"
                    required
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setProvincia(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ciudad"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ciudad
                </label>
                <div className="mt-2">
                  <input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    autoComplete="ciudad"
                    required
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setCiudad(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex-grow">
                  <label
                    htmlFor="calle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Calle
                  </label>
                  <div className="mt-2">
                    <input
                      type="calle"
                      id="calle"
                      name="calle"
                      autoComplete="calle"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setCalle(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="w-1/4">
                  <label
                    htmlFor="postal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Codigo postal
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="postal"
                      name="postal"
                      autoComplete="postal"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setCalle(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6"
                  style={{ backgroundColor: "rgb(255, 192, 203)" }}
                >
                  Actualizar datos
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footbar />
    </div>
  );
}

export default PerfilForm;
