import { useForm } from "react-hook-form";
function TaskModal({
    setModalOpen,
    priority,
    title,
    info,
    dateDue,
    assignee,
    progress,
}) {
    const priorityColor = {
        low: "text-secondary bg-[#DEDEDE35] border-[#b4b4b4]",
        high: "text-[#E76A6A] bg-[#e56b6b34] border-[#FF6262]",
        done: "text-[#3FBE7F] bg-[#83C96A4d] border-[#83C96A]",
    };

    const {
        register,
        handleSubmit,
        // Read the formState before render to subscribe the form state through the Proxy
        formState: {
            errors,
            isDirty,
            isSubmitting,
            touchedFields,
            submitCount,
        },
    } = useForm({
        defaultValues: {
            "task-title": title,
            "task-desc": info,
        },
    });

    function handleTaskEdit(data) {
        console.log("🚀 ~ file: TaskModal.js:33 ~ isDirty", isDirty);
        // Check maxLength paramters for title and info
        console.log("🚀 ~ file: TaskModal.js:41 ~ handleTaskEdit ~ data", data);
        setModalOpen(false);
    }

    return (
        <div className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-[#0000007f]">
            <div className="h-fit max-h-[75vh] min-h-[50vh] w-[85vw] cursor-default rounded-[2rem] bg-white p-[2.3rem] shadow lg:w-[50vw]">
                <div
                    className="float-right rotate-45 cursor-pointer text-5xl"
                    onClick={() => setModalOpen(false)}
                >
                    +
                </div>
                <div id="task-header" className="py-[1rem]">
                    <div
                        id="task-priority"
                        className={`
                            ${priorityColor[priority]}
                            h-[2rem]
                            w-[5rem]
                            rounded-sm
                            border-[0.5px]
                            text-center
                            text-[1.1rem]
                            font-bold
                        `}
                    >
                        {priority?.toUpperCase()}
                    </div>
                    {/* TODO - settings */}
                </div>
                <form id="task-form" onSubmit={handleSubmit(handleTaskEdit)}>
                    <textarea
                        {...register("task-title")}
                        type="text"
                        name="task-title"
                        id="task-title"
                        // defaultValue={title}
                        maxLength="65"
                        placeholder="Task Title"
                        className="mb-[2rem] block w-full border-b-2 p-[1rem] text-[2.5rem] leading-tight focus:outline-mild-accent"
                    />
                    <textarea
                        {...register("task-desc")}
                        type="text"
                        name="task-desc"
                        id="task-desc"
                        // defaultValue={info}
                        maxLength="65"
                        placeholder="Task Description"
                        className="mb-[2rem] w-full border-b p-[1rem] text-[1.5rem] text-secondary focus:outline-mild-accent"
                    />
                    <div
                        id="task-date"
                        className={`
                        ${priorityColor[priority]}
                        mb-[2rem]
                        h-fit
                        w-fit
                        rounded-[10px]
                        border-[0.5px]
                        px-[1rem]
                        text-[1.5rem]
                        font-medium
                    `}
                    >
                        {dateDue.toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>

                    <div className="mb-[2rem] flex h-fit items-center py-[1rem] text-[1.5rem]">
                        Assignee:
                        <img
                            src="https://unsplash.it/28/28"
                            alt=""
                            id="task-assignee"
                            className="mx-[10px] h-[2.8rem] w-[2.8rem] rounded-[50%] "
                        />
                        <div id="name">{assignee}</div>
                    </div>
                    <div
                        id="progress-bar"
                        className="mb-[2rem] h-[2rem] w-full rounded-[1rem] bg-[#D9D9D9]"
                    >
                        <div
                            style={{ width: progress }}
                            className={`h-full rounded-[1rem] bg-[#83C96A]`}
                        />
                    </div>
                    <div className="flex w-full items-center justify-center pt-9">
                        <button
                            type="submit"
                            className="h-fit w-fit rounded-sm text-[2rem] hover:text-full-accent focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TaskModal;
