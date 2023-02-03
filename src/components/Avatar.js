const Avatar = ({ userName }) => {
    return (
        // TODO - onClick, expand user Modal
        <div className="px-[1px]">
            <img
                src="https://unsplash.it/28/28
                    "
                alt=""
                id="task-assignee"
                title={userName}
                className="h-[2.8rem] w-[2.8rem] cursor-pointer rounded-[50%]"
            />
        </div>
    );
};
export default Avatar;
