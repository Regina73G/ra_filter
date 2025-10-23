// Отвечает исключительно за отображение списка карточек проектов, которые он получает от родительского компонента.
import "./ProjectList.css"

export function ProjectList({projects}) {
  return(
    <div className="project-list">
      {projects.map((project, index) => (
        <img src={project.img} 
        alt={project.category} 
        className="project-list__img" 
        key={index} 
      />
      ))}
    </div>
  )
}

