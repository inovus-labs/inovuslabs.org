
<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/nanodegree.svg" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                InoRa: Amplifying Ideas, Empowering Minds
            </h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                Discover Inspiring Stories of Impact – Tune into <span class="font-bold">The Inovus Radio</span> for Conversations with Society's Change Agents.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="https://open.spotify.com/show/4QXEeK8ZWxewcXuLKCRR8R" target="_blank"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    Start listening now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

        </div>
    </section>




    <section class="lg:p-10 p-4 my-10">

        <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
            <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                🎙️ Welcome to The Inovus Radio Experience. 🌐
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                🎧 Tune in for a unique audio experience that transcends boundaries, brought to you by Inovus Radio on the world's leading streaming platform. Discover, engage, and enjoy the best of our curated podcasts right here! ✨
            </p>
        </div>


        <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div class="grid gap-8 lg:grid-cols-2">


                                


            </div>  
        </div>

    </section>


  <Footer />

</template>


<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import Footer from "@/components/reusable/Footer.vue";

    export default {
        name: 'NanodegreeView',
        components: {
            Navbar,
            Footer
        },

        data() {
            return {
                nanodegrees: [
                    
                    {
                        id: 1,
                        title: "Internet of Things Nanodegree Program",
                        
                        syllabus: [
                            {
                                id: 1,
                                title: "Introduction to the IoT",
                                lessons: [
                                    "Simple explanation of IoT and its impact on daily life",
                                    "Examples of IoT in various sectors: home automation, healthcare, and agriculture",
                                    "Brief discussion on the future potential of IoT",
                                ],
                                resources: [
                                    "https://www.youtube.com/watch?v=PXP4VSaD7H4"
                                ]
                            },

                            {
                                id: 2,
                                title: "Introduction to Microcontrollers and Microprocessors and Arduino",
                                lessons: [
                                    "Simple definitions suitable for beginners",
                                    "Contrast in usage with real-life examples",
                                    "Microcontroller: Used in a thermostat",
                                    "Microprocessor: Powering a smartphone",
                                    "Basic components and functionalities of each",
                                    "What is Arduino and why is it popular among beginners?",
                                    "Overview of different Arduino boards",
                                    "Overview of different Arduino boards",
                                ],
                                resources: [
                                    "https://www.youtube.com/watch?v=1ENiVwk8idM",
                                    "https://youtu.be/7vhvnaWUZjE?si=W7mBNCp5fHgLMuSI"
                                ]
                            },

                            {
                                id: 3,
                                title: "Inputs and Outputs in Arduino",
                                lessons: [
                                    "Explanation of digital and analog pins",
                                    "How to read signals from sensors",
                                    "How to send signals to actuators like LEDs or motors",
                                ],
                                resources: [
                                    "https://www.youtube.com/watch?v=BMMnOAzcqoE"
                                ]
                            },

                            {
                                id: 4,
                                title: "Introduction to Online Simulator: Wowki and Tinkercad",
                                lessons: [
                                    "Benefits of using Wowki and Tinkercad for beginners",
                                    "How to set up a virtual circuit",
                                    "Simulating the tasks above in Wowki or Thinkercad"
                                ],
                                resources: [
                                    "https://www.youtube.com/watch?v=c5btoce--ZU"
                                ],
                                tasks: [
                                    {
                                        id: 1,
                                        title: "LED Blinking",
                                        description: [
                                            "Blink an LED using Arduino"
                                        ],
                                    }
                                ]
                            },

                            {
                                id: 5,
                                title: "Working with Sensors",
                                lessons: [
                                    "Ultrasonic Sensor",
                                    "Humidity Sensor",
                                    "Gas Sensor",
                                    "IR Receiver",
                                    "LDR (Light-Dependent Resistor)",
                                    "PIR (Passive Infrared) Sensor",
                                    "Pushbutton",
                                    "Joystick Module",
                                ],
                                resources: [
                                    "https://www.youtube.com/watch?v=0Lhgd8PQmn0"
                                ],
                                tasks: [
                                    {
                                        id: 2,
                                        title: "Distance Measurement",
                                        description: [
                                            "Creating a simple distance meter"
                                        ],
                                    },
                                    {
                                        id: 3,
                                        title: "Humidity Monitoring",
                                        description: [
                                            "Building a basic humidity level indicator"
                                        ],
                                    },
                                    {
                                        id: 4,
                                        title: "Gas Leak Detector",
                                        description: [
                                            "Designing a simple gas leak alarm"
                                        ],
                                    },
                                    {
                                        id: 5,
                                        title: "Remote Control Command Reception",
                                        description: [
                                            "Understanding how to receive and interpret IR signals"
                                        ],
                                    },
                                    {
                                        id: 6,
                                        title: "Light Intensity Measurement",
                                        description: [
                                            "Creating a system that reacts to changing light conditions"
                                        ],
                                    },
                                    {
                                        id: 7,
                                        title: "Motion Detection System",
                                        description: [
                                            "Building a motion-activated device"
                                        ],
                                    },
                                    {
                                        id: 8,
                                        title: "Interactive Control",
                                        description: [
                                            "Using a pushbutton to control an LED or a buzzer"
                                        ],
                                    },
                                    {
                                        id: 9,
                                        title: "Directional Control",
                                        description: [
                                            "Using a joystick to control an LED array or a small display"
                                        ],
                                    },
                                ]
                            },

                            {
                                id: 6,
                                title: "Connecting and Controlling a Servo Motor",
                                lessons: [
                                    "Understanding servo motors and their uses",
                                ],
                                tasks: [
                                    {
                                        id: 10,
                                        title: "Controlling Servo Motor",
                                        description: [
                                            "Move a servo motor to specific angles"
                                        ],
                                    },
                                ]
                            },

                            {
                                id: 7,
                                title: "Using LCD Displays",
                                lessons: [
                                    "Introduction to LCD displays and their types",
                                ],
                                tasks: [
                                    {
                                        id: 11,
                                        title: "Displaying Sensor Readings",
                                        description: [
                                            "Show readings from sensors on an LCD"
                                        ],
                                    }
                                ]
                            },
                            
                        ],

                        projects: [
                            
                            {
                                id: 1,
                                title: "Automated Room Lighting System",
                                objective: "Build an automatic lighting system that turns on in the dark and off in bright conditions",
                                components: [
                                    "Arduino",
                                    "Light-Dependent Resistor (LDR)",
                                    "LED or LED strip",
                                ],
                                skills: [
                                    "Reading analog input from LDR",
                                    "Controlling LED output"
                                ],
                                description: "This project uses an LDR to detect the amount of light in the room. When the light level falls below a certain threshold, the Arduino commands an LED to turn on. The LED turns off again when the light level rises above the threshold."
                            },

                            {
                                id: 2,
                                title: "Basic Security System",
                                objective: "Design a simple security system that sounds an alarm when motion is detected",
                                components: [
                                    "Arduino",
                                    "Passive Infrared (PIR) sensor",
                                    "Buzzer",
                                    "LED indicators",
                                ],
                                skills: [
                                    "Digital input from PIR sensor",
                                    "Output control with buzzer and LED"
                                ],
                                description: "This project uses a PIR sensor to detect motion in the room. When the sensor detects motion, the Arduino commands a buzzer to sound an alarm and an LED to flash. The alarm and LED turn off again when the sensor no longer detects motion."
                            },

                            {
                                id: 3,
                                title: "Personal Room Thermostat",
                                objective: "Implement a thermostat to monitor and control room temperature",
                                components: [
                                    "Arduino",
                                    "Temperature sensor",
                                    "LCD display",
                                    "Buttons / Potentiometer",
                                ],
                                skills: [
                                    "Temperature sensing",
                                    "Data display on LCD",
                                    "User input handling"
                                ],
                                description: "This project uses a temperature sensor to detect the temperature in the room. The Arduino displays the temperature on an LCD screen and allows the user to set a desired temperature using buttons or a potentiometer. When the temperature rises above the desired level, the Arduino commands a buzzer to sound an alarm and an LED to flash. The alarm and LED turn off again when the temperature falls below the desired level."
                            },

                            {
                                id: 4,
                                title: "Smart Dustbin",
                                objective: "Create an automated dustbin that opens its lid when someone approaches",
                                components: [
                                    "Arduino",
                                    "Ultrasonic Sensor",
                                    "Servo Motor",
                                ],
                                skills: [
                                    "Reading analog input from temperature sensor",
                                    "Controlling LED output"
                                ],
                                description: "This project uses an ultrasonic sensor to detect the presence of a person or object near the dustbin. When the sensor detects someone within a certain distance, the Arduino commands a servo motor to open the lid of the dustbin, closing it again after a set period or when the object moves away."
                            },

                            {
                                id: 5,
                                title: "Remote-Controlled Light Dimmer",
                                objective: "Construct a light dimming system controlled by an IR remote",
                                components: [
                                    "Arduino",
                                    "IR receiver",
                                    "LED / dimmable light",
                                    "IR remote control",
                                ],
                                skills: [
                                    "IR signal decoding",
                                    "Light dimming using PWM",
                                    "Remote control usage"
                                ],
                                description: "This project uses an IR receiver to detect signals from an IR remote control. When the Arduino receives a signal, it commands an LED to turn on or off, or to dim or brighten."
                            },

                            {
                                id: 6,
                                title: "Pin Locker with Keypad and LCD",
                                objective: "Create a pin-based locker system using a keypad and LCD display",
                                components: [
                                    "Arduino",
                                    "Numeric keypad",
                                    "16x2 LCD screen", 
                                    "Servo motor",
                                ],
                                skills: [
                                    "Input handling from keypad",
                                    "Displaying information on LCD",
                                    "Controlling servo to lock/unlock"
                                ],
                                description: "This project uses a numeric keypad to allow the user to enter a PIN. When the correct PIN is entered, the Arduino commands a servo motor to unlock the locker. The Arduino also displays the status of the locker on an LCD screen."
                            }

                        ]
                    },

                    {
                        id: 2,
                        title: "Web Designing Nanodegree Program",
                        syllabus: [],
                        projects: []
                    },

                    {
                        id: 3,
                        title: "Graphic Designing Nanodegree Program",
                        syllabus: [],
                        projects: []
                    },

                    {
                        id: 4,
                        title: "DevOps Nanodegree Program",
                        syllabus: [],
                        projects: []
                    }
                ]
            }
        }
    }
</script>