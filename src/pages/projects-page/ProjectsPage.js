import ProjectTaskBoard from "pages/projects-page/components/ProjectTaskBoard";
import MenuBar from "components/MenuBar";
import ProjectsOverview from "./components/ProjectsOverview";
import PageHeading from "components/PageHeading";
import PageOverview from "components/PageOverview";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import ProjectTasksPage from "./ProjectTasksPage";

function ProjectsPage() {
    const [isDisplayProject, setDisplayProject] = useState(false);
    const [projectProps, setProjectProps] = useState({});

    const pageTitle = "Projects";

    const test1 = {
        project: "Assignment A",
        course: "FINS1613",
        status: "ongoing",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem consequuntur labore provident laudantium, aspernatur delectus vel cum et quae nemo dignissimos quidem molestiae, itaque repellat fugit saepe ut quibusdam odit?",
        taskCount: 1,
        meetingCount: 2,
        dueDate: "10/05/2023",
        setOpenProject: setDisplayProject,
        setOpenProps: setProjectProps,
    };

    const projects = [
        <ProjectCard key={"a"} progress={20} {...test1} />,
        <ProjectCard key={"b"} progress={30} {...test1} />,
        <ProjectCard key={"c"} progress={40} {...test1} />,
        <ProjectCard key={"d"} progress={50} {...test1} />,
        <ProjectCard key={"e"} progress={60} {...test1} />,
        // <ProjectCard key={"f"} progress={70} status={"Done"} />,
        // <ProjectCard key={} progress={80} status={"Done"} />,
        // <ProjectCard key={} progress={90} status={"Done"} />,
        // <ProjectCard key={} progress={100} />,
    ];

    if (isDisplayProject) {
        return <ProjectTasksPage {...projectProps} />;
    }
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={pageTitle} />
            <div className="h-screen min-w-[28rem]"></div>
            <div className="flex w-full flex-col">
                <PageHeading hasMyHeader={true} pageTitle={pageTitle} />
                <PageOverview overviewTitle={pageTitle} cardList={projects} />
            </div>
            {/* <ProjectsOverview /> */}
            {/* <ProjectTaskBoard /> */}
        </div>
    );
}
export default ProjectsPage;
