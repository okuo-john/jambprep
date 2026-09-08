import { Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  Trophy,
  BookOpen,
  Users,
  Globe,
  Zap,
  FlaskConical,
} from "lucide-react";

import heroImage from "../assets/images/jambprep-hero.jpg";
import subjectImage from "../assets/images/subject-section.jpg";

function Home() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[calc(100vh-68px)] w-full bg-gradient-to-r from-[#39308F] to-[#4F39F6]">

        {/* ================= HERO CONTENT CONTAINER ================= */}
        <div className="mx-auto flex w-full max-w-[1308px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:py-20">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full md:w-1/2">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white md:mb-10">

              <span className="h-2 w-2 rounded-full bg-[#FFB800]"></span>

              JAMB / UTME 2025 Preparation

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl">

              Prepare Today.

              <br />

              <span className="text-[#FFB800]">
                Perform Better
              </span>{" "}

              in

              <br />

              JAMB.

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/80 md:mt-8 md:text-lg md:leading-8">

              Master JAMB-style CBT questions in Mathematics, English
              Language, Physics, and Chemistry with expert tutors and
              real exam simulations.

            </p>


            {/* ================= BUTTONS ================= */}
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center md:mt-10">

              {/* Start Practicing */}
              <Link
                to="/subjects"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-7 py-4 text-base font-semibold text-[#1F2937] shadow-lg transition-colors hover:bg-[#F5A900]"
              >
                Start Practicing

                <ChevronRight className="h-5 w-5" />
              </Link>


              {/* Browse Subjects */}
              <Link
                to="/subjects"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                Browse Subjects
              </Link>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="relative w-full md:w-1/2">

            {/* Hero Image Container */}
            <div className="relative overflow-visible rounded-2xl">

              {/* Hero Image */}
              <img
                src={heroImage}
                alt="Student preparing for JAMB"
                className="h-[300px] w-full rounded-2xl object-cover shadow-2xl sm:h-[360px] md:h-[380px]"
              />


              {/* ================= EXAM READY CARD ================= */}
              <div className="absolute -right-3 -top-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-5 sm:px-5 sm:py-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">

                  <Star
                    className="h-5 w-5 fill-[#4F39F6] text-[#4F39F6]"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-[#1F2937]">
                    Exam-Ready
                  </p>

                  <p className="text-xs text-[#64748B]">
                    4 Subjects covered
                  </p>

                </div>

              </div>


              {/* ================= SCORE CARD ================= */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:gap-4 sm:px-5 sm:py-4">

                {/* Trophy */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFB800] sm:h-12 sm:w-12">

                  <Trophy className="h-5 w-5 text-[#4F39F6] sm:h-6 sm:w-6" />

                </div>


                {/* Score Information */}
                <div>

                  <p className="text-sm font-semibold text-white sm:text-base">
                    Chukwuemeka scored 68/80
                  </p>

                  <p className="mt-1 text-xs text-white/70 sm:text-sm">
                    Mathematics • Just now
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>





    {/* ================= STATISTICS SECTION ================= */}
<section className="w-full bg-white">
  <div className="mx-auto grid w-full max-w-[1308px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:py-14">
    
    {/* Core Subjects */}
    <div className="flex flex-col items-center text-center">
      <BookOpen className="mb-3 h-6 w-6 text-[#4F39F6]" />

      <h3 className="text-4xl font-bold text-[#4F39F6]">
        4
      </h3>

      <p className="mt-1 text-sm text-[#475569]">
        Core Subjects
      </p>
    </div>

    {/* Practice Questions */}
    <div className="flex flex-col items-center text-center">
      <Star className="mb-3 h-6 w-6 text-[#4F39F6]" />

      <h3 className="text-4xl font-bold text-[#4F39F6]">
        160+
      </h3>

      <p className="mt-1 text-sm text-[#475569]">
        Practice Questions
      </p>
    </div>

    {/* Expert Tutors */}
    <div className="flex flex-col items-center text-center">
      <Users className="mb-3 h-6 w-6 text-[#4F39F6]" />

      <h3 className="text-4xl font-bold text-[#4F39F6]">
        16
      </h3>

      <p className="mt-1 text-sm text-[#475569]">
        Expert Tutors
      </p>
    </div>

    {/* Student Satisfaction */}
    <div className="flex flex-col items-center text-center">
      <Trophy className="mb-3 h-6 w-6 text-[#4F39F6]" />

      <h3 className="text-4xl font-bold text-[#4F39F6]">
        98%
      </h3>

      <p className="mt-1 text-sm text-[#475569]">
        Student Satisfaction
      </p>
    </div>

  </div>
</section>





{/* ================= SUBJECTS SECTION ================= */}
<section className="w-full bg-[#F8FAFC]">
  <div className="mx-auto w-full max-w-[1308px] px-6 py-20">

    {/* Section Heading */}
    <div className="mx-auto max-w-[700px] text-center">
      <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
        Four Core JAMB Subjects
      </h2>

      <p className="mt-4 text-base leading-7 text-[#64748B] md:text-lg">
        Practice with 40 randomized questions per subject, designed to
        mirror real JAMB examination questions.
      </p>
    </div>


    {/* ================= SUBJECT CARDS ================= */}
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* ================= MATHEMATICS ================= */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Top Color Bar */}
        <div className="h-2 bg-[#4F39F6]"></div>

        <div className="p-6">

          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EEF2FF]">
            <BookOpen className="h-8 w-8 text-[#4F39F6]" />
          </div>

          {/* Subject Name */}
          <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
            Mathematics
          </h3>

          {/* Description */}
          <p className="mt-2 text-base leading-6 text-[#64748B]">
            Algebra, Geometry, Calculus & more
          </p>

          {/* Question Information */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[#94A3B8]">
            <BookOpen className="h-4 w-4" />
            <span>40 Questions · Randomized</span>
          </div>

          {/* Button */}
          <Link
            to="/subjects"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F39F6] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3F2FD6]"
          >
            Practice Now
            <ChevronRight className="h-4 w-4" />
          </Link>

        </div>
      </div>


      {/* ================= ENGLISH LANGUAGE ================= */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Top Color Bar */}
        <div className="h-2 bg-[#00B67A]"></div>

        <div className="p-6">

          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#ECFDF5]">
            <Globe className="h-8 w-8 text-[#008A5A]" />
          </div>

          {/* Subject Name */}
          <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
            English Language
          </h3>

          {/* Description */}
          <p className="mt-2 text-base leading-6 text-[#64748B]">
            Grammar, Comprehension & Vocabulary
          </p>

          {/* Question Information */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[#94A3B8]">
            <BookOpen className="h-4 w-4" />
            <span>40 Questions · Randomized</span>
          </div>

          {/* Button */}
          <Link
            to="/subjects"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00B67A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#009E69]"
          >
            Practice Now
            <ChevronRight className="h-4 w-4" />
          </Link>

        </div>
      </div>


      {/* ================= PHYSICS ================= */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Top Color Bar */}
        <div className="h-2 bg-[#FF8A00]"></div>

        <div className="p-6">

          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#FFF7E8]">
            <Zap className="h-8 w-8 text-[#C75B00]" />
          </div>

          {/* Subject Name */}
          <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
            Physics
          </h3>

          {/* Description */}
          <p className="mt-2 text-base leading-6 text-[#64748B]">
            Mechanics, Waves, Electricity & more
          </p>

          {/* Question Information */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[#94A3B8]">
            <BookOpen className="h-4 w-4" />
            <span>40 Questions · Randomized</span>
          </div>

          {/* Button */}
          <Link
            to="/subjects"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF8A00] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E97800]"
          >
            Practice Now
            <ChevronRight className="h-4 w-4" />
          </Link>

        </div>
      </div>


      {/* ================= CHEMISTRY ================= */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Top Color Bar */}
        <div className="h-2 bg-[#E9005B]"></div>

        <div className="p-6">

          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#FFF0F4]">
            <FlaskConical className="h-8 w-8 text-[#C8004E]" />
          </div>

          {/* Subject Name */}
          <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
            Chemistry
          </h3>

          {/* Description */}
          <p className="mt-2 text-base leading-6 text-[#64748B]">
            Organic, Inorganic & Physical Chemistry
          </p>

          {/* Question Information */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[#94A3B8]">
            <BookOpen className="h-4 w-4" />
            <span>40 Questions · Randomized</span>
          </div>

          {/* Button */}
          <Link
            to="/subjects"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E9005B] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D00050]"
          >
            Practice Now
            <ChevronRight className="h-4 w-4" />
          </Link>

        </div>
      </div>

    </div>
  </div>
</section>





{/* ================= WHY STUDENTS CHOOSE JAMBPrep ================= */}
<section className="w-full bg-[#EEF2FF]">
  <div className="mx-auto grid w-full max-w-[1308px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-24">

    {/* ================= LEFT SIDE ================= */}
    <div>

      {/* Heading */}
      <h2 className="text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
        Why students choose JAMBPrep
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-[650px] text-base leading-7 text-[#475569] md:text-lg md:leading-8">
        Our platform is designed specifically for JAMB/UTME candidates in
        Nigeria, offering exam-style CBT practice that mirrors the real
        examination experience.
      </p>


      {/* ================= FEATURES ================= */}
      <div className="mt-10 space-y-6">

        {/* Real Exam Simulation */}
        <div className="flex items-start gap-4">
          
          {/* Circle Icon */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4F39F6]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Real Exam Simulation
            </h3>

            <p className="mt-1 text-base leading-6 text-[#64748B]">
              Practice in a CBT environment identical to the actual JAMB
              examination.
            </p>
          </div>

        </div>


        {/* Expert Tutors */}
        <div className="flex items-start gap-4">
          
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4F39F6]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Expert Tutors
            </h3>

            <p className="mt-1 text-base leading-6 text-[#64748B]">
              Learn from 16 handpicked tutors with deep JAMB examination
              knowledge.
            </p>
          </div>

        </div>


        {/* Instant Feedback */}
        <div className="flex items-start gap-4">
          
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4F39F6]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Instant Feedback
            </h3>

            <p className="mt-1 text-base leading-6 text-[#64748B]">
              Review your answers immediately after each test to learn from
              mistakes.
            </p>
          </div>

        </div>


        {/* Progress Tracking */}
        <div className="flex items-start gap-4">
          
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4F39F6]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Progress Tracking
            </h3>

            <p className="mt-1 text-base leading-6 text-[#64748B]">
              Monitor your scores and identify areas needing improvement.
            </p>
          </div>

        </div>

      </div>
    </div>


    {/* ================= RIGHT SIDE ================= */}
    <div className="relative">

      {/* Student Image */}
      <img
        src={subjectImage}
        alt="Student preparing for JAMB"
        className="h-[320px] w-full rounded-2xl object-cover shadow-lg md:h-[410px]"
      />


      {/* ================= FLOATING CARD ================= */}
      <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-6 md:px-6 md:py-5">

        {/* Trophy Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FFB800]">
          <Trophy className="h-7 w-7 text-white" />
        </div>

        {/* Card Text */}
        <div>
          <p className="text-base font-semibold text-[#0F172A] md:text-lg">
            Ready for JAMB 2025?
          </p>

          <p className="mt-1 text-sm text-[#64748B]">
            Start your free practice today!
          </p>
        </div>

      </div>

    </div>

  </div>
</section>






{/* ================= BOTTOM CTA SECTION ================= */}
<section className="w-full bg-[#4F39F6]">
  <div className="mx-auto flex w-full max-w-[1308px] flex-col items-center px-6 py-20 text-center md:py-24">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-white md:text-5xl">
      Ready to ace your JAMB exam?
    </h2>

    {/* Description */}
    <p className="mt-5 max-w-[850px] text-base leading-7 text-[#D9D4FF] md:text-lg">
      Join thousands of Nigerian students who are preparing smarter with
      JAMBPrep.
    </p>

    {/* CTA Button */}
    <Link
      to="/subjects"
      className="mt-10 flex items-center gap-3 rounded-xl bg-[#FFB800] px-8 py-5 text-base font-semibold text-[#1F2937] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A900] hover:shadow-xl md:px-12 md:text-lg"
    >
      Start Practicing Now
      <ChevronRight className="h-5 w-5" />
    </Link>

  </div>
</section>





{/* ================= FOOTER ================= */}
<footer className="w-full bg-[#0F172A]">
  <div className="mx-auto flex w-full max-w-[1308px] flex-col items-center justify-between gap-5 px-6 py-10 md:flex-row">

    {/* JAMBPrep Logo / Brand */}
    <div className="flex items-center gap-3">

      {/* Book Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F39F6]">
        <BookOpen className="h-5 w-5 text-white" />
      </div>

      {/* Brand Name */}
      <h3 className="text-lg font-bold text-white">
        JAMBPrep
      </h3>

    </div>


    {/* Copyright */}
    <p className="text-center text-sm text-[#94A3B8] md:text-right">
      © 2026 JAMBPrep. Helping Nigerian students excel.
    </p>

  </div>
</footer>
    </main>
  );
}

export default Home;