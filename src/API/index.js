

import axios from 'axios';




// Get all projects
export const getProjects = async () => {
    let data = {
        "tags": ["Software", "Hardware", "Electronics", "Internet of Things", "Open-source", "Mechanical"],
        "technologies": [],
        "projects": [
            {
                "id": 1,
                "title": "Atom EV",
                "description": "The electric car designed and constructed by college students is an impressive blend of innovation, sustainability, and prominent technology. Crafted with a combination of academic knowledge and hands-on expertise, this vehicle represents a remarkable achievement in the world of automotive engineering",
                "thumbnail": "/assets/projects/Atom.jpg",
                "status": "Completed",
                "tags": ["Mechanical", "Hardware"],
                "contributors": [
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 2,
                "title": "Edu Bulb",
                "description": "The LED Bulb is a remarkable achievement born from the creative minds and hard work of a group of visionary college students. This groundbreaking LED bulb is more than just a source of light a testament to innovation, sustainability, and youthful ingenuity. The students have paved a way to see big dreams for others through this business model",
                "thumbnail": "/assets/projects/Edubulb.jpeg",
                "status": "Completed",
                "tags": ["Hardware", "Electronics"],
                "contributors": [
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 3,
                "title": "Smart Inovus",
                "description": "Home automation refers to the use of smart technology and integrated systems to control various aspects of a home, providing homeowners with increased convenience, energy efficiency, security, and customization. We used ESP32, 16 Channel relay module and 12v DC adapter for controlling the appliances. The ESP32 is integrated with Arduino IOT cloud platform. It provides Integration with virtual assistants like Amazon Alexa, Google Assistant, or Apple Home Kit allows users to control devices using voice commands.",
                "thumbnail": "/assets/projects/Automation.jpeg",
                "status": "Progress",
                "tags": ["Internet of Things", "Electronics"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Arjun krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 4,
                "title": "MGU Result Scrapper",
                "description": "A project designed to automate the process of fetching result screenshots from the MGU result portal, sending them to students via email as secure PDFs, and generating consolidated marklists and result analysis for teachers.",
                "thumbnail": "https://user-images.githubusercontent.com/44474792/174436549-32713b4f-8140-4266-b3e5-6bde4ee1e982.gif",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/mgu-result-scraper'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 5,
                "title": "Inovus Scrapbook",
                "description": " A daily diary for Inovus Fellows to scribble about their self-learning endeavors & DIY projects",
                "thumbnail": "/assets/projects/scrapbook.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/scrapbook'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 6,
                "title": "Chacko Mash",
                "description": "Chacko Mash is our discord bot which handles the members of our discord platform, replies to the queries and wishes the members for their birthday and other important occasions display score boards of individuals in the platform. The name was inspired from a movie character who was a narcissistic father Kaduva Chacko punishes his son upon failing to meet the high expectations. The bot handles the data of individual students. They can scan messages for spam, profanity, or other inappropriate content and take appropriate actions",
                "thumbnail": "/assets/projects/chacko_mash.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/chacko-mash'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 7,
                "title": "Sound Thoma",
                "description": "Sound Thoma is our bot for Discord, designed to make your music experience during their work time. The engagement is funnier sometimes, we often conduct video chats and calls during the work. We usually rely on Spotify for listening to music to make the time more enjoyable. Literally the ads coming unexpectedly are mood spoilers especially during romantic songs. We’ve introduced a better alternative for this. Here you can listen to unlimited music without ads. sounds interesting right. Here you can create and manage your playlists directly within Discord. Simply type /play followed by the song or artist you want to hear.",
                "thumbnail": "/assets/projects/sound_thoma.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/chacko-mash'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 8,
                "title": "Inovus Blogs",
                "description": "Inovus blogs is a platform where anyone can express and share their thoughts, ideas, criticism in a constructive manner. The blog has been stood as a media platform for students to being vociferous on social, political, technological and other related issues.",
                "thumbnail": "/assets/projects/Inovus_blogs.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'demo',
                    'link': 'https://blog.inovuslabs.org'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 9,
                "title": "Inovus API",
                "description": "The API which controls all the softwares roming around inovuslabs",
                "thumbnail": "/assets/projects/API.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/inovus-api'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 10,
                "title": "OSM Datapool",
                "description": "The OSM (OpenStreetMap) Data Pool is an ambitious open-source initiative undertaken by Inovus Labs, involving active participation from all members during the Hacktoberfest event. OpenStreetMap, a collaborative mapping platform, forms the foundation for this project, aiming to aggregate and enhance geospatial data to improve accessibility and navigation within communities. A collective of passionate and dedicated individuals, has come together to contribute to this innovative effort. During hacktoberfest, a month-long celebration of open-source contributions, team members pooled their expertise, time, and creativity to enrich the OpenStreetMap database.",
                "thumbnail": "/assets/projects/OSM_Datapool.jpg",
                "status": "Completed",
                "tags": ["Software", "Open-source"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/osm-datapool'
                },
                "contributors": [
                    {
                        "name": "",
                        "avatar": ""
                    }
                ]
            },
            {
                "id": 11,
                "title": "8x8 LED Matrix",
                "description": "An 8x8 LED matrix created by college students is a compact electronic display consisting of 64 individual Light Emitting Diodes (LEDs) arranged in an 8 by 8 grid pattern. The matrix serves as a visually dynamic platform for showcasing various patterns, text, or simple animations by selectively illuminating specific LEDs",
                "thumbnail": "/assets/projects/8x8LED.jpeg",
                "status": "Completed",
                "tags": ["Electronics"],
                "contributors": [
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 12,
                "title": "Morse Code Generator",
                "description": "A list of noteworthy technology acquisitions 2021. This list is updated on a regular basis.",
                "thumbnail": "/assets/projects/morsecode.png",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'demo',
                    'link': 'https://verbose-reflective-recorder.glitch.me/'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 13,
                "title": "Blind Stick",
                "description": "A small prototype to aware blind peoples to be alerted about the obsticles.",
                "thumbnail": "/assets/projects/Blind_stick.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 14,
                "title": "Bluetooth RC Car",
                "description": "A prototype of a BT controled RC car.",
                "thumbnail": "/assets/projects/RC_CAR.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 15,
                "title": "RFID based Smart Lock (using Arduino)",
                "description": "A prototype of a door lock which can be unlocked using rfid tags",
                "thumbnail": "/assets/projects/smart_lock.jpg",
                "status": "Completed",
                "tags": ["Electronics", "Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 16,
                "title": "Smart Traffic Lights using VR Module",
                "description": "VR module is used to sence sound, this project will hwlp the light to indicate if any ambulance is coming so that the signal can turn to green.",
                "thumbnail": "/assets/projects/traffic_light.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 17,
                "title": "E-waste Bin",
                "description": "Automatic waste bin which dictect a persone and turns open automaticaly .",
                "thumbnail": "/assets/projects/E-waste_Bin.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 18,
                "title": "Smart Garden using Capacitive Soil Moisture",
                "description": "A smart garden using capacitive soil moisture technology is an innovative and efficient gardening system designed by a team of students. This is a better solution for gardening that integrates capacitive soil moisture sensors to optimize the watering process for plants. The project is aimed to reduce the water consumption by the individuals and to automate the process of watering.",
                "thumbnail": "/assets/projects/Soil.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 19,
                "title": "Breath Analyzer",
                "description": "The Breath Analyser created by college students is a cutting-edge, portable device designed to accurately measure and analyze the composition of an individual’s breath. The Breath Analyser can swiftly and precisely detect the presence of alcohol in a person’s breath, making it a crucial tool for law enforcement agencies to combat drunk driving and ensure road safety.",
                "thumbnail": "/assets/projects/Breath_ana.jpg",
                "status": "Completed",
                "tags": ["Electronics, Hardware"],
                "contributors": [
                    {
                        "name": "Sane Sunil",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 20,
                "title": "InoMail",
                "description": "The main feature of this product was it can send multiple assets in a single mail through ino mail. It can send bulk emails with ease, whether you're reaching out to a small team or a massive audience. Ino Mail automates the process, saving you time and eliminating the risk of errors. The product can be trusted in its security of your data. Ino Mail prioritizes the protection of your information, ensuring that your communications are delivered safely and securely. In short, InoMail empowers you to communicate efficiently, personally, and at scale. Whether you're a business professional, marketer, or educator, our software simplifies the process of sending personalized messages",
                "thumbnail": "/assets/projects/Ino-mail.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/inomail/'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 21,
                "title": "QuikSubmit",
                "description": "The main feature of this product was it can send multiple assets in a single mail through ino mail. It can send bulk emails with ease, whether you're reaching out to a small team or a massive audience. Ino Mail automates the process, saving you time and eliminating the risk of errors. The product can be trusted in its security of your data. Ino Mail prioritizes the protection of your information, ensuring that your communications are delivered safely and securely. In short, InoMail empowers you to communicate efficiently, personally, and at scale. Whether you're a business professional, marketer, or educator, our software simplifies the process of sending personalized messages",
                "thumbnail": "/assets/projects/Ino-mail.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/QuikSubmit'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 22,
                "title": "Robotic Arm",
                "description": "A remarkable robotic arm, meticulously crafted by a team of ingenious college students, showcases an impressive fusion of engineering prowess and innovative design. This marvel of modern technology consists of multiple high-precision servos working in perfect harmony to execute intricate tasks with precision and finesse.",
                "thumbnail": "/assets/projects/Ino-mail.jpeg",
                "status": "Completed",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
            ,
            {
                "id": 23,
                "title": "LPG Detector",
                "description": "The college student-created LPG (liquefied petroleum gas) detector is an innovative device designed to enhance safety in domestic and commercial environments by detecting the presence of potentially hazardous gas leaks. This compact and user-friendly device is the result of collaborative efforts and cutting-edge engineering from a group of talented and ambitious college students.",
                "thumbnail": "/assets/projects/Ino-mail.jpeg",
                "status": "Completed",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
        ]
    };

    return data;
};



// Get recent blog posts published on Inovus Blogs
export const getBlogPosts = async () => {

    // try {
    //     const res = await axios.get(`${import.meta.env.VITE_APP_INOVUS_BLOGS_BASE_URL}/ghost/api/content/posts/?key=${import.meta.env.VITE_APP_INOVUS_BLOGS_API_KEY}&limit=4&fields=title,feature_image,custom_excerpt,excerpt,published_at,url,reading_time,html&include=tags,authors`);
    //     return res.data.posts;
    // } catch (error) {
    //     console.log(error);
    // }

    return [
        {
            "title": "Rising from the Ashes: Restoring Inovus Blogs Post-Termination",
            "feature_image": "https://images.unsplash.com/photo-1591913139332-f8172ef511da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGRhdGElMjByZWNvdmVyeXxlbnwwfHx8fDE2OTkwNDUwOTJ8MA&ixlib=rb-4.0.3&q=80&w=2000",
            "custom_excerpt": "Here's how we managed to recover the contents of a blog hosted on an AWS EC2 instance after being wrongfully terminated.",
            "published_at": "2023-11-04T03:20:00.000+05:30",
            "reading_time": 6,
            "tags": [
                {
                    "id": "653fc29ab14998447e1d37dd",
                    "name": "Web Development",
                    "slug": "web-development",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE2OTg5MDI5Mjh8MA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#8aaf46",
                    "url": "https://blog.inovuslabs.org/tag/web-development/"
                }
            ],
            "authors": [
                {
                    "id": "653f7a27b14998447e1d36d5",
                    "name": "Arjun Krishna",
                    "slug": "arjun",
                    "profile_image": "https://www.gravatar.com/avatar/dd27406b884ca7ede3e5364c3dd6326c?s=250&r=x&d=mp",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/image-7.png",
                    "bio": "Yet another human being born towards the end of the 20th century, and continues his Exploration & Experimentation on the Technology that the 21st century has to offer.",
                    "website": "https://arjunkrishna.in/",
                    "location": "Pathanamthitta | Bangalore",
                    "facebook": null,
                    "twitter": "@Decoded_Cipher",
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun/"
                }
            ],
            "url": "https://blog.inovuslabs.org/restoring-inovus-blogs/",
            "excerpt": "Here's how we managed to recover the contents of a blog hosted on an AWS EC2 instance after being wrongfully terminated."
        },
        {
            "title": "Maladaptive Daydreaming: Creating A Utopia Equivalent To A Bottomless Pit",
            "feature_image": "https://blog.inovuslabs.org/content/images/2023/10/index.jpeg",
            "custom_excerpt": null,
            "published_at": "2023-10-21T14:26:00.000+05:30",
            "reading_time": 4,
            "tags": [
                {
                    "id": "653f70e95d18573f9b9f3d73",
                    "name": "Psychology",
                    "slug": "psychology",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1573511860302-28c524319d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHBzeWNob2xvZ3l8ZW58MHx8fHwxNjk4OTAyNzgwfDA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#3eb8c1",
                    "url": "https://blog.inovuslabs.org/tag/psychology/"
                }
            ],
            "authors": [
                {
                    "id": "654cb82cd6af5204882b104e",
                    "name": "Athena Maria Vadakan",
                    "slug": "athena",
                    "profile_image": null,
                    "cover_image": null,
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/athena/"
                }
            ],
            "url": "https://blog.inovuslabs.org/maladaptive-daydreaming/",
            "excerpt": "You're not stuck. You're just committed to certain patterns of behavior because they helped you in the past. Now those behaviors have become more harmful than helpful. The reason why you can't move forward is because you keep applying an old formula to a new level of life. Change the formula to get a different result. - Emily Maroutian \n\nAs long as Samira can remember, she was really quiet. But she also had a goofy and imaginative side just like any other children. Because of her shyness and pas"
        },
        {
            "title": "Instagram VS Mental Health",
            "feature_image": "https://blog.inovuslabs.org/content/images/2023/10/photo-1535451801241-b5395e1d4a1b.jpg",
            "custom_excerpt": null,
            "published_at": "2023-10-06T01:10:00.000+05:30",
            "reading_time": 2,
            "tags": [
                {
                    "id": "653f70e95d18573f9b9f3d73",
                    "name": "Psychology",
                    "slug": "psychology",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1573511860302-28c524319d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHBzeWNob2xvZ3l8ZW58MHx8fHwxNjk4OTAyNzgwfDA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#3eb8c1",
                    "url": "https://blog.inovuslabs.org/tag/psychology/"
                }
            ],
            "authors": [
                {
                    "id": "6540bc590b27848ad6616f50",
                    "name": "Arjun A Acharry",
                    "slug": "arjun-a-acharry",
                    "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/_MG_2998---Copy.JPG",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/Slide-16_9---1.png",
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun-a-acharry/"
                }
            ],
            "url": "https://blog.inovuslabs.org/instagram-vs-health/",
            "excerpt": "Instagram is a popular social media platform and mobile app designed for sharing photos and videos. It was launched in Oct 2010 and has since become one of the most widely used social networking platforms in the world. Instagram allows users to create profiles, post photos and videos, and interact with others through likes, comments, and direct messages.\n\nInstagram has evolved significantly since its inception and has played a crucial role in shaping how people share and consume visual conte"
        },
        {
            "title": "The story behind a simple, yet complicated Smart Door!",
            "feature_image": "https://images.unsplash.com/photo-1553341640-6b28ff92098a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEwfHxpb3R8ZW58MHx8fHwxNjk4NjQ1MDUxfDA&ixlib=rb-4.0.3&q=80&w=2000",
            "custom_excerpt": "Here's an interesting tale behind the development of an RFID-based Smart Access Door (frankly speaking, an over-engineered one), that we've put together recently at Inovus Labs.",
            "published_at": "2023-08-21T14:39:00.000+05:30",
            "reading_time": 4,
            "tags": [
                {
                    "id": "653f72d95d18573f9b9f3d91",
                    "name": "Internet of Things",
                    "slug": "iot",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxlbGVjdHJvbmljc3xlbnwwfHx8fDE2OTg5MDI2MDV8MA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#794dcb",
                    "url": "https://blog.inovuslabs.org/tag/iot/"
                }
            ],
            "authors": [
                {
                    "id": "653f7a27b14998447e1d36d5",
                    "name": "Arjun Krishna",
                    "slug": "arjun",
                    "profile_image": "https://www.gravatar.com/avatar/dd27406b884ca7ede3e5364c3dd6326c?s=250&r=x&d=mp",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/image-7.png",
                    "bio": "Yet another human being born towards the end of the 20th century, and continues his Exploration & Experimentation on the Technology that the 21st century has to offer.",
                    "website": "https://arjunkrishna.in/",
                    "location": "Pathanamthitta | Bangalore",
                    "facebook": null,
                    "twitter": "@Decoded_Cipher",
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun/",
                    "social" : {
                        "twitter": ["@Decoded_Cipher", "https://twitter.com/Decoded_Cipher"],
                        "github": ""
                    }
                },
                {
                    "id": "65409075b14998447e1d393f",
                    "name": "Nikhil T Das",
                    "slug": "nikhil",
                    "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/da34f272-a6e1-4f6f-8414-79147fce3b5d.jpg",
                    "cover_image": null,
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/nikhil/"
                }
            ],
            "url": "https://blog.inovuslabs.org/inovus-smart-door/",
            "excerpt": "Here's an interesting tale behind the development of an RFID-based Smart Access Door (frankly speaking, an over-engineered one), that we've put together recently at Inovus Labs."
        }
    ];
}



// Get recent podcasts published on Inora: The Inovus Radio
export const getPodcasts = async () => {

    return [
        {
            id: "2TrSXp7Ry7dwMwqBM25Blw",
        },
        {
            id: "4NM5QuIiDVeUAy8FaKou4Q",
        },
    ]

}



// Get all projects
export const getActivity = async () => {
    let data = {
        "tags": ["Workshop", "Internship", "Bootcamp", "Challenge", "Session", "Exhibition","Celebration"],
        "activities": [
            {
                "id": 1,
                "title": "Web Design Bootcamp v3.0",
                "thumbnail": "/assets/activity/WDB.jpg",
                "description": "A nano degree program to develop the web designing skills of students at kristu jyothi college. It have been successfully completed and given the certificate of the nano degree program.",
                "date": ["1 June 2023", "14 June 2013"],
                "tags": ["Bootcamp"]
            },{
                "id": 2,
                "title": "Kerala Piravi @ Govt. LP School",
                "thumbnail": "/assets/activity/schoolvisit.jpg",
                "description": "On kerala piravi we have went to Gov. LP School Madappaly to intact with LKG students and have coundected small small activities.",
                "date": ["1 Nov 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 3,
                "title": "IoT workshop",
                "thumbnail": "/assets/activity/IOT23.jpg",
                "description": "A holding first step to IoT. The intrested students in KJCMT have participated and gained the first step on IoT.",
                "date": [["19 July", "20 July"], "10 Aug 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 4,
                "title": "Debate compatition",
                "thumbnail": "/assets/activity/debate.png",
                "description": "A cpmpatition to encourage the talking ability of students. Severals students have participated and all have recived participation certificate",
                "date": ["25 Nov 2023"],
                "tags": ["Challenge"]
            },
            {
                "id": 5,
                "title": "Stupid Idea Contest",
                "thumbnail": "/assets/activity/stupid.png",
                "description": "A contest to devalop the ideas of KJCMT students. They have submitted several Ideas and we have selected the best one and promoted them to do that by giving some prize to them.",
                "date": ["3 Nov 2022", "12 Nov 2022"],
                "tags": ["Challenge"]
            },
            {
                "id": 6,
                "title": "Community Workshop",
                "thumbnail": "/assets/activity/community.png",
                "description": "This workshop was conducted to the students to make them understand how community works and how to manage a community.",
                "date": ["6 Oct 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 7,
                "title": "Date with Figma",
                "thumbnail": "/assets/activity/date_with_figma.jpg",
                "description": "First step to figma. This event is hosted for KJCMT students to know about figma and learn about graphics designing",
                "date": ["9 Oct 2023", "14 Oct 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 8,
                "title": "Intro to Hacktober Fest",
                "thumbnail": "/assets/activity/hacktober.jpg",
                "description": "This is a event we conducted to make out students understand what is open sourec and how to conndribute in a opensource projuct, for that we have contributer several contribution to hacktober fest",
                "date": ["Oct 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 9,
                "title": "Invention vs Innovation",
                "thumbnail": "/assets/activity/IvsI.jpg",
                "description": "An orientation section for the kjcmt students to know about what is invention and innovation.It halps the students to rectify the difference birween invention and innovation . ",
                "date": ["9 Oct 2022"],
                "tags": ["Session"]
            },
            {
                "id": 10,
                "title": "Call for extended team",
                "thumbnail": "/assets/activity/Exetended.jpg",
                "description": "The selection of our extened team. We have conducted interview of all apllayed students and selected a bunch of intrested students to inovus Fam.",
                "date": ["4 Oct 2023", "6 Oct 2023"],
                "tags": ["Internship"]
            },
            {
                "id": 11,
                "title": "Hands-on IoT Workshop",
                "thumbnail": "/assets/activity/handonIOT.jpg",
                "description": "This is a exibition counducted at MBC kuttikanam. A bunch of intrested students to learn IoT ",
                "date": ["27 April 2023", "28th April 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 12,
                "title": "IoT & Robotics Exhibition",
                "thumbnail": "/assets/activity/Iotexebition.jpeg",
                "description": "An exebition counducted on SB high school based on IT.They have interacted with VR glasses, hoverboard, etc . ",
                "date": ["3 Feb 2023"],
                "tags": ["Exhibition"]
            },
            {
                "id": 13,
                "title": "XPOVISTA ’23",
                "thumbnail": "/assets/activity/xpovista.JPG",
                "description": "This is a exibition counducted by kristu jyoti HSS, We the students of inovus Labs IEDC have displayed some of our products too ",
                "date": ["20 Sept 2023", "22 Sept 2023"],
                "tags": ["Exhibition"]
            },
            {
                "id": 14,
                "title": "Learn.py 2.0",
                "thumbnail": "/assets/activity/learnpy.JPG",
                "description": "An online event counducted for KJCMT studens to learn python. the students will get the basic knowleadge to understand and program in python",
                "date": ["9 Sept 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 15,
                "title": "LED Bulb Making Workshop",
                "thumbnail": "/assets/activity/LEDworkshop.jpg",
                "description": "A workshop to teach students how to make LED bulbs so that make bulb and sell them there own. ",
                "date": ["24 Jan 2023"],
                "tags": ["workshops"]
            },
            {
                "id": 16,
                "title": "Arduino Workshop",
                "thumbnail": "/assets/activity/arduinoIHRD.jpeg",
                "description": "We have counducted Arduino workshop for the students of IHRD mallapally students. It was a wonderfull experience to intract with new fellows",
                "date": ["23 Jan 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 17,
                "title": "Onam Trivia 2K22",
                "thumbnail": "/assets/activity/onam.png",
                "description": "Onam Trivia 2K22 an Instagram hunt conducted by Inovus Labs IEDC on 2nd Sept 2022 from 7:30 – 11:30pm. This trivia was conducted to engage with students from various departments and to make students more familiar about Onam and its traditions. The questions asked were mostly about onam and its origin. 150+ students took part in this trivia and the first one to answer each question through story reply was declared winner and awarded a bookmyshow voucher. ",
                "date": ["2 Sept 2022"],
                "tags": ["Challenge"]
            },
            {
                "id": 18,
                "title": "Vayanavaram",
                "thumbnail": "/assets/activity/vayana.png",
                "description": "Reading day was observed on June 19. Inovus labs celebrated reading day by introducing Vayanavaram which lasted a week. This event was all about completing a book or reading a book a full week and then sharing a picture with the book on Instagram. ",
                "date": ["20 June 2022", "26 June 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 19,
                "title": "Figma Pookalam",
                "thumbnail": "/assets/activity/pookalam.png",
                "description": "Reading day was observed on June 19. Inovus labs celebrated reading day by introducing Vayanavaram which lasted a week. This event was all about completing a book or reading a book a full week and then sharing a picture with the book on Instagram. ",
                "date": ["20 June 2022", "26 June 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 20,
                "title": "Inspire Orientation",
                "thumbnail": "/assets/activity/Inspire.png",
                "description": "The Inspire Orientation program, organized by Inovus Labs IEDC, was a significant step in empowering students to participate in the Inspire initiative conducted by the Indian Government. This initiative aims to cultivate innovation and creativity among young minds. The program featured accomplished resource persons, Nikhil T Das, Badhusha Shaji, and Abhishek V Gopal, and took place at the Offline Placid Vidhyavihar. It served as a platform to inspire and equip students from Classes 7 to 9 to turn their innovative ideas into reality",
                "date": ["12th July 2023"],
                "tags": ["Session"]
            },
            {
                "id": 21,
                "title": "Empower The Students",
                "thumbnail": "/assets/activity/Empower.png",
                "description": "The Empower The Students program, organized by Inovus Labs IEDC, was a transformative initiative designed to empower students to develop their innovative ideas. With a distinguished panel of resource persons, including Nikhil T Das, Badhusha Shaji, Abhishek V Gopal, and Nithin Daniel, this program aimed to equip students from Classes 5 to 10 at St. Berchman's High School (SB) with the knowledge, skills, and motivation needed to participate effectively in the Indian Government's Inspire initiative.  ",
                "date": ["14th July 2023"],
                "tags": ["Session"]
            },
            {
                "id": 22,
                "title": "Ideation Workshop",
                "thumbnail": "/assets/activity/ideation.jpeg",
                "description": "The  Ideation Workshop was organized by INOVUS LABS IEDC of Kristu Jyoti College, aiming to introduce the internal structure of PC to the students. This session facilitated students to understand application, working and practical implementations. The event featured a diverse lineup of resource persons who shared their expertise to foster student’s knowledge.  ",
                "date": ["25th Sep 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 23,
                "title": "Dislexia Awareness Section",
                "thumbnail": "/assets/activity/dyslexia.jpg",
                "description": "The INOVUS LABS IEDC of Kristu Jyoti College of Management and Technology and Post Graduate department of Psychology organized a Dyslexia Awareness Class with the goal of enhancing understanding and awareness of Dyslexia among students. The class aimed to equip participants with knowledge about Dyslexia, its signs, and effective strategies for supporting individuals with Dyslexia. ",
                "date": ["04th Oct 2023"],
                "tags": ["Session"]
            },
            {
                "id": 24,
                "title": "Figma Bootcamp",
                "thumbnail": "/assets/activity/figmabootcamp.jpg",
                "description": "Figma bootcamp was an online workshop conducted by the INOVUS LABS IEDC of Kristu Jyoti college to enhance the designing skills of students with the help of the popular designing tool called Figma. The primary and ultimate goal of the workshop was to create an unshakeable foundation in the field of designing.  ",
                "date": ["16th Oct 2023","21st Oct 2023"],
                "tags": ["Bootcamp"]
            },
            {
                "id": 25,
                "title": "Cyber Security Quiz",
                "thumbnail": "/assets/activity/cyberquiz.png",
                "description": "Cyber Security Quiz was a quiz competition conducted by INOVUS LABS IEDC of Kristu Jyoti College. Cyber security is a critical aspect of the digital age. The primary objective of this quiz session was to raise awareness about the importance of Cybersecurity practices among the students. This quiz can be treated as a valuable preparation tool which can instill a sense of continous learning, motivating students to stay updated on the latest developments in cybersecurity.",
                "date": ["25th Oct 2023"],
                "tags": ["Challenge"]
            },
            {
                "id": 26,
                "title": "Launch ATOM-EV 2022",
                "thumbnail": "/assets/activity/atomlaunch.jpg",
                "description": "As a stepping stone to endeavor, the students initiative of IEDC of Kristu Jyoti College of Management and Technology in association with the Department of Computer Application had launch a buggy car ATOM_EV_2022 on October 18th, 2022 at 11.00 am. The initiative was driven by Indhuchoodan R and Nikhil Das (Department of computer Application) of Kristu Jyoti College of Management and Technology, Changanassery, Kerala  ",
                "date": ["18th Oct 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 27,
                "title": "IOT Workshop",
                "thumbnail": "/assets/activity/iotworkshop.jpg",
                "description": "On December 7th 2022, the fellows of Inovus Labs IEDC has conducted a workshop on the topic 'Basics of Arduino' at the Inovus Labs . The session lasted for two hours started at 10.00 AM, which included the topics like working of the Arduino Uno board with some sensors, how to use Arduino IDE and how to make simple projects using Arduino. The session ended with a quiz program consisting of questions, from the above topics. The participants are awarded with certificates of participation. Our fellows Induchoodan R and Nikhil T. Das has leaded the session. We firmly believe that this will be huge confidence boost for students who wish to pursue higher studies in the field of Internet of things and computer programming Arduino UNO",
                "date": ["07th Dec 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 28,
                "title": "Celebrating Five Years of Inovus Labs IEDC",
                "thumbnail": "/assets/activity/5year.png",
                "description": "Five years ago, a seed was planted, and from that seed, Inovus Labs blossomed into a thriving Student Community. This journey has been one of continuous learning, evolving, and leaving an indelible mark on everyone associated with it. Today, we gather not just as individuals but as a united community that has embraced change, acquisition of knowledge, and the power of collaboration. This milestone would not have been possible without the collective efforts of numerous individuals who have contributed their time, passion, and dedication",
                "date": ["5th April 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 29,
                "title": "Entering the 100K Karma Club ",
                "thumbnail": "/assets/activity/100KKarma.png",
                "description": "Inovus Labs is thrilled to announce a momentous achievement that marks a significant milestone in our online presence. After dedicated efforts and unwavering commitment, we are proud to share that we have officially entered the esteemed 100K Karma Club on @gtechmulearn. Our collective endeavors have resulted in the accumulation of over 100,000 Karma Points from our various activities, a feat that has left us astounded and elated. The journey towards accumulating 100,000+ Karma Points has been a testament to our dedication and passion for creating valuable contributions within the @gtechmulearn community. ",
                "date": ["22nd Jan 2022"],
                "tags": ["Celebration"]
            },
            // {
            //     "id": 30,
            //     "title": "Launch ATOM-EV 2022",
            //     "thumbnail": "/assets/activity/atomlaunch.jpg",
            //     "description": "As a stepping stone to endeavor, the students initiative of IEDC of Kristu Jyoti College of Management and Technology in association with the Department of Computer Application had launch a buggy car ATOM_EV_2022 on October 18th, 2022 at 11.00 am. The initiative was driven by Indhuchoodan R and Nikhil Das (Department of computer Application) of Kristu Jyoti College of Management and Technology, Changanassery, Kerala  ",
            //     "date": ["18th Oct 2022"],
            //     "tags": ["Exhibition"]
            // }
        ]
    };

    return data;
};



// Get all reccuring events
export const getReccuringEvents = async () => {
    let data = {
        "tags": ["Weekend Workbench", "Hangout with Inovus", "Simply Series"],
        "events": [
            {
                "id": 1,
                "date": "19 May 2019",
                "title": "Hangout with Inovus -John Mathew",
                "description": "",
                "thumbnail": "/assets/reccuringevents/hangout-john.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 2,
                "date": "25 April 2020",
                "title": "Hangout with Inovus -Dr. Jimmy Mathew",
                "description": "",
                "thumbnail": "/assets/reccuringevents/hangout-drjimmy.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 3,
                "date": "05 May 2020",
                "title": "Hangout with Inovus -Mehar M P",
                "description": "",
                "thumbnail": "/assets/reccuringevents/hangout-mehar.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 4,
                "date": "19 May 2020",
                "title": "Hangout with Inovus -Enfa Rose George",
                "description": "",
                "thumbnail": "/assets/reccuringevents/hangout-enfa.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 5,
                "date": "16 May 2021",
                "title": "Simply Linkedin",
                "description": "",
                "thumbnail": "/assets/reccuringevents/simply-linkedin.jpg",
                "tags": ["Simply Series"]
               
            },{
                "id": 6,
                "date": "01 July 2021",
                "title": "Simply Blockchain",
                "description": "",
                "thumbnail": "/assets/reccuringevents/simply-blockchain.jpg",
                "tags": ["Simply Series"]
               
            },{
                "id": 7,
                "date": "01 July 2023",
                "title": "Weekend Workbench #1",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template1.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 8,
                "date": "08 July 2023",
                "title": "Weekend Workbench #2",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template2.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 9,
                "date": "15 July 2023",
                "title": "Weekend Workbench #3",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template3.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 10,
                "date": "22 July 2023",
                "title": "Weekend Workbench #4",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template4.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 11,
                "date": "29 July 2023",
                "title": "Weekend Workbench #5",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template5.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 12,
                "date": "5 Aug 2023",
                "title": "Weekend Workbench #6",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template6.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 13,
                "date": "23 Sept 2023",
                "title": "Weekend Workbench #7",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template8.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 14,
                "date": "30 Sept 2023",
                "title": "Weekend Workbench #8",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 1.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 15,
                "date": "07 Oct 2023",
                "title": "Weekend Workbench #9",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 2.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 16,
                "date": "14 Oct 2023",
                "title": "Weekend Workbench #10",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 3.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 17,
                "date": "21 Oct 2023",
                "title": "Weekend Workbench #11",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 11.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 18,
                "date": "04 Nov 2023",
                "title": "Weekend Workbench #12",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 12.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 19,
                "date": "11 Nov 2023",
                "title": "Weekend Workbench #13",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 13.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 20,
                "date": "18 Nov 2023",
                "title": "Weekend Workbench #14",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 14.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 21,
                "date": "02 Dec 2023",
                "title": "Weekend Workbench #15",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 15.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 22,
                "date": "09 Dec 2023",
                "title": "Weekend Workbench #16",
                "description": "",
                "thumbnail": "/assets/reccuringevents/workbench/Template 16.png",
                "tags": ["Weekend Workbench"]
               
            }       
        ]
    };

    return data;
}



// Get all social media posts
export const getSocialPosts = async () => {
    let data = {
        "instagram": [
            {
                "id": 1,
                "url": "https://www.instagram.com/p/C0bv6zuJkq2"
            },
            {
                "id": 2,
                "url": "https://www.instagram.com/p/C0ZJZnvPPn1"
            },
            {
                "id": 3,
                "url": "https://www.instagram.com/p/Cyvo6lUJpQR"
            }
        ],
        "linkedin": [
            {
                "id": 1,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7137095376020393984"
            },
            {
                "id": 2,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7118418226442604544"
            },
            {
                "id": 3,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7099761784420528128"
            }
        ],
        "youtube": [
            {
                "id": 1,
                "url": "https://www.youtube.com/embed/mOBuyUQ9WAE?si=9iwR36YwTUI-DicF"
            },
            {
                "id": 2,
                "url": "https://www.youtube.com/embed/CYKO8TiRLHU?si=3CGbZVI5bZC3IHq0"
            },
            {
                "id": 3,
                "url": "https://www.youtube.com/embed/videoseries?si=hum7bwG0SkRttfJE&amp;list=PLf17cHBJCwYj9Dsjy7k8DauwLCXwBR2BS"
            }
        ],
        "twitter": [
            {
                "id": 1,
                "url": "https://twitter.com/InovusLabs/status/1721051746947207352"
            },
            {
                "id": 2,
                "url": "https://twitter.com/InovusLabs/status/1715828644000813445"
            },
            {
                "id": 3,
                "url": "https://twitter.com/InovusLabs/status/1711584725733900390"
            }
        ],
        "threads": [
            {
                "id": 1,
                "url": "https://www.threads.net/@inovuslabs/post/CzM0DdUy5L_"
            },
            {
                "id": 2,
                "url": "https://www.threads.net/@inovuslabs/post/CypSOuzJFDI"
            },
            {
                "id": 3,
                "url": "https://www.threads.net/@inovuslabs/post/CyEkW87SkvN"
            }
        ]
    }

    return data;
}