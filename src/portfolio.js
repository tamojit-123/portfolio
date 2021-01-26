/* Change this file to get your personal Portfolio */
// Website related settings
const settings = {
  isSplash: false // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Tamojit Das",
  logo_name: "Tamojit  Das",
  nickname: "Hi!",
  subTitle:
    "I'm a passionate frontend and backend Developer from India 🇮🇳 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Firebase and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1nyfSVwLNQmPXChYIY2_qkl5O2Oay2eV1/view?usp=sharing",
  portfolio_repository: "https://github.com/tamojit-123/studyportal"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  //github: "https://github.com/tamojit-123",
  //linkedin: "https://www.linkedin.com/in/tamojit-das-365b19118/",
  //gmail: "tamo.das.97@gmail.com",
  //gitlab: "https://gitlab.com/tamojit-123",
  //facebook: "https://www.facebook.com/tamojit.das.73/",
  //medium: "https://medium.com/@tamo.das.97",
  //stackoverflow: "https://stackoverflow.com/users/9829241/tamojit-das",
  //twitter: "https://twitter.com/tamojitdas97"
// Instagram and Twitter are also supported in the links!

  {
    name: "Github",
    link: "https://github.com/tamojit-123",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717" // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tamojit-das-365b19118/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5" // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:tamo.das.97@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836" // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/tamojitdas97",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2" // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/tamojit.das.73/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2" // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/t_for_tamojit/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F" // Reference https://simpleicons.org/?q=instagram
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        /*{
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },*/
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms like Google cloud",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900"
          }
        },
        /*{
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },*/
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        /*{
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },*/
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        /*{
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },*/
        {
          skillName: "Figma",
          fontAwesomeClassname: "grommet-icons:figma",
          style: {
            color: "#F24E1E"
          }
        }
        /*{
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },*/
        /*{
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },*/
      ]
    }
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Microsoft",
      logo_path: "MTA.png",
      alt_name: "Microsoft Technology Associate",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.youracclaim.com/badges/7344efb7-4533-4c53-a962-5fe5eb9c164d/public_url"
    },
    {
      siteName: "IBM",
      logo_path: "DataScience.png",
      alt_name: "Data Science",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.youracclaim.com/badges/f44aeb20-03ec-4e1c-9d90-ba1760d033ab/public_url"
    },
    {
      siteName: "IBM",
      logo_path: "MachineLearning.png",
      alt_name: "Machine Learning",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "https://www.youracclaim.com/badges/f0ead3b3-c59c-4984-a56a-617ff617ccb0/public_url"
    },
    {
      siteName: "IBM",
      logo_path: "Python.png",
      alt_name: "Python 101",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.youracclaim.com/badges/c94717d4-450a-450d-8cce-61e6781dc5c1/public_url"
    },
    {
      siteName: "GoogleCloud",
      logo_path: "gcpskill.png",
      alt_name: "Google Cloud",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.qwiklabs.com/public_profiles/abab4aba-1874-46b2-a18c-32b12fc4828f"
    }
  ]
};

const degrees = {
  degrees: [
    {
      title: "Amity University Kolkata",
      subtitle: "B.Tech. in Computer Science and Engineering 🎓",
      logo_path: "Amity_University_logo.png",
      alt_name: "Amity University Kolkata",
        duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Computer Networking and Cyber Security.",
        "⚡ Attended Workshop on Machine Learning and Artificial Intelligence organized by Intel."
      ],
      website_link: "https://www.amity.edu/kolkata/"
    }
  ]
};

