import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfileNoJob() {
    return (
        <div className="profile-right-content">
          <div className="buying-services">
            <img
              src="/images/imagesProfile/office-building.7ac5061.gif"
              alt=""
            />
            <div>
              <p>
                {" "}
                <strong>Buying services for work?</strong>Get the best
                experience for your business with 3 quick questions.{" "}
              </p>
              <p>
                What’s your industry
                {">"}
              </p>
            </div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                document.querySelector(".buying-services").style.display =
                  "none";
              }}
            >
              X
            </span>
          </div>
          <div className="create-gig">
            <p>It seems that you don't have any active Gigs. Get selling!</p>
            <Link to="/by-user/create-new-job">
              <button>Create a New Gig</button>
            </Link>
          </div>
        </div>
    )
}
