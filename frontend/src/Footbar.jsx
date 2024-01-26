function Footbar(){
    return (
    <footer className="max-w-container bg-pink-400">
        <div>
            <ul className="md:flex justify-evenly py-6 text-white font-semibold">
                <div>
                    <li className="mx-auto text-center cursor-pointer">Metodos de pago</li>
                    <li className="mx-auto text-center md:pt-6 pt-4 cursor-pointer">Medios de envio</li>
                </div>
                <div>
                    <li className="mx-auto text-center pt-4 md:pt-0 cursor-pointer">Suscribete al Newsletter</li>
                    <li className="mx-auto text-center md:pt-6 pt-4 cursor-pointer">Contacto</li>
                </div>
                
            </ul>
        </div>
    </footer>
    );
}

export default Footbar