const certifications = {
  certifications: [
    {
      title: "AWS Machine Learning",
      subtitle: "- Udacity",
      logo_path: "udacity.jpg",
      certificate_link:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/96bda8a1-3a07-4a4a-8a92-d3952b37691b.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&utm_content=sch_600_auto_ndxxx_aws-ml-complet",
      alt_name: "Udacity",
      color_code: "#03b3e4"
    },
    {
      title: "Digital Skill: AI",
      subtitle: "- Accenture",
      logo_path: "Accenture-Logo.png",
      certificate_link:
        "https://www.futurelearn.com/certificates/2u08y85",
      alt_name: "Accenture DS:AI",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Google Web Designer Basics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://skillshop.exceedlms.com/student/award/53877208",
      alt_name: "Google",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Introduction to Data Science",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/95dcfe4f870c4183b536a11858be9bdf",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Python for Data Science",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/60118d62b0f041a9855340551b6e42cd",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/f40bb027b22642d6b55a65da3cd2fca8",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Introduction to programming using python",
      subtitle: "- Microsoft Imagine Academy Instructor",
      logo_path: "imagine.png",
      certificate_link:
        "https://drive.google.com/file/d/1r92Xpg28jzH2dx2buQ88tBvdd71S7SoX/view",
      alt_name: "Microsoft Imagine Academy",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "GCP Business Professional Accreditation",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://skillshop.exceedlms.com/student/award/53834259",
      alt_name: "Google",
      color_code: "rgb(255,255,255)"
    },
    {
      title: "Full Stack Web Development",
      subtitle: "- Ungineering",
      logo_path: "ungineering.png",
      certificate_link:
        "https://drive.google.com/file/d/1sXcUf13hYFWxTthhShNbcN7iUaC9p5o5/view?usp=sharing",
      alt_name: "ungineering",
      color_code: "#EDEFF0"
    },
    {
      title: "MTA- Introduction to Python",
      subtitle: "- Microsoft",
      logo_path: "microsoft.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1boTMSXyzSzK34Co-lRIWrnQ-LX1GOwFV/view",
      alt_name: "Microsoft",
      color_code: "#FFFFFF"
    },
    {
      title: "Data Science & AI with Python",
      subtitle: "- NiiT",
      logo_path: "niit.png",
      certificate_link:
        "https://drive.google.com/file/d/1KyF5ypxDkeSuKNwiZ-IPCmyKbz-s-xn0/view",
      alt_name: "Niit",
      color_code: "#FFFFFF"
    },
    {
      title: "Network Ninja To Cloud Ninja",
      subtitle: "- AWS",
      logo_path: "aws.jpg",
      certificate_link:
        "https://drive.google.com/file/d/16H-yI6oy1XCT5QCTpDr3_41HqrLeaMqB/view",
      alt_name: "AWS",
      color_code: "#232F3F"
    },
    {
      title: "Google Analytics Certification Course",
      subtitle: "- Google",
      logo_path: "analytics.png",
      certificate_link:
        "https://drive.google.com/file/d/1zrPOgZaaotPI8BaHotblPMv2rDfkcxB-/view?usp=sharing",
      alt_name: "Google",
      color_code: "#FFFFFF"
    }
  ]
};
// Your Achievement Section Include Your Certification Talks and More
// to edit achievements and badges in your portfolio edit AchievementCard.js to add badges or awards etc.

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteer experience",
  description:
    "I have worked with many evolving startups as Developer and ambassador. I have also worked with some well established companies like Microsoft. I love organising events and that is why I am also involved with many opensource communities as a representative and a campus ambassador.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full stack web developer",
          company: "StudyMatrix™",
          company_url: "https://studymatrix.netlify.app/",
          logo_path: "studymatrix.png",
          duration: "June 2019 - PRESENT",
          location: "Kolkata, West Bengal",
          description:
            "I am working as a full stack web developer and backend engineer working in (This Website is built on Firebase and firebase real time database as backend and HTML, CSS, JavaScript framework as frontend with Google APIs.)",
          color: "#0879bf"
        },
        {
          title: "Student Member",
          company: "Industry Institute Collaboration Association",
          company_url: "http://www.nationalitassociation.in/",
          logo_path: "nationalit.png",
          duration: "July 2019 - Dec 2019",
          location: "Kolkata, West Bengal",
          description:
            "I worked as a Student Member in project. One Premier Organization with Non-Profit Status | Regd. Under Govt. of WB Inspired By National Task Force on IT & SD Govt. of India.\n" +
            "National IT and Cyber Security Research Association Registered Body Under Govt.of WB Based on TR Act - Section-4. Associated with Association of Research Scholars, Association of Fellow Engineers, Offering Honorary Membership, Fellowship to Eminent Educationist.",
          color: "#9b1578"
        },
        {
          title: "Artificial Intelligence",
          company: "Indian Society of Innovative Project Research",
          company_url: "http://csksrc.org/index.html",
          logo_path: "niit.png",
          duration: "Jun 2019 - Jul 2019",
          location: "Kolkata, West Bengal",
          description:
            "The project was done with the help of Python Programming And Data Visualisation (Data Science & AI)\n" +
            "National Institute of Industrial Training\n" +
            "Issued By: Indian Society of Innovative Project Research 2019\n" +
            "One Premier Organization with Non-Profit Status | Regd. Under Govt. of WB | Reg. No: IV-190305335/2018\n" +
            "Inspired By: National Task Force on IT & SD Govt. of India\n" +
            "Program Code: SVT-19-XII-005",
          color: "#fc1f20"
        }
      ]
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Assit. Web Developer",
          company: "PCS Global Pvt. Ltd.",
          company_url: "https://www.pcsglobal.in/",
          logo_path: "pcs.jpg",
          duration: "May 2019 - Sep 2019",
          location: "Kolkata, West Bengal",
          description:
            "I have worked on project for clients given to the company, worked on Java, MySql and server and backend development etc.",
          color: "#ee3c26"
        },
        {
          title: "Virtual Internship in documentation",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/en-in",
          logo_path: "microsoft_logo.png",
          duration: "2nd July 2020",
          location: "work from home",
          description:
            "Over the period of July 2020, Tamojit Das has completed practical task modules in:\n" +
            "1. Welcome to your Virtual\n" +
            "Experience\n" +
            "2. Preparing for your Virtual\n" +
            "Experience\n" +
            "3. Campus to Corporate: Business\n" +
            "Foundation Skills\n" +
            "4. Campus to Corporate: Work Ready\n" +
            "Skills\n" +
            "5. Work Ready Skills\n" +
            "6. Technical Engineering skill",
          color: "#ee3c26"
        }
      ]
    },
    {
      title: "Volunteer experience",
      experiences: [
        {
          title: "Campus Ambassador",
          company: "Eximius - IIMB",
          company_url: "https://eximius-iimb.com/",
          logo_path: "eximius.jpg",
          duration: "May 2019 - Aug 2020",
          location: "Bangalore, Karnataka",
          description:
            "ECA0323- Worked as a campus ambassador, representing my campus and coordinating various companies like HDFC etc. and Guests, entrepreneurs and guiding them and coordinating them through everything during event.",
          color: "#4285F4"
        },
        {
          title: "All India Campus Ambassador",
          company: "Awign",
          company_url: "https://www.awign.com/",
          logo_path: "awign.png",
          duration: "Apr 2019 - Jun 2020",
          location: "Kolkata, West Bengal",
          description:
            "Collecting information through social media, and interacting participants and clients through social media and managing social media.",
          color: "#D83B01"
        },
        {
          title: "Arctic Code Vault Contributor",
          company: "Github",
          company_url: "https://github.com/tamojit-123",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, github, firebase etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717"
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/tamojit-123",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects with github API. I have contributed to projects of organisations like Tensorflow, github, firebase etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717"
        }
      ]
    }
  ]
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg"
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tamojit_das.png",
    avatar_image_path: "socialmedia.svg",
    description:
      "I am available on almost every social media. You can DM me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development."
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons. \"Supporting developers at every stage. Deliver guides for curious minds ✌.\"\n" +
      "-Tamojit Das",
    link: "https://iobriefs.netlify.app/",
    avatar_image_path: "choice.svg"
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Rajarhat Gopalpur, West Bengal, Kolkata - 700136",
    avatar_image_path: "address.svg",
    location_map_link: "https://goo.gl/maps/PGF16v2F3SwNcB6H6"
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9123780018"
  }
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData
};
