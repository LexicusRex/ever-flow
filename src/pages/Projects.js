import ProjectTaskBoard from "components/project-board/ProjectTaskBoard";
import MenuBar from "components/MenuBar";

function Projects() {
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={"Projects"} />
            <div className="h-screen min-w-[32rem]"></div>
            <ProjectTaskBoard />
        </div>
    );
}
export default Projects;
