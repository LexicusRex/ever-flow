import React from "react";
import AuthWrap from "components/authentication/ProtectedRoute";
import MenuBar from "components/MenuBar";
import SearchBox from "components/SearchBox";
import CourseView from "./components/CourseView";

export default function CoursesPage() {
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={"Courses"} />
            <div className="h-screen min-w-[32rem]" />
            <div className="flex w-screen max-w-[150rem] flex-col">
                <div className="flex flex-row pt-[7.5rem]">
                    <div className="text-[3rem] font-semibold">My Courses</div>
                    <div className="ml-auto mt-[0.5rem] pr-[2rem]">
                        <SearchBox />
                    </div>
                    <div className="h-[40px] w-[40px] rounded-[100px] bg-[#F06680]" />
                </div>
                {/* Current Course View */}
                <div className="pt-[4rem]">
                    <CourseView title={"Current Courses"} />
                </div>
                {/* Past Course View */}
                <div className="pt-[2rem]">
                    <CourseView title={"Past Courses"} />
                </div>
            </div>
        </div>
    );
}
