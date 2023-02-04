import React from "react";
import MenuBar from "components/MenuBar";
import CourseView from "./components/CourseView";
import PageHeading from "components/PageHeading";

export default function CoursesPage() {
    return (
        <div className="flex h-screen">
            <MenuBar itemFocus={"Courses"} />
            <div className="h-screen min-w-[28rem]" />
            <div className="flex h-full w-full flex-col">
                <PageHeading pageTitle={"My Courses"} />
                <div>
                    {/* Current Course View */}
                    <div className="pt-[4rem]">
                        <CourseView title={"Current Courses"} />
                    </div>
                    {/* Past Course View */}
                    <div className="pt-[2rem] pb-[10rem]">
                        <CourseView title={"Past Courses"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
