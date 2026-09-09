import { useLocation, useNavigate } from "react-router-dom";

import {
  Trophy,
  Eye,
  EyeOff,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BookOpen,
  Clock,
} from "lucide-react";

import { useState } from "react";


// RESULTS PAGE
function Results() {
  const location = useLocation();
  const navigate = useNavigate();


  // REVIEW ANSWERS STATE
  const [showReview, setShowReview] = useState(false);


  // GET RESULT FROM NAVIGATION
  const navigationResult = location.state;


  // GET SAVED RESULT FROM LOCAL STORAGE
  const savedResult = localStorage.getItem("jambprepResult");


  let storedResult = null;

  if (savedResult) {
    try {
      storedResult = JSON.parse(savedResult);
    } catch (error) {
      storedResult = null;
    }
  }


  // USE THE NEW RESULT IF AVAILABLE.
  // OTHERWISE USE THE RESULT SAVED IN LOCAL STORAGE.
  const resultData =
    navigationResult || storedResult;


  // SAFETY CHECK
  if (!resultData) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-3">
            No Results Found
          </h1>

          <p className="text-[#64748B] mb-6">
            There is no completed quiz to display.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-[#4F39F6] text-white font-semibold hover:bg-[#3F2FD4] transition"
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }


  // GET DATA
  const {
    score = 0,
    totalQuestions = 0,
    selectedAnswers = {},
    quizQuestions = [],
    subject = "Subject",
    tutorId,
    tutor = "Tutor",
    timeUsed = "30m",
  } = resultData;


  // CALCULATE PERCENTAGE
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;


  // Counting ANSWERED / UNANSWERED Questions
  const answeredCount =
    Object.keys(selectedAnswers).length;


  const unansweredCount = Math.max(
    totalQuestions - answeredCount,
    0
  );


  // CALCULATING WRONG ANSWERS
  const wrongCount = Math.max(
    answeredCount - score,
    0
  );


  // PERFORMANCE MESSAGE
  let performanceMessage = "";
  let performanceStyle = "";

  if (percentage >= 70) {
    performanceMessage =
      "Excellent work! Keep up the good performance.";

    performanceStyle =
      "border-green-200 bg-green-50 text-green-700";

  } else if (percentage >= 50) {

    performanceMessage =
      "Good effort! Keep practicing to improve your score.";

    performanceStyle =
      "border-yellow-200 bg-yellow-50 text-yellow-700";

  } else {

    performanceMessage =
      "Keep practicing! Consistent effort leads to success.";

    performanceStyle =
      "border-red-200 bg-red-50 text-red-600";
  }


  // SCORE COLOR
  const scoreColor =
    percentage >= 70
      ? "text-green-600"
      : percentage >= 50
      ? "text-yellow-600"
      : "text-red-600";


  // RETAKE QUIZ
  const handleRetake = () => {
    navigate(`/quiz/${subject}/${tutorId}`);
  };


  // GO HOME
  const handleHome = () => {
    navigate("/");
  };


  // TOGGLE REVIEW
  const handleReviewToggle = () => {
    setShowReview((previous) => !previous);
  };


  // RESULTS PAGE
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-8 md:py-12">
      <div className="mx-auto w-full max-w-[940px]">

        {/* ====================================================
            MAIN RESULT CARD
        ==================================================== */}

        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">

          {/* ==================================================
              PURPLE HEADER
          ================================================== */}

          <div className="bg-gradient-to-r from-[#4F39F6] to-[#35258F] px-6 py-8 text-center text-white md:px-10">

            {/* SUBJECT + TUTOR */}

            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-white/80 md:text-base">

              <Trophy
                size={20}
                className="text-[#FACC15]"
              />

              <span>
                {subject} • {tutor}
              </span>

            </div>


            {/* TITLE */}

            <h1 className="text-3xl font-extrabold md:text-4xl">
              Test Completed!
            </h1>

          </div>


          {/* ==================================================
              RESULT CONTENT
          ================================================== */}

          <div className="px-6 py-8 md:px-10 md:py-10">

            {/* =================================================
                SCORE + STATISTICS
            ================================================= */}

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

              {/* =================================================
                  SCORE SECTION
              ================================================= */}

              <div className="flex flex-col items-center justify-center">

                {/* SCORE CIRCLE */}

                <div className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full bg-[#E2E8F0]">

                  {/* Inner Circle */}

                  <div className="flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full bg-white">

                    <span
                      className={`text-5xl font-extrabold ${scoreColor}`}
                    >
                      {score}
                    </span>

                    <span className="mt-1 text-sm text-[#94A3B8]">
                      out of {totalQuestions}
                    </span>

                  </div>

                </div>


                {/* PERCENTAGE */}

                <p
                  className={`mt-5 text-5xl font-extrabold ${scoreColor}`}
                >
                  {percentage}%
                </p>

                <p className="mt-1 text-sm text-[#64748B]">
                  Score percentage
                </p>

              </div>


              {/* =================================================
                  RIGHT SIDE STATISTICS
              ================================================= */}

              <div>

                {/* PERFORMANCE MESSAGE */}

                <div
                  className={`mb-4 rounded-xl border px-5 py-4 text-sm font-semibold leading-6 ${performanceStyle}`}
                >
                  {performanceMessage}
                </div>


                {/* STATISTICS GRID */}

                <div className="grid grid-cols-2 gap-3">

                  {/* CORRECT */}

                  <div className="rounded-xl border border-green-100 bg-green-50 p-4">

                    <div className="flex items-center gap-2 text-sm font-medium text-green-600">

                      <CheckCircle2 size={18} />

                      Correct

                    </div>

                    <p className="mt-2 text-2xl font-bold text-green-700">
                      {score}
                    </p>

                  </div>


                  {/* WRONG */}

                  <div className="rounded-xl border border-red-100 bg-red-50 p-4">

                    <div className="flex items-center gap-2 text-sm font-medium text-red-600">

                      <XCircle size={18} />

                      Wrong

                    </div>

                    <p className="mt-2 text-2xl font-bold text-red-600">
                      {wrongCount}
                    </p>

                  </div>


                  {/* UNANSWERED */}

                  <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">

                    <div className="flex items-center gap-2 text-sm font-medium text-yellow-600">

                      <BookOpen size={18} />

                      Unanswered

                    </div>

                    <p className="mt-2 text-2xl font-bold text-yellow-700">
                      {unansweredCount}
                    </p>

                  </div>


                  {/* TIME USED */}

                  <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">

                    <div className="flex items-center gap-2 text-sm font-medium text-[#4F39F6]">

                      <Clock size={18} />

                      Time Used

                    </div>

                    <p className="mt-2 text-2xl font-bold text-[#4338CA]">
                      {timeUsed}
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-3">

              {/* =================================================
                  REVIEW ANSWERS
              ================================================= */}

              <button
                onClick={handleReviewToggle}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#4F39F6] bg-white px-5 py-3.5 font-semibold text-[#4F39F6] transition-all duration-200 hover:bg-[#EEF2FF]"
              >

                {showReview ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}

                {showReview
                  ? "Hide Review"
                  : "Review Answers"}

              </button>


              {/* =================================================
                  TRY ANOTHER TEST
              ================================================= */}

              <button
                onClick={handleRetake}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-5 py-3.5 font-semibold text-[#172554] transition-all duration-200 hover:bg-[#F5A900]"
              >

                <RotateCcw size={19} />

                Try Another Test

              </button>


              {/* =================================================
                  HOME
              ================================================= */}

              <button
                onClick={handleHome}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#4F39F6] px-5 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-[#3F2FD4]"
              >

                Home

                <ArrowRight size={19} />

              </button>

            </div>

          </div>

        </div>


        {/* ====================================================
            ANSWER REVIEW
            ONLY SHOW WHEN REVIEW BUTTON IS CLICKED
        ==================================================== */}

        {showReview && (

          <div className="mt-8">

            {/* REVIEW HEADER */}

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#0F172A]">
                Answer Review
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Review your answers and compare them with the
                correct answers.
              </p>

            </div>


            {/* =================================================
                QUESTIONS
            ================================================= */}

            <div className="space-y-5">

              {quizQuestions.map((question, index) => {

                const userAnswer =
                  selectedAnswers[question.id];


                const isAnswered =
                  userAnswer !== undefined &&
                  userAnswer !== null &&
                  userAnswer !== "";


                const isCorrect =
                  userAnswer === question.correctAnswer;


                return (

                  <div
                    key={question.id}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
                  >

                    {/* QUESTION HEADER */}

                    <div className="flex items-start gap-3">

                      {/* STATUS */}

                      {isCorrect ? (

                        <CheckCircle2
                          size={25}
                          className="mt-1 shrink-0 text-green-500"
                        />

                      ) : (

                        <XCircle
                          size={25}
                          className="mt-1 shrink-0 text-red-500"
                        />

                      )}


                      <div className="flex-1">

                        {/* DISPLAY QUESTION NUMBER */}

                        <p className="mb-2 text-sm font-medium text-[#94A3B8]">
                          Question {index + 1}
                        </p>


                        {/* DISPLAY QUESTION */}

                        <h3 className="text-base font-semibold leading-7 text-[#0F172A] md:text-lg">
                          {question.question}
                        </h3>

                      </div>

                    </div>


                    {/* =================================================
                        YOUR ANSWER
                    ================================================= */}

                    <div className="mt-5 md:ml-9">

                      <p className="mb-2 text-sm font-semibold text-[#64748B]">
                        Your answer
                      </p>


                      <div
                        className={`rounded-xl px-4 py-3 text-sm font-medium ${
                          !isAnswered
                            ? "bg-gray-100 text-gray-500"
                            : isCorrect
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >

                        {isAnswered
                          ? userAnswer
                          : "Not answered"}

                      </div>

                    </div>


                    {/* =================================================
                        CORRECT ANSWER
                    ================================================= */}

                    {!isCorrect && (

                      <div className="mt-4 md:ml-9">

                        <p className="mb-2 text-sm font-semibold text-[#64748B]">
                          Correct answer
                        </p>


                        <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">

                          {question.correctAnswer}

                        </div>

                      </div>

                    )}

                  </div>

                );

              })}

            </div>


            {/* =================================================
                HIDE REVIEW BUTTON
            ================================================= */}

            <div className="mt-6 flex justify-center">

              <button
                onClick={handleReviewToggle}
                className="flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 font-semibold text-[#475569] transition hover:bg-[#F8FAFC]"
              >

                <EyeOff size={18} />

                Hide Review

              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Results;