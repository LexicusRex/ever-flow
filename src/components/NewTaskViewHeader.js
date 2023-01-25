function NewTaskViewHeader() {
    return (
        <div className="mt-[2.8rem] px-[2.3rem]">
            <div className="leading-light flex justify-between text-[1.2rem] text-[#776e6e]">
                <div className="w-[6rem]">Course ID</div>
                <div className="w-[11rem]">Project Name</div>
                <div className="w-[25rem]">Task Name</div>
                <div className="w-[6.4rem]">Start Date</div>
                <div className="w-[6.4rem]">Due Date</div>
                <div className="w-[6rem]">Status</div>
                <div className="min-w-[10rem] max-w-[14rem] text-center">
                    Progress
                </div>
            </div>
            <hr className="mb-0 bg-[#f0f3f6]" />
        </div>
    );
}
export default NewTaskViewHeader;
