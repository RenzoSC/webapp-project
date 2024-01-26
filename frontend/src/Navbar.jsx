function NavBar(){
    return (<nav className="max-w-container bg-pink-400">
        <ul className="md:grid grid-cols-5 py-6 text-white font-semibold">
            <li className="text-center cursor-pointer">Inicio</li>
            <li className="text-center cursor-pointer">Productos</li>
            <li className="text-center cursor-pointer">Contacto</li>
            {/* <li>Favoritos</li>
            <li>Historial de compras</li> */}
            <li className="text-center cursor-pointer">Carritoxd</li>
            <li className="text-center cursor-pointer me-3">Cuenta</li>
        </ul>
    </nav>)
}

export default NavBar