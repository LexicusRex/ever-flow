import MenuBar from "components/MenuBar";
import PageHeading from "components/PageHeading";
import ProjectTaskBoard from "./components/ProjectTaskBoard";

const ProjectTasksPage = ({ project }) => {
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={"Projects"} />
            <div className="h-screen min-w-[28rem]"></div>
            <div className="flex h-full w-full flex-col">
                <PageHeading pageTitle={project} />
                <div className="flex h-full w-full pl-[4.5rem]">
                    <div className="flex grow flex-col">
                        <div className="flex justify-start text-[3rem]">
                            <div className="">Overview</div>
                            <div className="bg-mild-accent">Tasks</div>
                            <div className="">Files</div>
                            <div className="">Team</div>
                            <div className="">Activity</div>
                        </div>
                        <div className="h-full bg-[#eceff1]">
                            <ProjectTaskBoard />
                        </div>
                    </div>
                    <div className="h-[400px] w-[37.5rem] bg-red-100"></div>
                </div>
            </div>
        </div>
    );
};
export default ProjectTasksPage;
