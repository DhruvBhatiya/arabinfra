import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./whatsapp.css"

const Whatsapp = () => {
    const handleWhatsAppClick = () => {
        const whatsappNumber = "+919726724670"; // Replace with your WhatsApp number
        const message = "Hello, I would like to inquire about your services.";
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <>

            <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1000 }}>
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="3x"
                    color="#25D366"
                    style={{ cursor: "pointer" }}
                    onClick={handleWhatsAppClick}
                />
            </div>

            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#ffffff" />
            </div>
        </>
    );
};

export default Whatsapp;
