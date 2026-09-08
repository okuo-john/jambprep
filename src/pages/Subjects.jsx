import { Link } from "react-router-dom";

import {
  BookOpen,
  Globe,
  Zap,
  FlaskConical,
  Clock,
  Users,
  ChevronRight,
  Star,
} from "lucide-react";


// ============================================================
// SUBJECT DATA
// ============================================================

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus & more",
    icon: BookOpen,
    color: "#4F39F6",
    lightColor: "#EEF2FF",
    questions: 40,
    duration: "60 Minutes",

    tutors: [
      {
        id: 1,
        name: "Mr. Adekunle Okafor",
        topics: "Algebra & Calculus",
        experience: "12 Years Experience",
        rating: "4.9",
      },
      {
        id: 2,
        name: "Mrs. Chinyere Nwosu",
        topics: "Statistics & Probability",
        experience: "9 Years Experience",
        rating: "4.8",
      },
      {
        id: 3,
        name: "Mr. Ibrahim Hassan",
        topics: "Geometry & Trigonometry",
        experience: "15 Years Experience",
        rating: "4.9",
      },
      {
        id: 4,
        name: "Miss Fatima Bello",
        topics: "Number Theory & Sets",
        experience: "7 Years Experience",
        rating: "4.8",
      },
    ],
  },

  {
    id: "english",
    name: "English Language",
    description: "Grammar, Comprehension & Vocabulary",
    icon: Globe,
    color: "#00A878",
    lightColor: "#ECFDF5",
    questions: 40,
    duration: "60 Minutes",

    tutors: [
      {
        id: 1,
        name: "Mrs. Ngozi Okonkwo",
        topics: "Comprehension & Literature",
        experience: "12 Years Experience",
        rating: "4.9",
      },
      {
        id: 2,
        name: "Mr. Taiwo Adeyemi",
        topics: "Grammar & Usage",
        experience: "10 Years Experience",
        rating: "4.8",
      },
      {
        id: 3,
        name: "Miss Amina Usman",
        topics: "Oral English & Phonetics",
        experience: "8 Years Experience",
        rating: "4.9",
      },
      {
        id: 4,
        name: "Mr. Emeka Chibueze",
        topics: "Essay Writing & Vocabulary",
        experience: "11 Years Experience",
        rating: "4.8",
      },
    ],
  },

  {
    id: "physics",
    name: "Physics",
    description: "Mechanics, Waves, Electricity & more",
    icon: Zap,
    color: "#FF8A00",
    lightColor: "#FFF7E8",
    questions: 40,
    duration: "60 Minutes",

    tutors: [
      {
        id: 1,
        name: "Mr. David Eze",
        topics: "Mechanics & Motion",
        experience: "14 Years Experience",
        rating: "4.9",
      },
      {
        id: 2,
        name: "Mrs. Sarah Ibrahim",
        topics: "Waves & Optics",
        experience: "10 Years Experience",
        rating: "4.8",
      },
      {
        id: 3,
        name: "Mr. Kunle Adebayo",
        topics: "Electricity & Magnetism",
        experience: "13 Years Experience",
        rating: "4.9",
      },
      {
        id: 4,
        name: "Miss Grace Obi",
        topics: "Heat & Thermodynamics",
        experience: "8 Years Experience",
        rating: "4.8",
      },
    ],
  },

  {
    id: "chemistry",
    name: "Chemistry",
    description: "Organic, Inorganic & Physical Chemistry",
    icon: FlaskConical,
    color: "#E9005B",
    lightColor: "#FFF0F4",
    questions: 40,
    duration: "60 Minutes",

    tutors: [
      {
        id: 1,
        name: "Mr. Chinedu Okoro",
        topics: "Organic Chemistry",
        experience: "12 Years Experience",
        rating: "4.9",
      },
      {
        id: 2,
        name: "Mrs. Blessing Adeola",
        topics: "Inorganic Chemistry",
        experience: "9 Years Experience",
        rating: "4.8",
      },
      {
        id: 3,
        name: "Mr. Yusuf Mohammed",
        topics: "Physical Chemistry",
        experience: "15 Years Experience",
        rating: "4.9",
      },
      {
        id: 4,
        name: "Miss Esther Williams",
        topics: "Chemical Reactions & Equations",
        experience: "7 Years Experience",
        rating: "4.8",
      },
    ],
  },
];


