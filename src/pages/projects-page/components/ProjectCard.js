import Avatar from "components/Avatar";

const ProjectCard = ({
    project,
    course,
    status,
    progress,
    description,
    taskCount,
    meetingCount,
    members,
    dueDate,
}) => {
    const lineHeight = "leading-[26px]";
    return (
        <div className="flex h-[36.5rem] w-[45rem] grow cursor-pointer flex-col rounded-[1rem] bg-white px-[2.4rem] py-[2rem] text-left shadow-md hover:shadow-lg hover:shadow-focus-accent">
            <div
                className={`flex justify-between text-[2rem] font-semibold ${lineHeight}`}
            >
                {project}
                <div
                    className={`flex h-[2rem] w-fit items-center justify-center rounded-[4px] bg-green-300 px-[1rem] text-[1rem] text-white ${lineHeight}`}
                >
                    {status}
                </div>
            </div>
            <div
                className={`text-[1.4rem] font-medium ${lineHeight} text-tertiary`}
            >
                {course}
            </div>
            <div
                className={`mr-[2.6rem] h-[11rem] pt-[7px] text-[1.2rem] ${lineHeight} text-tertiary`}
            >
                {description}
            </div>

            <div
                className={`flex w-[45%] justify-between text-[1.2rem] ${lineHeight} pt-[1.3rem]`}
            >
                <div>
                    {taskCount} {taskCount > 1 ? " Tasks" : " Task"}
                </div>
                <div>
                    {meetingCount}
                    {meetingCount > 1 ? " Meetings" : " Meeting"}
                </div>
            </div>

            <div className="flex justify-between pt-[1rem]">
                {/* TODO - Turn into component */}
                <div className="flex">
                    <Avatar userName={"Aragorn"} />
                    <Avatar userName={"Legolas"} />
                    <Avatar userName={"Gimli"} />
                    <Avatar userName={"Gandalf"} />
                </div>
                <div className={`text-[1.2rem] ${lineHeight}`}>
                    Due Date: {dueDate}
                </div>
            </div>
            <hr className="mt-[2.8rem] bg-[#dedede]" />
            <div
                className={`flex justify-between text-[1.2rem] font-medium ${lineHeight}`}
            >
                <div>Progress</div>
                <div>{progress}%</div>
            </div>
            <div className="mt-[1.2rem] h-[4px] w-full rounded-full bg-[#d9d9d9]">
                <div
                    style={{ width: progress.toString() + "%" }}
                    className="h-[4px] rounded-full bg-full-accent"
                ></div>
            </div>
        </div>
    );
};
export default ProjectCard;
