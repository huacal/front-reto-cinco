import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-200">
            <div className="p-6">
                <p className="uppercase text-slate text-2xl tracking-wide text-center font-bold">Willy Wonka</p>
                <p className=" text-amber-500 tracking-wide text-center ">Chocolateria Bumanguesa</p>
                

                <nav className="mt-10">
                    <NavLink className="p-3 text-slate-800 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-3 text-slate-800 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-3 text-slate-800 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-3 text-slate-800 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;