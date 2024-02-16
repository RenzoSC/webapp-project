import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "./axiosConfig";

function PerfilForm() {
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [calle, setCalle] = useState("");
  const [email, setEmail]=useState("");
  const [tel,setTel]=useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar />
      <main className="flex flex-grow flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Datos de tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            method="POST"
          >
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

          </form>
        </div>
      </main>
      <Footbar />
    </div>
  );
}

export default PerfilForm;
