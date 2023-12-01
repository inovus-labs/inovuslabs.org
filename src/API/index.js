

export const getProjects = async () => {
  let data = [
    {
        id: 1,
        title: "Atom EV",
        description: "The electric car designed and constructed by college students is an impressive blend of innovation, sustainability, and prominent technology. Crafted with a combination of academic knowledge and hands-on expertise, this vehicle represents a remarkable achievement in the world of automotive engineering",
        thumbnail: "/projucts/Atom.jpg",
        url: "https://flowbite.com/docs",
        tags: ["Hardware"],
        contributors: [
            {
                name: "Induchoodan R",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            },
            {
                name: "Nikhil T Das",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-2.jpg",
                url: "https://flowbite.com/docs"
            },
            {
                name: "Anuraj T R",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-2.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    },

    {
        id: 2,
        title: "EDU BULD",
        description: "The LED Bulb is a remarkable achievement born from the creative minds and hard work of a group of visionary college students. This groundbreaking LED bulb is more than just a source of light a testament to innovation, sustainability, and youthful ingenuity. The students have paved a way to see big dreams for others through this business model",
        thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
        url: "https://flowbite.com/docs",
        tags: ["Hardware"],
        contributors: [
            {
                name: "Nikhil T Das",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            },
            {
                name: "Indhuchoodan R ",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-2.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    },

    {
        id: 3,
        title: "Smart Inovus",
        description: "Home automation refers to the use of smart technology and integrated systems to control various aspects of a home, providing homeowners with increased convenience, energy efficiency, security, and customization. We used ESP32, 16 Channel relay module and 12v DC adapter for controlling the appliances. The ESP32 is integrated with Arduino IOT cloud platform. It provides Integration with virtual assistants like Amazon Alexa, Google Assistant, or Apple Home Kit allows users to control devices using voice commands.",
        thumbnail: "/projucts/Automation.jpeg",
        url: "https://flowbite.com/docs",
        tags: ["IoT"],
        contributors: [
            {
                name: "John Doe",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            },
            {
                name: "Jane Doe",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-2.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    },

    {
        id: 4,
        title: "MGU Result Scrapper",
        description: " Mahatma Gandhi University, Kottayam has used the same process to release exam results for years. A project is proposed to automate the retrieval of result screenshots from the MGU portal, sending them securely via email in PDF format. Despite technological advancements, the university's insistence on the old method raises concerns. The script mimics manual steps, addressing issues like server overload during result publication.",
        thumbnail:  "/projucts/scrapper.jpg",
        url: "https://flowbite.com/docs",
        tags: ["Software"],
        contributors: [
            {
                name: "Arjun Krishna",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    },

    {
        id: 5,
        title: "MGU Result Scrapper",
        description: " The process of releasing exam results at Mahatma Gandhi University, Kottayam remains unchanged for several years. It is the project to get the result screenshots of a list of students from the MGU result portal via email in the form of secure PDFs. In this age of advanced technology, the persistence of this archaic process raises questions. The argument against this notion is further challenged by the secure email practices of banks and financial institutions. Additionally, the current method causes a massive influx of traffic to the website upon result publication, potentially overwhelming servers. The script emulates the manual steps of retrieving results, capturing screenshots for each result, and storing them in a designated folder",
        thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
        url: "https://flowbite.com/docs",
        tags: ["Software"],
        contributors: [
            {
                name: "Arjun Krishna",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    },

    {
        id: 6,
        title: "MGU Result Scrapper",
        description: " The process of releasing exam results at Mahatma Gandhi University, Kottayam remains unchanged for several years. It is the project to get the result screenshots of a list of students from the MGU result portal via email in the form of secure PDFs. In this age of advanced technology, the persistence of this archaic process raises questions. The argument against this notion is further challenged by the secure email practices of banks and financial institutions. Additionally, the current method causes a massive influx of traffic to the website upon result publication, potentially overwhelming servers. The script emulates the manual steps of retrieving results, capturing screenshots for each result, and storing them in a designated folder",
        thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
        url: "https://flowbite.com/docs",
        tags: ["Software"],
        contributors: [
            {
                name: "Arjun Krishna",
                avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                url: "https://flowbite.com/docs"
            }
        ]
    }
  ];

    return data;
};