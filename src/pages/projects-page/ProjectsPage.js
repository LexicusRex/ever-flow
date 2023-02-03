import ProjectTaskBoard from "pages/projects-page/components/ProjectTaskBoard";
import MenuBar from "components/MenuBar";

function Projects() {
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={"Projects"} />
            <div className="h-screen min-w-[28rem]"></div>
            <ProjectTaskBoard />
        </div>
    );
}
export default Projects;
