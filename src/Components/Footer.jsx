import React from "react";
import Order from "./Order";

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {/* 1eme maniere */}
            {/* {isOpen ? "Open" : "Close"} */}
            {/*tout dépend l'heure déclaré , ca m'affiche soit open soit close */}

            {/* 2eme maniere  */}
            {/* {isOpen && (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00 come visit us or order
                        online
                    </p>
                </div>
            )} */}
            {/* 3eme maniere */}
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}
                </p>
            )}
        </footer>
    );
}

export default Footer;
