function NavBar(){
    return (<nav className="max-w-container bg-pink-400">
        <ul className="md:grid grid-cols-8 text-white font-semibold">
            <li className="text-center col-start-3 py-4 cursor-pointer hover:bg-pink-500">Inicio</li>
            <li className="text-center py-4 cursor-pointer hover:bg-pink-500">Productos</li>
            <li className="text-center py-4 cursor-pointer hover:bg-pink-500">Contacto</li>
            {/* <li>Favoritos</li>
            <li>Historial de compras</li> */}
            <li className="text-center py-4 cursor-pointer hover:bg-pink-500">Carritoxd</li>
            <li className="text-end col-start-8 cursor-pointer  flex justify-end"><span className="p-4 hover:bg-pink-500">Cuenta</span></li>
        </ul>
    </nav>)
}

export default NavBar