import Introduction from "@/components/Introduction";
import {
  activities,
  techSkills,
  leadSkills,
  books,
  languages,
  courses,
} from "@/lib/data";
import LinkToNewTab from "@/components/LinkToNewTab";
import SkillCard from "@/components/SkillCard";
import "./globals.css";
import DialogContactForm from "@/components/DialogContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      {/* <GradientTopRadient /> */}

      <div className="wrapper mt-4 mb-4 pt-4 px-6 rounded-sm shadow-xl bg-slate-50 dark:bg-slate-900 [&>*]:mb-6 ">
        {/* [&>*]:border [&>*]:border-red-500"> */}
        <Introduction width={80} height={80} />

        {/* professional activities */}
        <section
          className=" mt-8 mb-8
         "
        >
          <h2 className="text-xl font-medium mb-6">Working Experience</h2>
          <ul className="">
            {activities.map((job) => (
              <li
                key={job.id}
                className="list-timeline md:translate-x-[200px] "
              >
                <div
                  className="flex flex-col gap-2 min-w-[350px] md:min-w-[600px] p-4
                 "
                >
                  {/* job year */}
                  <span className=" md:-translate-x-[200px] text-base text-slate-600 dark:text-white/70">
                    {job.year}
                  </span>
                  {/* right side of timeline on bigger screen */}
                  <div className="md:-translate-y-[2rem]">
                    {/* job title */}
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    {/* company */}
                    <h4 className="font-medium">
                      {job.url ? (
                        <a href={job.url} target="_blank" className="underline">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h4>
                    {/* summary of achievement */}
                    {job.text && (
                      <p className="font-base leading-6">{job.text}</p>
                    )}
                    {/* list of responsibilities */}
                    {job.list && (
                      <ul className="mt-2">
                        {job.list.map((item, index) => (
                          <li key={index} className="list-disc ml-4 leading-6">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* tech used */}
                    {job.tech && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {job.tech.map((item, index) => (
                          <li
                            key={index}
                            className="bg-gray-300 px-2 py-1 rounded-md text-sm
                            dark:bg-gray-700 "
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto flex justify-center  flex-wrap gap-4">
          <SkillCard
            title="Tech Skills"
            skills={techSkills}
            position="left-8"
          />
          <SkillCard
            title="Leader Skills"
            skills={leadSkills}
            position="right-8"
          />
        </section>

        {/* publication and language */}
        <section
          className="flex flex-wrap gap-4
        [&>*]:border-1  [&>*]:border-slate-200/80 [&>*]:shadow-sm"
        >
          {/* publication left box */}
          <div
            className="px-6 py-4 flex-[3] min-w-[320px]
          "
          >
            <h2 className="text-xl font-medium mb-6">Publications</h2>
            <ul className="">
              {books.map((book) => (
                <li key={book.id} className="list-timeline">
                  <div
                    className="p-4 flex flex-col gap-1
                  min-w-[350px] md:min-w-[500px]"
                  >
                    {/* year of the book */}
                    <span className=" text-base text-slate-600 dark:text-white/70">
                      {book.year}
                    </span>
                    <Link href={book.url} target="_blank">
                      <h3 className="text-md font-medium">{book.title}</h3>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* language right box */}
          <div
            className="px-6 py-4 flex-[2] min-w-[320px]
          "
          >
            <h2 className="text-xl font-medium mb-6">Language</h2>
            <ul className="flex flex-col gap-4">
              {languages.map((item) => (
                <li
                  key={item.lang}
                  className="px-4 py-2 flex justify-between odd:bg-gray-200 odd:dark:bg-gray-700 rounded-sm"
                >
                  <span>{item.lang}</span>
                  <span>{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* courses and certifications */}
        <section>
          <div
            className="px-6 py-4 min-w-[320px]
          "
          >
            <h2 className="text-xl font-medium mb-6">
              Courses and Certifications
            </h2>
            <ul className="flex flex-col gap-4">
              {courses.map((item) => (
                <li
                  key={item.name}
                  className="px-4 py-2 flex justify-between odd:bg-gray-200 odd:dark:bg-gray-700 rounded-sm"
                >
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-sm font-extralight italic ">
                      {item.provider}
                    </span>
                  </div>
                  <span>{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* social connect */}
        <section className="mt-10 text-center flex flex-col gap-2 ">
          <h2 className="text-xl font-medium mb-4">Connect</h2>
          <LinkToNewTab
            text="@linkedIn"
            url="https://www.linkedin.com/in/stephanet/"
          />
          <DialogContactForm />
        </section>
      </div>
    </div>
  );
}
