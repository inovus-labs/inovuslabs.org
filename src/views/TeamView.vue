
<template>

  <Navbar />
  
  <section class="bg-bgPrimary">
    <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

      <div class="w-full lg:w-1/3 py-4 lg:py-20">
        <img class="w-full h-full" src="../../public/about.svg" />
      </div>
      
      <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
        <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">Our Story: Fueling Innovation at Inovus Labs.</h1>
        <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-48">Discover the genesis, purpose, and vision that fuels Inovus Labs IEDC's commitment to innovation and entrepreneurship.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
                Learn more
            </a>  
        </div>
      </div>
    
    </div>
  </section>


  <section class="py-10 px-4">
    
    
    <div class="mx-auto max-w-screen-xl text-center w-full py-4 lg:pt-10">
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">We invest in the world’s potential</h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>
      
      
    <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-10">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">                  

        <TeamCard 
          v-for="item in data" 
          :key="item.title" 
          :title="item.title" 
          :date="item.date" 
          :members="item.members"
          :showTeam="item.showTeam" 
          @click="toggleTeam(item)"
        />

      </ol>

    </div>
  </section>

  

  <Footer />

</template>


<script>
  import Navbar from "@/components/reusable/Navbar.vue";
  import Footer from "@/components/reusable/Footer.vue";

  import TeamCard from "@/components/TeamCard.vue";

  export default {
    name: 'AboutView',
    components: {
      Navbar,
      TeamCard,
      Footer
    },
    
    methods: {
      toggleTeam(item) {

        this.data.forEach((item) => {
          item.showTeam = false
        })

        item.showTeam = !item.showTeam
      }
    },

    data() {
      return {
        data: [
          {
              title: 'Inovus 6th Generations',
              date: '2023-2024',
              showTeam: true,
              members: [

                  {
                      name: ' Roji Thomas',
                      position: 'Nodel Officer',
                      avatar: '/Team/2018-2020/rojithomas.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Cina Mathew',
                      position: 'Assistant Nodal Officer',
                     avatar: '/Team/2023/cinamathew.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Arjun Krishna',
                      position: 'Mentor',
                     avatar: '/Team/2018-2020/arjunkrishna.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Badhusha Shaji',
                      position: 'Chief Executive Officer',
                     avatar: '/Team/2024/BadhushaShaji.jpeg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Abhishek V Gopal',
                      position: 'Chief Technical Officer',
                     avatar: '/Team/2024/Abhishek.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Nikhil T Das',
                      position: 'Chief Operations Officer',
                     avatar: '/Team/2024/NikilTDas.jpeg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Nithin Daniel',
                      position: 'Chief Financial Officer',
                     avatar: '/Team/2024/Nithin.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Arjun A Acharry',
                      position: 'Chief Creative Officer',
                     avatar: '/Team/2024/ArjunAcharry.JPG',
                      social: {
                        facebook: ""
                      }
                  },{
                      name: ' Joel Jacob Thomas',
                      position: 'Chief Marketing Officer',
                     avatar: '/Team/2024/JoelJacob.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Lekshmi Sree J',
                      position: 'Women in Tech Lead',
                     avatar: '/Team/2024/lekshmisree.jpeg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Milan Sony',
                      position: 'Community Lead',
                     avatar: '/Team/2024/milansony.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Anu Tiji',
                      position: 'IPR & Research Lead',
                     avatar: '/Team/2024/Anutiji.jpeg',
                      social: {
                        facebook: ""
                      }
                  }, 
              ]
          }, {
              title: 'Inovus 5th Generations',
              date: '2022-2023',
              showTeam: false,
              members: [

                  {
                      name: ' Roji Thomas',
                      position: 'Nodal Officer',
                     avatar: '/Team/2018-2020/rojithomas.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Cina Mathew',
                      position: 'Assistant Nodal Officer',
                     avatar: '/Team/2023/cinamathew.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Arjun Krishna',
                      position: 'Mentor',
                     avatar: '/Team/2018-2020/arjunkrishna.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: 'Jeeven Josheph',
                      position: 'Chief Executive Officer',
                     avatar: '/Team/2022/jeevenjosheph.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Nikhil T Das',
                      position: 'Chief Financial Officer',
                     avatar: '/Team/2023/Nikhiltdas.JPG',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Joseph Mathai Pathil',
                      position: 'Chief Operations Officer',
                     avatar: '/Team/2022/josephmathai.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Induchoodan R',
                      position: 'Chief Technical Officer',
                     avatar: '/Team/2023/Indhuchoodan.JPG',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Meretta Suresh',
                      position: 'Chief Marketing Officer',
                     avatar: '/Team/2023/Meritta.JPG',
                      social: {
                        facebook: ""
                      }
                  },  {
                      name: ' Badhusha Shaji',
                      position: 'Chief Creative Officer',
                     avatar: '/Team/2023/badhushashaji.jpeg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Aryadevi C S',
                      position: 'Chief Social Officer',
                     avatar: '/Team/2023/aryadevics.JPG',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Amal Joseph',
                      position: 'Chief Innovations Officer',
                     avatar: '/Team/2023/AmalJoseph.JPG',
                      social: {
                        facebook: ""
                      }
                  }, 
              ]
          }, {
              title: 'Inovus 4th Generations',
              date: '2021-2022',
              showTeam: false,
              members: [

                  {
                      name: ' Roji Thomas',
                      position: 'Nodal Officer',
                     avatar: '/Team/2018-2020/rojithomas.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Arjun Krishna',
                      position: 'Student Co-ordinator',
                     avatar: '/Team/2018-2020/arjunkrishna.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Sreelakshmi Anilkumar',
                      position: 'Chief Executive Officer',
                     avatar: '/Team/2022/srelekshmi.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Jeevan Joseph',
                      position: 'Chief Technical Officer',
                     avatar: '/Team/2022/jeevenjosheph.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Sandra Krishnan',
                      position: 'Chief Financial Officer',
                     avatar: '/Team/2022/sandra.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Joseph Mathai Pathi',
                      position: 'Chief operations Officer',
                     avatar: '/Team/2022/josephmathai.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Christeena Zachariah',
                      position: 'Chief Creative Officer',
                     avatar: '/Team/2022/christeena.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Meretta Suresh',
                      position: 'Chief Social Officer',
                     avatar: '/Team/2022/meretta.jpg',
                      social: {
                        facebook: ""
                      }
                  }, 
              ]
          }, {
              title: 'Inovus 3rd Generations',
              date: '2020-2021',
              showTeam: false,
              members: [

                  {
                      name: ' Roji Thomas',
                      position: 'Nodal Offier',
                     avatar: '/Team/2018-2020/rojithomas.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Jithin Shah',
                      position: 'Student Co-ordinato',
                     avatar: '/Team/2018-2020/jithinshah.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Antony Frenandez',
                      position: 'Chief Executive Officer',
                     avatar: '/Team/2021/antonyfernandez.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Indhuchoodan R',
                      position: 'Cheif Technical Officer',
                     avatar: '/Team/2021/induchoodan.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Franklin Jetty Johnson',
                      position: 'Chief Financial Officer',
                     avatar: '/Team/2021/franklin.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Thomas George',
                      position: 'Chief Marketing Officer',
                     avatar: '/Team/2021/thomasgeorge.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Ckesiah Mary Sam',
                      position: 'Chief Innovations Officer',
                     avatar: '/Team/2021/ckeiah.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Jaike Jacob Binoy',
                      position: 'Chief Operations Officer',
                     avatar: '/Team/2021/jaikejacob.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: 'Sheril Susan Manu',
                      position: 'Chief Creative Officer',
                     avatar: '/Team/2021/sherilsusan.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Nikhil T Das',
                      position: 'Chief Social Officer',
                     avatar: '/Team/2021/nikhiltdas.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Meera Mariam Jacob',
                      position: 'Stock Manager',
                     avatar: '/Team/2021/meeramariam.png',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Anuraj T R',
                      position: 'Event Curator',
                     avatar: '/Team/2021/anuraj.png',
                      social: {
                        facebook: ""
                      }
                  }, 
              ]
          }, {
              title: 'Inovus 2nd Generations',
              date: '2018-2020',
              showTeam: false,
              members: [

                  {
                      name: ' Roji Thomas',
                      position: 'Nodal Officer',
                     avatar: '/Team/2018-2020/rojithomas.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Jithin Shah',
                      position: 'Student Co-ordinator',
                     avatar: '/Team/2018-2020/jithinshah.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Laya Anna Lalan',
                      position: 'Chief Executive Officer',
                     avatar: '/Team/2018-2020/layaanna.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Midhun Murali',
                      position: 'Chief Technical Officer',
                     avatar: '/Team/2018-2020/midhunmurali.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Megha Manoj',
                      position: 'Chief Financial Officer',
                     avatar: '/Team/2018-2020/meghamanoj.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Karpaka Devi',
                      position: 'Chief Marketing Officer',
                     avatar: '/Team/2018-2020/karpaka.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name:' Arjun Krishna',
                      position: 'Chief Innovations Officer',
                     avatar: '/Team/2018-2020/arjunkrishna.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Johna Aswin Selva',
                      position: 'Chief Operations Officer',
                     avatar: '/Team/2018-2020/johnaaswin.jpg',
                      social: {
                        facebook: ""
                      }
                  },{
                      name:' Justin Titus',
                      position: 'Chief Creative Officer',
                     avatar: '/Team/2018-2020/justin.jpg',
                      social: {
                        facebook: ""
                      }
                  }, {
                      name: ' Alan Varghese ',
                      position: 'Chief Social Officer',
                     avatar: '/Team/2018-2020/alanvarghese.jpg',
                      social: {
                        facebook: ""
                      }
                  },  
              ]
          }, {
              title: 'The Founders of Inovus Labs IEDC',
              date: '2017',
              showTeam: false,
              members: [

              {
                      name: '',
                      position: '',
                     avatar: '/Team/founders.jpg',
                      social: {
                        facebook: ""
                      }
                  },
               
              
               
              ]
          },
        ]
      }
    },
  }
</script>