import { SlCalender } from "react-icons/sl";

function Experience() {
  return (
    <div>
      <section className="experience" id="experience">
        <h2 className="section-title">Experience</h2>
        <span className="section-subtitle">
          Highlights of my work experience
        </span>

        <div className="experience-container container">
          <div className="experience-section">
            <div className="experience-content">
              <div className="experience-data">
                <div>
                  <h3 className="experience-title">
                    Software Developer Intern
                  </h3>
                  <span className="experience-subtitle">PTC, Pune</span>
                  <div className="experience-calender">
                    <div>
                      <SlCalender />
                      <span> July 2024-Present</span>
                    </div>
                    <span className="experience-skills">C/C++</span>
                  </div>
                </div>

                <div>
                  <span className="experience-rounder"></span>
                  <span className="experience-line"></span>
                </div>
              </div>

              <div className="experience-data">
                <div></div>

                <div>
                  <span className="experience-rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
