import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    // const checkNumber = (number) => {
    //     if (number > people.length - 1) {
    //         return 0;
    //     }
    //     if (number < 0) {
    //         return people.length - 1;
    //     }
    //     return number;
    // };

    const nextPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = (currentIndex + 1) % people.length;
            return newIndex;
            // return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = (currentIndex - 1 + people.length) % people.length;
            return newIndex;
            // return checkNumber(newIndex);
        });
    };
    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button
                        type="button"
                        className="prev-btn"
                        onClick={prevPerson}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        type="button"
                        className="prev-btn"
                        onClick={nextPerson}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </article>
        </main>
    );
};
export default App;