// ============================================================
// GET TUTOR INITIALS
// ============================================================

function getInitials(name) {
  return name
    .split(" ")
    .filter(
      (word) =>
        word !== "Mr." &&
        word !== "Mrs." &&
        word !== "Miss"
    )
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
}


// ============================================================
// SUBJECTS PAGE
// ============================================================

function Subjects() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">


      {/* ======================================================
          PAGE HEADER
      ====================================================== */}

      <section className="w-full bg-white border-b border-[#E2E8F0]">

        <div className="mx-auto w-full max-w-[1308px] px-6 pb-14 pt-14 text-center md:pb-20 md:pt-20">

          {/* Small Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-semibold text-[#4F39F6]">

            <BookOpen className="h-4 w-4" />

            JAMB Practice

          </div>


          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">

            Choose Your Subject

          </h1>


          <p className="mx-auto mt-4 max-w-[700px] text-base leading-7 text-[#64748B] md:text-lg">

            Select a subject and tutor to start your JAMB practice test.

          </p>

        </div>

      </section>


      {/* ======================================================
          ALL SUBJECTS
      ====================================================== */}

      <section className="mx-auto w-full max-w-[1308px] px-6 py-14 md:py-20">


        {subjects.map((subject) => {

          const SubjectIcon = subject.icon;


          return (
            <section
              key={subject.id}
              className="mb-16 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-md last:mb-0"
            >


              {/* ==================================================
                  COLORED SUBJECT HEADER
              ================================================== */}

              <div
                className="relative overflow-hidden px-6 py-7 md:px-10 md:py-9"
                style={{
                  backgroundColor: subject.lightColor,
                }}
              >

                {/* Decorative Circle */}
                <div
                  className="absolute -right-10 -top-16 h-40 w-40 rounded-full opacity-20"
                  style={{
                    backgroundColor: subject.color,
                  }}
                ></div>


                <div
                  className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full opacity-10"
                  style={{
                    backgroundColor: subject.color,
                  }}
                ></div>


                <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">


                  {/* ===============================
                      SUBJECT INFORMATION
                  =============================== */}

                  <div className="flex items-center gap-5">

                    {/* Icon */}
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm"
                      style={{
                        backgroundColor: subject.color,
                      }}
                    >

                      <SubjectIcon className="h-8 w-8 text-white" />

                    </div>


                    {/* Name */}
                    <div>

                      <p
                        className="mb-1 text-sm font-bold uppercase tracking-wider"
                        style={{
                          color: subject.color,
                        }}
                      >
                        JAMB Subject
                      </p>


                      <h2 className="text-2xl font-extrabold text-[#0F172A] md:text-3xl">

                        {subject.name}

                      </h2>


                      <p className="mt-1 text-sm text-[#64748B] md:text-base">

                        {subject.description}

                      </p>

                    </div>

                  </div>


                  {/* ===============================
                      STATISTICS
                  =============================== */}

                  <div className="flex flex-wrap gap-3">


                    {/* Questions */}
                    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">

                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: subject.lightColor,
                        }}
                      >

                        <BookOpen
                          className="h-4 w-4"
                          style={{
                            color: subject.color,
                          }}
                        />

                      </div>


                      <div>

                        <p className="text-xs text-[#94A3B8]">
                          Questions
                        </p>

                        <p className="text-sm font-bold text-[#0F172A]">
                          {subject.questions} per test
                        </p>

                      </div>

                    </div>


                    {/* Duration */}
                    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">

                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: subject.lightColor,
                        }}
                      >

                        <Clock
                          className="h-4 w-4"
                          style={{
                            color: subject.color,
                          }}
                        />

                      </div>


                      <div>

                        <p className="text-xs text-[#94A3B8]">
                          Duration
                        </p>

                        <p className="text-sm font-bold text-[#0F172A]">
                          {subject.duration}
                        </p>

                      </div>

                    </div>


                    {/* Tutors */}
                    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">

                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: subject.lightColor,
                        }}
                      >

                        <Users
                          className="h-4 w-4"
                          style={{
                            color: subject.color,
                          }}
                        />

                      </div>


                      <div>

                        <p className="text-xs text-[#94A3B8]">
                          Tutors
                        </p>

                        <p className="text-sm font-bold text-[#0F172A]">
                          {subject.tutors.length} Available
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================================
                  TUTORS AREA
              ================================================== */}

              <div className="bg-[#FAFBFF] px-6 py-8 md:px-10 md:py-10">


                {/* Heading */}
                <div className="mb-7">

                  <div className="flex items-center gap-3">

                    <div
                      className="h-7 w-1 rounded-full"
                      style={{
                        backgroundColor: subject.color,
                      }}
                    ></div>


                    <h3 className="text-xl font-bold text-[#0F172A]">

                      Choose a {subject.name} Tutor

                    </h3>

                  </div>


                  <p className="mt-2 ml-4 text-sm text-[#64748B]">

                    Select a tutor based on the topics you want to practice.

                  </p>

                </div>


                {/* ==================================================
                    TUTOR CARDS
                ================================================== */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">


                  {subject.tutors.map((tutor) => (

                    <div
                      key={tutor.id}
                      className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                      {/* Colored Top Line */}
                      <div
                        className="h-1.5 w-full"
                        style={{
                          backgroundColor: subject.color,
                        }}
                      ></div>


                      <div className="p-6">


                        {/* ==========================
                            TUTOR PROFILE
                        ========================== */}

                        <div className="flex items-center gap-4">


                          {/* Avatar */}
                          <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-extrabold"
                            style={{
                              backgroundColor: subject.lightColor,
                              color: subject.color,
                            }}
                          >

                            {getInitials(tutor.name)}

                          </div>


                          {/* Name */}
                          <div className="min-w-0">

                            <h4 className="truncate text-base font-bold text-[#0F172A]">

                              {tutor.name}

                            </h4>


                            <p
                              className="mt-1 text-xs font-medium"
                              style={{
                                color: subject.color,
                              }}
                            >

                              {subject.name} Tutor

                            </p>

                          </div>

                        </div>


                        {/* Divider */}
                        <div className="my-5 h-px bg-[#E2E8F0]"></div>


                        {/* ==========================
                            SPECIALIZATION
                        ========================== */}

                        <div>

                          <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">

                            Specializes In

                          </p>


                          <p className="mt-2 min-h-[48px] text-sm font-semibold leading-6 text-[#334155]">

                            {tutor.topics}

                          </p>

                        </div>


                        {/* ==========================
                            EXPERIENCE + RATING
                        ========================== */}

                        <div className="mt-5 flex items-end justify-between">


                          {/* Experience */}
                          <div>

                            <p className="text-xs text-[#94A3B8]">
                              Experience
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#0F172A]">

                              {tutor.experience}

                            </p>

                          </div>


                          {/* Rating */}
                          <div className="text-right">

                            <p className="text-xs text-[#94A3B8]">
                              Rating
                            </p>


                            <div className="mt-1 flex items-center justify-end gap-1">

                              <Star
                                className="h-4 w-4"
                                fill="#FFB800"
                                stroke="#FFB800"
                              />

                              <span className="text-sm font-bold text-[#0F172A]">

                                {tutor.rating}

                              </span>

                            </div>

                          </div>

                        </div>


                        {/* ==========================
                            TAKE TEST
                        ========================== */}

                        <Link
                          to={`/quiz/${subject.id}/${tutor.id}`}
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:brightness-95"
                          style={{
                            backgroundColor: subject.color,
                          }}
                        >

                          Take Test

                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                        </Link>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </section>
          );
        })}

      </section>

    </main>
  );
}

export default Subjects;