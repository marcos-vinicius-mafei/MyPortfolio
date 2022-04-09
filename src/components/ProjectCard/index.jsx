import { Container } from "./style";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ title, description, website, code, img }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div style={{ height: "500px" }} ref={ref}>
      {inView && (
        <Container
          initial={{ opacity: 0, marginLeft: "-400px" }}
          animate={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="containers image">
            <img src={img} alt={title} />
          </div>
          <div className="containers infos">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="buttons">
              <a href={code} rel="noopener noreferrer" target="_blank">
                <button className="code">Code</button>
              </a>
              <a href={website} rel="noopener noreferrer" target="_blank">
                <button className="site">Website</button>
              </a>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ProjectCard;
