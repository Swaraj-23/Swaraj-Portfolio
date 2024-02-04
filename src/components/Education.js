import { SlCalender } from "react-icons/sl";

function Education() {
  return (
    <div>
      <section className="education" id="education">
        <h2 className="section-title">Education</h2>
        <span className="section-subtitle">My personal journey</span>

        <div className="education-container container">
          <div className="education-section">
            <div className="education-content">
              <div className="education-data">
                <div>
                  <h3 className="education-title">B.E Computer Engineering</h3>
                  <span className="education-subtitle">
                    TSSM'S Padmabhooshan Vasantdada Patil Institute of
                    Technology , Pune
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2021-2025</span></div>
                    <span className="education-grade">8.86 CGPA</span>
                  </div>
                </div>

                <div>
                  <span className="education-rounder"></span>
                  <span className="education-line"></span>
                </div>
              </div>

              <div className="education-data">
                <div></div>

                <div>
                  <span className="education-rounder"></span>
                  <span className="education-line"></span>
                </div>

                <div>
                  <h3 className="education-title">HSC</h3>
                  <span className="education-subtitle">
                    Vivekanand College, Kolhapur
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2020-2021</span></div>
                    <span className="education-grade">95.83 %</span>
                  </div>
                </div>
                
              </div>

              <div className="education-data">
                <div>
                  <h3 className="education-title">SSC</h3>
                  <span className="education-subtitle">
                    Bal Bharati Public School,Ratnagiri
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2018-2019</span></div>
                    <span className="education-grade">93.00 %</span>
                  </div>
                </div>

                <div>
                  <span className="education-rounder"></span>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
