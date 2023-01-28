import "../assets/styles/Task.css";

function NewTaskViewHeader() {
    return (
        <div className="mt-[2.8rem] px-[2.3rem]">
            <div className="leading-light flex justify-between text-[1.2rem] text-[#776e6e]">
                <div id="task-view" className="w-[6rem]">
                    Course ID
                </div>
                <div className="w-[15rem]">Project Name</div>
                <div className="w-[30rem]">Task Name</div>
                <div id="task-view-a" className="w-[6.4rem]">
                    Start Date
                </div>
                <div className="w-[6.4rem]">Due Date</div>
                <div className="w-[6rem]">Status</div>
                <div className="hidden w-[11rem] text-center 2xl:block">
                    Progress
                </div>
            </div>
            <hr className="mb-0 bg-[#f0f3f6]" />
        </div>
    );
}
export default NewTaskViewHeader;
