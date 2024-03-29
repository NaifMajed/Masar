import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.png";
import userThreeImg from "../public/img/user3.png";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              منصة مسار ساعدتني جدا في تطوير خبراتي <Mark>انصحكم فيها</Mark>
            </p>

            <Avatar
              className="!rounded-full"
              image={userOneImg}
              name="Naif AL-Qahtani"
              title="Cyber Security Specialist"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              مش عارف اقول ايه بس قشطة
            </p>

            <Avatar
              image={userTwoImg}
              name="Yousef E. Abdel-Wahab"
              title="FullStack Developer & Ui/Ux designer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              أقدع ناس وربنا، شغل نظيف صراحة
            </p>

            <Avatar
              image={userThreeImg}
              name="Mohammed Tarek"
              title="Quality Manager"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 rounded-full">
        <Image
        className="rounded-full w-14 h-14"
          src={props.image}
          width="50"
          height="50"
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;