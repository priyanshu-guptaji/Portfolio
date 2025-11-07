import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const Timeline = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <VerticalTimeline>

        {/* Matriculation */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="2009 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Matriculation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sachidanand Gyan Bharti Model School, Ranchi, Jharkhand
          </h4>
        </VerticalTimelineElement>

        {/* Intermediate */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intermediate (PCM)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bridgeford School, Ranchi, Jharkhand
          </h4>
        </VerticalTimelineElement>

        {/* Bachelor's */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2027"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology (B.Tech)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gandhi Institute of Engineering and Technology, Gunupur, Odisha
          </h4>
          <p>Computer Science and Engineering</p>
        </VerticalTimelineElement>

        {/* Data Science Club */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2025 - Present"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Member, Data Science Club
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            GIET University, Gunupur
          </h4>
          <p>
            Engaged in workshops, data analytics projects, and knowledge-sharing
            sessions focusing on machine learning and AI applications.
          </p>
        </VerticalTimelineElement>

        {/* Star / Present */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
