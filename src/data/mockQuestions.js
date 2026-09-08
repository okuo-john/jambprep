const mockQuestions = [
  // ========== MATHEMATICS – Tutor 1: Mr. Adekunle Okafor (Algebra & Calculus) – IDs 1–40 ==========
  {
    id: 1,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If 3x – 7 = 11, what is the value of x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6"
  },
  {
    id: 2,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve for x: 2(x + 3) = 14",
    options: ["2", "4", "5", "7"],
    correctAnswer: "4"
  },
  {
    id: 3,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Factorize completely: x² – 9",
    options: ["(x – 3)(x + 3)", "(x – 9)(x + 1)", "(x – 3)²", "(x + 3)²"],
    correctAnswer: "(x – 3)(x + 3)"
  },
  {
    id: 4,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If 5x + 2y = 19 and x = 3, find the value of y.",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    id: 5,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve the inequality: 2x + 5 > 13",
    options: ["x > 4", "x < 4", "x > 9", "x < 9"],
    correctAnswer: "x > 4"
  },
  {
    id: 6,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Expand (2x – 3)(x + 4)",
    options: ["2x² + 5x – 12", "2x² + 8x – 12", "2x² – 5x – 12", "2x² + 5x + 12"],
    correctAnswer: "2x² + 5x – 12"
  },
  {
    id: 7,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "The quadratic equation x² – 5x + 6 = 0 has roots",
    options: ["2 and 3", "1 and 6", "–2 and –3", "5 and 6"],
    correctAnswer: "2 and 3"
  },
  {
    id: 8,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If f(x) = 2x + 3, find f(4).",
    options: ["8", "10", "11", "14"],
    correctAnswer: "11"
  },
  {
    id: 9,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Simplify: (3a²b) × (2ab³)",
    options: ["6a³b⁴", "5a³b⁴", "6a²b³", "6a³b³"],
    correctAnswer: "6a³b⁴"
  },
  {
    id: 10,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve simultaneously: x + y = 7 and x – y = 3",
    options: ["x = 5, y = 2", "x = 4, y = 3", "x = 2, y = 5", "x = 3, y = 4"],
    correctAnswer: "x = 5, y = 2"
  },
  {
    id: 11,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "The next term in the sequence 2, 5, 10, 17, … is",
    options: ["24", "26", "28", "30"],
    correctAnswer: "26"
  },
  {
    id: 12,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If 4x – 3 ≤ 9, then",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 1.5", "x ≥ 1.5"],
    correctAnswer: "x ≤ 3"
  },
  {
    id: 13,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Find the derivative of y = 3x² + 5x – 2",
    options: ["6x + 5", "6x – 5", "3x + 5", "6x² + 5"],
    correctAnswer: "6x + 5"
  },
  {
    id: 14,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "If y = x³, then dy/dx is",
    options: ["3x²", "x²", "3x", "x³/3"],
    correctAnswer: "3x²"
  },
  {
    id: 15,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "The gradient of the curve y = x² at the point where x = 3 is",
    options: ["3", "6", "9", "12"],
    correctAnswer: "6"
  },
  {
    id: 16,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Integrate 4x with respect to x",
    options: ["2x² + C", "4x² + C", "x² + C", "8x + C"],
    correctAnswer: "2x² + C"
  },
  {
    id: 17,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Find ∫(3x² + 2) dx",
    options: ["x³ + 2x + C", "x³ + 2 + C", "6x + C", "3x³ + 2x + C"],
    correctAnswer: "x³ + 2x + C"
  },
  {
    id: 18,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "The derivative of a constant is",
    options: ["0", "1", "the constant itself", "undefined"],
    correctAnswer: "0"
  },
  {
    id: 19,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "If dy/dx = 2x, then y =",
    options: ["x² + C", "2x² + C", "x + C", "2 + C"],
    correctAnswer: "x² + C"
  },
  {
    id: 20,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve: x² – 4x – 5 = 0",
    options: ["x = 5 or x = –1", "x = 4 or x = 1", "x = 5 or x = 1", "x = –5 or x = 1"],
    correctAnswer: "x = 5 or x = –1"
  },
  {
    id: 21,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "The sum of the first n terms of an arithmetic progression is given by Sₙ = n(n + 1). Find the 5th term.",
    options: ["10", "15", "20", "25"],
    correctAnswer: "10"
  },
  {
    id: 22,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If 2x + 3y = 12 and 3x – y = 5, find the value of x.",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    id: 23,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "The rate of change of the volume of a sphere with respect to its radius when the radius is 3 cm is (V = ⁴⁄₃πr³)",
    options: ["12π", "36π", "4π", "9π"],
    correctAnswer: "36π"
  },
  {
    id: 24,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Simplify: (x² – 16)/(x – 4)",
    options: ["x + 4", "x – 4", "x + 16", "x – 16"],
    correctAnswer: "x + 4"
  },
  {
    id: 25,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Find the maximum value of the function y = –x² + 4x + 5",
    options: ["5", "7", "9", "11"],
    correctAnswer: "9"
  },
  {
    id: 26,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If the roots of the equation x² – px + q = 0 are 2 and 5, then p + q equals",
    options: ["7", "10", "12", "17"],
    correctAnswer: "17"
  },
  {
    id: 27,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "∫ 5 dx =",
    options: ["5x + C", "5 + C", "x⁵ + C", "0"],
    correctAnswer: "5x + C"
  },
  {
    id: 28,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Express 2x² – 7x + 3 as a product of two linear factors.",
    options: ["(2x – 1)(x – 3)", "(2x – 3)(x – 1)", "(2x + 1)(x – 3)", "(2x + 3)(x – 1)"],
    correctAnswer: "(2x – 1)(x – 3)"
  },
  {
    id: 29,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "The second derivative of y = x³ – 6x² + 5 is",
    options: ["6x – 12", "3x² – 12x", "6x", "x – 12"],
    correctAnswer: "6x – 12"
  },
  {
    id: 30,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If a : b = 3 : 4 and b : c = 5 : 6, find a : c",
    options: ["5 : 8", "3 : 8", "15 : 24", "5 : 6"],
    correctAnswer: "15 : 24"
  },
  {
    id: 31,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "The gradient of the tangent to the curve y = x² – 3x + 2 at x = 2 is",
    options: ["1", "0", "–1", "2"],
    correctAnswer: "1"
  },
  {
    id: 32,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve for x: 3(x – 2) + 4 = 2x + 7",
    options: ["x = 3", "x = 5", "x = 7", "x = 9"],
    correctAnswer: "x = 5"
  },
  {
    id: 33,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "If the displacement s of a particle is given by s = t³ – 6t² + 9t, the velocity when t = 2 is",
    options: ["–3", "0", "3", "9"],
    correctAnswer: "–3"
  },
  {
    id: 34,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "The range of values of x for which 3x – 4 ≥ 5 is",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ 1", "x ≤ 1"],
    correctAnswer: "x ≥ 3"
  },
  {
    id: 35,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Find the area under the curve y = 2x between x = 1 and x = 3",
    options: ["4", "6", "8", "10"],
    correctAnswer: "8"
  },
  {
    id: 36,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "If f(x) = x² – 5x + 6, find the values of x for which f(x) = 0",
    options: ["2 and 3", "1 and 6", "–2 and –3", "5 and 1"],
    correctAnswer: "2 and 3"
  },
  {
    id: 37,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "Differentiate y = (2x + 1)³ with respect to x",
    options: ["6(2x + 1)²", "3(2x + 1)²", "2(2x + 1)²", "6(2x + 1)"],
    correctAnswer: "6(2x + 1)²"
  },
  {
    id: 38,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "The 8th term of the arithmetic sequence 3, 7, 11, 15, … is",
    options: ["28", "31", "35", "39"],
    correctAnswer: "31"
  },
  {
    id: 39,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Calculus",
    question: "If y = 1/x, then dy/dx is",
    options: ["–1/x²", "1/x²", "–1/x", "x"],
    correctAnswer: "–1/x²"
  },
  {
    id: 40,
    subject: "Mathematics",
    tutorId: 1,
    tutor: "Mr. Adekunle Okafor",
    topic: "Algebra",
    question: "Solve the simultaneous equations: 2x + y = 8 and x – y = 1",
    options: ["x = 3, y = 2", "x = 2, y = 4", "x = 4, y = 0", "x = 5, y = –2"],
    correctAnswer: "x = 3, y = 2"
  },

  // ========== MATHEMATICS – Tutor 2: Mrs. Chinyere Nwosu (Statistics & Probability) – IDs 41–80 ==========
  {
    id: 41,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The mean of the numbers 3, 7, 8, 10 and 12 is",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    id: 42,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "Find the median of the set: 2, 5, 7, 9, 12, 15, 18",
    options: ["7", "9", "12", "15"],
    correctAnswer: "9"
  },
  {
    id: 43,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The mode of the data 4, 6, 4, 7, 8, 4, 9, 6 is",
    options: ["4", "6", "7", "8"],
    correctAnswer: "4"
  },
  {
    id: 44,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The range of the scores 12, 18, 25, 9, 30, 15 is",
    options: ["18", "21", "25", "30"],
    correctAnswer: "21"
  },
  {
    id: 45,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "In a frequency table, the class with the highest frequency is called the",
    options: ["modal class", "median class", "mean class", "range class"],
    correctAnswer: "modal class"
  },
  {
    id: 46,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The mean of five numbers is 12. If four of the numbers are 8, 10, 14 and 15, find the fifth number.",
    options: ["13", "14", "15", "16"],
    correctAnswer: "13"
  },
  {
    id: 47,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A fair die is thrown once. What is the probability of obtaining a number greater than 4?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: "1/3"
  },
  {
    id: 48,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A bag contains 5 red balls and 3 blue balls. If a ball is drawn at random, the probability that it is red is",
    options: ["3/8", "5/8", "5/3", "3/5"],
    correctAnswer: "5/8"
  },
  {
    id: 49,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "Two coins are tossed. The probability of getting two heads is",
    options: ["1/4", "1/2", "3/4", "1"],
    correctAnswer: "1/4"
  },
  {
    id: 50,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The following are scores of 10 students in a test: 4, 6, 7, 8, 5, 9, 6, 7, 8, 10. The median score is",
    options: ["6.5", "7", "7.5", "8"],
    correctAnswer: "7"
  },
  {
    id: 51,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "If the probability of an event occurring is 0.35, the probability that it does not occur is",
    options: ["0.35", "0.65", "0.70", "1.35"],
    correctAnswer: "0.65"
  },
  {
    id: 52,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "A pie chart is best used to represent",
    options: ["continuous data", "parts of a whole", "changes over time", "frequency of discrete data only"],
    correctAnswer: "parts of a whole"
  },
  {
    id: 53,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "Events A and B are mutually exclusive. If P(A) = 0.4 and P(B) = 0.3, then P(A or B) is",
    options: ["0.12", "0.7", "1.2", "0.1"],
    correctAnswer: "0.7"
  },
  {
    id: 54,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The standard deviation is a measure of",
    options: ["central tendency", "dispersion", "skewness", "correlation"],
    correctAnswer: "dispersion"
  },
  {
    id: 55,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A number is chosen at random from the numbers 1 to 20. What is the probability that it is a multiple of 3?",
    options: ["1/4", "3/10", "1/5", "2/5"],
    correctAnswer: "3/10"
  },
  {
    id: 56,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "In a histogram, the area of each rectangle is proportional to the",
    options: ["class width", "frequency", "class mark", "cumulative frequency"],
    correctAnswer: "frequency"
  },
  {
    id: 57,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "If two independent events have probabilities 0.5 and 0.4, the probability that both occur is",
    options: ["0.9", "0.2", "0.1", "0.45"],
    correctAnswer: "0.2"
  },
  {
    id: 58,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The cumulative frequency of the last class in a cumulative frequency table is equal to the",
    options: ["mean", "median", "total frequency", "mode"],
    correctAnswer: "total frequency"
  },
  {
    id: 59,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A card is drawn from a well-shuffled pack of 52 cards. The probability that it is a heart is",
    options: ["1/4", "1/13", "1/2", "3/13"],
    correctAnswer: "1/4"
  },
  {
    id: 60,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The mean of a set of numbers is 15 and the total frequency is 20. The sum of the numbers is",
    options: ["300", "35", "5", "150"],
    correctAnswer: "300"
  },
  {
    id: 61,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "The probability of rain on a particular day is 0.6. What is the probability that it does not rain?",
    options: ["0.4", "0.6", "1.6", "0"],
    correctAnswer: "0.4"
  },
  {
    id: 62,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "Which of the following is not a measure of central tendency?",
    options: ["Mean", "Median", "Mode", "Range"],
    correctAnswer: "Range"
  },
  {
    id: 63,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "From a group of 6 boys and 4 girls, two students are selected at random. The probability that both are girls is",
    options: ["1/15", "2/15", "3/15", "4/15"],
    correctAnswer: "2/15"
  },
  {
    id: 64,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "In a bar chart, the heights of the bars represent the",
    options: ["class intervals", "frequencies", "class marks", "cumulative frequencies"],
    correctAnswer: "frequencies"
  },
  {
    id: 65,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A die is thrown twice. The probability of getting a total of 7 is",
    options: ["1/6", "1/12", "1/9", "5/36"],
    correctAnswer: "1/6"
  },
  {
    id: 66,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The interquartile range is the difference between",
    options: ["highest and lowest values", "upper and lower quartiles", "mean and median", "mode and median"],
    correctAnswer: "upper and lower quartiles"
  },
  {
    id: 67,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "If P(A) = 1/3 and P(B) = 1/4 and A and B are independent, P(A and B) is",
    options: ["7/12", "1/12", "1/7", "4/3"],
    correctAnswer: "1/12"
  },
  {
    id: 68,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "A set of data has a mean of 20 and a standard deviation of 4. A score of 28 is how many standard deviations above the mean?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    id: 69,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A letter is chosen at random from the word “PROBABILITY”. The probability that it is a vowel is",
    options: ["4/11", "5/11", "3/11", "6/11"],
    correctAnswer: "4/11"
  },
  {
    id: 70,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The following marks were obtained by 8 students: 10, 12, 15, 15, 18, 20, 22, 25. The upper quartile is",
    options: ["15", "18", "20", "22"],
    correctAnswer: "22"
  },
  {
    id: 71,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "Two events are said to be mutually exclusive if",
    options: ["they can occur together", "they cannot occur together", "one depends on the other", "their probabilities are equal"],
    correctAnswer: "they cannot occur together"
  },
  {
    id: 72,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "In a frequency distribution, the class mark of the class 20 – 29 is",
    options: ["20", "24.5", "25", "29"],
    correctAnswer: "24.5"
  },
  {
    id: 73,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "A bag contains 4 white, 5 black and 6 red balls. One ball is drawn at random. The probability that it is not red is",
    options: ["4/15", "5/15", "9/15", "6/15"],
    correctAnswer: "9/15"
  },
  {
    id: 74,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The mean of 3, 7, x, 11 and 15 is 10. The value of x is",
    options: ["10", "12", "14", "16"],
    correctAnswer: "14"
  },
  {
    id: 75,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "The probability of an impossible event is",
    options: ["0", "1", "0.5", "undefined"],
    correctAnswer: "0"
  },
  {
    id: 76,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "A cumulative frequency curve is also known as",
    options: ["histogram", "bar chart", "ogive", "pie chart"],
    correctAnswer: "ogive"
  },
  {
    id: 77,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "If a coin is tossed three times, the number of possible outcomes is",
    options: ["3", "6", "8", "9"],
    correctAnswer: "8"
  },
  {
    id: 78,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The variance of a set of numbers is the square of the",
    options: ["mean", "median", "standard deviation", "range"],
    correctAnswer: "standard deviation"
  },
  {
    id: 79,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Probability",
    question: "From the numbers 1 to 10, a number is selected at random. The probability that it is prime is",
    options: ["1/5", "2/5", "3/5", "4/5"],
    correctAnswer: "2/5"
  },
  {
    id: 80,
    subject: "Mathematics",
    tutorId: 2,
    tutor: "Mrs. Chinyere Nwosu",
    topic: "Statistics",
    question: "The following are ages of 6 children: 8, 10, 9, 12, 11, 10. The mean age is",
    options: ["9", "10", "11", "12"],
    correctAnswer: "10"
  },

  // ========== MATHEMATICS – Tutor 3: Mr. Ibrahim Hassan (Geometry & Trigonometry) – IDs 81–120 ==========
  {
    id: 81,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The sum of angles in a triangle is",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: "180°"
  },
  {
    id: 82,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "A triangle with all sides equal is called",
    options: ["isosceles", "scalene", "equilateral", "right-angled"],
    correctAnswer: "equilateral"
  },
  {
    id: 83,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The area of a rectangle of length 8 cm and breadth 5 cm is",
    options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
    correctAnswer: "40 cm²"
  },
  {
    id: 84,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "Pythagoras theorem is applicable to",
    options: ["any triangle", "isosceles triangle", "right-angled triangle", "equilateral triangle"],
    correctAnswer: "right-angled triangle"
  },
  {
    id: 85,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The circumference of a circle of radius 7 cm is (take π = 22/7)",
    options: ["22 cm", "44 cm", "154 cm", "14 cm"],
    correctAnswer: "44 cm"
  },
  {
    id: 86,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "In a right-angled triangle, sin θ = opposite / ?",
    options: ["adjacent", "hypotenuse", "opposite", "base"],
    correctAnswer: "hypotenuse"
  },
  {
    id: 87,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "cos 60° is equal to",
    options: ["0", "1/2", "√3/2", "1"],
    correctAnswer: "1/2"
  },
  {
    id: 88,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "tan 45° is equal to",
    options: ["0", "1", "√3", "1/√3"],
    correctAnswer: "1"
  },
  {
    id: 89,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The volume of a cube of side 4 cm is",
    options: ["16 cm³", "32 cm³", "64 cm³", "128 cm³"],
    correctAnswer: "64 cm³"
  },
  {
    id: 90,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "An angle greater than 90° but less than 180° is called",
    options: ["acute", "right", "obtuse", "reflex"],
    correctAnswer: "obtuse"
  },
  {
    id: 91,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "If sin θ = 3/5, then cos θ is",
    options: ["3/5", "4/5", "5/3", "5/4"],
    correctAnswer: "4/5"
  },
  {
    id: 92,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The area of a circle of diameter 14 cm is (π = 22/7)",
    options: ["154 cm²", "44 cm²", "308 cm²", "22 cm²"],
    correctAnswer: "154 cm²"
  },
  {
    id: 93,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The sum of the interior angles of a quadrilateral is",
    options: ["180°", "270°", "360°", "540°"],
    correctAnswer: "360°"
  },
  {
    id: 94,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "In a right-angled triangle ABC with ∠B = 90°, if AB = 5 cm and BC = 12 cm, then AC is",
    options: ["13 cm", "17 cm", "7 cm", "60 cm"],
    correctAnswer: "13 cm"
  },
  {
    id: 95,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "A parallelogram with all sides equal is a",
    options: ["rectangle", "rhombus", "trapezium", "kite"],
    correctAnswer: "rhombus"
  },
  {
    id: 96,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "The value of sin 90° is",
    options: ["0", "1/2", "1", "√3/2"],
    correctAnswer: "1"
  },
  {
    id: 97,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The perimeter of a square of side 9 cm is",
    options: ["18 cm", "27 cm", "36 cm", "81 cm"],
    correctAnswer: "36 cm"
  },
  {
    id: 98,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "If cos θ = 5/13, then sin θ is",
    options: ["5/13", "12/13", "13/5", "13/12"],
    correctAnswer: "12/13"
  },
  {
    id: 99,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The volume of a cylinder of radius 7 cm and height 10 cm is (π = 22/7)",
    options: ["1540 cm³", "220 cm³", "440 cm³", "770 cm³"],
    correctAnswer: "1540 cm³"
  },
  {
    id: 100,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "Two triangles are similar if",
    options: ["their corresponding angles are equal", "their areas are equal", "their perimeters are equal", "they have the same shape and size"],
    correctAnswer: "their corresponding angles are equal"
  },
  {
    id: 101,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "The bearing of a point B from A is 045°. The bearing of A from B is",
    options: ["045°", "135°", "225°", "315°"],
    correctAnswer: "225°"
  },
  {
    id: 102,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The area of a triangle with base 10 cm and height 6 cm is",
    options: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"],
    correctAnswer: "30 cm²"
  },
  {
    id: 103,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "tan θ = sin θ / ?",
    options: ["cos θ", "sec θ", "cot θ", "cosec θ"],
    correctAnswer: "cos θ"
  },
  {
    id: 104,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "An exterior angle of a regular polygon is 45°. How many sides does the polygon have?",
    options: ["6", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    id: 105,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "In a right-angled triangle, if the opposite side to angle θ is 8 cm and the hypotenuse is 17 cm, then sin θ is",
    options: ["8/17", "15/17", "17/8", "8/15"],
    correctAnswer: "8/17"
  },
  {
    id: 106,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The surface area of a sphere of radius 7 cm is (π = 22/7)",
    options: ["154 cm²", "308 cm²", "616 cm²", "1232 cm²"],
    correctAnswer: "616 cm²"
  },
  {
    id: 107,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "The value of cos 0° is",
    options: ["0", "1", "1/2", "√3/2"],
    correctAnswer: "1"
  },
  {
    id: 108,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "A chord that passes through the centre of a circle is called",
    options: ["radius", "diameter", "arc", "sector"],
    correctAnswer: "diameter"
  },
  {
    id: 109,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "If tan θ = 3/4, then sin θ is",
    options: ["3/5", "4/5", "3/4", "5/3"],
    correctAnswer: "3/5"
  },
  {
    id: 110,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The volume of a cone of radius 3 cm and height 7 cm is (π = 22/7)",
    options: ["22 cm³", "66 cm³", "198 cm³", "462 cm³"],
    correctAnswer: "66 cm³"
  },
  {
    id: 111,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "sin²θ + cos²θ is equal to",
    options: ["0", "1", "2", "sin θ cos θ"],
    correctAnswer: "1"
  },
  {
    id: 112,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The number of lines of symmetry of an equilateral triangle is",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3"
  },
  {
    id: 113,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "A ladder 13 m long leans against a wall with its foot 5 m from the wall. How high up the wall does it reach?",
    options: ["8 m", "12 m", "18 m", "√194 m"],
    correctAnswer: "12 m"
  },
  {
    id: 114,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm is",
    options: ["32 cm²", "40 cm²", "48 cm²", "64 cm²"],
    correctAnswer: "32 cm²"
  },
  {
    id: 115,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "The angle of elevation of the top of a tower from a point 50 m away is 30°. The height of the tower is",
    options: ["25 m", "25√3 m", "50/√3 m", "50√3 m"],
    correctAnswer: "50/√3 m"
  },
  {
    id: 116,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "In a circle of radius r, the length of an arc subtending an angle of θ degrees at the centre is",
    options: ["(θ/360) × 2πr", "(θ/180) × πr", "θ × 2πr", "(θ/360) × πr²"],
    correctAnswer: "(θ/360) × 2πr"
  },
  {
    id: 117,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "If the angle of depression of a boat from a cliff is 45° and the height of the cliff is 40 m, the distance of the boat from the foot of the cliff is",
    options: ["20 m", "40 m", "40√2 m", "80 m"],
    correctAnswer: "40 m"
  },
  {
    id: 118,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The diagonals of a rhombus",
    options: ["are equal", "bisect each other at right angles", "are parallel", "are unequal and do not bisect"],
    correctAnswer: "bisect each other at right angles"
  },
  {
    id: 119,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Trigonometry",
    question: "The solution of the equation sin θ = 1/2 in the range 0° ≤ θ ≤ 90° is",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: "30°"
  },
  {
    id: 120,
    subject: "Mathematics",
    tutorId: 3,
    tutor: "Mr. Ibrahim Hassan",
    topic: "Geometry",
    question: "The total surface area of a closed cylinder of radius r and height h is",
    options: ["2πr(h + r)", "πr²h", "2πrh", "πr(h + r)"],
    correctAnswer: "2πr(h + r)"
  },

  // ========== MATHEMATICS – Tutor 4: Miss Fatima Bello (Number Theory & Sets) – IDs 121–160 ==========
  {
    id: 121,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The highest common factor (HCF) of 12 and 18 is",
    options: ["2", "3", "6", "9"],
    correctAnswer: "6"
  },
  {
    id: 122,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The least common multiple (LCM) of 4 and 6 is",
    options: ["12", "24", "2", "10"],
    correctAnswer: "12"
  },
  {
    id: 123,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Which of the following is a prime number?",
    options: ["15", "21", "29", "33"],
    correctAnswer: "29"
  },
  {
    id: 124,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The prime factors of 30 are",
    options: ["2, 3, 5", "2, 5, 6", "3, 5, 10", "2, 3, 15"],
    correctAnswer: "2, 3, 5"
  },
  {
    id: 125,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B is",
    options: ["{1, 2}", "{3, 4}", "{5, 6}", "{1, 2, 3, 4, 5, 6}"],
    correctAnswer: "{3, 4}"
  },
  {
    id: 126,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If U = {1, 2, 3, 4, 5, 6, 7, 8} and A = {2, 4, 6, 8}, then A' is",
    options: ["{1, 3, 5, 7}", "{2, 4, 6, 8}", "{1, 2, 3, 4}", "∅"],
    correctAnswer: "{1, 3, 5, 7}"
  },
  {
    id: 127,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Convert 1011₂ to base 10",
    options: ["9", "11", "13", "15"],
    correctAnswer: "11"
  },
  {
    id: 128,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Simplify √50",
    options: ["5√2", "25√2", "2√5", "10√5"],
    correctAnswer: "5√2"
  },
  {
    id: 129,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If n(A) = 15, n(B) = 12 and n(A ∩ B) = 5, then n(A ∪ B) is",
    options: ["22", "27", "32", "7"],
    correctAnswer: "22"
  },
  {
    id: 130,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The number 0.75 as a fraction in its lowest terms is",
    options: ["3/4", "75/100", "7/5", "15/20"],
    correctAnswer: "3/4"
  },
  {
    id: 131,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Which of the following numbers is divisible by 3?",
    options: ["124", "235", "348", "451"],
    correctAnswer: "348"
  },
  {
    id: 132,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "The empty set is denoted by",
    options: ["{0}", "∅", "{∅}", "U"],
    correctAnswer: "∅"
  },
  {
    id: 133,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Find the HCF of 24, 36 and 60",
    options: ["6", "12", "18", "24"],
    correctAnswer: "12"
  },
  {
    id: 134,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Express 2/5 as a percentage",
    options: ["20%", "25%", "40%", "50%"],
    correctAnswer: "40%"
  },
  {
    id: 135,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If A ⊂ B, then",
    options: ["A ∩ B = A", "A ∪ B = A", "A ∩ B = B", "A ∪ B = ∅"],
    correctAnswer: "A ∩ B = A"
  },
  {
    id: 136,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The binary equivalent of 13 is",
    options: ["1101", "1011", "1110", "1001"],
    correctAnswer: "1101"
  },
  {
    id: 137,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Simplify √18 + √8",
    options: ["5√2", "3√2", "√26", "2√13"],
    correctAnswer: "5√2"
  },
  {
    id: 138,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "In a class of 40 students, 25 offer Mathematics, 20 offer Physics and 10 offer both. How many offer neither?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "5"
  },
  {
    id: 139,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The LCM of 8, 12 and 18 is",
    options: ["36", "48", "72", "144"],
    correctAnswer: "72"
  },
  {
    id: 140,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Which of the following is not a factor of 36?",
    options: ["4", "6", "8", "9"],
    correctAnswer: "8"
  },
  {
    id: 141,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If A = {x : x is an even number between 1 and 10}, then n(A) is",
    options: ["4", "5", "6", "8"],
    correctAnswer: "4"
  },
  {
    id: 142,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Convert 0.6̇ (recurring) to a fraction",
    options: ["2/3", "3/5", "6/10", "1/6"],
    correctAnswer: "2/3"
  },
  {
    id: 143,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The product of the HCF and LCM of two numbers is equal to",
    options: ["the sum of the numbers", "the difference of the numbers", "the product of the numbers", "the square of the numbers"],
    correctAnswer: "the product of the numbers"
  },
  {
    id: 144,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "Two sets are disjoint if their intersection is",
    options: ["the universal set", "the empty set", "equal to one of the sets", "infinite"],
    correctAnswer: "the empty set"
  },
  {
    id: 145,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Find the smallest number that is divisible by both 15 and 25",
    options: ["75", "150", "225", "375"],
    correctAnswer: "75"
  },
  {
    id: 146,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Simplify (√12 × √3) / √2",
    options: ["3√2", "√18", "√6", "6"],
    correctAnswer: "3√2"
  },
  {
    id: 147,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If A ∪ B = A, then",
    options: ["A ⊂ B", "B ⊂ A", "A ∩ B = ∅", "A = B"],
    correctAnswer: "B ⊂ A"
  },
  {
    id: 148,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The number 2⁴ × 3² × 5 is divisible by",
    options: ["8", "9", "10", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    id: 149,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Express 45 as a product of its prime factors",
    options: ["3² × 5", "5² × 3", "9 × 5", "15 × 3"],
    correctAnswer: "3² × 5"
  },
  {
    id: 150,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "In a Venn diagram, the region common to two overlapping circles represents",
    options: ["union", "intersection", "complement", "difference"],
    correctAnswer: "intersection"
  },
  {
    id: 151,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The next prime number after 47 is",
    options: ["49", "51", "53", "55"],
    correctAnswer: "53"
  },
  {
    id: 152,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Convert 25₁₀ to base 2",
    options: ["11001", "10101", "11101", "10011"],
    correctAnswer: "11001"
  },
  {
    id: 153,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If n(U) = 50, n(A) = 30 and n(B) = 25, and n(A ∩ B) = 10, then n(A ∪ B)' is",
    options: ["5", "15", "20", "25"],
    correctAnswer: "5"
  },
  {
    id: 154,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The reciprocal of 4/7 is",
    options: ["7/4", "4/7", "–4/7", "1"],
    correctAnswer: "7/4"
  },
  {
    id: 155,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Which of the following fractions is equivalent to 2/3?",
    options: ["4/9", "6/9", "8/12", "10/15"],
    correctAnswer: "8/12"
  },
  {
    id: 156,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "The set of all subsets of a given set is called the",
    options: ["power set", "universal set", "null set", "complement set"],
    correctAnswer: "power set"
  },
  {
    id: 157,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Find the LCM of 9 and 15",
    options: ["45", "90", "135", "3"],
    correctAnswer: "45"
  },
  {
    id: 158,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "Simplify √75 – √12",
    options: ["3√3", "√63", "5√3", "√3"],
    correctAnswer: "3√3"
  },
  {
    id: 159,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Sets",
    question: "If A = {1, 2, 3} and B = {2, 3, 4}, then A – B is",
    options: ["{1}", "{4}", "{1, 4}", "{2, 3}"],
    correctAnswer: "{1}"
  },
  {
    id: 160,
    subject: "Mathematics",
    tutorId: 4,
    tutor: "Miss Fatima Bello",
    topic: "Number Theory",
    question: "The smallest prime number is",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2"
  },

    // ========== ENGLISH LANGUAGE – Tutor 1: Mrs. Ngozi Okonkwo (Comprehension & Literature) – IDs 161–200 ==========
  {
    id: 161,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The main idea of a passage is best described as",
    options: ["the supporting details", "the central thought or message", "the first sentence", "the conclusion only"],
    correctAnswer: "the central thought or message"
  },
  {
    id: 162,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "When a writer implies something without stating it directly, the reader is expected to",
    options: ["ignore it", "make an inference", "summarise the passage", "identify the tone"],
    correctAnswer: "make an inference"
  },
  {
    id: 163,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A comparison using ‘like’ or ‘as’ is called a",
    options: ["metaphor", "simile", "personification", "hyperbole"],
    correctAnswer: "simile"
  },
  {
    id: 164,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The expression “The wind whispered through the trees” is an example of",
    options: ["simile", "metaphor", "personification", "irony"],
    correctAnswer: "personification"
  },
  {
    id: 165,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The tone of a passage refers to the",
    options: ["length of the sentences", "writer’s attitude towards the subject", "number of paragraphs", "setting of the story"],
    correctAnswer: "writer’s attitude towards the subject"
  },
  {
    id: 166,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "Which of the following questions tests vocabulary in context?",
    options: ["What is the main idea?", "What does the word ‘resilient’ mean as used in the passage?", "How many characters are in the story?", "Where is the story set?"],
    correctAnswer: "What does the word ‘resilient’ mean as used in the passage?"
  },
  {
    id: 167,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A story that teaches a moral lesson and usually features animals as characters is called a",
    options: ["novel", "fable", "epic", "ballad"],
    correctAnswer: "fable"
  },
  {
    id: 168,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The deliberate exaggeration for effect is known as",
    options: ["irony", "hyperbole", "oxymoron", "alliteration"],
    correctAnswer: "hyperbole"
  },
  {
    id: 169,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The purpose of a writer who wants to convince the reader to accept a particular viewpoint is to",
    options: ["entertain", "inform", "persuade", "describe"],
    correctAnswer: "persuade"
  },
  {
    id: 170,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "In a passage, the sentence that best summarises the entire content is usually the",
    options: ["topic sentence", "supporting sentence", "concluding sentence only", "transitional sentence"],
    correctAnswer: "topic sentence"
  },
  {
    id: 171,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A direct comparison between two unlike things without using ‘like’ or ‘as’ is a",
    options: ["simile", "metaphor", "personification", "allusion"],
    correctAnswer: "metaphor"
  },
  {
    id: 172,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The repetition of initial consonant sounds in a line of poetry is called",
    options: ["assonance", "alliteration", "rhyme", "onomatopoeia"],
    correctAnswer: "alliteration"
  },
  {
    id: 173,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "When a question asks for the meaning of an expression as used in the passage, the best approach is to",
    options: ["use the dictionary meaning only", "consider the surrounding words and context", "choose the longest option", "ignore the passage"],
    correctAnswer: "consider the surrounding words and context"
  },
  {
    id: 174,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "A passage written to create a vivid picture of a place or scene is primarily",
    options: ["narrative", "descriptive", "argumentative", "expository"],
    correctAnswer: "descriptive"
  },
  {
    id: 175,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The central character in a literary work is known as the",
    options: ["antagonist", "protagonist", "narrator", "foil"],
    correctAnswer: "protagonist"
  },
  {
    id: 176,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A humorous exaggeration that is not meant to be taken literally is an example of",
    options: ["irony", "hyperbole", "paradox", "satire"],
    correctAnswer: "hyperbole"
  },
  {
    id: 177,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The question “According to the passage, why did the character leave the village?” is testing",
    options: ["vocabulary", "inference", "literal comprehension", "literary device"],
    correctAnswer: "literal comprehension"
  },
  {
    id: 178,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "An inference is a conclusion reached on the basis of",
    options: ["direct statement only", "evidence and reasoning", "personal opinion alone", "the title of the passage"],
    correctAnswer: "evidence and reasoning"
  },
  {
    id: 179,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The use of words that imitate the sounds they describe is called",
    options: ["alliteration", "onomatopoeia", "assonance", "consonance"],
    correctAnswer: "onomatopoeia"
  },
  {
    id: 180,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A long narrative poem that tells of the adventures of a heroic figure is an",
    options: ["ode", "epic", "elegy", "sonnet"],
    correctAnswer: "epic"
  },
  {
    id: 181,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The writer’s purpose in an argumentative passage is mainly to",
    options: ["tell a story", "describe a scene", "persuade the reader", "entertain with jokes"],
    correctAnswer: "persuade the reader"
  },
  {
    id: 182,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "Which of the following best helps a reader to determine the tone of a passage?",
    options: ["The length of the paragraphs", "The choice of words and expressions", "The number of characters", "The setting alone"],
    correctAnswer: "The choice of words and expressions"
  },
  {
    id: 183,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A figure of speech in which two contradictory terms appear together is called an",
    options: ["oxymoron", "paradox", "irony", "antithesis"],
    correctAnswer: "oxymoron"
  },
  {
    id: 184,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The expression “Time is a thief” is an example of",
    options: ["simile", "metaphor", "personification", "hyperbole"],
    correctAnswer: "metaphor"
  },
  {
    id: 185,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "When a passage is written mainly to give information or explain a process, it is",
    options: ["narrative", "descriptive", "expository", "argumentative"],
    correctAnswer: "expository"
  },
  {
    id: 186,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The best way to answer a question on the meaning of a word in context is to",
    options: ["choose the first option", "substitute the options into the sentence", "look for the longest word", "ignore the surrounding sentences"],
    correctAnswer: "substitute the options into the sentence"
  },
  {
    id: 187,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A poem of fourteen lines with a specific rhyme scheme is a",
    options: ["ballad", "sonnet", "ode", "limerick"],
    correctAnswer: "sonnet"
  },
  {
    id: 188,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The character who opposes the main character is called the",
    options: ["protagonist", "antagonist", "narrator", "hero"],
    correctAnswer: "antagonist"
  },
  {
    id: 189,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "A question that requires the reader to read between the lines is testing",
    options: ["literal meaning", "inference", "vocabulary only", "grammar"],
    correctAnswer: "inference"
  },
  {
    id: 190,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The atmosphere or feeling created by a literary work is known as the",
    options: ["tone", "mood", "theme", "plot"],
    correctAnswer: "mood"
  },
  {
    id: 191,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A reference to a well-known person, place, event or work of literature is an",
    options: ["allusion", "illusion", "allegory", "anecdote"],
    correctAnswer: "allusion"
  },
  {
    id: 192,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The use of ‘s’ sound repeatedly in “The soft, silky snow settled slowly” is an example of",
    options: ["assonance", "alliteration", "onomatopoeia", "rhyme"],
    correctAnswer: "alliteration"
  },
  {
    id: 193,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "When a writer presents both sides of an issue before stating a position, the purpose is likely to",
    options: ["entertain", "persuade fairly", "confuse the reader", "describe a scene"],
    correctAnswer: "persuade fairly"
  },
  {
    id: 194,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The question “What can be concluded from the last paragraph?” is mainly testing",
    options: ["vocabulary", "inference", "literary devices", "spelling"],
    correctAnswer: "inference"
  },
  {
    id: 195,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A story within a story is an example of a",
    options: ["frame narrative", "flashback", "foreshadowing", "cliffhanger"],
    correctAnswer: "frame narrative"
  },
  {
    id: 196,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The expression “He is as brave as a lion” contains a",
    options: ["metaphor", "simile", "personification", "hyperbole"],
    correctAnswer: "simile"
  },
  {
    id: 197,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "A passage that tells a story with a beginning, middle and end is",
    options: ["expository", "descriptive", "narrative", "argumentative"],
    correctAnswer: "narrative"
  },
  {
    id: 198,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Comprehension",
    question: "The best way to identify the main idea of a paragraph is to look for the",
    options: ["longest sentence", "sentence that the other sentences support", "first word of every sentence", "proper nouns"],
    correctAnswer: "sentence that the other sentences support"
  },
  {
    id: 199,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "A poem that expresses deep personal feelings, often about love or nature, is a",
    options: ["lyric poem", "epic", "ballad", "narrative poem"],
    correctAnswer: "lyric poem"
  },
  {
    id: 200,
    subject: "English Language",
    tutorId: 1,
    tutor: "Mrs. Ngozi Okonkwo",
    topic: "Literature",
    question: "The opposite of the protagonist is the",
    options: ["hero", "antagonist", "narrator", "foil"],
    correctAnswer: "antagonist"
  },

  // ========== ENGLISH LANGUAGE – Tutor 2: Mr. Taiwo Adeyemi (Grammar & Usage) – IDs 201–240 ==========
  {
    id: 201,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is a correct example of subject-verb agreement?",
    options: ["The boys is playing", "The boy are playing", "The boys are playing", "The boy am playing"],
    correctAnswer: "The boys are playing"
  },
  {
    id: 202,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct form: Neither the teacher nor the students _____ present.",
    options: ["was", "were", "is", "be"],
    correctAnswer: "were"
  },
  {
    id: 203,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The past tense of the verb ‘go’ is",
    options: ["goed", "gone", "went", "going"],
    correctAnswer: "went"
  },
  {
    id: 204,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which word is a pronoun in the sentence: “She gave him the book”?",
    options: ["gave", "She", "book", "the"],
    correctAnswer: "She"
  },
  {
    id: 205,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct preposition: The book is _____ the table.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "on"
  },
  {
    id: 206,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Identify the conjunction in the sentence: “He came late because it rained.”",
    options: ["came", "late", "because", "rained"],
    correctAnswer: "because"
  },
  {
    id: 207,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is a complex sentence?",
    options: ["She danced and sang.", "Although it rained, we went out.", "The boy is tall.", "Come here."],
    correctAnswer: "Although it rained, we went out."
  },
  {
    id: 208,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The correct question tag for “She is coming, _____?” is",
    options: ["is she", "isn’t she", "does she", "did she"],
    correctAnswer: "isn’t she"
  },
  {
    id: 209,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct sentence:",
    options: ["Each of the boys have a book.", "Each of the boys has a book.", "Each of the boys having a book.", "Each of the boys have books."],
    correctAnswer: "Each of the boys has a book."
  },
  {
    id: 210,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The plural form of ‘child’ is",
    options: ["childs", "childes", "children", "childrens"],
    correctAnswer: "children"
  },
  {
    id: 211,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is in the passive voice?",
    options: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The boy is kicking the ball.", "Kick the ball."],
    correctAnswer: "The ball was kicked by the boy."
  },
  {
    id: 212,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct article: _____ honest man is respected.",
    options: ["A", "An", "The", "No article"],
    correctAnswer: "An"
  },
  {
    id: 213,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The comparative form of ‘good’ is",
    options: ["gooder", "more good", "better", "best"],
    correctAnswer: "better"
  },
  {
    id: 214,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Identify the adverb in the sentence: “She sings beautifully.”",
    options: ["She", "sings", "beautifully", "None"],
    correctAnswer: "beautifully"
  },
  {
    id: 215,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: If I _____ you, I would apologise.",
    options: ["am", "was", "were", "be"],
    correctAnswer: "were"
  },
  {
    id: 216,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is a collective noun?",
    options: ["boy", "team", "book", "house"],
    correctAnswer: "team"
  },
  {
    id: 217,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The correct form is: One of the students _____ absent today.",
    options: ["are", "is", "were", "have"],
    correctAnswer: "is"
  },
  {
    id: 218,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the sentence with correct concord:",
    options: ["The news are good.", "The news is good.", "The news were good.", "The news have been good."],
    correctAnswer: "The news is good."
  },
  {
    id: 219,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which word functions as a preposition in “He walked across the road”?",
    options: ["walked", "across", "the", "road"],
    correctAnswer: "across"
  },
  {
    id: 220,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The superlative form of ‘beautiful’ is",
    options: ["beautifuler", "more beautiful", "most beautiful", "beautifullest"],
    correctAnswer: "most beautiful"
  },
  {
    id: 221,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: She has _____ her homework.",
    options: ["do", "did", "done", "doing"],
    correctAnswer: "done"
  },
  {
    id: 222,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is an abstract noun?",
    options: ["table", "happiness", "dog", "city"],
    correctAnswer: "happiness"
  },
  {
    id: 223,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The correct question tag for “They don’t like rice, _____?” is",
    options: ["do they", "don’t they", "are they", "isn’t it"],
    correctAnswer: "do they"
  },
  {
    id: 224,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Identify the correct sentence:",
    options: ["He don’t know the answer.", "He doesn’t know the answer.", "He doesn’t knows the answer.", "He not know the answer."],
    correctAnswer: "He doesn’t know the answer."
  },
  {
    id: 225,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is a transitive verb?",
    options: ["sleep", "arrive", "kick", "happen"],
    correctAnswer: "kick"
  },
  {
    id: 226,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: The committee _____ divided in its opinion.",
    options: ["is", "are", "were", "have"],
    correctAnswer: "is"
  },
  {
    id: 227,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The past participle of ‘write’ is",
    options: ["wrote", "written", "writing", "writes"],
    correctAnswer: "written"
  },
  {
    id: 228,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which sentence is in the present continuous tense?",
    options: ["She sings every day.", "She is singing now.", "She sang yesterday.", "She has sung."],
    correctAnswer: "She is singing now."
  },
  {
    id: 229,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct relative pronoun: The man _____ stole the money has been arrested.",
    options: ["which", "who", "whose", "whom"],
    correctAnswer: "who"
  },
  {
    id: 230,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The correct form is: Neither of the answers _____ correct.",
    options: ["are", "is", "were", "have"],
    correctAnswer: "is"
  },
  {
    id: 231,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is an interjection?",
    options: ["quickly", "Oh!", "and", "under"],
    correctAnswer: "Oh!"
  },
  {
    id: 232,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: He is taller _____ his brother.",
    options: ["as", "than", "from", "like"],
    correctAnswer: "than"
  },
  {
    id: 233,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The plural of ‘criterion’ is",
    options: ["criterions", "criteria", "criterias", "criteriones"],
    correctAnswer: "criteria"
  },
  {
    id: 234,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which sentence contains a gerund?",
    options: ["She likes to swim.", "Swimming is good exercise.", "She swam yesterday.", "She will swim."],
    correctAnswer: "Swimming is good exercise."
  },
  {
    id: 235,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: By this time tomorrow, I _____ the work.",
    options: ["finish", "finished", "will have finished", "am finishing"],
    correctAnswer: "will have finished"
  },
  {
    id: 236,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The correct form of the verb is: The police _____ investigating the case.",
    options: ["is", "are", "was", "has"],
    correctAnswer: "are"
  },
  {
    id: 237,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following is a compound sentence?",
    options: ["She danced.", "She danced and he sang.", "Although she danced, he sang.", "Dancing is fun."],
    correctAnswer: "She danced and he sang."
  },
  {
    id: 238,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Choose the correct option: I prefer tea _____ coffee.",
    options: ["than", "to", "from", "over"],
    correctAnswer: "to"
  },
  {
    id: 239,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "The past tense of ‘teach’ is",
    options: ["teached", "taught", "teaching", "teaches"],
    correctAnswer: "taught"
  },
  {
    id: 240,
    subject: "English Language",
    tutorId: 2,
    tutor: "Mr. Taiwo Adeyemi",
    topic: "Grammar",
    question: "Which of the following sentences is grammatically correct?",
    options: ["Me and him went to the market.", "He and I went to the market.", "Him and I went to the market.", "I and he went to the market."],
    correctAnswer: "He and I went to the market."
  },

  // ========== ENGLISH LANGUAGE – Tutor 3: Miss Amina Usman (Oral English & Phonetics) – IDs 241–280 ==========
  {
    id: 241,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words has the /iː/ sound?",
    options: ["sit", "seat", "set", "sat"],
    correctAnswer: "seat"
  },
  {
    id: 242,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The sound /æ/ is found in the word",
    options: ["cat", "cut", "cot", "kite"],
    correctAnswer: "cat"
  },
  {
    id: 243,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word contains a diphthong?",
    options: ["cat", "boy", "pen", "book"],
    correctAnswer: "boy"
  },
  {
    id: 244,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The consonant sound /ʃ/ is heard in",
    options: ["ship", "chip", "sip", "zip"],
    correctAnswer: "ship"
  },
  {
    id: 245,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following pairs are minimal pairs?",
    options: ["ship / sheep", "book / look", "pen / pencil", "cat / dog"],
    correctAnswer: "ship / sheep"
  },
  {
    id: 246,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The word ‘photograph’ has stress on the",
    options: ["first syllable", "second syllable", "third syllable", "last syllable"],
    correctAnswer: "first syllable"
  },
  {
    id: 247,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word has the /θ/ sound?",
    options: ["this", "thin", "that", "then"],
    correctAnswer: "thin"
  },
  {
    id: 248,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The number of syllables in the word ‘education’ is",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    id: 249,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words rhymes with ‘light’?",
    options: ["lit", "late", "bite", "lot"],
    correctAnswer: "bite"
  },
  {
    id: 250,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The sound /ʊ/ is found in",
    options: ["put", "pool", "pot", "pat"],
    correctAnswer: "put"
  },
  {
    id: 251,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word begins with a silent letter?",
    options: ["knife", "night", "kite", "nice"],
    correctAnswer: "knife"
  },
  {
    id: 252,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The primary stress in the word ‘important’ falls on the",
    options: ["first syllable", "second syllable", "third syllable", "fourth syllable"],
    correctAnswer: "second syllable"
  },
  {
    id: 253,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following contains the /ʤ/ sound?",
    options: ["judge", "church", "ship", "thin"],
    correctAnswer: "judge"
  },
  {
    id: 254,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The vowel sound in ‘bird’ is a",
    options: ["short vowel", "long vowel", "diphthong", "triphthong"],
    correctAnswer: "long vowel"
  },
  {
    id: 255,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which pair of words has the same vowel sound?",
    options: ["seat / sit", "pool / pull", "caught / cot", "beat / bit"],
    correctAnswer: "caught / cot"
  },
  {
    id: 256,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The word ‘banana’ has stress on the",
    options: ["first syllable", "second syllable", "third syllable", "all syllables equally"],
    correctAnswer: "second syllable"
  },
  {
    id: 257,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words has three syllables?",
    options: ["beautiful", "beauty", "beautify", "beaut"],
    correctAnswer: "beautiful"
  },
  {
    id: 258,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The final sound in ‘walked’ is",
    options: ["/t/", "/d/", "/ɪd/", "/əd/"],
    correctAnswer: "/t/"
  },
  {
    id: 259,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word contains the diphthong /aɪ/?",
    options: ["boy", "cow", "my", "go"],
    correctAnswer: "my"
  },
  {
    id: 260,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The consonant sound /ŋ/ is found in",
    options: ["sing", "sin", "thin", "chin"],
    correctAnswer: "sing"
  },
  {
    id: 261,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words is stressed on the first syllable?",
    options: ["present (noun)", "present (verb)", "record (verb)", "permit (verb)"],
    correctAnswer: "present (noun)"
  },
  {
    id: 262,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The sound /ð/ is heard in the word",
    options: ["thin", "this", "ship", "chip"],
    correctAnswer: "this"
  },
  {
    id: 263,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "How many sounds are in the word ‘cat’?",
    options: ["2", "3", "4", "1"],
    correctAnswer: "3"
  },
  {
    id: 264,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word has the /ɔː/ sound?",
    options: ["cot", "caught", "cut", "cat"],
    correctAnswer: "caught"
  },
  {
    id: 265,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The word ‘examination’ is stressed on the",
    options: ["first syllable", "second syllable", "third syllable", "fourth syllable"],
    correctAnswer: "fourth syllable"
  },
  {
    id: 266,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following pairs differs only in one sound?",
    options: ["pin / bin", "cat / dog", "house / home", "pen / pencil"],
    correctAnswer: "pin / bin"
  },
  {
    id: 267,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The initial sound in ‘phone’ is",
    options: ["/p/", "/f/", "/ph/", "/h/"],
    correctAnswer: "/f/"
  },
  {
    id: 268,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word ends with the /z/ sound?",
    options: ["dogs", "cats", "books", "ships"],
    correctAnswer: "dogs"
  },
  {
    id: 269,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The diphthong in the word ‘house’ is",
    options: ["/aʊ/", "/aɪ/", "/ɔɪ/", "/eɪ/"],
    correctAnswer: "/aʊ/"
  },
  {
    id: 270,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words has a silent ‘b’?",
    options: ["bomb", "book", "baby", "about"],
    correctAnswer: "bomb"
  },
  {
    id: 271,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The primary stress in ‘photography’ is on the",
    options: ["first syllable", "second syllable", "third syllable", "fourth syllable"],
    correctAnswer: "second syllable"
  },
  {
    id: 272,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word contains the /tʃ/ sound?",
    options: ["ship", "chip", "sip", "zip"],
    correctAnswer: "chip"
  },
  {
    id: 273,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The number of syllables in ‘university’ is",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },
  {
    id: 274,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following words has the /ɜː/ sound?",
    options: ["bird", "bed", "bad", "bid"],
    correctAnswer: "bird"
  },
  {
    id: 275,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The final sound in ‘played’ is",
    options: ["/t/", "/d/", "/ɪd/", "/əd/"],
    correctAnswer: "/d/"
  },
  {
    id: 276,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which word is stressed on the second syllable?",
    options: ["table", "hotel", "teacher", "window"],
    correctAnswer: "hotel"
  },
  {
    id: 277,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The sound /v/ is found in",
    options: ["van", "fan", "pan", "ban"],
    correctAnswer: "van"
  },
  {
    id: 278,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which of the following is a pure vowel (monophthong)?",
    options: ["/aɪ/", "/eɪ/", "/iː/", "/aʊ/"],
    correctAnswer: "/iː/"
  },
  {
    id: 279,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "The word ‘comfortable’ is commonly pronounced with how many syllables in fluent speech?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    id: 280,
    subject: "English Language",
    tutorId: 3,
    tutor: "Miss Amina Usman",
    topic: "Phonetics",
    question: "Which pair of words has different vowel sounds?",
    options: ["seat / beat", "sit / bit", "seat / sit", "pool / fool"],
    correctAnswer: "seat / sit"
  },

  // ========== ENGLISH LANGUAGE – Tutor 4: Mr. Emeka Chibueze (Essay Writing & Vocabulary) – IDs 281–320 ==========
  {
    id: 281,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The synonym of ‘happy’ is",
    options: ["sad", "joyful", "angry", "tired"],
    correctAnswer: "joyful"
  },
  {
    id: 282,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The antonym of ‘ancient’ is",
    options: ["old", "modern", "historic", "past"],
    correctAnswer: "modern"
  },
  {
    id: 283,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The idiom ‘to spill the beans’ means",
    options: ["to cook beans", "to reveal a secret", "to waste food", "to plant seeds"],
    correctAnswer: "to reveal a secret"
  },
  {
    id: 284,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Choose the word that best completes the sentence: The teacher asked the students to _____ their essays carefully.",
    options: ["proof", "prove", "proofread", "proved"],
    correctAnswer: "proofread"
  },
  {
    id: 285,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The word ‘benevolent’ means",
    options: ["kind and generous", "cruel", "selfish", "lazy"],
    correctAnswer: "kind and generous"
  },
  {
    id: 286,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Which of the following is formal language?",
    options: ["What’s up?", "How are you?", "How do you do?", "Hey dude!"],
    correctAnswer: "How do you do?"
  },
  {
    id: 287,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "The first paragraph of an essay is usually the",
    options: ["body", "conclusion", "introduction", "summary"],
    correctAnswer: "introduction"
  },
  {
    id: 288,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "A good essay should have",
    options: ["only one long paragraph", "a clear structure with introduction, body and conclusion", "no topic sentence", "only informal language"],
    correctAnswer: "a clear structure with introduction, body and conclusion"
  },
  {
    id: 289,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The synonym of ‘begin’ is",
    options: ["end", "commence", "finish", "stop"],
    correctAnswer: "commence"
  },
  {
    id: 290,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The antonym of ‘courage’ is",
    options: ["bravery", "fear", "strength", "boldness"],
    correctAnswer: "fear"
  },
  {
    id: 291,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The expression ‘a piece of cake’ means",
    options: ["something difficult", "something very easy", "a type of food", "a celebration"],
    correctAnswer: "something very easy"
  },
  {
    id: 292,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Choose the most appropriate word: The doctor advised him to _____ smoking.",
    options: ["quit", "quite", "quiet", "quilt"],
    correctAnswer: "quit"
  },
  {
    id: 293,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "In an argumentative essay, the writer’s main aim is to",
    options: ["tell a story", "describe a place", "persuade the reader to accept a viewpoint", "list facts only"],
    correctAnswer: "persuade the reader to accept a viewpoint"
  },
  {
    id: 294,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "A topic sentence is usually found at the beginning of a",
    options: ["essay", "paragraph", "book", "sentence"],
    correctAnswer: "paragraph"
  },
  {
    id: 295,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The word ‘meticulous’ means",
    options: ["careless", "very careful and precise", "quick", "lazy"],
    correctAnswer: "very careful and precise"
  },
  {
    id: 296,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Which of the following is informal?",
    options: ["I regret to inform you", "I’m sorry to say", "Kindly note that", "Please be informed"],
    correctAnswer: "I’m sorry to say"
  },
  {
    id: 297,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The synonym of ‘difficult’ is",
    options: ["easy", "hard", "simple", "clear"],
    correctAnswer: "hard"
  },
  {
    id: 298,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The antonym of ‘generous’ is",
    options: ["kind", "stingy", "helpful", "friendly"],
    correctAnswer: "stingy"
  },
  {
    id: 299,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "The concluding paragraph of an essay should",
    options: ["introduce new ideas", "summarise the main points", "ask questions only", "be the longest"],
    correctAnswer: "summarise the main points"
  },
  {
    id: 300,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "In formal letter writing, the correct salutation for someone whose name you do not know is",
    options: ["Dear friend,", "Dear Sir/Madam,", "Hi there,", "Hello,"],
    correctAnswer: "Dear Sir/Madam,"
  },
  {
    id: 301,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The idiom ‘to break the ice’ means",
    options: ["to start a conversation in a friendly way", "to destroy something frozen", "to end a relationship", "to make a mistake"],
    correctAnswer: "to start a conversation in a friendly way"
  },
  {
    id: 302,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Choose the correct word: The students were asked to _____ their assignments on time.",
    options: ["submit", "submitt", "submited", "submitting"],
    correctAnswer: "submit"
  },
  {
    id: 303,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The word ‘ambiguous’ means",
    options: ["clear", "having more than one meaning", "simple", "short"],
    correctAnswer: "having more than one meaning"
  },
  {
    id: 304,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Which of the following pairs are synonyms?",
    options: ["big / small", "happy / sad", "start / begin", "hot / cold"],
    correctAnswer: "start / begin"
  },
  {
    id: 305,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "A narrative essay mainly",
    options: ["argues a point", "tells a story", "describes a process", "compares two things"],
    correctAnswer: "tells a story"
  },
  {
    id: 306,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "In an essay, supporting details are used to",
    options: ["confuse the reader", "develop and explain the main idea", "end the essay", "introduce the topic"],
    correctAnswer: "develop and explain the main idea"
  },
  {
    id: 307,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The antonym of ‘expand’ is",
    options: ["enlarge", "contract", "increase", "grow"],
    correctAnswer: "contract"
  },
  {
    id: 308,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The expression ‘once in a blue moon’ means",
    options: ["very often", "very rarely", "every month", "during the day"],
    correctAnswer: "very rarely"
  },
  {
    id: 309,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Choose the most suitable word: The manager’s decision was _____ by the board.",
    options: ["approved", "approval", "approving", "approves"],
    correctAnswer: "approved"
  },
  {
    id: 310,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The word ‘diligent’ means",
    options: ["lazy", "hardworking", "careless", "slow"],
    correctAnswer: "hardworking"
  },
  {
    id: 311,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "The best way to organise ideas in an essay is to use",
    options: ["random sentences", "paragraphs with topic sentences", "only short words", "no punctuation"],
    correctAnswer: "paragraphs with topic sentences"
  },
  {
    id: 312,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "In formal writing, contractions such as ‘don’t’ and ‘can’t’ should be",
    options: ["used freely", "avoided", "used only in dialogue", "used in the conclusion"],
    correctAnswer: "avoided"
  },
  {
    id: 313,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The synonym of ‘refuse’ is",
    options: ["accept", "decline", "agree", "approve"],
    correctAnswer: "decline"
  },
  {
    id: 314,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The antonym of ‘victory’ is",
    options: ["success", "defeat", "win", "triumph"],
    correctAnswer: "defeat"
  },
  {
    id: 315,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The idiom ‘to hit the nail on the head’ means",
    options: ["to make a mistake", "to be exactly right", "to build something", "to hurt someone"],
    correctAnswer: "to be exactly right"
  },
  {
    id: 316,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Choose the correct option: The speaker’s argument was very _____.",
    options: ["persuade", "persuasive", "persuasion", "persuading"],
    correctAnswer: "persuasive"
  },
  {
    id: 317,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "A descriptive essay focuses mainly on",
    options: ["arguing a case", "painting a picture with words", "telling a story with a plot", "listing instructions"],
    correctAnswer: "painting a picture with words"
  },
  {
    id: 318,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Essay Writing",
    question: "Transitional words such as ‘however’, ‘therefore’ and ‘in addition’ help to",
    options: ["confuse the reader", "connect ideas smoothly", "end the essay", "introduce the title"],
    correctAnswer: "connect ideas smoothly"
  },
  {
    id: 319,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "The word ‘obsolete’ means",
    options: ["new", "no longer in use", "popular", "expensive"],
    correctAnswer: "no longer in use"
  },
  {
    id: 320,
    subject: "English Language",
    tutorId: 4,
    tutor: "Mr. Emeka Chibueze",
    topic: "Vocabulary",
    question: "Which of the following is the most formal way of saying ‘I want’?",
    options: ["I wanna", "I would like", "I need", "Give me"],
    correctAnswer: "I would like"
  },

    // ========== PHYSICS – Tutor 1: Mr. David Eze (Mechanics & Motion) – IDs 321–360 ==========
  {
    id: 321,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Distance is a",
    options: ["vector quantity", "scalar quantity", "both scalar and vector", "neither scalar nor vector"],
    correctAnswer: "scalar quantity"
  },
  {
    id: 322,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The SI unit of velocity is",
    options: ["m/s", "m/s²", "kg m/s", "N"],
    correctAnswer: "m/s"
  },
  {
    id: 323,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Acceleration is defined as the rate of change of",
    options: ["distance", "displacement", "velocity", "speed"],
    correctAnswer: "velocity"
  },
  {
    id: 324,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A body moving with constant velocity has",
    options: ["zero acceleration", "increasing acceleration", "decreasing acceleration", "constant non-zero acceleration"],
    correctAnswer: "zero acceleration"
  },
  {
    id: 325,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Newton’s first law of motion is also known as the law of",
    options: ["acceleration", "inertia", "action-reaction", "momentum"],
    correctAnswer: "inertia"
  },
  {
    id: 326,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The force that opposes the relative motion between two surfaces in contact is called",
    options: ["tension", "friction", "weight", "thrust"],
    correctAnswer: "friction"
  },
  {
    id: 327,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Momentum is the product of",
    options: ["mass and acceleration", "mass and velocity", "force and time", "force and distance"],
    correctAnswer: "mass and velocity"
  },
  {
    id: 328,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Work done is zero when the force is",
    options: ["parallel to the displacement", "perpendicular to the displacement", "in the same direction as displacement", "greater than the weight"],
    correctAnswer: "perpendicular to the displacement"
  },
  {
    id: 329,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The SI unit of power is the",
    options: ["joule", "watt", "newton", "pascal"],
    correctAnswer: "watt"
  },
  {
    id: 330,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Pressure is defined as",
    options: ["force × area", "force / area", "mass × acceleration", "weight / volume"],
    correctAnswer: "force / area"
  },
  {
    id: 331,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The density of a substance is its mass per unit",
    options: ["area", "volume", "length", "time"],
    correctAnswer: "volume"
  },
  {
    id: 332,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A machine with a velocity ratio of 5 and efficiency of 80% has a mechanical advantage of",
    options: ["4", "5", "6.25", "0.8"],
    correctAnswer: "4"
  },
  {
    id: 333,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The acceleration due to gravity on the surface of the earth is approximately",
    options: ["9.8 m/s", "9.8 m/s²", "98 m/s²", "0.98 m/s²"],
    correctAnswer: "9.8 m/s²"
  },
  {
    id: 334,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "An object is said to be in equilibrium when the net force acting on it is",
    options: ["maximum", "minimum", "zero", "equal to its weight"],
    correctAnswer: "zero"
  },
  {
    id: 335,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The equation v = u + at represents",
    options: ["Newton’s second law", "one of the equations of motion", "the law of conservation of energy", "Hooke’s law"],
    correctAnswer: "one of the equations of motion"
  },
  {
    id: 336,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Kinetic energy is the energy possessed by a body due to its",
    options: ["position", "motion", "shape", "temperature"],
    correctAnswer: "motion"
  },
  {
    id: 337,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Potential energy is given by the formula",
    options: ["½mv²", "mgh", "Fd", "Pt"],
    correctAnswer: "mgh"
  },
  {
    id: 338,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A force of 10 N acts on a body of mass 2 kg. The acceleration produced is",
    options: ["5 m/s²", "20 m/s²", "0.2 m/s²", "12 m/s²"],
    correctAnswer: "5 m/s²"
  },
  {
    id: 339,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The principle of moments states that for a body in equilibrium, the",
    options: ["sum of clockwise moments equals the sum of anticlockwise moments", "total force is zero", "weight equals reaction", "centre of gravity is at the base"],
    correctAnswer: "sum of clockwise moments equals the sum of anticlockwise moments"
  },
  {
    id: 340,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Impulse is equal to the change in",
    options: ["velocity", "acceleration", "momentum", "energy"],
    correctAnswer: "momentum"
  },
  {
    id: 341,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A car travels 100 m in 5 s. Its average speed is",
    options: ["20 m/s", "500 m/s", "0.05 m/s", "25 m/s"],
    correctAnswer: "20 m/s"
  },
  {
    id: 342,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The weight of a body is the",
    options: ["mass of the body", "force of gravity acting on it", "volume of the body", "density of the body"],
    correctAnswer: "force of gravity acting on it"
  },
  {
    id: 343,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "In a simple machine, the effort is the",
    options: ["load to be overcome", "force applied to the machine", "distance moved by the load", "efficiency of the machine"],
    correctAnswer: "force applied to the machine"
  },
  {
    id: 344,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The centre of gravity of a uniform rod is at its",
    options: ["end", "midpoint", "one-third of its length", "one-quarter of its length"],
    correctAnswer: "midpoint"
  },
  {
    id: 345,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A body is projected vertically upwards with a velocity of 20 m/s. The maximum height reached is (g = 10 m/s²)",
    options: ["10 m", "20 m", "40 m", "200 m"],
    correctAnswer: "20 m"
  },
  {
    id: 346,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "Newton’s third law of motion states that",
    options: ["force equals mass times acceleration", "action and reaction are equal and opposite", "a body continues in its state of rest or uniform motion", "momentum is conserved"],
    correctAnswer: "action and reaction are equal and opposite"
  },
  {
    id: 347,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The efficiency of a machine is always",
    options: ["greater than 100%", "equal to 100%", "less than 100%", "zero"],
    correctAnswer: "less than 100%"
  },
  {
    id: 348,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A force of 50 N is applied to a body and it moves a distance of 4 m in the direction of the force. The work done is",
    options: ["12.5 J", "200 J", "54 J", "46 J"],
    correctAnswer: "200 J"
  },
  {
    id: 349,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The SI unit of pressure is the",
    options: ["newton", "joule", "pascal", "watt"],
    correctAnswer: "pascal"
  },
  {
    id: 350,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A body of mass 5 kg is moving with a velocity of 4 m/s. Its kinetic energy is",
    options: ["10 J", "20 J", "40 J", "80 J"],
    correctAnswer: "40 J"
  },
  {
    id: 351,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The quantity that remains constant in an isolated system according to the law of conservation of momentum is",
    options: ["velocity", "acceleration", "momentum", "force"],
    correctAnswer: "momentum"
  },
  {
    id: 352,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A man lifts a load of 200 N through a height of 3 m. The work done against gravity is",
    options: ["600 J", "203 J", "66.7 J", "197 J"],
    correctAnswer: "600 J"
  },
  {
    id: 353,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The velocity ratio of a single fixed pulley is",
    options: ["1", "2", "0.5", "4"],
    correctAnswer: "1"
  },
  {
    id: 354,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "When a body falls freely under gravity, its",
    options: ["potential energy increases", "kinetic energy decreases", "potential energy decreases", "total energy decreases"],
    correctAnswer: "potential energy decreases"
  },
  {
    id: 355,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The rate of doing work is called",
    options: ["energy", "power", "force", "momentum"],
    correctAnswer: "power"
  },
  {
    id: 356,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A body of mass 10 kg is accelerated at 2 m/s². The force acting on it is",
    options: ["5 N", "12 N", "20 N", "8 N"],
    correctAnswer: "20 N"
  },
  {
    id: 357,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The upthrust on a body immersed in a fluid is equal to the",
    options: ["weight of the body", "weight of the fluid displaced", "volume of the body", "density of the fluid"],
    correctAnswer: "weight of the fluid displaced"
  },
  {
    id: 358,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The mechanical advantage of a machine is the ratio of",
    options: ["effort to load", "load to effort", "distance moved by effort to distance moved by load", "efficiency to velocity ratio"],
    correctAnswer: "load to effort"
  },
  {
    id: 359,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "A stone is thrown horizontally from the top of a cliff. The horizontal component of its velocity",
    options: ["increases", "decreases", "remains constant", "becomes zero"],
    correctAnswer: "remains constant"
  },
  {
    id: 360,
    subject: "Physics",
    tutorId: 1,
    tutor: "Mr. David Eze",
    topic: "Mechanics",
    question: "The product of force and the perpendicular distance from the pivot is called",
    options: ["work", "power", "moment of a force", "momentum"],
    correctAnswer: "moment of a force"
  },

  // ========== PHYSICS – Tutor 2: Mrs. Sarah Ibrahim (Waves & Optics) – IDs 361–400 ==========
  {
    id: 361,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "A wave in which the particles of the medium vibrate parallel to the direction of wave travel is called a",
    options: ["transverse wave", "longitudinal wave", "electromagnetic wave", "stationary wave"],
    correctAnswer: "longitudinal wave"
  },
  {
    id: 362,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The distance between two successive crests of a wave is called the",
    options: ["amplitude", "wavelength", "frequency", "period"],
    correctAnswer: "wavelength"
  },
  {
    id: 363,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The number of complete waves produced in one second is the",
    options: ["period", "wavelength", "frequency", "amplitude"],
    correctAnswer: "frequency"
  },
  {
    id: 364,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The relationship between wave speed (v), frequency (f) and wavelength (λ) is",
    options: ["v = f/λ", "v = fλ", "v = λ/f", "v = f + λ"],
    correctAnswer: "v = fλ"
  },
  {
    id: 365,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Sound waves are examples of",
    options: ["transverse waves", "longitudinal waves", "electromagnetic waves", "light waves"],
    correctAnswer: "longitudinal waves"
  },
  {
    id: 366,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The bending of light as it passes from one medium to another is called",
    options: ["reflection", "refraction", "diffraction", "dispersion"],
    correctAnswer: "refraction"
  },
  {
    id: 367,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The angle of incidence is equal to the angle of reflection. This is the law of",
    options: ["refraction", "reflection", "diffraction", "interference"],
    correctAnswer: "reflection"
  },
  {
    id: 368,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "A plane mirror forms an image that is",
    options: ["real and inverted", "virtual and erect", "real and erect", "virtual and inverted"],
    correctAnswer: "virtual and erect"
  },
  {
    id: 369,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The focal length of a concave mirror is",
    options: ["positive", "negative", "zero", "infinite"],
    correctAnswer: "positive"
  },
  {
    id: 370,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "Light is dispersed by a prism into its component colours because of",
    options: ["reflection", "different speeds of different colours in the prism", "diffraction", "interference"],
    correctAnswer: "different speeds of different colours in the prism"
  },
  {
    id: 371,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The time taken for one complete oscillation is called the",
    options: ["frequency", "period", "wavelength", "amplitude"],
    correctAnswer: "period"
  },
  {
    id: 372,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Ultrasonic waves have frequencies",
    options: ["less than 20 Hz", "between 20 Hz and 20 kHz", "greater than 20 kHz", "exactly 20 Hz"],
    correctAnswer: "greater than 20 kHz"
  },
  {
    id: 373,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "A convex lens is also known as a",
    options: ["diverging lens", "converging lens", "plane lens", "cylindrical lens"],
    correctAnswer: "converging lens"
  },
  {
    id: 374,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The image formed by a convex mirror is always",
    options: ["real and inverted", "virtual, erect and diminished", "real and magnified", "virtual and magnified"],
    correctAnswer: "virtual, erect and diminished"
  },
  {
    id: 375,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The phenomenon in which a wave spreads out after passing through a narrow opening is called",
    options: ["reflection", "refraction", "diffraction", "polarisation"],
    correctAnswer: "diffraction"
  },
  {
    id: 376,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The refractive index of a medium is the ratio of",
    options: ["speed of light in the medium to speed in vacuum", "speed of light in vacuum to speed in the medium", "wavelength in the medium to wavelength in vacuum", "frequency in vacuum to frequency in the medium"],
    correctAnswer: "speed of light in vacuum to speed in the medium"
  },
  {
    id: 377,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Electromagnetic waves travel at the speed of",
    options: ["sound", "light", "ultrasound", "water waves"],
    correctAnswer: "light"
  },
  {
    id: 378,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "Total internal reflection occurs when light travels from",
    options: ["air to water", "water to air at an angle greater than the critical angle", "glass to water", "air to glass"],
    correctAnswer: "water to air at an angle greater than the critical angle"
  },
  {
    id: 379,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The amplitude of a wave is a measure of its",
    options: ["frequency", "wavelength", "loudness or intensity", "speed"],
    correctAnswer: "loudness or intensity"
  },
  {
    id: 380,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The power of a lens is measured in",
    options: ["metres", "dioptres", "watts", "joules"],
    correctAnswer: "dioptres"
  },
  {
    id: 381,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "A wave has a frequency of 50 Hz and a wavelength of 2 m. Its speed is",
    options: ["25 m/s", "100 m/s", "52 m/s", "0.04 m/s"],
    correctAnswer: "100 m/s"
  },
  {
    id: 382,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The primary colours of light are",
    options: ["red, yellow, blue", "red, green, blue", "red, green, yellow", "cyan, magenta, yellow"],
    correctAnswer: "red, green, blue"
  },
  {
    id: 383,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Sound cannot travel through",
    options: ["air", "water", "steel", "vacuum"],
    correctAnswer: "vacuum"
  },
  {
    id: 384,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "An object is placed at the principal focus of a concave mirror. The image formed is",
    options: ["at infinity", "at the pole", "at the centre of curvature", "behind the mirror"],
    correctAnswer: "at infinity"
  },
  {
    id: 385,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The unit of frequency is the",
    options: ["metre", "second", "hertz", "watt"],
    correctAnswer: "hertz"
  },
  {
    id: 386,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "A simple microscope consists of a",
    options: ["concave lens", "convex lens of short focal length", "plane mirror", "concave mirror"],
    correctAnswer: "convex lens of short focal length"
  },
  {
    id: 387,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "When two waves of the same frequency and amplitude meet in phase, the resulting amplitude is",
    options: ["zero", "half", "double", "the same"],
    correctAnswer: "double"
  },
  {
    id: 388,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The critical angle for a glass-air interface is approximately 42°. Light incident at 50° from glass to air will be",
    options: ["refracted", "totally internally reflected", "absorbed", "dispersed"],
    correctAnswer: "totally internally reflected"
  },
  {
    id: 389,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The pitch of a sound depends on its",
    options: ["amplitude", "frequency", "speed", "wavelength only"],
    correctAnswer: "frequency"
  },
  {
    id: 390,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "In a ray diagram for a convex lens, rays parallel to the principal axis after refraction",
    options: ["pass through the principal focus", "pass through the optical centre", "travel undeviated", "converge at infinity"],
    correctAnswer: "pass through the principal focus"
  },
  {
    id: 391,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Radio waves are a type of",
    options: ["mechanical wave", "electromagnetic wave", "sound wave", "water wave"],
    correctAnswer: "electromagnetic wave"
  },
  {
    id: 392,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The image formed by a plane mirror is always",
    options: ["magnified", "diminished", "the same size as the object", "inverted"],
    correctAnswer: "the same size as the object"
  },
  {
    id: 393,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The speed of sound in air is approximately",
    options: ["3 × 10⁸ m/s", "340 m/s", "1500 m/s", "5000 m/s"],
    correctAnswer: "340 m/s"
  },
  {
    id: 394,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "A person suffering from myopia (short-sightedness) should use a",
    options: ["convex lens", "concave lens", "cylindrical lens", "bifocal lens only"],
    correctAnswer: "concave lens"
  },
  {
    id: 395,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "The phenomenon responsible for the blue colour of the sky is",
    options: ["reflection", "refraction", "scattering", "diffraction"],
    correctAnswer: "scattering"
  },
  {
    id: 396,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The lens formula is",
    options: ["1/f = 1/u + 1/v", "1/f = 1/v – 1/u", "f = u + v", "f = uv/(u + v)"],
    correctAnswer: "1/f = 1/v – 1/u"
  },
  {
    id: 397,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "A wave travels a distance of 10 m in 0.05 s. Its speed is",
    options: ["0.5 m/s", "200 m/s", "50 m/s", "500 m/s"],
    correctAnswer: "200 m/s"
  },
  {
    id: 398,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "When white light passes through a prism, the colour that is deviated least is",
    options: ["violet", "blue", "green", "red"],
    correctAnswer: "red"
  },
  {
    id: 399,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Waves",
    question: "Longitudinal waves cannot be",
    options: ["reflected", "refracted", "polarised", "diffracted"],
    correctAnswer: "polarised"
  },
  {
    id: 400,
    subject: "Physics",
    tutorId: 2,
    tutor: "Mrs. Sarah Ibrahim",
    topic: "Optics",
    question: "The optical instrument used to see very distant objects is the",
    options: ["microscope", "telescope", "periscope", "kaleidoscope"],
    correctAnswer: "telescope"
  },

  // ========== PHYSICS – Tutor 3: Mr. Kunle Adebayo (Electricity & Magnetism) – IDs 401–440 ==========
  {
    id: 401,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The SI unit of electric current is the",
    options: ["volt", "ampere", "ohm", "watt"],
    correctAnswer: "ampere"
  },
  {
    id: 402,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "Ohm’s law states that the current through a conductor is directly proportional to the",
    options: ["resistance", "potential difference", "power", "energy"],
    correctAnswer: "potential difference"
  },
  {
    id: 403,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The SI unit of resistance is the",
    options: ["ampere", "volt", "ohm", "coulomb"],
    correctAnswer: "ohm"
  },
  {
    id: 404,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "In a series circuit, the current is",
    options: ["the same through all components", "different through each component", "zero", "maximum at the battery"],
    correctAnswer: "the same through all components"
  },
  {
    id: 405,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The total resistance of three 3 Ω resistors connected in parallel is",
    options: ["9 Ω", "1 Ω", "3 Ω", "0.33 Ω"],
    correctAnswer: "1 Ω"
  },
  {
    id: 406,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "Electrical power is given by the formula",
    options: ["P = IV", "P = I/V", "P = V/I", "P = I + V"],
    correctAnswer: "P = IV"
  },
  {
    id: 407,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The SI unit of electric charge is the",
    options: ["ampere", "volt", "coulomb", "ohm"],
    correctAnswer: "coulomb"
  },
  {
    id: 408,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The region around a magnet where its magnetic influence can be detected is called the",
    options: ["magnetic field", "electric field", "gravitational field", "force field"],
    correctAnswer: "magnetic field"
  },
  {
    id: 409,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "Like magnetic poles",
    options: ["attract each other", "repel each other", "have no effect on each other", "cancel each other"],
    correctAnswer: "repel each other"
  },
  {
    id: 410,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "A current of 2 A flows through a resistor of 5 Ω. The potential difference across the resistor is",
    options: ["2.5 V", "10 V", "0.4 V", "7 V"],
    correctAnswer: "10 V"
  },
  {
    id: 411,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "In a parallel circuit, the potential difference across each component is",
    options: ["different", "the same", "zero", "maximum"],
    correctAnswer: "the same"
  },
  {
    id: 412,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "An electromagnet is a temporary magnet made by",
    options: ["rubbing a magnet on iron", "passing current through a coil of wire wound on a soft iron core", "heating iron", "hammering iron"],
    correctAnswer: "passing current through a coil of wire wound on a soft iron core"
  },
  {
    id: 413,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The heating effect of current is used in",
    options: ["electric motors", "electric bulbs and heaters", "transformers", "generators"],
    correctAnswer: "electric bulbs and heaters"
  },
  {
    id: 414,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The energy consumed by a 100 W bulb in 2 hours is",
    options: ["200 J", "0.2 kWh", "200 kWh", "50 kWh"],
    correctAnswer: "0.2 kWh"
  },
  {
    id: 415,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The direction of the magnetic field around a current-carrying straight wire is given by",
    options: ["Fleming’s left-hand rule", "the right-hand grip rule", "Lenz’s law", "Faraday’s law"],
    correctAnswer: "the right-hand grip rule"
  },
  {
    id: 416,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "A transformer works on the principle of",
    options: ["electrostatic induction", "electromagnetic induction", "chemical effect of current", "heating effect of current"],
    correctAnswer: "electromagnetic induction"
  },
  {
    id: 417,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The e.m.f. of a cell is the",
    options: ["current it can supply", "potential difference across its terminals when no current is drawn", "resistance of the cell", "power it can deliver"],
    correctAnswer: "potential difference across its terminals when no current is drawn"
  },
  {
    id: 418,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "Magnetic field lines outside a magnet travel from",
    options: ["south pole to north pole", "north pole to south pole", "one side to the other", "the centre outwards"],
    correctAnswer: "north pole to south pole"
  },
  {
    id: 419,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in series. The total resistance is",
    options: ["1 Ω", "11 Ω", "0.9 Ω", "36 Ω"],
    correctAnswer: "11 Ω"
  },
  {
    id: 420,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The fuse in an electrical circuit is used to",
    options: ["increase current", "protect the circuit from excessive current", "reduce voltage", "store charge"],
    correctAnswer: "protect the circuit from excessive current"
  },
  {
    id: 421,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The strength of an electromagnet can be increased by",
    options: ["decreasing the current", "increasing the number of turns in the coil", "using a wooden core", "decreasing the number of turns"],
    correctAnswer: "increasing the number of turns in the coil"
  },
  {
    id: 422,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The quantity of electricity that flows when a current of 2 A passes for 5 minutes is",
    options: ["10 C", "600 C", "2.5 C", "0.4 C"],
    correctAnswer: "600 C"
  },
  {
    id: 423,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "In a step-up transformer,",
    options: ["Ns < Np", "Ns > Np", "Ns = Np", "voltage is stepped down"],
    correctAnswer: "Ns > Np"
  },
  {
    id: 424,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "A magnetic material that is easily magnetised and demagnetised is called",
    options: ["hard magnetic material", "soft magnetic material", "non-magnetic material", "paramagnetic material"],
    correctAnswer: "soft magnetic material"
  },
  {
    id: 425,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The cost of using a 2 kW heater for 3 hours at ₦50 per kWh is",
    options: ["₦100", "₦300", "₦150", "₦50"],
    correctAnswer: "₦300"
  },
  {
    id: 426,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The resistance of a wire depends on its",
    options: ["length and cross-sectional area", "colour only", "temperature only", "mass only"],
    correctAnswer: "length and cross-sectional area"
  },
  {
    id: 427,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "Faraday’s law of electromagnetic induction states that the induced e.m.f. is proportional to the",
    options: ["resistance of the circuit", "rate of change of magnetic flux", "current in the circuit", "number of turns only"],
    correctAnswer: "rate of change of magnetic flux"
  },
  {
    id: 428,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "A cell of e.m.f. 1.5 V and internal resistance 0.5 Ω is connected to an external resistance of 2.5 Ω. The current in the circuit is",
    options: ["0.5 A", "0.6 A", "1.5 A", "3 A"],
    correctAnswer: "0.5 A"
  },
  {
    id: 429,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The instrument used to measure electric current is the",
    options: ["voltmeter", "ammeter", "ohmmeter", "galvanometer only"],
    correctAnswer: "ammeter"
  },
  {
    id: 430,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "Lenz’s law is a consequence of the law of conservation of",
    options: ["charge", "momentum", "energy", "mass"],
    correctAnswer: "energy"
  },
  {
    id: 431,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "Two resistors of 4 Ω and 6 Ω are connected in parallel. Their equivalent resistance is",
    options: ["10 Ω", "2.4 Ω", "24 Ω", "1.5 Ω"],
    correctAnswer: "2.4 Ω"
  },
  {
    id: 432,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The potential difference across a 10 Ω resistor carrying a current of 0.5 A is",
    options: ["5 V", "20 V", "0.05 V", "10.5 V"],
    correctAnswer: "5 V"
  },
  {
    id: 433,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The device that converts electrical energy into mechanical energy is the",
    options: ["generator", "transformer", "electric motor", "galvanometer"],
    correctAnswer: "electric motor"
  },
  {
    id: 434,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "A 12 V battery is connected to a 4 Ω resistor. The power dissipated is",
    options: ["3 W", "36 W", "48 W", "16 W"],
    correctAnswer: "36 W"
  },
  {
    id: 435,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The material commonly used for the core of a transformer is",
    options: ["copper", "soft iron", "aluminium", "wood"],
    correctAnswer: "soft iron"
  },
  {
    id: 436,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The force on a current-carrying conductor in a magnetic field is maximum when the conductor is",
    options: ["parallel to the field", "perpendicular to the field", "at 45° to the field", "at 30° to the field"],
    correctAnswer: "perpendicular to the field"
  },
  {
    id: 437,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "The kilowatt-hour is a unit of",
    options: ["power", "energy", "current", "voltage"],
    correctAnswer: "energy"
  },
  {
    id: 438,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "When the temperature of a pure metal increases, its resistance",
    options: ["decreases", "increases", "remains constant", "becomes zero"],
    correctAnswer: "increases"
  },
  {
    id: 439,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Magnetism",
    question: "The magnetic effect of current was discovered by",
    options: ["Faraday", "Oersted", "Lenz", "Ohm"],
    correctAnswer: "Oersted"
  },
  {
    id: 440,
    subject: "Physics",
    tutorId: 3,
    tutor: "Mr. Kunle Adebayo",
    topic: "Electricity",
    question: "A series circuit has a total resistance of 10 Ω and a current of 2 A. The total potential difference is",
    options: ["5 V", "20 V", "12 V", "0.2 V"],
    correctAnswer: "20 V"
  },

  // ========== PHYSICS – Tutor 4: Miss Grace Obi (Heat & Thermodynamics) – IDs 441–480 ==========
  {
    id: 441,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Temperature is a measure of the",
    options: ["total heat energy", "average kinetic energy of the molecules", "mass of the body", "volume of the body"],
    correctAnswer: "average kinetic energy of the molecules"
  },
  {
    id: 442,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The SI unit of temperature is the",
    options: ["degree Celsius", "kelvin", "degree Fahrenheit", "joule"],
    correctAnswer: "kelvin"
  },
  {
    id: 443,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Heat is a form of",
    options: ["matter", "energy", "force", "power"],
    correctAnswer: "energy"
  },
  {
    id: 444,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The quantity of heat required to raise the temperature of 1 kg of a substance by 1 K is called",
    options: ["latent heat", "specific heat capacity", "heat capacity", "thermal capacity"],
    correctAnswer: "specific heat capacity"
  },
  {
    id: 445,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The SI unit of specific heat capacity is",
    options: ["J/kg", "J/K", "J/kg K", "J/g °C"],
    correctAnswer: "J/kg K"
  },
  {
    id: 446,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Latent heat is the heat absorbed or released during a change of",
    options: ["temperature", "state", "pressure", "volume"],
    correctAnswer: "state"
  },
  {
    id: 447,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The process by which heat is transferred through a solid without the movement of the solid as a whole is called",
    options: ["convection", "conduction", "radiation", "evaporation"],
    correctAnswer: "conduction"
  },
  {
    id: 448,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Heat transfer in fluids mainly occurs by",
    options: ["conduction", "convection", "radiation", "reflection"],
    correctAnswer: "convection"
  },
  {
    id: 449,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The transfer of heat that does not require a material medium is called",
    options: ["conduction", "convection", "radiation", "evaporation"],
    correctAnswer: "radiation"
  },
  {
    id: 450,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "Boyle’s law states that for a fixed mass of gas at constant temperature,",
    options: ["P ∝ V", "P ∝ 1/V", "P ∝ T", "V ∝ T"],
    correctAnswer: "P ∝ 1/V"
  },
  {
    id: 451,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "Charles’ law states that for a fixed mass of gas at constant pressure,",
    options: ["V ∝ T", "V ∝ 1/T", "P ∝ T", "P ∝ V"],
    correctAnswer: "V ∝ T"
  },
  {
    id: 452,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The boiling point of pure water at standard atmospheric pressure is",
    options: ["0 °C", "50 °C", "100 °C", "212 °C"],
    correctAnswer: "100 °C"
  },
  {
    id: 453,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "When a liquid evaporates, it",
    options: ["gains heat", "loses heat", "neither gains nor loses heat", "gains mass"],
    correctAnswer: "loses heat"
  },
  {
    id: 454,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "The absolute zero of temperature is",
    options: ["0 °C", "–273 °C", "273 °C", "100 °C"],
    correctAnswer: "–273 °C"
  },
  {
    id: 455,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "A good conductor of heat is",
    options: ["wood", "plastic", "copper", "air"],
    correctAnswer: "copper"
  },
  {
    id: 456,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The heat capacity of a body is the quantity of heat required to raise its temperature by",
    options: ["1 K", "10 K", "100 K", "any amount"],
    correctAnswer: "1 K"
  },
  {
    id: 457,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "The pressure law states that for a fixed mass of gas at constant volume,",
    options: ["P ∝ T", "P ∝ 1/T", "P ∝ V", "V ∝ 1/T"],
    correctAnswer: "P ∝ T"
  },
  {
    id: 458,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Land and sea breezes are caused by",
    options: ["conduction", "convection", "radiation", "reflection"],
    correctAnswer: "convection"
  },
  {
    id: 459,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The specific latent heat of fusion of ice is the heat required to change 1 kg of ice at 0 °C to",
    options: ["water at 0 °C", "steam at 100 °C", "water at 100 °C", "ice at –10 °C"],
    correctAnswer: "water at 0 °C"
  },
  {
    id: 460,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "An ideal gas obeys the equation",
    options: ["PV = constant", "PV = nRT", "P/T = constant", "V/T = constant"],
    correctAnswer: "PV = nRT"
  },
  {
    id: 461,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "A black body is a good",
    options: ["reflector of heat", "absorber and emitter of radiation", "conductor of heat", "insulator"],
    correctAnswer: "absorber and emitter of radiation"
  },
  {
    id: 462,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The expansion of solids when heated is due to",
    options: ["increase in mass", "increase in the average separation of the molecules", "decrease in density only", "change of state"],
    correctAnswer: "increase in the average separation of the molecules"
  },
  {
    id: 463,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "The first law of thermodynamics is a statement of the conservation of",
    options: ["momentum", "energy", "mass", "charge"],
    correctAnswer: "energy"
  },
  {
    id: 464,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Which of the following is a poor conductor of heat?",
    options: ["aluminium", "copper", "silver", "air"],
    correctAnswer: "air"
  },
  {
    id: 465,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "When 2 kg of water is heated from 20 °C to 50 °C, the heat absorbed is (specific heat capacity of water = 4200 J/kg K)",
    options: ["126 000 J", "252 000 J", "84 000 J", "4200 J"],
    correctAnswer: "252 000 J"
  },
  {
    id: 466,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "At constant temperature, if the volume of a gas is halved, its pressure",
    options: ["is halved", "is doubled", "remains the same", "becomes zero"],
    correctAnswer: "is doubled"
  },
  {
    id: 467,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The process by which a liquid changes into vapour at a temperature below its boiling point is called",
    options: ["boiling", "evaporation", "condensation", "sublimation"],
    correctAnswer: "evaporation"
  },
  {
    id: 468,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "A thermos flask reduces heat loss by",
    options: ["conduction, convection and radiation", "conduction only", "convection only", "radiation only"],
    correctAnswer: "conduction, convection and radiation"
  },
  {
    id: 469,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "The volume of a fixed mass of gas at constant pressure is directly proportional to its",
    options: ["Celsius temperature", "absolute temperature", "pressure", "density"],
    correctAnswer: "absolute temperature"
  },
  {
    id: 470,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The melting point of pure ice at standard atmospheric pressure is",
    options: ["0 °C", "100 °C", "–273 °C", "32 °C"],
    correctAnswer: "0 °C"
  },
  {
    id: 471,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Heat transfer by radiation is fastest in",
    options: ["solids", "liquids", "gases", "vacuum"],
    correctAnswer: "vacuum"
  },
  {
    id: 472,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "If the temperature of a gas is raised from 27 °C to 127 °C at constant pressure, its volume becomes",
    options: ["the same", "twice", "4/3 times", "3/4 times"],
    correctAnswer: "4/3 times"
  },
  {
    id: 473,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The specific heat capacity of water is higher than that of most substances. This means that water",
    options: ["heats up and cools down quickly", "requires more heat to raise its temperature", "has a low boiling point", "is a good conductor"],
    correctAnswer: "requires more heat to raise its temperature"
  },
  {
    id: 474,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "Sublimation is the change of state from",
    options: ["solid to liquid", "liquid to gas", "solid to gas", "gas to liquid"],
    correctAnswer: "solid to gas"
  },
  {
    id: 475,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "The combined gas law is expressed as",
    options: ["P₁V₁/T₁ = P₂V₂/T₂", "P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂", "P₁/T₁ = P₂/T₂"],
    correctAnswer: "P₁V₁/T₁ = P₂V₂/T₂"
  },
  {
    id: 476,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "A substance with a low specific heat capacity will",
    options: ["heat up and cool down slowly", "heat up and cool down quickly", "require a lot of heat to change temperature", "have a high boiling point"],
    correctAnswer: "heat up and cool down quickly"
  },
  {
    id: 477,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The quantity of heat required to change 1 kg of a liquid at its boiling point to vapour at the same temperature is called the",
    options: ["specific heat capacity", "specific latent heat of fusion", "specific latent heat of vaporisation", "heat capacity"],
    correctAnswer: "specific latent heat of vaporisation"
  },
  {
    id: 478,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Thermodynamics",
    question: "Real gases behave most like ideal gases at",
    options: ["high pressure and low temperature", "low pressure and high temperature", "high pressure and high temperature", "low pressure and low temperature"],
    correctAnswer: "low pressure and high temperature"
  },
  {
    id: 479,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "The clinical thermometer is designed to measure temperatures in the range of about",
    options: ["0 °C to 100 °C", "35 °C to 42 °C", "–10 °C to 110 °C", "0 °C to 50 °C"],
    correctAnswer: "35 °C to 42 °C"
  },
  {
    id: 480,
    subject: "Physics",
    tutorId: 4,
    tutor: "Miss Grace Obi",
    topic: "Heat",
    question: "When two bodies at different temperatures are in contact, heat flows from the",
    options: ["colder to the hotter", "hotter to the colder", "body with higher mass", "body with lower specific heat capacity"],
    correctAnswer: "hotter to the colder"
  },
    // ========== CHEMISTRY – Tutor 1: Mr. Chinedu Okoro (Organic Chemistry) – IDs 481–520 ==========
  {
    id: 481,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Organic chemistry is mainly the study of compounds of",
    options: ["oxygen", "carbon", "nitrogen", "hydrogen"],
    correctAnswer: "carbon"
  },
  {
    id: 482,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Hydrocarbons that contain only single bonds are called",
    options: ["alkenes", "alkynes", "alkanes", "arenes"],
    correctAnswer: "alkanes"
  },
  {
    id: 483,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The general molecular formula for alkanes is",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
    correctAnswer: "CₙH₂ₙ₊₂"
  },
  {
    id: 484,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Alkenes are characterised by the presence of a",
    options: ["carbon-carbon single bond", "carbon-carbon double bond", "carbon-carbon triple bond", "carbon-oxygen bond"],
    correctAnswer: "carbon-carbon double bond"
  },
  {
    id: 485,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The functional group present in alcohols is",
    options: ["–COOH", "–OH", "–CHO", "–NH₂"],
    correctAnswer: "–OH"
  },
  {
    id: 486,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The IUPAC name of CH₃CH₂OH is",
    options: ["methanol", "ethanol", "propanol", "butanol"],
    correctAnswer: "ethanol"
  },
  {
    id: 487,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Carboxylic acids contain the functional group",
    options: ["–OH", "–COOH", "–CHO", "–COOR"],
    correctAnswer: "–COOH"
  },
  {
    id: 488,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The process by which small molecules join to form large molecules is called",
    options: ["cracking", "polymerisation", "hydrogenation", "esterification"],
    correctAnswer: "polymerisation"
  },
  {
    id: 489,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Isomers are compounds that have the same",
    options: ["physical properties", "molecular formula but different structural formulae", "structural formula but different molecular formulae", "functional groups only"],
    correctAnswer: "molecular formula but different structural formulae"
  },
  {
    id: 490,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The general formula for alkynes is",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁"],
    correctAnswer: "CₙH₂ₙ₋₂"
  },
  {
    id: 491,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The reaction between an alcohol and a carboxylic acid produces an",
    options: ["aldehyde", "ester", "ketone", "ether"],
    correctAnswer: "ester"
  },
  {
    id: 492,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Methane belongs to the homologous series of",
    options: ["alkenes", "alkynes", "alkanes", "alcohols"],
    correctAnswer: "alkanes"
  },
  {
    id: 493,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The molecular formula of ethene is",
    options: ["C₂H₆", "C₂H₄", "C₂H₂", "C₃H₆"],
    correctAnswer: "C₂H₄"
  },
  {
    id: 494,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Addition reactions are characteristic of",
    options: ["alkanes", "alkenes and alkynes", "saturated hydrocarbons only", "carboxylic acids"],
    correctAnswer: "alkenes and alkynes"
  },
  {
    id: 495,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The process of converting vegetable oil into solid fat is called",
    options: ["saponification", "hydrogenation", "esterification", "fermentation"],
    correctAnswer: "hydrogenation"
  },
  {
    id: 496,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Ethanol can be prepared by the fermentation of",
    options: ["proteins", "sugars", "fats", "oils"],
    correctAnswer: "sugars"
  },
  {
    id: 497,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The functional group in aldehydes is",
    options: ["–COOH", "–CHO", "–OH", "–CO–"],
    correctAnswer: "–CHO"
  },
  {
    id: 498,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "A homologous series is a group of compounds with",
    options: ["the same molecular formula", "the same functional group and similar chemical properties", "different functional groups", "the same boiling point"],
    correctAnswer: "the same functional group and similar chemical properties"
  },
  {
    id: 499,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The IUPAC name of HCOOH is",
    options: ["ethanoic acid", "methanoic acid", "propanoic acid", "butanoic acid"],
    correctAnswer: "methanoic acid"
  },
  {
    id: 500,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Cracking is the process of",
    options: ["joining small molecules", "breaking large hydrocarbon molecules into smaller ones", "removing hydrogen", "adding oxygen"],
    correctAnswer: "breaking large hydrocarbon molecules into smaller ones"
  },
  {
    id: 501,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The molecular formula of ethyne is",
    options: ["C₂H₆", "C₂H₄", "C₂H₂", "C₃H₄"],
    correctAnswer: "C₂H₂"
  },
  {
    id: 502,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Saturated hydrocarbons undergo mainly",
    options: ["addition reactions", "substitution reactions", "polymerisation only", "esterification"],
    correctAnswer: "substitution reactions"
  },
  {
    id: 503,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The product of the complete combustion of a hydrocarbon is",
    options: ["carbon monoxide and water", "carbon dioxide and water", "carbon and water", "carbon dioxide only"],
    correctAnswer: "carbon dioxide and water"
  },
  {
    id: 504,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Esters are responsible for the",
    options: ["sour taste of vinegar", "pleasant smell of fruits", "bitterness of alkalis", "colour of dyes"],
    correctAnswer: "pleasant smell of fruits"
  },
  {
    id: 505,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The first member of the alkene homologous series is",
    options: ["methene", "ethene", "propene", "butene"],
    correctAnswer: "ethene"
  },
  {
    id: 506,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Which of the following is an unsaturated hydrocarbon?",
    options: ["CH₄", "C₂H₆", "C₂H₄", "C₃H₈"],
    correctAnswer: "C₂H₄"
  },
  {
    id: 507,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The reaction of ethene with bromine water is used as a test for",
    options: ["saturation", "unsaturation", "acidity", "alkalinity"],
    correctAnswer: "unsaturation"
  },
  {
    id: 508,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Soaps are the sodium or potassium salts of",
    options: ["mineral acids", "long-chain fatty acids", "amino acids", "carboxylic acids with short chains"],
    correctAnswer: "long-chain fatty acids"
  },
  {
    id: 509,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The process of making soap is called",
    options: ["esterification", "saponification", "hydrogenation", "polymerisation"],
    correctAnswer: "saponification"
  },
  {
    id: 510,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Which of the following compounds is an alcohol?",
    options: ["CH₃COOH", "CH₃CHO", "CH₃CH₂OH", "CH₃OCH₃"],
    correctAnswer: "CH₃CH₂OH"
  },
  {
    id: 511,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The general formula for alcohols is",
    options: ["CₙH₂ₙ₊₁OH", "CₙH₂ₙO", "CₙH₂ₙ₊₂O", "CₙH₂ₙ₋₁OH"],
    correctAnswer: "CₙH₂ₙ₊₁OH"
  },
  {
    id: 512,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Vinegar contains mainly",
    options: ["methanoic acid", "ethanoic acid", "propanoic acid", "butanoic acid"],
    correctAnswer: "ethanoic acid"
  },
  {
    id: 513,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Natural rubber is a polymer of",
    options: ["ethene", "propene", "isoprene", "styrene"],
    correctAnswer: "isoprene"
  },
  {
    id: 514,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The conversion of ethene to polythene is an example of",
    options: ["addition polymerisation", "condensation polymerisation", "cracking", "isomerisation"],
    correctAnswer: "addition polymerisation"
  },
  {
    id: 515,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Which of the following is a ketone?",
    options: ["CH₃CHO", "CH₃COCH₃", "CH₃COOH", "CH₃CH₂OH"],
    correctAnswer: "CH₃COCH₃"
  },
  {
    id: 516,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The name of the compound CH₃CH₂CH₃ is",
    options: ["methane", "ethane", "propane", "butane"],
    correctAnswer: "propane"
  },
  {
    id: 517,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Fractional distillation is used to separate",
    options: ["miscible liquids with different boiling points", "immiscible liquids", "solids from liquids", "gases only"],
    correctAnswer: "miscible liquids with different boiling points"
  },
  {
    id: 518,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The homologous series with the general formula CₙH₂ₙ is the",
    options: ["alkanes", "alkenes", "alkynes", "alcohols"],
    correctAnswer: "alkenes"
  },
  {
    id: 519,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "Which of the following is used as a test for the –OH group in alcohols?",
    options: ["bromine water", "sodium metal", "lime water", "silver nitrate"],
    correctAnswer: "sodium metal"
  },
  {
    id: 520,
    subject: "Chemistry",
    tutorId: 1,
    tutor: "Mr. Chinedu Okoro",
    topic: "Organic Chemistry",
    question: "The main constituent of natural gas is",
    options: ["ethane", "propane", "methane", "butane"],
    correctAnswer: "methane"
  },

  // ========== CHEMISTRY – Tutor 2: Mrs. Blessing Adeola (Inorganic Chemistry) – IDs 521–560 ==========
  {
    id: 521,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The modern periodic table is arranged in order of increasing",
    options: ["atomic mass", "atomic number", "mass number", "neutron number"],
    correctAnswer: "atomic number"
  },
  {
    id: 522,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Elements in the same group of the periodic table have the same number of",
    options: ["protons", "neutrons", "valence electrons", "electron shells"],
    correctAnswer: "valence electrons"
  },
  {
    id: 523,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The alkali metals belong to Group",
    options: ["I", "II", "VII", "0"],
    correctAnswer: "I"
  },
  {
    id: 524,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The most reactive non-metal is",
    options: ["chlorine", "fluorine", "bromine", "iodine"],
    correctAnswer: "fluorine"
  },
  {
    id: 525,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Acids turn blue litmus paper",
    options: ["blue", "red", "green", "yellow"],
    correctAnswer: "red"
  },
  {
    id: 526,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "A base that is soluble in water is called an",
    options: ["acid", "alkali", "salt", "oxide"],
    correctAnswer: "alkali"
  },
  {
    id: 527,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The pH of a neutral solution is",
    options: ["0", "7", "14", "1"],
    correctAnswer: "7"
  },
  {
    id: 528,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The salt formed when hydrochloric acid reacts with sodium hydroxide is",
    options: ["sodium chloride", "sodium sulphate", "sodium nitrate", "sodium carbonate"],
    correctAnswer: "sodium chloride"
  },
  {
    id: 529,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Oxidation is the",
    options: ["gain of electrons", "loss of electrons", "gain of hydrogen", "loss of oxygen"],
    correctAnswer: "loss of electrons"
  },
  {
    id: 530,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The gas produced when a metal reacts with dilute acid is",
    options: ["oxygen", "hydrogen", "carbon dioxide", "nitrogen"],
    correctAnswer: "hydrogen"
  },
  {
    id: 531,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The colour of copper(II) sulphate crystals is",
    options: ["white", "blue", "green", "yellow"],
    correctAnswer: "blue"
  },
  {
    id: 532,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Noble gases are placed in Group",
    options: ["I", "II", "VII", "0"],
    correctAnswer: "0"
  },
  {
    id: 533,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The atomic number of an element is the number of",
    options: ["neutrons", "protons", "electrons + neutrons", "protons + neutrons"],
    correctAnswer: "protons"
  },
  {
    id: 534,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Isotopes of an element have the same number of",
    options: ["neutrons", "protons", "mass number", "nucleons"],
    correctAnswer: "protons"
  },
  {
    id: 535,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The halogen in Group VII that is a liquid at room temperature is",
    options: ["fluorine", "chlorine", "bromine", "iodine"],
    correctAnswer: "bromine"
  },
  {
    id: 536,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "An amphoteric oxide can react with both",
    options: ["acids and bases", "acids only", "bases only", "water only"],
    correctAnswer: "acids and bases"
  },
  {
    id: 537,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The chemical formula of sulphuric acid is",
    options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
    correctAnswer: "H₂SO₄"
  },
  {
    id: 538,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The test for carbon dioxide gas is that it",
    options: ["relights a glowing splint", "turns lime water milky", "bleaches litmus paper", "pops with a lighted splint"],
    correctAnswer: "turns lime water milky"
  },
  {
    id: 539,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Metals are good conductors of electricity because they have",
    options: ["fixed electrons", "mobile electrons", "no electrons", "positive ions only"],
    correctAnswer: "mobile electrons"
  },
  {
    id: 540,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The most abundant metal in the earth’s crust is",
    options: ["iron", "aluminium", "copper", "calcium"],
    correctAnswer: "aluminium"
  },
  {
    id: 541,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "A solution with pH 2 is",
    options: ["strongly acidic", "weakly acidic", "neutral", "strongly alkaline"],
    correctAnswer: "strongly acidic"
  },
  {
    id: 542,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The process by which a soluble salt is obtained from its solution is called",
    options: ["filtration", "crystallisation", "distillation", "evaporation only"],
    correctAnswer: "crystallisation"
  },
  {
    id: 543,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The valency of oxygen is",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    id: 544,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Which of the following is a transition metal?",
    options: ["sodium", "calcium", "iron", "aluminium"],
    correctAnswer: "iron"
  },
  {
    id: 545,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The gas given off when calcium carbonate is heated is",
    options: ["oxygen", "hydrogen", "carbon dioxide", "nitrogen"],
    correctAnswer: "carbon dioxide"
  },
  {
    id: 546,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Reduction is the",
    options: ["loss of electrons", "gain of electrons", "loss of hydrogen", "gain of oxygen"],
    correctAnswer: "gain of electrons"
  },
  {
    id: 547,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The colour of phenolphthalein in alkaline solution is",
    options: ["colourless", "pink", "blue", "yellow"],
    correctAnswer: "pink"
  },
  {
    id: 548,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Hard water contains dissolved salts of",
    options: ["sodium and potassium", "calcium and magnesium", "iron and aluminium", "copper and zinc"],
    correctAnswer: "calcium and magnesium"
  },
  {
    id: 549,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The electronic configuration of sodium (atomic number 11) is",
    options: ["2, 8, 1", "2, 8, 2", "2, 7, 2", "2, 8, 8"],
    correctAnswer: "2, 8, 1"
  },
  {
    id: 550,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "An element that forms a basic oxide is",
    options: ["sulphur", "carbon", "sodium", "phosphorus"],
    correctAnswer: "sodium"
  },
  {
    id: 551,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The chemical formula of sodium hydroxide is",
    options: ["NaO", "NaOH", "Na₂O", "NaH"],
    correctAnswer: "NaOH"
  },
  {
    id: 552,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Chlorine is used in water treatment because it",
    options: ["adds colour", "kills germs", "increases hardness", "removes dissolved oxygen"],
    correctAnswer: "kills germs"
  },
  {
    id: 553,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The period number of an element indicates the number of",
    options: ["valence electrons", "electron shells", "protons", "neutrons"],
    correctAnswer: "electron shells"
  },
  {
    id: 554,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Which of the following is a non-metal?",
    options: ["iron", "copper", "sulphur", "zinc"],
    correctAnswer: "sulphur"
  },
  {
    id: 555,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The reaction of an acid with a base to form salt and water is called",
    options: ["oxidation", "reduction", "neutralisation", "precipitation"],
    correctAnswer: "neutralisation"
  },
  {
    id: 556,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The atomic mass of an element is approximately equal to the number of",
    options: ["protons only", "neutrons only", "protons + neutrons", "electrons only"],
    correctAnswer: "protons + neutrons"
  },
  {
    id: 557,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Aqueous solutions of ionic compounds conduct electricity because they contain",
    options: ["free electrons", "mobile ions", "molecules", "atoms"],
    correctAnswer: "mobile ions"
  },
  {
    id: 558,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The colour of the flame test for sodium is",
    options: ["lilac", "brick red", "golden yellow", "green"],
    correctAnswer: "golden yellow"
  },
  {
    id: 559,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "Which of the following oxides is acidic?",
    options: ["Na₂O", "CaO", "SO₂", "MgO"],
    correctAnswer: "SO₂"
  },
  {
    id: 560,
    subject: "Chemistry",
    tutorId: 2,
    tutor: "Mrs. Blessing Adeola",
    topic: "Inorganic Chemistry",
    question: "The process of coating iron with zinc to prevent rusting is called",
    options: ["painting", "galvanising", "electroplating with copper", "oiling"],
    correctAnswer: "galvanising"
  },

  // ========== CHEMISTRY – Tutor 3: Mr. Yusuf Mohammed (Physical Chemistry) – IDs 561–600 ==========
  {
    id: 561,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The smallest particle of an element that can take part in a chemical reaction is the",
    options: ["molecule", "atom", "ion", "compound"],
    correctAnswer: "atom"
  },
  {
    id: 562,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The relative atomic mass of an element is the mass of one atom of the element compared with",
    options: ["1/12 the mass of a carbon-12 atom", "the mass of a hydrogen atom", "the mass of an oxygen atom", "the mass of a neutron"],
    correctAnswer: "1/12 the mass of a carbon-12 atom"
  },
  {
    id: 563,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "One mole of any substance contains",
    options: ["6.02 × 10²³ particles", "6.02 × 10²² particles", "3.01 × 10²³ particles", "12 particles"],
    correctAnswer: "6.02 × 10²³ particles"
  },
  {
    id: 564,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The molar mass of water (H₂O) is",
    options: ["16 g/mol", "18 g/mol", "2 g/mol", "20 g/mol"],
    correctAnswer: "18 g/mol"
  },
  {
    id: 565,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The concentration of a solution expressed in moles per cubic decimetre is called",
    options: ["mass concentration", "molar concentration", "molality", "normality"],
    correctAnswer: "molar concentration"
  },
  {
    id: 566,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "Boyle’s law relates the pressure and volume of a gas at constant",
    options: ["temperature", "pressure", "volume", "mass only"],
    correctAnswer: "temperature"
  },
  {
    id: 567,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The rate of a chemical reaction increases with increase in",
    options: ["particle size of reactants", "concentration of reactants", "volume of container only", "humidity"],
    correctAnswer: "concentration of reactants"
  },
  {
    id: 568,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "A catalyst increases the rate of a reaction by",
    options: ["increasing the activation energy", "decreasing the activation energy", "increasing the temperature", "changing the equilibrium position permanently"],
    correctAnswer: "decreasing the activation energy"
  },
  {
    id: 569,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "In a chemical equilibrium, the rates of the forward and reverse reactions are",
    options: ["zero", "equal", "unequal", "continuously increasing"],
    correctAnswer: "equal"
  },
  {
    id: 570,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "An exothermic reaction is one in which heat is",
    options: ["absorbed", "released", "neither absorbed nor released", "converted to light only"],
    correctAnswer: "released"
  },
  {
    id: 571,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The pH scale ranges from",
    options: ["0 to 7", "7 to 14", "0 to 14", "1 to 10"],
    correctAnswer: "0 to 14"
  },
  {
    id: 572,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "Electrolysis is the decomposition of a compound by",
    options: ["heat", "electric current", "light", "pressure"],
    correctAnswer: "electric current"
  },
  {
    id: 573,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "In the electrolysis of acidified water, the gas collected at the cathode is",
    options: ["oxygen", "hydrogen", "chlorine", "nitrogen"],
    correctAnswer: "hydrogen"
  },
  {
    id: 574,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The solubility of a solid usually increases with increase in",
    options: ["pressure", "temperature", "volume of solvent only", "particle size"],
    correctAnswer: "temperature"
  },
  {
    id: 575,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The number of moles of solute in 1 dm³ of solution is called the",
    options: ["molality", "molarity", "normality", "mole fraction"],
    correctAnswer: "molarity"
  },
  {
    id: 576,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "According to Charles’ law, the volume of a fixed mass of gas is directly proportional to its",
    options: ["pressure", "absolute temperature", "density", "mass"],
    correctAnswer: "absolute temperature"
  },
  {
    id: 577,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The activation energy of a reaction is the minimum energy required by the reactants to",
    options: ["collide", "form products", "dissolve", "evaporate"],
    correctAnswer: "form products"
  },
  {
    id: 578,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "A system is said to be at equilibrium when",
    options: ["all reactants are used up", "the concentrations of reactants and products remain constant", "the temperature is zero", "the pressure is maximum"],
    correctAnswer: "the concentrations of reactants and products remain constant"
  },
  {
    id: 579,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "Endothermic reactions are characterised by a",
    options: ["negative ΔH", "positive ΔH", "zero ΔH", "decrease in temperature of the surroundings"],
    correctAnswer: "positive ΔH"
  },
  {
    id: 580,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The Faraday constant is approximately",
    options: ["96 500 C/mol", "6.02 × 10²³ C/mol", "22.4 C/mol", "18 C/mol"],
    correctAnswer: "96 500 C/mol"
  },
  {
    id: 581,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The standard temperature and pressure (STP) conditions are",
    options: ["0 °C and 1 atm", "25 °C and 1 atm", "100 °C and 1 atm", "0 °C and 2 atm"],
    correctAnswer: "0 °C and 1 atm"
  },
  {
    id: 582,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The volume occupied by one mole of any gas at STP is approximately",
    options: ["18 dm³", "22.4 dm³", "24 dm³", "1 dm³"],
    correctAnswer: "22.4 dm³"
  },
  {
    id: 583,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "Increasing the pressure on a gas reaction that has more moles of gas on the reactant side shifts the equilibrium to the",
    options: ["left", "right", "neither side", "both sides equally"],
    correctAnswer: "right"
  },
  {
    id: 584,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The heat content of a system is called",
    options: ["entropy", "enthalpy", "free energy", "activation energy"],
    correctAnswer: "enthalpy"
  },
  {
    id: 585,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "A solution that contains the maximum amount of solute that can dissolve at a given temperature is said to be",
    options: ["unsaturated", "saturated", "supersaturated", "dilute"],
    correctAnswer: "saturated"
  },
  {
    id: 586,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The electrode at which oxidation occurs in an electrochemical cell is the",
    options: ["cathode", "anode", "salt bridge", "electrolyte"],
    correctAnswer: "anode"
  },
  {
    id: 587,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The rate of a reaction can be determined by measuring the",
    options: ["change in concentration of a reactant or product with time", "colour of the reactants only", "volume of the container", "mass of the catalyst"],
    correctAnswer: "change in concentration of a reactant or product with time"
  },
  {
    id: 588,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "According to Le Chatelier’s principle, if a system at equilibrium is subjected to a change, the system will",
    options: ["remain unchanged", "shift to counteract the change", "stop reacting", "increase its temperature indefinitely"],
    correctAnswer: "shift to counteract the change"
  },
  {
    id: 589,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The unit of rate of reaction is",
    options: ["mol dm⁻³", "mol dm⁻³ s⁻¹", "s⁻¹ only", "mol s⁻¹ only"],
    correctAnswer: "mol dm⁻³ s⁻¹"
  },
  {
    id: 590,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "In an electrolytic cell, the cathode is the electrode connected to the",
    options: ["positive terminal of the battery", "negative terminal of the battery", "earth", "ammeter"],
    correctAnswer: "negative terminal of the battery"
  },
  {
    id: 591,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The number of moles of NaOH in 500 cm³ of 0.2 mol/dm³ solution is",
    options: ["0.1", "0.2", "0.5", "1.0"],
    correctAnswer: "0.1"
  },
  {
    id: 592,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The kinetic theory of gases assumes that gas molecules",
    options: ["attract each other strongly", "have negligible volume", "move slowly", "have fixed positions"],
    correctAnswer: "have negligible volume"
  },
  {
    id: 593,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "A buffer solution resists changes in",
    options: ["temperature", "pressure", "pH", "volume"],
    correctAnswer: "pH"
  },
  {
    id: 594,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The standard electrode potential of hydrogen is taken as",
    options: ["1.00 V", "0.00 V", "–1.00 V", "0.76 V"],
    correctAnswer: "0.00 V"
  },
  {
    id: 595,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "Increasing the temperature of an endothermic reaction at equilibrium shifts the equilibrium to the",
    options: ["left", "right", "neither side", "product side only if pressure is increased"],
    correctAnswer: "right"
  },
  {
    id: 596,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The mass of one mole of carbon-12 atoms is",
    options: ["12 g", "1 g", "6 g", "24 g"],
    correctAnswer: "12 g"
  },
  {
    id: 597,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "In the equation 2H₂ + O₂ → 2H₂O, the mole ratio of H₂ to O₂ is",
    options: ["1 : 1", "2 : 1", "1 : 2", "2 : 2"],
    correctAnswer: "2 : 1"
  },
  {
    id: 598,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The process of determining the concentration of a solution by reaction with a solution of known concentration is called",
    options: ["filtration", "titration", "distillation", "crystallisation"],
    correctAnswer: "titration"
  },
  {
    id: 599,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "A spontaneous reaction is one that",
    options: ["requires continuous supply of energy", "occurs without external energy input once started", "is always endothermic", "has a positive ΔG"],
    correctAnswer: "occurs without external energy input once started"
  },
  {
    id: 600,
    subject: "Chemistry",
    tutorId: 3,
    tutor: "Mr. Yusuf Mohammed",
    topic: "Physical Chemistry",
    question: "The ionic product of water, Kw, at 25 °C is",
    options: ["1 × 10⁻¹⁴", "1 × 10⁻⁷", "1 × 10¹⁴", "7"],
    correctAnswer: "1 × 10⁻¹⁴"
  },

  // ========== CHEMISTRY – Tutor 4: Miss Esther Williams (Chemical Reactions & Equations) – IDs 601–640 ==========
  {
    id: 601,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A chemical equation must be balanced in order to obey the law of",
    options: ["definite proportions", "conservation of mass", "multiple proportions", "reciprocal proportions"],
    correctAnswer: "conservation of mass"
  },
  {
    id: 602,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction 2Mg + O₂ → 2MgO is an example of a",
    options: ["decomposition reaction", "combination reaction", "displacement reaction", "neutralisation reaction"],
    correctAnswer: "combination reaction"
  },
  {
    id: 603,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In a decomposition reaction,",
    options: ["two or more substances combine", "a single compound breaks down into simpler substances", "one element displaces another", "an acid reacts with a base"],
    correctAnswer: "a single compound breaks down into simpler substances"
  },
  {
    id: 604,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction Zn + CuSO₄ → ZnSO₄ + Cu is a",
    options: ["combination reaction", "decomposition reaction", "displacement reaction", "double decomposition reaction"],
    correctAnswer: "displacement reaction"
  },
  {
    id: 605,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "Neutralisation is the reaction between an acid and a",
    options: ["metal", "base", "salt", "non-metal"],
    correctAnswer: "base"
  },
  {
    id: 606,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In a redox reaction,",
    options: ["only oxidation occurs", "only reduction occurs", "oxidation and reduction occur simultaneously", "no electron transfer takes place"],
    correctAnswer: "oxidation and reduction occur simultaneously"
  },
  {
    id: 607,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "Oxidation involves the",
    options: ["gain of electrons", "loss of electrons", "gain of hydrogen", "loss of oxygen"],
    correctAnswer: "loss of electrons"
  },
  {
    id: 608,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "Reduction involves the",
    options: ["loss of electrons", "gain of electrons", "gain of oxygen", "loss of hydrogen"],
    correctAnswer: "gain of electrons"
  },
  {
    id: 609,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The balanced equation for the reaction of hydrogen with oxygen to form water is",
    options: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + O → H₂O", "2H₂ + 2O₂ → 2H₂O"],
    correctAnswer: "2H₂ + O₂ → 2H₂O"
  },
  {
    id: 610,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the equation Fe + CuSO₄ → FeSO₄ + Cu, iron is",
    options: ["oxidised", "reduced", "neither oxidised nor reduced", "a catalyst"],
    correctAnswer: "oxidised"
  },
  {
    id: 611,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A reaction in which heat is given out is called",
    options: ["endothermic", "exothermic", "reversible", "neutralisation only"],
    correctAnswer: "exothermic"
  },
  {
    id: 612,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The products of the complete combustion of a hydrocarbon are",
    options: ["carbon monoxide and water", "carbon dioxide and water", "carbon and hydrogen", "carbon dioxide and hydrogen"],
    correctAnswer: "carbon dioxide and water"
  },
  {
    id: 613,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In a double displacement reaction,",
    options: ["one element displaces another", "two compounds exchange ions", "a compound breaks down", "two elements combine"],
    correctAnswer: "two compounds exchange ions"
  },
  {
    id: 614,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction CaCO₃ → CaO + CO₂ is an example of",
    options: ["combination", "decomposition", "displacement", "neutralisation"],
    correctAnswer: "decomposition"
  },
  {
    id: 615,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "Stoichiometry deals with the",
    options: ["colours of compounds", "quantitative relationships in chemical reactions", "solubility of salts", "rates of reactions only"],
    correctAnswer: "quantitative relationships in chemical reactions"
  },
  {
    id: 616,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the balanced equation 2Na + 2H₂O → 2NaOH + H₂, the mole ratio of sodium to hydrogen gas is",
    options: ["1 : 1", "2 : 1", "1 : 2", "2 : 2"],
    correctAnswer: "2 : 1"
  },
  {
    id: 617,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A substance that speeds up a chemical reaction but remains chemically unchanged at the end is a",
    options: ["reactant", "product", "catalyst", "inhibitor"],
    correctAnswer: "catalyst"
  },
  {
    id: 618,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The law of conservation of mass states that in a chemical reaction,",
    options: ["mass is created", "mass is destroyed", "mass is neither created nor destroyed", "mass increases"],
    correctAnswer: "mass is neither created nor destroyed"
  },
  {
    id: 619,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "When balancing a chemical equation, the only numbers that can be changed are the",
    options: ["subscripts", "superscripts", "coefficients", "atomic numbers"],
    correctAnswer: "coefficients"
  },
  {
    id: 620,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction HCl + NaOH → NaCl + H₂O is a",
    options: ["combination reaction", "decomposition reaction", "neutralisation reaction", "displacement reaction"],
    correctAnswer: "neutralisation reaction"
  },
  {
    id: 621,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the reaction 2KClO₃ → 2KCl + 3O₂, the substance that is decomposed is",
    options: ["KCl", "O₂", "KClO₃", "K"],
    correctAnswer: "KClO₃"
  },
  {
    id: 622,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A precipitation reaction results in the formation of an",
    options: ["insoluble solid", "gas", "acid", "alkali"],
    correctAnswer: "insoluble solid"
  },
  {
    id: 623,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the equation CuO + H₂ → Cu + H₂O, hydrogen is acting as a",
    options: ["oxidising agent", "reducing agent", "catalyst", "inert gas"],
    correctAnswer: "reducing agent"
  },
  {
    id: 624,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The number of atoms of oxygen on the reactant side of the equation 2H₂ + O₂ → 2H₂O is",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    id: 625,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "An oxidising agent is a substance that",
    options: ["loses electrons", "gains electrons", "is oxidised", "donates hydrogen"],
    correctAnswer: "gains electrons"
  },
  {
    id: 626,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The balanced equation for the reaction of sodium with water is",
    options: ["Na + H₂O → NaOH + H₂", "2Na + 2H₂O → 2NaOH + H₂", "2Na + H₂O → 2NaOH + H₂", "Na + 2H₂O → NaOH + H₂"],
    correctAnswer: "2Na + 2H₂O → 2NaOH + H₂"
  },
  {
    id: 627,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In a chemical reaction, the reactants are the substances that",
    options: ["are formed", "undergo change", "remain unchanged", "act as catalysts"],
    correctAnswer: "undergo change"
  },
  {
    id: 628,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction 2SO₂ + O₂ ⇌ 2SO₃ is an example of a",
    options: ["irreversible reaction", "reversible reaction", "precipitation reaction", "neutralisation reaction"],
    correctAnswer: "reversible reaction"
  },
  {
    id: 629,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "When the equation Al + O₂ → Al₂O₃ is balanced, the coefficient of Al is",
    options: ["1", "2", "3", "4"],
    correctAnswer: "4"
  },
  {
    id: 630,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A redox reaction always involves",
    options: ["transfer of protons", "transfer of electrons", "formation of a precipitate", "change of state only"],
    correctAnswer: "transfer of electrons"
  },
  {
    id: 631,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the reaction Cl₂ + 2KBr → 2KCl + Br₂, chlorine is",
    options: ["oxidised", "reduced", "a reducing agent", "neither oxidised nor reduced"],
    correctAnswer: "reduced"
  },
  {
    id: 632,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The state symbols (s), (l), (g) and (aq) in a chemical equation represent",
    options: ["solid, liquid, gas and aqueous solution", "slow, light, gas and acid", "same, large, green and aqueous", "solid, liquid, grain and aqua"],
    correctAnswer: "solid, liquid, gas and aqueous solution"
  },
  {
    id: 633,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction of an acid with a metal carbonate produces",
    options: ["salt, water and hydrogen", "salt, water and carbon dioxide", "salt and hydrogen only", "water and carbon dioxide only"],
    correctAnswer: "salt, water and carbon dioxide"
  },
  {
    id: 634,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In the balanced equation N₂ + 3H₂ → 2NH₃, the mole ratio of nitrogen to ammonia is",
    options: ["1 : 1", "1 : 2", "3 : 2", "1 : 3"],
    correctAnswer: "1 : 2"
  },
  {
    id: 635,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "A reaction in which two compounds exchange their ions to form two new compounds is called",
    options: ["combination", "decomposition", "double displacement", "single displacement"],
    correctAnswer: "double displacement"
  },
  {
    id: 636,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The substance that is reduced in a redox reaction is the",
    options: ["reducing agent", "oxidising agent", "catalyst", "product only"],
    correctAnswer: "oxidising agent"
  },
  {
    id: 637,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "When balancing the equation Fe₂O₃ + CO → Fe + CO₂, the coefficient of CO is",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3"
  },
  {
    id: 638,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The reaction 2H₂O₂ → 2H₂O + O₂ is catalysed by",
    options: ["manganese(IV) oxide", "iron", "platinum only", "copper"],
    correctAnswer: "manganese(IV) oxide"
  },
  {
    id: 639,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "In a chemical equation, the arrow (→) means",
    options: ["equals", "yields or produces", "reacts with", "is in equilibrium with"],
    correctAnswer: "yields or produces"
  },
  {
    id: 640,
    subject: "Chemistry",
    tutorId: 4,
    tutor: "Miss Esther Williams",
    topic: "Chemical Reactions",
    question: "The correct balanced equation for the reaction of magnesium with dilute hydrochloric acid is",
    options: ["Mg + HCl → MgCl + H₂", "Mg + 2HCl → MgCl₂ + H₂", "2Mg + HCl → 2MgCl + H₂", "Mg + HCl → MgCl₂ + H₂"],
    correctAnswer: "Mg + 2HCl → MgCl₂ + H₂"
  }
];

export default mockQuestions;
