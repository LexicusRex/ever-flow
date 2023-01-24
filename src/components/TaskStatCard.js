function TaskStatCard({ counter, subtitle, stats, color }) {
    return (
        <div className="m-[1.3rem] flex h-[16.5rem] w-[27rem] flex-col items-center justify-center rounded-[16.5px] bg-[#fef3fb] shadow-md">
            <p id="card-counter" className="h-6rem text-[3.8rem] font-medium">
                {counter}
            </p>
            <p
                id="card-subtitle"
                className="text-[1.2rem] font-light text-[#414141]"
            >
                {subtitle}
            </p>
            <p
                id="card-stat"
                className="text-[1.3rem] font-light text-[#776E6E]"
            >
                {stats}
            </p>
        </div>
    );
}
export default TaskStatCard;
