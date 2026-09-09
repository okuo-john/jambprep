import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
  BookOpen,
  User,
  Info,
} from "lucide-react";

import mockQuestions from "../data/mockQuestions";


// ============================================================
// QUIZ PAGE
// ============================================================

function Quiz() {

  // ==========================================================
  // GET PARAMETERS FROM URL
  // ==========================================================

  const { subject, tutorId } = useParams();

  const navigate = useNavigate();


  // ==========================================================
  // GET QUESTIONS FOR THIS SUBJECT + TUTOR
  // ==========================================================

  const quizQuestions = useMemo(() => {

    const subjectMap = {
      mathematics: "mathematics",
      english: "english language",
      physics: "physics",
      chemistry: "chemistry",
    };


    const expectedSubject =
      subjectMap[subject?.toLowerCase()] ||
      subject?.toLowerCase();


    const filteredQuestions = mockQuestions.filter(
      (question) => {

        return (
          question.subject.toLowerCase() ===
            expectedSubject &&
          Number(question.tutorId) ===
            Number(tutorId)
        );

      }
    );


    // ========================================================
    // SHUFFLE QUESTIONS
    // ========================================================

    const shuffledQuestions = [
      ...filteredQuestions,
    ];


    for (
      let i = shuffledQuestions.length - 1;
      i > 0;
      i--
    ) {

      const randomIndex = Math.floor(
        Math.random() * (i + 1)
      );


      [
        shuffledQuestions[i],
        shuffledQuestions[randomIndex],
      ] = [
        shuffledQuestions[randomIndex],
        shuffledQuestions[i],
      ];

    }


    return shuffledQuestions;

  }, [subject, tutorId]);


  // ==========================================================
  // STATE
  // ==========================================================

  const [currentQuestion, setCurrentQuestion] =
    useState(0);


  const [selectedAnswers, setSelectedAnswers] =
    useState({});


  const [showSubmitModal, setShowSubmitModal] =
    useState(false);


  // ==========================================================
  // TEST INSTRUCTIONS
  // ==========================================================

  // This is TRUE when the student first enters the quiz.
  // The student must read the instructions before starting.

  const [showInstructions, setShowInstructions] =
    useState(true);


  // This becomes TRUE only after the student clicks
  // "Start Test".

  const [quizStarted, setQuizStarted] =
    useState(false);


  // ==========================================================
  // QUIZ TIMER
  // ==========================================================

  // 30 minutes = 30 × 60 seconds

  const [timeLeft, setTimeLeft] =
    useState(30 * 60);


  // ==========================================================
  // TIMER EFFECT
  // ==========================================================

  useEffect(() => {

    // Do NOT start the timer until the student
    // clicks "Start Test".

    if (!quizStarted) {
      return;
    }


    // Safety check

    if (quizQuestions.length === 0) {
      return;
    }


    // Automatically submit when time reaches zero

    if (timeLeft <= 0) {

      handleSubmit();

      return;
    }


    // Run timer every second

    const timer = setInterval(() => {

      setTimeLeft(
        (previousTime) =>
          previousTime - 1
      );

    }, 1000);


    // Clean up timer

    return () => clearInterval(timer);

  }, [timeLeft, quizStarted, quizQuestions.length]);


  // ==========================================================
  // FORMAT TIMER
  // ==========================================================

  const minutes =
    Math.floor(timeLeft / 60);


  const seconds =
    timeLeft % 60;


  const formattedTime =
    `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;


  // ==========================================================
  // SAFETY CHECK
  // ==========================================================

  if (quizQuestions.length === 0) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

        <div className="text-center">

          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Quiz Not Found
          </h1>


          <p className="text-gray-500 mb-6">
            We could not find any questions for this tutor.
          </p>


          <button
            onClick={() =>
              navigate("/subjects")
            }
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Back to Subjects
          </button>

        </div>

      </div>

    );

  }


  // ==========================================================
  // CURRENT QUESTION
  // ==========================================================

  const question =
    quizQuestions[currentQuestion];


  // ==========================================================
  // TUTOR INFORMATION
  // ==========================================================

  const tutorName =
    question.tutor;


  const subjectName =
    question.subject;


  // ==========================================================
  // START TEST
  // ==========================================================

  const handleStartTest = () => {

    setShowInstructions(false);

    setQuizStarted(true);

    // Make sure timer starts from 30 minutes

    setTimeLeft(30 * 60);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ==========================================================
  // SELECT ANSWER
  // ==========================================================

  const handleAnswerSelect = (answer) => {

    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: answer,
    });

  };


  // ==========================================================
  // GO TO SPECIFIC QUESTION
  // ==========================================================

  const goToQuestion = (index) => {

    setCurrentQuestion(index);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ==========================================================
  // NEXT QUESTION
  // ==========================================================

  const handleNext = () => {

    if (
      currentQuestion <
      quizQuestions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );


      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };


  // ==========================================================
  // PREVIOUS QUESTION
  // ==========================================================

  const handlePrevious = () => {

    if (currentQuestion > 0) {

      setCurrentQuestion(
        currentQuestion - 1
      );


      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };


  // ==========================================================
  // COUNT ANSWERED QUESTIONS
  // ==========================================================

  const answeredCount =
    Object.keys(selectedAnswers).length;


  const unansweredCount =
    quizQuestions.length -
    answeredCount;


  // ==========================================================
  // OPEN SUBMIT CONFIRMATION
  // ==========================================================

  const handleSubmitClick = () => {

    setShowSubmitModal(true);

  };


  // ==========================================================
  // SUBMIT QUIZ
  // ==========================================================

  const handleSubmit = () => {

    let totalCorrect = 0;


    // Calculate score

    quizQuestions.forEach(
      (quizQuestion) => {

        if (
          selectedAnswers[
            quizQuestion.id
          ] ===
          quizQuestion.correctAnswer
        ) {

          totalCorrect++;

        }

      }
    );


    // ========================================================
    // CREATE RESULT OBJECT
    // ========================================================

    const result = {

      score: totalCorrect,

      totalQuestions:
        quizQuestions.length,

      selectedAnswers:
        selectedAnswers,

      quizQuestions:
        quizQuestions,

      subject:
        subject,

      tutorId:
        tutorId,

      tutor:
        tutorName,

    };


    // ========================================================
    // SAVE RESULT TO LOCAL STORAGE
    // ========================================================

    localStorage.setItem(
      "jambprepResult",
      JSON.stringify(result)
    );


    // ========================================================
    // SEND STUDENT TO RESULTS PAGE
    // ========================================================

    navigate("/results", {
      state: result,
    });

  };


  // ==========================================================
  // QUIZ PROGRESS
  // ==========================================================

  const progress =
    ((currentQuestion + 1) /
      quizQuestions.length) *
    100;


  // ==========================================================
  // QUIZ SCREEN
  // ==========================================================

  return (

    <div className="min-h-screen bg-yellow-50 px-4 pb-10 pt-24">


      <div className="mx-auto max-w-[1100px]">


        {/* ====================================================
            QUIZ HEADER
        ==================================================== */}

        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm md:p-6">


          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">


            {/* =================================================
                SUBJECT + TUTOR
            ================================================= */}

            <div>

              <div className="flex items-center gap-2">

                <BookOpen
                  size={18}
                  className="text-purple-600"
                />

                <p className="text-sm font-semibold text-purple-600">
                  {subjectName}
                </p>

              </div>


              <h1 className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">

                {tutorName}

              </h1>


              <p className="mt-1 text-sm text-gray-500">

                {question.topic}

              </p>

            </div>


            {/* =================================================
                TIMER + QUESTION COUNT
            ================================================= */}

            <div className="flex items-center gap-4">


              {/* TIMER */}

              <div
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-bold ${
                  timeLeft <= 300
                    ? "bg-red-100 text-red-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >

                <Clock size={18} />

                <span>
                  {formattedTime}
                </span>

              </div>


              {/* QUESTION COUNT */}

              <div className="text-right">

                <p className="text-sm text-gray-500">
                  Question
                </p>


                <p className="text-xl font-bold text-gray-900">

                  {currentQuestion + 1}

                  <span className="text-gray-400">
                    {" "} / {quizQuestions.length}
                  </span>

                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              PROGRESS BAR
          ================================================= */}

          <div className="mt-5">


            <div className="flex items-center justify-between mb-2">

              <p className="text-sm text-gray-500">

                Question {currentQuestion + 1} of{" "}
                {quizQuestions.length}

              </p>


              <p className="text-sm text-gray-500">

                {Math.round(progress)}%

              </p>

            </div>


            <div className="h-2 overflow-hidden rounded-full bg-gray-200">

              <div
                className="h-full rounded-full bg-purple-600 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>


        {/* ====================================================
            MAIN QUIZ LAYOUT
        ==================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">


          {/* ==================================================
              QUESTION AREA
          ================================================== */}

          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">


            {/* =================================================
                QUESTION
            ================================================= */}

            <div className="mb-8">

              <div className="mb-3 flex items-center justify-between">

                <p className="text-sm font-semibold text-purple-600">

                  Question {currentQuestion + 1}

                </p>


                <p className="text-sm text-gray-500">

                  {question.topic}

                </p>

              </div>


              <h2 className="text-xl font-bold leading-relaxed text-gray-900 md:text-2xl">

                {question.question}

              </h2>

            </div>


            {/* =================================================
                OPTIONS
            ================================================= */}

            <div className="space-y-4">

              {question.options.map(
                (option, index) => {

                  const isSelected =
                    selectedAnswers[
                      question.id
                    ] === option;


                  return (

                    <button
                      key={option}
                      onClick={() =>
                        handleAnswerSelect(option)
                      }
                      className={`
                        flex w-full items-center gap-4
                        rounded-xl border-2 p-4
                        text-left
                        transition-all duration-200
                        ${
                          isSelected
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                        }
                      `}
                    >


                      {/* OPTION LETTER */}

                      <span
                        className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-full
                          font-bold
                          ${
                            isSelected
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-600"
                          }
                        `}
                      >

                        {String.fromCharCode(
                          65 + index
                        )}

                      </span>


                      {/* OPTION TEXT */}

                      <span
                        className={`
                          font-medium
                          ${
                            isSelected
                              ? "text-purple-700"
                              : "text-gray-700"
                          }
                        `}
                      >

                        {option}

                      </span>

                    </button>

                  );

                }
              )}

            </div>


            {/* =================================================
                NAVIGATION BUTTONS
            ================================================= */}

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">


              {/* PREVIOUS */}

              <button
                onClick={handlePrevious}
                disabled={
                  currentQuestion === 0
                }
                className={`
                  flex items-center gap-2
                  rounded-lg px-5 py-3
                  font-semibold
                  transition
                  ${
                    currentQuestion === 0
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >

                <ArrowLeft size={18} />

                Previous

              </button>


              {/* NEXT / SUBMIT */}

              {currentQuestion ===
              quizQuestions.length - 1 ? (

                <button
                  onClick={
                    handleSubmitClick
                  }
                  className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
                >

                  Submit Quiz

                  <CheckCircle size={18} />

                </button>

              ) : (

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
                >

                  Next

                  <ArrowRight size={18} />

                </button>

              )}

            </div>

          </div>


          {/* ==================================================
              QUESTION NAVIGATOR
          ================================================== */}

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">


            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Question Navigator
            </h3>


            <p className="mb-5 text-sm text-gray-500">
              Jump to any question.
            </p>


            {/* LEGEND */}

            <div className="mb-6 space-y-3">


              <div className="flex items-center gap-2">

                <span className="h-4 w-4 rounded bg-purple-600"></span>

                <span className="text-sm text-gray-600">
                  Current
                </span>

              </div>


              <div className="flex items-center gap-2">

                <span className="h-4 w-4 rounded bg-green-500"></span>

                <span className="text-sm text-gray-600">
                  Answered
                </span>

              </div>


              <div className="flex items-center gap-2">

                <span className="h-4 w-4 rounded bg-gray-200"></span>

                <span className="text-sm text-gray-600">
                  Unanswered
                </span>

              </div>

            </div>


            {/* QUESTION NUMBERS */}

            <div className="grid grid-cols-5 gap-2">

              {quizQuestions.map(
                (questionItem, index) => {

                  const isAnswered =
                    selectedAnswers[
                      questionItem.id
                    ] !== undefined;


                  const isCurrent =
                    currentQuestion === index;


                  return (

                    <button
                      key={questionItem.id}
                      onClick={() =>
                        goToQuestion(index)
                      }
                      className={`
                        h-10 rounded-lg
                        text-sm font-bold
                        transition-all
                        ${
                          isCurrent
                            ? "bg-purple-600 text-white ring-2 ring-purple-200"
                            : isAnswered
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }
                      `}
                    >

                      {index + 1}

                    </button>

                  );

                }
              )}

            </div>


            {/* STATISTICS */}

            <div className="mt-6 border-t border-gray-100 pt-5">


              <div className="mb-2 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  Answered
                </span>

                <span className="font-bold text-green-600">
                  {answeredCount}
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  Unanswered
                </span>

                <span className="font-bold text-gray-500">
                  {unansweredCount}
                </span>

              </div>

            </div>


            {/* SUBMIT BUTTON */}

            <button
              onClick={handleSubmitClick}
              className="mt-6 w-full rounded-xl bg-purple-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-purple-700"
            >
              Submit Test
            </button>

          </aside>

        </div>

      </div>


      {/* ======================================================
          TEST INSTRUCTIONS MODAL
      ====================================================== */}

      {showInstructions && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">


          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl">


            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="bg-purple-600 px-6 py-7 text-white md:px-8">


              <div className="flex items-center gap-4">


                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">

                  <BookOpen
                    size={28}
                  />

                </div>


                <div>

                  <p className="text-sm font-medium text-purple-100">
                    JAMB Practice Test
                  </p>


                  <h2 className="text-2xl font-extrabold">
                    Test Instructions
                  </h2>

                </div>

              </div>

            </div>


            {/* =================================================
                TEST INFORMATION
            ================================================= */}

            <div className="p-6 md:p-8">


              {/* TUTOR */}

              <div className="mb-6 flex items-center gap-4 rounded-2xl bg-gray-50 p-4">


                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">

                  <User
                    size={22}
                    className="text-purple-600"
                  />

                </div>


                <div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Tutor
                  </p>


                  <p className="text-base font-bold text-gray-900">
                    {tutorName}
                  </p>

                </div>

              </div>


              {/* SUBJECT + QUESTIONS + TIME */}

              <div className="grid grid-cols-3 gap-3">


                {/* SUBJECT */}

                <div className="rounded-xl border border-gray-200 p-4 text-center">

                  <p className="text-xs text-gray-400">
                    Subject
                  </p>


                  <p className="mt-1 text-sm font-bold text-gray-900">
                    {subjectName}
                  </p>

                </div>


                {/* QUESTIONS */}

                <div className="rounded-xl border border-gray-200 p-4 text-center">

                  <p className="text-xs text-gray-400">
                    Questions
                  </p>


                  <p className="mt-1 text-sm font-bold text-gray-900">
                    {quizQuestions.length}
                  </p>

                </div>


                {/* TIME */}

                <div className="rounded-xl border border-gray-200 p-4 text-center">

                  <p className="text-xs text-gray-400">
                    Time
                  </p>


                  <p className="mt-1 text-sm font-bold text-gray-900">
                    30 Minutes
                  </p>

                </div>

              </div>


              {/* =================================================
                  IMPORTANT NOTICE
              ================================================= */}

              <div className="mt-6 rounded-2xl border border-purple-100 bg-purple-50 p-4">


                <div className="flex items-start gap-3">

                  <Info
                    size={20}
                    className="mt-0.5 shrink-0 text-purple-600"
                  />


                  <div>

                    <p className="font-bold text-purple-900">
                      Before you begin
                    </p>


                    <p className="mt-1 text-sm leading-6 text-purple-800">

                      Make sure you are ready to complete the
                      test. The timer will start immediately
                      when you click "Start Test".

                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  INSTRUCTIONS
              ================================================= */}

              <div className="mt-7">


                <h3 className="text-lg font-bold text-gray-900">
                  Test Instructions
                </h3>


                <div className="mt-4 space-y-4">


                  {/* INSTRUCTION 1 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      1
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      You have <strong>30 minutes</strong> to
                      answer all{" "}
                      <strong>
                        {quizQuestions.length} questions
                      </strong>
                      .

                    </p>

                  </div>


                  {/* INSTRUCTION 2 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      2
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      Select the answer you believe is correct
                      for each question.

                    </p>

                  </div>


                  {/* INSTRUCTION 3 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      3
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      You can move between questions using
                      the <strong>Previous</strong>,
                      <strong> Next</strong>, or Question
                      Navigator buttons.

                    </p>

                  </div>


                  {/* INSTRUCTION 4 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      4
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      Your selected answers are saved while
                      you move through the test, so you can
                      return to previous questions and change
                      your answers.

                    </p>

                  </div>


                  {/* INSTRUCTION 5 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      5
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      Keep an eye on the timer. When the time
                      reaches zero, your test will be submitted
                      automatically.

                    </p>

                  </div>


                  {/* INSTRUCTION 6 */}

                  <div className="flex items-start gap-3">

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                      6
                    </span>


                    <p className="text-sm leading-6 text-gray-600">

                      You may submit the test before the timer
                      runs out using the <strong>Submit Test</strong>
                      button.

                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  WARNING
              ================================================= */}

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-yellow-50 p-4">


                <AlertTriangle
                  size={20}
                  className="mt-0.5 shrink-0 text-yellow-600"
                />


                <p className="text-sm leading-6 text-yellow-800">

                  <strong>Important:</strong> Once you start
                  the test, the 30-minute timer will begin.
                  Make sure you are ready before proceeding.

                </p>

              </div>


              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">


                {/* BACK TO SUBJECTS */}

                <button
                  onClick={() =>
                    navigate("/subjects")
                  }
                  className="flex-1 rounded-xl border border-gray-300 px-5 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
                >

                  Back to Subjects

                </button>


                {/* START TEST */}

                <button
                  onClick={handleStartTest}
                  className="flex-1 rounded-xl bg-purple-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-purple-700"
                >

                  Start Test

                </button>

              </div>

            </div>

          </div>

        </div>

      )}


      {/* ======================================================
          SUBMIT CONFIRMATION MODAL
      ====================================================== */}

      {showSubmitModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">


            {/* ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">

              <AlertTriangle
                size={28}
                className="text-yellow-600"
              />

            </div>


            {/* TITLE */}

            <h2 className="text-center text-xl font-bold text-gray-900">

              Submit your test?

            </h2>


            {/* MESSAGE */}

            <p className="mt-3 text-center leading-6 text-gray-500">

              Are you sure you want to submit your test?


              {unansweredCount > 0 && (

                <>

                  {" "}
                  You still have{" "}

                  <span className="font-bold text-red-500">

                    {unansweredCount}

                  </span>{" "}

                  unanswered question
                  {unansweredCount > 1
                    ? "s"
                    : ""}.

                </>

              )}

            </p>


            {/* MODAL BUTTONS */}

            <div className="mt-6 flex gap-3">


              {/* CONTINUE */}

              <button
                onClick={() =>
                  setShowSubmitModal(false)
                }
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >

                Continue Test

              </button>


              {/* SUBMIT */}

              <button
                onClick={handleSubmit}
                className="flex-1 rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-700"
              >

                Yes, Submit

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}


export default Quiz;