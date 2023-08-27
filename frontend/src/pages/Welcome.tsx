import React from "react";

const Welcome = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Fejléc */}
      <header className="bg-green-800 flex items-center justify-between w-full p-4">
        {/* Bal oldal: Logo */}
        <div className="flex items-center">
          <img className="h-10 w-auto" src="/erdert.png" alt="erdert" />
        </div>

        {/* Jobb oldal: Bejelentkezés gomb/link */}
        <a href="/login" className="text-white text-lg hover:underline">
          Bejelentkezés
        </a>
      </header>

      {/* Tartalom középen */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-semibold mb-4">Üdvözöljük</h1>
        <p className="text-lg text-center">
          Az Erdét porta nyilvántartó rendszerében
        </p>

        {/* Egyéb tartalom, például űrlap vagy további információ */}
      </main>

      {/* Lábléc */}
      <footer className="text-gray-700 p-4 text-center">
        &copy; {new Date().getFullYear()} Your Company. Minden jog fenntartva.
      </footer>
    </div>
  );
};

export default Welcome;
