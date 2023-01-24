function TaskStatCard({ counter, subtitle, stats, color }) {
    return (
        <div className="flex h-[16.5rem] w-[27rem] items-center justify-around rounded-[16.5px] bg-white shadow-md ">
            <p id="card-counter">{counter}</p>
            <p id="card-subtitle">{subtitle}</p>
            <p id="card-stat">{stats}</p>
        </div>
    );
}
export default TaskStatCard;
