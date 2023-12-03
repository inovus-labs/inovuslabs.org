

import axios from 'axios';




// Get all projects
export const getProjects = async () => {
    let data = [
        {
            "id": 1,
            "title": "Atom EV",
            "description": "The electric car designed and constructed by college students is an impressive blend of innovation, sustainability, and prominent technology. Crafted with a combination of academic knowledge and hands-on expertise, this vehicle represents a remarkable achievement in the world of automotive engineering",
            "thumbnail": "/projects/Atom.jpg",
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
            "thumbnail": "/projects/Edubulb.jpeg",
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
            "thumbnail": "/projects/Automation.jpeg",
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
            "thumbnail": "/projects/scrapbook.jpeg",
            "status": "Completed",
            "tags": ["Software"],
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
            "thumbnail": "/projects/chacko_mash.jpeg",
            "status": "Completed",
            "tags": ["Software"],
            "contributors": [
                {
                    "name": "Arjun Krishna",
                    "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                }
            ]
        },
        {
            "id": 7,
            "title": "Sound Thoma (Discord Bot)",
            "description": "Sound Thoma is our bot for Discord, designed to make your music experience during their work time. The engagement is funnier sometimes, we often conduct video chats and calls during the work. We usually rely on Spotify for listening to music to make the time more enjoyable. Literally the ads coming unexpectedly are mood spoilers especially during romantic songs. We’ve introduced a better alternative for this. Here you can listen to unlimited music without ads. sounds interesting right. Here you can create and manage your playlists directly within Discord. Simply type /play followed by the song or artist you want to hear.",
            "thumbnail": "/projects/sound_thoma.jpeg",
            "status": "Completed",
            "tags": ["Software"],
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
            "description": "Inovus blog is a platform where anyone can express and share their thoughts, ideas, criticism in a constructive manner. The blog has been stood as a media platform for students to being vociferous on social, political, technological and other related issues.",
            "thumbnail": "/projects/Inovus_blogs.jpeg",
            "status": "Completed",
            "tags": ["Software"],
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
            "thumbnail": "/projects/API.jpeg",
            "status": "Completed",
            "tags": ["Software"],
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
            "thumbnail": "/projects/OSM_Datapool.jpg",
            "status": "Completed",
            "tags": ["Software", "Open-source"],
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
            "thumbnail": "/projects/8x8LED.jpeg",
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
            "thumbnail": "/projects/morsecode.png",
            "status": "Completed",
            "tags": ["Software"],
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
            "thumbnail": "/projects/Blind_stick.jpeg",
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
            "thumbnail": "/projects/RC_CAR.jpeg",
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
            "thumbnail": "/projects/smart_lock.jpg",
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
            "thumbnail": "/projects/traffic_light.jpeg",
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
            "thumbnail": "/projects/E-waste_Bin.jpeg",
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
            "thumbnail": "/projects/Soil.jpeg",
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
            "thumbnail": "/projects/Breath_ana.jpg",
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
            "thumbnail": "/projects/Ino-mail.jpeg",
            "status": "Completed",
            "tags": ["Software"],
            "contributors": [
                {
                    "name": "Arjun Krishna",
                    "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                }
            ]
        },
        {
            "id": 21,
            "title": "Robotic Arm",
            "description": "A remarkable robotic arm, meticulously crafted by a team of ingenious college students, showcases an impressive fusion of engineering prowess and innovative design. This marvel of modern technology consists of multiple high-precision servos working in perfect harmony to execute intricate tasks with precision and finesse.",
            "thumbnail": "/projects/Ino-mail.jpeg",
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
            "id": 22,
            "title": "LPG Detector",
            "description": "The college student-created LPG (liquefied petroleum gas) detector is an innovative device designed to enhance safety in domestic and commercial environments by detecting the presence of potentially hazardous gas leaks. This compact and user-friendly device is the result of collaborative efforts and cutting-edge engineering from a group of talented and ambitious college students.",
            "thumbnail": "/projects/Ino-mail.jpeg",
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
            "excerpt": "Instagram is a popular social media platform and mobile app designed for sharing photos and videos. It was launched in October 2010 and has since become one of the most widely used social networking platforms in the world. Instagram allows users to create profiles, post photos and videos, and interact with others through likes, comments, and direct messages.\n\nInstagram has evolved significantly since its inception and has played a crucial role in shaping how people share and consume visual conte"
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