import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

import mockQuestions from "../data/mockQuestions";


// QUIZ PAGE

function Quiz() {

  // GET PARAMETERS FROM URL

  const { subject, tutorId } = useParams();

  const navigate = useNavigate();


  
    const quizQuestions = useMemo(() => {
  // Convert the URL subject to the name used in mockQuestions
  const subjectMap = {
    mathematics: "mathematics",
    english: "english language",
    physics: "physics",
    chemistry: "chemistry",
  };

  const expectedSubject =
    subjectMap[subject.toLowerCase()] || subject.toLowerCase();

  const filteredQuestions = mockQuestions.filter((question) => {
    return (
      question.subject.toLowerCase() === expectedSubject &&
      Number(question.tutorId) === Number(tutorId)
    );
  });

  // Shuffle questions randomly (Fisher-Yates)
  const shuffledQuestions = [...filteredQuestions];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledQuestions[i], shuffledQuestions[randomIndex]] = [
      shuffledQuestions[randomIndex],
      shuffledQuestions[i],
    ];
  }

  return shuffledQuestions;
}, [subject, tutorId]);

  // STATE

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [showSubmitModal, setShowSubmitModal] = useState(false);


  // QUIZ TIMER
  const [timeLeft, setTimeLeft] = useState(60 * 60);


  // TIMER EFFECT

  useEffect(() => {

    // Stop timer when there are no questions
    if (quizQuestions.length === 0) return;


    // Automatically submit when time reaches zero
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }


    const timer = setInterval(() => {

      setTimeLeft(
        (previousTime) => previousTime - 1
      );

    }, 1000);


    // Clean up timer automatically stops the interval we created, clears the old interval and starts a new one
    return () => clearInterval(timer);

  }, [timeLeft]);



  // FORMAT TIMER

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;


  const formattedTime = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;


  // SAFETY CHECK

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
            onClick={() => navigate("/subjects")}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Back to Subjects
          </button>

        </div>

      </div>

    );

  }


  // CURRENT QUESTION

  const question = quizQuestions[currentQuestion];


  // SELECT ANSWER

  const handleAnswerSelect = (answer) => {

    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: answer,
    });

  };



  // GO TO SPECIFIC QUESTION

  const goToQuestion = (index) => {

    setCurrentQuestion(index);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // NEXT QUESTION

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


  // PREVIOUS QUESTION

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


  // COUNT ANSWERED QUESTIONS

  const answeredCount =
    Object.keys(selectedAnswers).length;


  const unansweredCount =
    quizQuestions.length - answeredCount;


  // OPEN SUBMIT CONFIRMATION

  const handleSubmitClick = () => {

    setShowSubmitModal(true);

  };



  // SUBMIT QUIZ

  const handleSubmit = () => {

    let totalCorrect = 0;


    // Calculate score
    quizQuestions.forEach((question) => {

      if (
        selectedAnswers[question.id] ===
        question.correctAnswer
      ) {

        totalCorrect++;

      }

    });


    // Send quiz information to Results page
    navigate("/results", {
      state: {
        score: totalCorrect,

        totalQuestions: quizQuestions.length,

        selectedAnswers: selectedAnswers,

        quizQuestions: quizQuestions,

        subject: subject,

        tutorId: tutorId,

        tutor: question.tutor,
      },
    });

  };


  // QUIZ PROGRESS This calculates the percentage of the quiz the student has reached.

  const progress =
    ((currentQuestion + 1) /
      quizQuestions.length) *
    100;


  // QUIZ SCREEN

  return (

    <div className="min-h-screen bg-yellow-50 py-8 px-4">

      <div className="max-w-[1100px] mx-auto">


        {/* ==================================================
            TOP HEADER
        ================================================== */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">


            {/* QUIZ INFORMATION */}

            <div>

              <p className="text-sm text-purple-600 font-semibold">
                {question.subject}
              </p>


              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {question.tutor}
              </h1>


              <p className="text-sm text-gray-500 mt-1">
                {question.topic}
              </p>

            </div>


            {/* TIMER + COUNT */}

            <div className="flex items-center gap-4">


              {/* TIMER */}

              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold ${
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
                    {" "}
                    / {quizQuestions.length}
                  </span>

                </p>

              </div>

            </div>

          </div>


          {/* PROGRESS BAR */}

          <div className="mt-6">

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

              <div
                className="h-full bg-purple-600 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>


        {/* ==================================================
            MAIN QUIZ LAYOUT
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">


          {/* ==================================================
              QUESTION AREA
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">


            {/* QUESTION */}

            <div className="mb-8">

              <p className="text-sm font-semibold text-purple-600 mb-3">
                Question {currentQuestion + 1}
              </p>


              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                {question.question}
              </h2>

            </div>


            {/* OPTIONS */}

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
                        w-full text-left p-4 rounded-xl border-2
                        transition-all duration-200
                        flex items-center gap-4
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
                          w-10 h-10 rounded-full
                          flex items-center justify-center
                          font-bold flex-shrink-0
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


            {/* NAVIGATION BUTTONS */}

            <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">


              {/* PREVIOUS */}

              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`
                  flex items-center gap-2
                  px-5 py-3 rounded-lg
                  font-semibold
                  transition
                  ${
                    currentQuestion === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
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
                  onClick={handleSubmitClick}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                >

                  Submit Quiz

                  <CheckCircle size={18} />

                </button>

              ) : (

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
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

          <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit lg:sticky lg:top-24">

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Question Navigator
            </h3>


            <p className="text-sm text-gray-500 mb-5">
              Jump to any question.
            </p>


            {/* LEGEND */}

            <div className="space-y-3 mb-6">

              <div className="flex items-center gap-2">

                <span className="w-4 h-4 rounded bg-purple-600"></span>

                <span className="text-sm text-gray-600">
                  Current
                </span>

              </div>


              <div className="flex items-center gap-2">

                <span className="w-4 h-4 rounded bg-green-500"></span>

                <span className="text-sm text-gray-600">
                  Answered
                </span>

              </div>


              <div className="flex items-center gap-2">

                <span className="w-4 h-4 rounded bg-gray-200"></span>

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

            <div className="mt-6 pt-5 border-t border-gray-100">

              <div className="flex items-center justify-between mb-2">

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
              className="mt-6 w-full rounded-xl bg-purple-600 px-4 py-3 text-sm font-bold text-white hover:bg-purple-700 transition"
            >
              Submit Test
            </button>

          </aside>

        </div>

      </div>


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

            <h2 className="text-xl font-bold text-center text-gray-900">
              Submit your test?
            </h2>


            {/* MESSAGE */}

            <p className="mt-3 text-center text-gray-500 leading-6">

              Are you sure you want to submit your test?

              {unansweredCount > 0 && (
                <>
                  {" "}
                  You still have{" "}
                  <span className="font-bold text-red-500">
                    {unansweredCount}
                  </span>{" "}
                  unanswered question
                  {unansweredCount > 1 ? "s" : ""}.
                </>
              )}

            </p>


            {/* MODAL BUTTONS */}

            <div className="mt-6 flex gap-3">

              <button
                onClick={() =>
                  setShowSubmitModal(false)
                }
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Continue Test
              </button>


              <button
                onClick={handleSubmit}
                className="flex-1 rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white hover:bg-purple-700 transition"
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