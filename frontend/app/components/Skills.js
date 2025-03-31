import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiHeroku } from "react-icons/si";
import {
  Container,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 size={40} color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
    { name: "APIs", icon: <FaDatabase size={40} color="grey" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
    { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
    { name: "Heroku", icon: <SiHeroku size={40} color="#a26de7" /> },
  ],
};

export default function Skills() {
  return (
    <Container className="mt-5" id="skills">
      <h2 className="text-center mb-4">Skills</h2>
      {Object.entries(skills).map(([category, techList]) => (
        <div key={category} className="mt-4">
          <h4 className="text-center text-uppercase font-weight-bold">
            {category}
          </h4>
          <Row className="justify-content-center g-4">
            {techList.map(({ name, icon }) => (
              <Col
                xs={6}
                sm={4}
                md={3}
                lg={2}
                key={name}
                className="text-center"
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{name}</Tooltip>}
                >
                  <div className="tech-icon">{icon}</div>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}
