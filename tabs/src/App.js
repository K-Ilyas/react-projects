import React, { useEffect, useState } from 'react'
import { CgChevronDoubleRight } from 'react-icons/cg'

const URL = 'https://course-api.com/react-tabs-project';



function App() {
    const [isLoading, seTisLoading] = useState(true);
    const [experiences, setExperiences] = useState([]);
    const [experience, setExperience] = useState({});

    useEffect(() => {
        // fetch the data from API
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then((data) => {
                setExperiences(data);
                setExperience(data[0]);
                seTisLoading(false);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const companies = experiences.map(({ id, company }) =>
        <button type="button" style={experience.company === company ? {
            color: "rgb(104, 163, 252)",
            borderColor: "rgb(104, 163, 252)"
        } : null} className="companie" key={id} onClick={() => filterExperiences(company)}>{company}</button>
    );
    const filterExperiences = (company) => {
        setExperience(...experiences.filter((e) => e.company === company));
    }


    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading ...</h1>
            </div>
        )
    }
    return (
        <main>
            <header>
                <h1>Experience</h1>
                <div id="decoration"></div>
            </header>
            <div className="container">

                <div className="companies" >
                    {companies}
                </div>
                <div className="info">
                    <h2>{experience.title}</h2>
                    <button type="button" className="company-name">{experience.company}</button>
                    <p className="date">{experience.dates}</p>
                    <div className="tasks">
                        {experience.duties.map((dutie, index) => (
                            <article className="task" key={index}>
                                <span><CgChevronDoubleRight style={{ color: "blue", fontSize: "1.3rem" }} /></span>
                                <p>{dutie}</p>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
            <button type="button" className="footer-btn">more info</button>
        </main>
    )
}

export default App