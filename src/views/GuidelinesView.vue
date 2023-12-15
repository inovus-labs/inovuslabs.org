
<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/guidelines.svg" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                Guiding the Guardians: The Handbook Unleashed!
            </h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                Empowering Innovation through Clearly Defined Rules and Responsibilities – Unleashing the Potential at Inovus Labs IEDC.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" target="_blank"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    <span>Download IEDC Handbook</span>
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

        </div>
    </section>

        


    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🌟 Discover your role in our story! 🌐
                </h1>

                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Explore the essence of each position in our dynamic team on the Roles and Responsibilities page. Uncover how you can contribute to our journey and make an impact. Join us in shaping the narrative! 🚀
                </p>
            </div>

            
            
            <div class="grid text-left gap-8 md:grid-cols-3">
                <template v-for="item in guideline" :key="item.id">
            
                    <Guidelines
                        :item="item"
                        :showReadMore=true
                    /> 
                    
                </template>
            </div>

        </div>
    </section>


  <Footer />

</template>


<script>
    import Navbar from "@/components/Reusable/Navbar.vue";
    import Footer from "@/components/Reusable/Footer.vue";
    import Guidelines from "@/components/Guidelines.vue";

    export default {
        name: 'GuidelinesView',
        components: {
            Navbar,
            Guidelines,
            Footer
        },
        data() {
            return {
                guideline: [
                    {
                        id: 2,
                        title: 'Nodal Officer',
                        image: '/assets/illustrations/guidelines/nodal_officer.svg',
                        description: [
                            "The Nodal Officer is advised to nurture the talent and it undergoes multiple phases during its journey from identifying right students, right scalable idea and sustainability of the idea, team and IEDC.",
                            "The IEDC student committee members shall be selected under an evaluation of committee headed by Nodal officer."
                        ]
                    },
                    {
                        id: 2,
                        title: 'Mentor',
                        image: '/assets/illustrations/guidelines/mentor.svg',
                        description: [
                            "A person, usually an IEDC alumnus who actively involves in the skill-upliftment of the students, more from an industry point-of-view.",
                            "Can act as a resource person for tech events, mentor for projects and initiatives from IEDC, a guide for day-to-day activities, and what else.",
                            "Should foster the allegations against any community members and make decisions in consultation with the Nodal Officer.",
                            "Maintain a healthy relationship with all the community members and should keep a good touch with them periodically.",
                            "Has the privilege to make healthy criticism of the team and has the responsibility to guide the team towards the path of light.",
                            "Establish a process for resolving conflicts in a constructive manner. Encourage the members to address conflicts directly with the parties involved or with a supervisor if needed.",
                            "The mentor has no privilege in making  decision in the team. All the decisions are handled and taken by the team and nodal officer collectively.",
                        ]
                    },
                    {
                        id: 3,
                        title: 'Chief Executive Officer',
                        image: '/assets/illustrations/guidelines/ceo.svg',
                        description: [
                            "The point-of-contact between other IEDC officials outside the college and KSUM Officials.",
                            "Present monthly report at Exe-com meeting.",
                            "Conduct monthly meeting with the IEDC team.",
                            "Yearly reports for KSUM should be prepared and submitted before Exe-com.",
                            "Responsible for setting the strategic direction and long-term vision of the IEDC. They work with the board of directors and other key stakeholders to develop and implement strategies that promote innovation and entrepreneurship.",
                            "Oversees the day-to-day operations of the IEDC. This includes managing budgets and resources and ensuring the efficient and effective delivery of programs and services.",
                            "Serves as the primary spokesperson and representative of the IEDC. They include engaging with various stakeholders, including government agencies, industry partners, educational institutions, entrepreneurs, and the public. Building and maintaining strong relationships with these stakeholders is crucial for the success of the IEDC.",
                            "The CEO plays a key role in securing funding and resources for the IEDC. This involves identifying potential funding sources, developing partnerships, and seeking sponsorships or grants from government agencies, private organizations, and philanthropic foundations.",
                            "The CEO represents the IEDC in advocating for policies and regulations that support innovation and entrepreneurship. They work closely with policymakers and industry leaders to influence and shape policies that create an enabling environment for startups and entrepreneurs.",
                        ]
                    },
                    {
                        id: 4,
                        title: 'Chief Technical Officer',
                        image: '/assets/illustrations/guidelines/cto.svg',
                        description: [
                            "Head of all technical activities, project works, and production works at IEDC",
                            "In charge of all the technical events conducted at or by IEDC.",
                            "Super Admin of all digital playgrounds that include our official Email, Social Media platforms, Discord platform, and Server Administration.",
                            "Responsible for the management and maintenance of all digital platforms",
                            "In charge of IOT Stock, alongside the Stock Manager and COO."
                        ]
                    },
                    {
                        id: 5,
                        title: 'Chief Operations Officer',
                        image: '/assets/illustrations/guidelines/coo.svg',
                        description: [
                            "Commander of all operations and events conducted at and by IEDC, both inside and outside the college.",
                            "Should act as the bridge between the Exe-com members and the gathered special interest groups (event coordination team).",
                            "In charge of IOT Stock, alongside the Stock Manager and CTO.",
                        ]
                    },
                    {
                        id: 6,
                        title: 'Chief Financial Officer',
                        image: '/assets/illustrations/guidelines/cfo.svg',
                        description: [
                            "Should record each and every transaction of funds in IEDC.",
                            "Documents like bills, challans, etc.. that are related to fund flow, daily transactions, and other financial documents should be maintained safely.",
                            "Detailed related to transaction vouchers /  from Office, College Management, Principal, Nodal Officer, Assistant Nodal Officer Exe-com or students are to be recorded separately and be settled on time.",
                            "As financial matters are of top priority and involve permissions from management and administration levels (at often-times), all transactional dealings have to be conducted with proper authorization from Nodal Officer and Assistant Nodal Officer.",
                            "The financial matters that happened over the period of a month be announced at the monthly Exe-com meeting.",
                            "Will be responsible for drafting the Budget planning and Annual Audit Report drafting.",
                        ]
                    },
                    {
                        id: 7,
                        title: 'Chief Marketing Officer',
                        image: '/assets/illustrations/guidelines/cmo.svg',
                        description: [
                            "In charge of all PR activities conducted for any events and of IEDC itself",
                            "In charge of all pre-event and post-event activities of an event. Purchase of Goods, Momentous, Certificates, and other things related to IEDC shop-keeping should be managed. Make sure that, every activity is photographed and video graphed for after-event promotion and archiving.",
                            "Make sure that, each and every inspiring activity at/by IEDC are updated on our Social Medias.",
                            "Coordinate with CCO and Design Team for digital assets, for effective event promotion, appreciation, celebration, and what-else.",
                        ]
                    },
                    {
                        id: 8,
                        title: 'Chief Innovations Officer',
                        image: '/assets/illustrations/guidelines/cio.svg',
                        description: [
                            "Develop and implement an innovation strategy aligned with the IEDC's goals and objectives. ",
                            "Foster a culture of creativity and ideation within the IEDC. Evaluate and prioritize ideas based on their feasibility, potential impact, and alignment with the IEDC's mission.",
                            "Design and implement structured processes and frameworks to support innovation. ",
                            "Stay informed about emerging technologies, trends, and industry developments relevant to innovation and entrepreneurship. Conduct research and analysis to identify potentially disruptive technologies and their implications for the IEDC and its stakeholders.",
                            "Manage the intellectual property (IP) generated through innovation initiatives. Develop strategies for protecting and commercializing IP assets. ",
                            "Provide guidance and support to entrepreneurs and startups within the IEDC. Offer mentorship, coaching, and access to resources to help them develop and refine their innovative ideas.",
                        ]
                    },
                    {
                        id: 9,
                        title: 'Chief Creative Officer',
                        image: '/assets/illustrations/guidelines/cco.svg',
                        description: [
                            "One-stop shop for all creative asset requirements of IEDC.",
                            "Head of the Social-media Team and is responsible for every creative asset generated/published from IEDC.",
                            "Develop and implement a creative strategy that aligns with the IEDC's goals and objectives. This strategy should promote and support creativity, innovation, and design thinking throughout the organization.",
                            "Ensure that design principles and user experience considerations are integrated into the IEDC's programs, services, and initiatives.",
                            "Organize and facilitate workshops, training sessions, and events to enhance the creative thinking, problem-solving, and innovation capabilities of students.",
                            "Encourage a culture of prototyping and experimentation within the IEDC. Support entrepreneurs and employees in developing prototypes, testing ideas, and iterating based on feedback and data. Promote a mindset of learning from failures and embracing iterative approaches.",
                        ]
                    },
                    {
                        id: 10,
                        title: 'Chief Social Officer',
                        image: '/assets/illustrations/guidelines/cso.svg',
                        description: [
                            "The person is often referred to, as the Community Leader and is responsible to watch-over the IEDC more as a student community and prevent it from sliding over towards a hierarchical organization.",
                            "Should act as the bridge between every sector of IEDC, beholding the core ethical and moral principles of the community.",
                            "Should act alongside Nodal Officer on any incident of grievance or issue, if reported.",
                        ]
                    },
                    {
                        id: 11,
                        title: 'Ex-Members',
                        image: '/assets/illustrations/guidelines/ex-members.svg',
                        description: [
                            "Alumni/ex-members often have the opportunity to attend special events and reunions organized by the college and IEDC. These events can foster a sense of belonging, facilitate networking, and provide a chance to reconnect with former classmates and faculty.",
                            "The college management and inovus labs IEDC has granted the permission to the Alumni/ex members, the access to visit occasionally and make conversation with the team members of inovus labs IEDC.  ",
                            "Alumni can serve as mentors, providing guidance, support, and sharing their professional experiences to help students navigate their careers or academic paths.",
                        ]
                    },
                ]
            }
        },
    }
</script>