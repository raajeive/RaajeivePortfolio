let resumeData = {
  about: {
    imagebaseurl: "https://aditya-bhat.github.io/",
    resume_file_location: "/files/AdityaDeepakBhat_Resume.pdf",
    name: "Aditya D Bhat",
    role: "R & D Engineer",
    currentCompany: "Hewlett Packard Enterprise",
    socialLinks: {
      email: "mailto:aditya.deepak.bhat@gmail.com",
      linkedin: "https://www.linkedin.com/in/aditya-bhat/",
      github: "http://github.com/aditya-bhat",
      instagram: "https://instagram.com/aditya_bhat24",
    },
    aboutDataRotate:
      '["Data Enthusiast.", "Machine Learning!", "Web Developer"]',
    aboutme:
      "Data Science and Machine Learning Enthusiast, with a Bachelor of \
      Technology (B.Tech) in Computer Science and Engineering and a\
      specialization in Data Science from PES University, Bangalore. Currently\
      working as a Research and Development Engineer at Aruba, Hewlett Packard\
      Enterprise R&D. Building Intelligent Applications that improve\
      engineering productivity and Automation.",
    address: "Bangalore, India",
    website: "https://aditya-bhat.github.io",
    interests: "NLP, Machine Learning, Data Mining, Web Technologies",
    getInTouchMessage:
      "I'm open to opportunities in the area of Machine Learning and NLP! ",
    skills: [
      "C/C++",
      "Python",
      "JavaScript",
      "Node.js",
      "ReactJS",
      "MongoDB",
      "Express",
      "SQL/PostgreSQL",
      "Apache Spark",
      "Apache Kafka",
      "Numpy",
      "Pandas",
      "Seaborn/Matplotlib",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "scaPy",
      "Librosa",
    ],
  },
  education: [
    // {
    //   UniversityName: "",
    //   Degree: "Master of Science (MS)",
    //   specialization:
    //     "Computer Science- Specialization in Artificial Intelligence",
    //   Duration: "2021-2023",
    //   Description:
    //     "Electives: Natural Language Processing, Machine Learning, Artificial Intelligence",
    //   Achievements: ["Some Achievements"],
    // },
    {
      UniversityName: "PES University",
      Degree: "Bachelor of Technology (B. Tech)",
      specialization:
        "Computer Science and Engineering - Specialization in Data Science",
      Duration: "2015-2019",
      Description:
        "Electives: Data Analytics, Big Data, Natural Language Processing, Digital Image Processing, Social Network Analytics, Blockchain",
      Achievements: ["Some Achievements"],
    },
  ],
  experience: [
    {
      CompanyName: "Hewlett Packard Enterprise",
      Designation: "Research and Development Engineer",
      UnitName: "Aruba Networks, HPE R&D",
      From: "July 2019",
      To: "Present",
      Description: "Web Development, Data Mining, Automation",
      Points: [
        "Independently working on Tool Development and Data Mining to build intelligent applications that help improve engineering productivity. Created a dataset to characterize over 1200+ Network Stress Test Cases and developed a Smart Triage and Test Execution Tool - reducing manual effort of the Triage Team by 50%.",
        "Developed the Aruba Bangalore Lab Reservation Tool working alongside a teammate. Features include Network Auto-Discovery, Inventory Control, Utilization Analytics and Stats, remote authentication using LDAP, etc. Tech Stack: Python, ReactJS, NodeJS MongoDB, scikit-learn.",
        "Worked with a team of two members to build a Health Monitor for Aruba Switch Builds. Also, mentoring five Interns at Aruba Networks, HPE.",
      ],
      Achievements: ["Some Achievements1", "Some Achievements 2"],
    },
    {
      CompanyName: "Hewlett Packard Enterprise",
      Designation: "Research and Development Intern",
      UnitName: "Aruba Networks, HPE R&D",
      From: "Jan 2019",
      To: "July 2019",
      Description: "Web Development, Data Mining, Automation",
      Points: [
        "Worked on Automation of Network Switching Protocols such as OSPF, ARP, MAC, etc. Built a library to automate reporting of ARP Scale Characterization, reducing the manual effort that goes into generating it.",
      ],
      Achievements: ["Some Achievements1", "Some Achievements 2"],
    },
    {
      CompanyName: "PES University",
      Designation: "Research Intern",
      UnitName: "Center for Cloud Computing and Big Data",
      From: "Sep 2017",
      To: "Jan 2019",
      Description:
        "Applied Machine Learning, Deep Learning, Automatic Speech Recognition",
      Points: [
        "PES University, Bangalore. Worked on applied Deep Learning in Automatic Speech Recognition for the language Kannada. Focused on syllable segmentation, mispronunciation detection using Self-Organizing Maps and rating the word pronunciation using deep learning architectures.",
      ],
      Achievements: ["Some Achievements1", "Some Achievements 2"],
    },
    {
      CompanyName: "PES University",
      Designation: "Research Intern",
      UnitName: "Center for Pattern Recognition and Machine Intelligence",
      From: "Sep 2017",
      To: "Jan 2019",
      Description: "Applied Machine Learning, Pattern Recognition",
      Points: [
        "PES University, Bangalore.Worked on projects on Face Recognition under guidance Prof. Vinay A, funded by the Govt. of Karnataka. Explored Classication using SVM, Random Forests, Gradient Boosting, and ResNet.",
      ],
      Achievements: ["Some Achievements1", "Some Achievements 2"],
    },
    {
      CompanyName: "Pattern Effects Labs",
      Designation: "Machine Learning Intern",
      UnitName: "ML Team",
      From: "May 2018",
      To: "Aug 2018",
      Description: "Machine/Deep Learning, Data Analysis, Back-testing",
      Points: [
        "Looked into helpful technical indicators that can help predict buy/sell actions on the NIFTY Index.",
        "Analyzing the distribution of data, and coming up with a suitable objective function to maximize profit under certain conditions.",
        "Training Machine Learning Models like SVM, RF, XGBoost, KNN, and Ensembles of Classifiers, based on custom metrics to gauge the success of a model.",
        "Training and hyper-parameter Neural Networks based models using TensorFlow and Keras.",
        "Backtesting the models on multiple folds of historical data, to estimate the overall profit of the models over a window of time.",
      ],
      Achievements: ["Some Achievements1", "Some Achievements 2"],
    },
  ],
  project: [
    // {
    //   id: 8,
    //   title: "Analyze San Francisco Crime Rate",
    //   abstract:
    //     "The San Francisco Crime data was (or are being) collected as a json log file. The goal of project was to use Spark Structured Stream, process data as live stream and then export an aggregate new stream that can be used for live analytics. I used Kafka producer to produce streaming data. Instead of using Kafka consumer to process data, I used Spark to consume and process data because Spark RDD based structure that is fault tolerance, distributed and partitioned. Spark also comes with SQL and streaming functionalities to process and aggregate streaming data. The resulting aggregated stream can provide insights from the data. In this case, we aggregate data by counting number of crimes in different categories of crimes.",
    //   url: "",
    //   tech: ["Python", "Docker", "Kafka", "Spark"],
    // },
    // {
    //   id: 7,
    //   title: "Public Transit Status with Apache Kafka",
    //   abstract:
    //     "Using public data from the Chicago Transit Authority, we builds a streaming event pipeline via Apache Kafka and its ecosystem tools like REST Proxy and Kafka Connect to simulate and display the status of train lines in real time, that allows us to monitor trains move from station to station through a website interface.",
    //   url: "",
    //   tech: ["Python", "Docker", "Kafka", "PostgreSQL"],
    // },
    {
      id: 8,
      title: "Data Modeling with Cassandra",
      abstract:
        "An ETL pipeline using Python and data modeling with Apache Cassandra. Created an Apache Cassandra database which can create queries on song play data to answer the questions on the user activity on the app.",
      url: "https://github.com/aditya-bhat/Data-Modeling-with-Cassandra",
      tech: ["Python", "Apache Cassandra"],
    },
    {
      id: 7,
      title: "Data Modeling with Postgres",
      abstract:
        "An ETL pipeline using Python. Defined the fact and dimension tables for a star schema for a particular analytic focus, and wrote an ETL pipeline that transfers data from files in two local directories into these tables in Postgres using Python and SQL.",
      url: "https://github.com/aditya-bhat/Data-Modeling-with-Postgres",
      tech: ["Python", "PostgreSQL"],
    },
    {
      id: 6,
      title:
        "LegoNet - Classification and Extractive Summarization of Indian legal judgments",
      abstract:
        "Developed an NLP system working in a team of three, to classify andsummarize Indian Legal Judgments using Deep Learning. Focused onSentence-Paragraph level encoding, Capsule Networks for Text Clas-sification and Unsupervised Text Summarization.Presented Paper atInternational Symposium - LKE 2019, Dublin, Ireland.",
      url: "",
      tech: ["Python", "Numpy", "Pandas", "TensorFlow", "Keras", "PHP"],
    },
    {
      id: 5,
      title: "Modular implementation of a Deep Neural Net from scratch",
      abstract:
        "Keras style modular implementation of a DNN with layers for Dense, Reshape, Activations, optimizers like SGD, Adam, etc. and loss func-tions like MSE, and cross entropy.",
      url: "",
      tech: ["Python", "Numpy"],
    },
    {
      id: 4,
      title: "Machine Translation",
      abstract:
        "End-to-End ASR Pipeline to transcribe speech to text using CNNs andvariants of RNNs trained on acoustic features like MFCCs and spectrograms.",
      url: "",
      tech: ["Python", "Numpy", "TensorFlow", "Keras", "Librosa"],
    },
    {
      id: 3,
      title: "Speech Transcription",
      abstract:
        "End-to-End machine translation pipeline using recurrent neural network architectures. The pipeline accepts Engligh text as input and returns the French translation.",
      url: "",
      tech: ["Python", "Numpy", "TensorFlow", "Keras"],
    },
    {
      id: 2,
      title: "Hidden Markov Model based POS Tagger",
      abstract:
        "Implementation of part of speech tagging with a universal tagset based on the Hidden Markov Model using the pomegranate library.",
      url: "https://github.com/aditya-bhat/HMM-Part-of-Speech-Tagger",
      tech: ["Python", "Pomegranate"],
    },
    {
      id: 1,
      title: "Xv6 - Virtual to Physical Address Translation",
      abstract:
        "Added a system call to the Xv6 Operating system that translates the virtual address to a physical address.",
      url: "",
      tech: ["C", "Xv6", "Linux"],
    },
  ],
  publication: [
    {
      id: 1,
      publishDate: "",
      file_location: "/files/publications/JIFS-2020.pdf",
      title:
        "LegoNet - Classification and Extractive Summarization of Indian Legal Judgments with Capsule Networks and Sentence Embeddings",
      authors: [
        "Aditya D Bhat, Harshith R Acharya, Avinash K, Ramamoorthy Srinath",
      ],
      publisher: "IOS Press - Journal of Intelligent and Fuzzy Systems (2020)",
      abstract:
        "In this paper, we propose the LegoNet - a system to classify and summarize legal judgments using Sentence Embedding, Capsule Networks and Unsupervised Extractive Summarization. To train and test the system, we have created a mini-corpus of Indian legal judgments which have been annotated according to the classes: Facts, Arguments, Evidences and Judgments. The proposed framework uses Sentence Embedding and Capsule Networks to classify parts of legal judgments into the classes mentioned above. This is then used by the extractive summarizer to generate a concise and succinct summary of the document grouped according to the above mentioned classes. Such a system could be used to help enable the Legal Community by speeding up the processes involving reading and summarizing legal documents which a Law professional would undertake in preparing for a case. The performance of the Machine Learning Model in this architecture can improve over time as more annotated training data is added to the corpus.",
      url:
        "https://content.iospress.com/articles/journal-of-intelligent-and-fuzzy-systems/ifs179870",
    },
    {
      id: 2,
      publishDate: "",
      file_location: "/files/publications/IAS19-631.pdf",
      title:
        "A Novel Solution to the Curse of Dimensionality in Using KNNs for Image Classification",
      authors: ["Aditya D Bhat, Harshith R Acharya, Srikanth HR"],
      publisher:
        "IEEE 2nd International Conference on Intelligent Autonomous Systems, ICoIAS (2019)",
      abstract:
        "The k-Nearest Neighbors (KNN) is one of the simplest and widely used algorithms in Machine Learning applications such as Image Classification. Being based on the Euclidean distance the algorithm is quite simple and effective in most cases. However, it suffers from the problem of ”The Curse of Dimensionality” as the Euclidean distance becomes meaningless when the dimension of data becomes significantly high. In this paper we present a novel solution to this problem by making use of the Convolutional Neural Network (CNN) which can extract the most important features automatically from the images. These features extracted by the CNN are of reduced dimensions and can effectively be used by the KNN to recognize the images. The results and comparisons show that the proposed method is also seen to reduce the time taken for testing while retaining high accuracy. The proposed technique achieved an accuracy of 96.92% on MNIST, 85.09% on Fashion MNIST and 95.17% on the A-Z Alphabets databases respectively.",
      url: "https://ieeexplore.ieee.org/document/8782498",
    },
    {
      id: 3,
      publishDate: "",
      file_location: "/files/publications/CCEM2018.pdf",
      title:
        "Pronunciation Training on Isolated Kannada Words using 'Kannada Kali' - A Cloud Based Smart Phone Application",
      authors: [
        "Savitha Murthy, Ankit Anand, Avinash Kumar, Ajay Cholin, Ankita Shetty, Aditya Bhat, Akshay Venkatesh, Lingaraj Kothiwale, Viraj Kumar, and Dinkar Sitaram",
      ],
      publisher:
        "7th IEEE International Conference on Cloud Computing in Emerging Markets, CCEM (2018)",
      abstract:
        "Automated feedback on pronunciation system on a smart phone is useful for a student trying to learn a new language at his or her own pace. The objective of our research is to implement a pronunciation training system with minimal language specific data. Our proposed system consists of an Android application as a front-end, and a pronunciation evaluation and mispronunciation detection framework as the back-end hosted on a cloud. We conduct our experiments on spoken isolated words in Kannada. Our pronunciation evaluation(for spoken word) implementation on the cloud involves training a classifier with features from Dynamic Time Warping (DTW) with Mel Frequency Cepstral Coefficients (MFCC) and Line Spectral Frequencies (LSF) and, without directly on LSF (without DTW). We study the performance of different machine learning algorithms for pronunciation rating. We propose a novel semi-supervised approach for detecting mispronounced segments of a word using Self Organizing Maps (SOM) that are also deployed on the cloud. Our implementation of SOM learns the features of an automatically segmented reference speech. The trained SOM is then used to determine the deviations in the learner's pronunciation. We evaluate our system on 1169 Kannada audio samples from students around 18 to 25 years of age. The Kannada words considered are taken from textbooks of first and second grade (considering learners as beginners who do not know Kannada) and include 2 to 5 syllable words. We report accuracy on binary classification and multi-class classification for different classifiers. The mispronounced segments detected using SOM correlate with the human ratings. Our approach of pronunciation evaluation and mispronunciation detection is based on minimal data and does not require a speech recognition system.",
      url: "https://ieeexplore.ieee.org/document/8648645",
    },
    {
      id: 4,
      publishDate: "",
      file_location: "/files/publications/T4E2018.pdf",
      title:
        "Kannada Kali: A Smartphone Application for Evaluating Spoken Kannada Words and Detecting Mispronunciations using Self Organizing Maps",
      authors: [
        "Savitha Murthy, Ankit Anand, Avinash Kumar, Ajay Cholin, Ankita Shetty, Aditya Bhat, Akshay Venkatesh, Lingaraj Kothiwale, Viraj Kumar, and Dinkar Sitaram",
      ],
      publisher:
        "IEEE 9th International Conference on Technology for Education, T4E (2018)",
      abstract:
        'Computer Aided Pronunciation Training (CAPT) systems can assist people learning to speak new languages by detecting and correcting mispronunciations. "Kannada Kali" is a prototype Android application that leverages learners\' increasing access to smartphones to evaluate the pronunciation of Kannada words and provide feedback using a cloud-based framework. A CAPT system typically uses an Automatic Speech Recognition (ASR) sub-system. For sufficient accuracy, ASR systems need to be trained using speech data from both native (L1) and non-native (L2) speakers. Since the latter type of data is particularly difficult to gather, we follow recent research efforts that seek to minimize the dependency on large speech corpora. We recorded 21 Kannada words (two to five syllables long) pronounced correctly by a Kannada teacher as templates, and 1169 samples of these words spoken by 19 native and non-native Kannada speakers aged 18 to 25 years. These samples were manually rated on a 5-point Likert scale by the Kannada teacher and used to train a neural network classifier for our application. "Kannada Kali" provides learners feedback that matches the teacher ratings with an accuracy of 86% on binary classification and 68% on multi-class classification. We also propose a novel approach for detecting mispronunciations using Self Organizing Maps (SOM) and report promising initial results.',
      url: "https://ieeexplore.ieee.org/document/8590097",
    },
    {
      id: 5,
      publishDate: "",
      file_location: "/files/publications/Elsevier-orb-kpca-2018.pdf",
      title:
        "An efficient ORB based Face Recognition framework for Human-Robot Interaction",
      authors: [
        "A Vinay, Ajaykumar S. Cholin, Aditya D. Bhat, K. N. Balasubramanya Murthy, and S. Natarajan",
      ],
      publisher: "Elsevier, Procedia Computer Science, Volume 133 (2018)",
      abstract:
        "In Human-Robot Interaction (HRI), quick and efficient FR techniques are often required in service robots. In a real time scenario, it is absolute that face image patterns observed by robots depends often on variations such as pose, light conditions, location of the robots (view point), etc. In addition to these constraints, the service robots are expected to be quick enough for FR so that they can be deployed in applications such as counting people, security and surveillance, directing humans, etc. In this paper, ORB, a computational expensive and quick feature extraction technique is used, which has been a panacea for the above mentioned constraints. One of the dimensionality reduction techniques called PCA (a tool which reduces high dimensional data to lower dimension while keeping most of the data) with its sublime advantages of reduction of storage and time is often used. But, in the FR system , the linear uncorrelated components of PCA doesn’t consider the non-linear factors such as occlusion and in such cases PCA fails to find the good representative direction. Kernel PCA (KPCA) which uses kernel methods considers even the non-linear factors and is proven to be more suitable than PCA, thus producing better results. By considering all these factors, our paper proposes a novel technique ORB-KPCA for FR along with Threshold Based Filtering (TBF). The proposed technique is proven to be efficient in both time and space by experimenting on three benchmark datasets (ORL, Faces96 and Grimace).",
      url:
        "https://www.sciencedirect.com/science/article/pii/S1877050918310470",
    },
  ],
};

export default resumeData;
