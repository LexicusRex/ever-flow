import SearchBox from "./SearchBox";

const PageHeader = ({ pageTitle }) => {
    return (
        <div className="flex w-full items-center justify-between px-[4.7rem] pt-[7.5rem]">
            <h1 className="text-[3rem] font-semibold">My {pageTitle}</h1>
            <div className="flex items-center">
                <SearchBox />
                <div className="h-[40px] w-[40px] rounded-full bg-full-accent" />
            </div>
        </div>
    );
};
export default PageHeader;
