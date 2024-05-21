import Image from "next/image";

export default function Home() {
  return (
    
<div className="flex flex-col min-h-screen">
      
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6 flex justify-center items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-lime-400 bg-clip-text text-transparent">Zaliczenie Node.JS</h1>
        </div>

        <div className="flex-1 flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
            <div className="w-1/3 mt-60">
            <table className="table-auto border-collapse w-full">
            <thead>
                <tr>
                    <th className="px-2 py-1 border-2 bg-lime-400" >Kolumna 1</th>
                    <th className="px-2 py-1 border-2 bg-lime-400">Kolumna 2</th>
                    <th className="px-2 py-1 border-2 bg-lime-400">Kolumna 3</th>
                    <th className="px-2 py-1 border-2 bg-lime-400">Kolumna 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-2 py-1 border bg-yellow-500 ">Kotek</td>
                    <td className="px-2 py-1 border bg-yellow-500">Piesek</td>
                    <td className="px-2 py-1 border bg-yellow-500">Kaczka</td>
                    <td className="px-2 py-1 border bg-yellow-500">Gęś</td>
                </tr>
                <tr>
                    <td className="px-2 py-1 border  bg-yellow-500">Piesek</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Kotek</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Gęś</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Kaczka</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 border  bg-yellow-500">Gęś</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Kaczka</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Piesek</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Kotek</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 border  bg-yellow-500">Kaczka</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Gęś</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Kotek</td>
                    <td className="px-2 py-1 border  bg-yellow-500">Piesek</td>
                </tr>
            </tbody>
        </table>
                
            </div>
            <div className="w-1/3">
                <h2 className="text-lg font-semibold">Sekcja 2</h2>
                <p>Tutaj możesz umieścić zawartość drugiej sekcji.</p>
                
            </div>
            <div className=" rounded-lg w-80" >
                <h2 className="text-2xl font-bold mb-4 text-center "> Logowanie</h2>
            <div>
            <form id="loginForm" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-red-300">Nazwa użytkownika</label>
                        <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-red-500"></input>

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-red-300">Hasło</label>
                        <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-red-500" ></input>

                    </div>
                    <div className="mb-6">
            <label  className="block text-red-300 text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-red-500"></input>
        </div>
        <div className="text-center">
             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
        <div className="text-center">
             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Anuluj</button>
        </div>
             </form>
                </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6 flex justify-center items-center" >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-lime-400 bg-clip-text text-transparent" >Wiktor Kmiecik gr2 119237</h3>  
        </div>
    </div>
  );
}
