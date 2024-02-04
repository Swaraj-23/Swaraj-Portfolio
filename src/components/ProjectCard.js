import { Col } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard({ title, description, imgUrl, webUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={webUrl} target="_blank"><BiLinkExternal className="proj-icon"/></a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
