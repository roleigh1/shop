import Navbar from "../Nav/Navbar"
import Banner from "./Components/Banner"
import QuestitionsAndAnswers from "./Components/Questions"
import Footer from "../Footer/Footer";
import { apiConfig } from "../config";
import { useEffect, useState } from "react";
export default function Faq() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch(apiConfig.BASE_URL + apiConfig.endpoints.faqs);

                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await res.json();
                setData(data.result);

            } catch (error) {
                console.error("Error fetching Faqs:", error);
            }
        };
        fetchFaqs()
    }, [])


    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <QuestitionsAndAnswers data={data} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}