

import axios from 'axios';




export const getProjects = async () => {
    let data = [
        {
            id: 1,
            title: "Noteworthy technology acquisitions 2021",
            description: "A list of noteworthy technology acquisitions 2021. This list is updated on a regular basis.",
            thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
            url: "",
            tags: ["React", "Vue", "Bootstrap 5", "HTML", "CSS", "JavaScript"],
            contributors: [
                {
                    name: "John Doe",
                    avatar: "https://flowbite.com/docs/images/avatars/avatar-1.jpg",
                },
                {
                    name: "Jane Doe",
                    avatar: "https://flowbite.com/docs/images/avatars/avatar-2.jpg",
                }
            ]
        },

        {
            id: 2,
            title: "Noteworthy technology acquisitions 2021",
            description: "A list of noteworthy technology acquisitions 2021. This list is updated on a regular basis.",
            thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
            url: "https://flowbite.com/docs",
            tags: ["React", "Vue", "Bootstrap 5", "HTML", "CSS", "JavaScript"],
            date: "2021-05-01",
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
            id: 3,
            title: "Noteworthy technology acquisitions 2021",
            description: "A list of noteworthy technology acquisitions 2021. This list is updated on a regular basis.",
            thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
            url: "https://flowbite.com/docs",
            tags: ["React", "Vue", "Bootstrap 5", "HTML", "CSS", "JavaScript"],
            date: "2021-05-01",
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
            title: "Noteworthy technology acquisitions 2021",
            description: "A list of noteworthy technology acquisitions 2021. This list is updated on a regular basis.",
            thumbnail: "https://flowbite.com/docs/images/blog/image-1.jpg",
            url: "https://flowbite.com/docs",
            tags: ["React", "Vue", "Bootstrap 5", "HTML", "CSS", "JavaScript"],
            date: "2021-05-01",
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
        }
    ];

    return data;
};




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
                    "url": "https://blog.inovuslabs.org/author/arjun/"
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