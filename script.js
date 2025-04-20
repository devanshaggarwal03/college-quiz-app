const quizData = [
    {
      question: "MAIT is affiliated to which university?",
      options: [
        "Delhi University",
        "Guru Gobind Singh Indraprastha University (GGSIPU)",
        "Jawaharlal Nehru University (JNU)",
        "Indian Institute of Technology Delhi (IIT-D)"
      ],
      answer: 1
    },
    {
      question: "Which year was MAIT established?",
      options: ["1999", "2001", "2005", "1995"],
      answer: 0
    },
    {
      question: "MAIT is located in which part of Delhi?",
      options: ["Rohini", "Dwarka", "Pitampura", "Connaught Place"],
      answer: 0
    },
    {
      question: "Which of the following courses is not offered by MAIT?",
      options: ["B.Tech in Computer Science", "B.Tech in Mechanical Engineering", "MBBS", "B.Tech in Electronics & Communication"],
      answer: 2
    },
    {
      question: "MAIT is approved by which regulatory body?",
      options: ["AICTE", "UGC", "MCI", "NCTE"],
      answer: 0
    },
    {
      question: "What is the official website of MAIT?",
      options: ["www.mait.ac.in", "www.mait.edu", "www.maitdelhi.org", "www.maharajaagrasen.com"],
      answer: 0
    },
    {
      question: "Which entrance exam is required for admission to B.Tech at MAIT?",
      options: ["JEE Main", "NEET", "IPU CET (now replaced by JEE Main for B.Tech)", "CAT"],
      answer: 2
    },
    {
      question: "MAIT is named after which historical figure?",
      options: ["Maharaja Ranjit Singh", "Maharaja Agrasen", "Maharana Pratap", "Raja Harishchandra"],
      answer: 1
    },
    {
      question: "Which of the following is a student club in MAIT?",
      options: ["CodeChef MAIT Chapter", "MAIT Sports Club", "MAIT Robotics Club", "All of the above"],
      answer: 3
    },
    {
      question: "MAIT falls under which category of colleges in Delhi?",
      options: ["Government College", "Private Self-Financed College", "Deemed University", "Central University"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionBox = document.getElementById('question-box');
  const optionsList = document.getElementById('options-list');
  const submitBtn = document.getElementById('submit-btn');
  const feedback = document.getElementById('feedback');
  const resultBox = document.getElementById('result-box');
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionBox.textContent = q.question;
    optionsList.innerHTML = '';
    feedback.textContent = '';
    q.options.forEach((opt, i) => {
      const li = document.createElement('li');
      li.textContent = opt;
      li.onclick = () => {
        document.querySelectorAll('#options-list li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
      };
      optionsList.appendChild(li);
    });
  }
  
  submitBtn.onclick = () => {
    const selected = document.querySelector('#options-list .selected');
    if (!selected) {
      alert('Please select an answer!');
      return;
    }
    const index = Array.from(optionsList.children).indexOf(selected);
    if (index === quizData[currentQuestion].answer) {
      score++;
      feedback.textContent = 'Correct!';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = `Incorrect. Correct answer: ${quizData[currentQuestion].options[quizData[currentQuestion].answer]}`;
      feedback.style.color = 'red';
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      setTimeout(loadQuestion, 1500);
    } else {
      setTimeout(showResult, 2000);
    }
  };
  
  function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h2>Quiz Complete</h2><p>Your Score: ${score}/${quizData.length}</p><button onclick='location.reload()'>Retake Quiz</button>`;
  }
  
  loadQuestion();