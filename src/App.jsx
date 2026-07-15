import React, { useState } from "react";
import pages from "./data/pages";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Editorial from "./Pages/Editorial";
import Highlights from "./Pages/Highlights";
import SpinOffs from "./Pages/SpinOffs";
import LifeStyle from "./Pages/LifeStyle";
import News from "./Pages/News";
import Awards from "./Pages/Awards";

function App() {

    const [currentPage, setCurrentPage] = useState("Editorial");

    function renderPage() {
        if (currentPage === "Editorial") return <Editorial />;
        if (currentPage === "Highlights") return <Highlights />;
        if (currentPage === "SpinOffs") return <SpinOffs />;
        if (currentPage === "LifeStyle") return <LifeStyle />;
        if (currentPage === "News") return <News />;
        if (currentPage === "Awards") return <Awards />;
    }

    return (
        <>
            <NavBar
                pages={pages}
                currentPage={currentPage}
                onNavigate={setCurrentPage}
            />

            <main>
                {renderPage()}
            </main>
            
            <Footer 
                pages={pages}
                currentPage={currentPage}
                onNavigate={setCurrentPage}
            />            
        </>
    )
}

export default App;