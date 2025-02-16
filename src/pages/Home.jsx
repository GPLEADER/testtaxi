import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent";
import Location from "../assets/location.png";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";

function Home() {
    const [userLocation, setUserLocation] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => setAlertMessage(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);

    const handleLocation = () => {
        if (!navigator.geolocation) {
            setAlertMessage({ text: "Geolokatsiya funksiyasi qo‘llab-quvvatlanmaydi.", type: "error" });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    setAlertMessage({ text: "Iltimos, lokatsiya funksiyasini yoqing.", type: "error" });
                } else {
                    setAlertMessage({ text: "Lokatsiya aniqlanmadi, qaytadan urinib ko‘ring.", type: "error" });
                }
            }
        );
    };

    return (
        <div className="font-display relative h-dvh max-w-lg mx-auto flex flex-col">
            {/* Xarita komponenti */}
            <div>
                <MapComponent userLocation={userLocation} />
            </div>

            {/* Xabar ko‘rsatuvchi div */}
            {alertMessage && (
                <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center px-3 py-2 rounded-lg shadow-lg text-white text-[12px] ${alertMessage.type === "error" ? "bg-[#191414] border border-red-600" : "bg-[#191414] border border-green-600"}`}>
                    <AiOutlineExclamationCircle className="text-red-500 mr-2" size={16} />
                    <span className="flex-grow whitespace-nowrap">{alertMessage.text}</span>
                    <button onClick={() => setAlertMessage(null)}>
                        <AiOutlineClose className="text-gray-400 hover:text-white" size={14} />
                    </button>
                </div>
            )}

            {/* Tugma joylashgan qism bo‘sh joylarni egallashi uchun mt-auto qo‘shildi */}
            <div className="w-full z-20 bg-white shadow-xl rounded-tl-4xl max-h-[200px] bottom-0 absolute rounded-tr-4xl py-4 h-full">
                <div className="flex items-center justify-center">
                    <button
                        className="text-black border-2 border-black rounded-2xl cursor-pointer absolute bottom-28 bg-white py-3 px-20 font-semibold flex items-center gap-2"
                        onClick={handleLocation}
                    >
                        <img src={Location} alt="" width={20} />
                        Lokatsiya
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <button className="text-white rounded-2xl cursor-pointer absolute bottom-3 bg-[#151513] py-4 px-24 font-semibold">
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;