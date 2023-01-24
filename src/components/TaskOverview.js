import TaskStatCard from "./TaskStatCard";

function TaskOverview() {
    return (
        <div>
            <div
                id="task-tile-group"
                className="flex items-center justify-center bg-white p-[2.3rem]"
            >
                <TaskStatCard />
                <TaskStatCard />
                <TaskStatCard />
                <TaskStatCard />
            </div>
        </div>
    );
}
export default TaskOverview;
