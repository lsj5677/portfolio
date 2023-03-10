import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.debug("Error", error));
  }, []);
  return (
    <div className="sub-wrap sub-layout sm:grid grid-flow-row-dense grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          thumbSrc={project.thumbnail}
          desc={project.description}
          gitSrc={project.gitAddr}
          siteSrc={project.siteAddr}
          period={project.period}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
