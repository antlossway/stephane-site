import Image from "next/image";
import Introduction from "@/components/Introduction";
import ContactForm from "@/components/ContactForm";
import {
  activities,
  techSkills,
  leadSkills,
  books,
  languages,
} from "@/lib/data";
import LinkToNewTab from "@/components/LinkToNewTab";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      {/* <GradientTopRadient /> */}

      <div className="wrapper mt-4 mb-4 pt-4 px-6 rounded-sm shadow-xl bg-slate-100 [&>*]:mb-6 ">
        {/* [&>*]:border [&>*]:border-red-500"> */}
        <Introduction width={80} height={80} />

        {/* professional activities */}
        <section
          className=" mt-8 mb-8 dark:text-white/80
         "
        >
          <h2 className="text-xl font-medium mb-6">Working Experience</h2>
          <ul className="">
            {activities.map((job) => (
              <li
                key={job.id}
                className="relative md:translate-x-[200px] list-none w-[1px]  bg-slate-300 after:content-[''] after:absolute after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-slate-400 after:-translate-x-1/2"
              >
                <div className="flex flex-col gap-2 min-w-[350px] md:min-w-[600px] p-4">
                  <span className=" md:-translate-x-[200px] text-base text-slate-600 ">
                    {job.year}
                  </span>

                  <h3 className="text-lg font-semibold">{job.title}</h3>

                  <h4 className="font-medium">
                    {job.url ? (
                      <a href={job.url} target="_blank" className="underline">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h4>

                  <p className="font-base leading-6">{job.text}</p>

                  <ul>
                    {job.list.map((item, index) => (
                      <li key={index} className="list-disc ml-4 leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm text-slate-500 italic">
                    {job.tech}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* skill, sticky in the middle left of the screen */}
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
        <section className="flex flex-wrap gap-4 ">
          {/* publication left box */}
          <div
            className="px-6 py-4 flex-[3]
          border-2 border-slate-200/50 shadow-sm"
          >
            <h2 className="text-xl font-medium mb-6">Publications</h2>
            <ul className="">
              {books.map((book) => (
                <li
                  key={book.id}
                  className="relative list-none w-[1px] bg-slate-300 after:content-[''] after:absolute after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-slate-400 after:-translate-x-1/2"
                >
                  <div className="flex flex-col gap-1 min-w-[350px] md:min-w-[550px] p-4">
                    <span className=" text-base text-slate-600 ">
                      {book.year}
                    </span>

                    <h3 className="text-md font-medium">{book.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* language right box */}
          <div
            className="px-6 py-4 flex-[2]
          border-2 border-slate-200/50 shadow-sm"
          >
            <h2 className="text-xl font-medium mb-6">Language</h2>
            <ul className="flex flex-col gap-4">
              {languages.map((item) => (
                <li key={item.lang} className="flex justify-between">
                  <span>{item.lang}</span>
                  <span>{item.level}</span>
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

          <span className="text-slate-600">stephane@tougard.com</span>
        </section>
      </div>
    </div>
  );
}
