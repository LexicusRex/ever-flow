import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import CourseCard from "pages/course-page/components/CourseCard";

const PageOverview = ({ overviewTitle, cardList }) => {
    const courseCard1 = {
        course: "FINS1613",
        description: "Intermediate Business Programming",
        noProjects: 3,
        noTasks: 20,
        meetings: 4,
        status: "Up to Date",
    };
    return (
        <div className="py-[5.5rem] px-[4.5rem]">
            <div className="flex w-full items-center justify-between">
                <div className="text-[2.5rem] font-semibold">
                    {overviewTitle} Overview
                </div>
                <div className="flex items-center gap-[2rem]">
                    <HiOutlineAdjustmentsHorizontal
                        size={28}
                        color={"#BFBFBF"}
                    />
                    <RiFilter2Fill size={28} color={"#BFBFBF"} />
                </div>
            </div>

            <div className="flex flex-wrap justify-between gap-x-[4rem] gap-y-[5.5rem] pt-[4rem]">
                {cardList}
            </div>
        </div>
    );
};
export default PageOverview;
