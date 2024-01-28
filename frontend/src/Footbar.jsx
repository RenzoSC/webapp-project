function Footbar(){
    return (
    <footer className="max-w-container" style={{ backgroundColor: '#ffc0cb' }}>
        <div>
            <ul className="sm:flex justify-evenly py-6 text-black font-semibold">
                <div>
                    <li className="mx-auto text-center cursor-pointer">Metodos de pago</li>
                    <li className="mx-auto text-center sm:pt-6 pt-4 cursor-pointer">Medios de envio</li>
                </div>
                <div>
                    <li className="mx-auto text-center pt-4 sm:pt-0 cursor-pointer">Suscribete al Newsletter</li>
                    <li className="mx-auto text-center sm:pt-6 pt-4 cursor-pointer"><a href="http://localhost:3000/contacto">Contacto</a></li>
                </div>
                
            </ul>
        </div>
    </footer>
    );
}

export default Footbar