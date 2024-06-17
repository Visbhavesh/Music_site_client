"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function TeacherSection() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}

// import cousreData from "@/data/music_courses.json";
// import { count } from "console";
// import Link from "next/link";
// import { ReactElement } from "react";
// import { BackgroundGradient } from "./ui/background-gradient";

//  interface Course{

//   id: number,
//   tittle: string,
//   slug: string,
//   description: string,
//   price: number,
//   instructor: string,
//   isFeatured: boolean,
//   image: "next/src/app/favicon.ico"
// }

//  export function FeaturedCourses() {
//   const featuredCourses = cousreData.courses.filter(
//     (course: Course) => course.isFeatured

//   );

//   return (
//     <div className="py-12 bg-white-900">
//       <div className="text-center">
//         <h2
//           className="text-base text-teal-200 font-sarif
//         tracking-wide uppercase ">
//           FEATURED COURSES
//         </h2>
//         <p className="mt-4 text-3xl leading-8 font-extrabold text-wite sm:text4xl">
//           Learn with the best{" "}
//         </p>
//       </div>

//       <div className="mt-20">
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
//           {featuredCourses.map((course: Course) => (
//             <div
//               key={course.id}
//               className="flex
// justify-center">
//               <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 overfklow-hidden h-full w-600">
//                 <div className=" p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//                   <img
//                     src="JSON.stringify(photos.Annalise.portfolioImage)"
//                     alt="Annalise"
//                   />
//                   <p className="text-lg sm:text-xl text-black mt-2 mb-3 dark:text-neutral-200">
//                     {course.tittle}
//                   </p>
//                   <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow ">
//                     {course.description}
//                   </p>
//                   <Link href={`/couses/$ {course.slug}`}> Learn More</Link>
//                 </div>
//               </BackgroundGradient>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-20 text-center">
//         <Link
//           className="text-l bg-white text-black px-4 py-3 rounded border border-neutral-800"
//           href={"/courses"}>
//           Veiw All Courses
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default FeaturedCourses;
