//export const categories = ["news", "science", "maker"]

export const categories = [
  "Novidades da Semana",
  "Ciência e Tecnologia",
  "Projetos Maker"
]

export const articles = [
  {
    newsletter_id: "2021/318/",
    category: "Novidades da Semana",
    image: "NS318_SpacexLaunchesNewSolarArraysTo_s.jpg",
    text:
      "\"SpaceX launched its 17th rocket of the year today (June 3), sending a robotic Dragon cargo capsule toward the International Space Station before nailing a landing at sea. A two-stage Falcon 9 rocket blasted off from Pad 39A here at NASA’s Kennedy Space Center at 1:29 p.m. EDT (1729 GMT), kicking off the company's 22nd resupply mission to the orbiting lab for NASA. The Dragon is packed with more than 7,300 lbs. (3,311 kilograms) of supplies, scientific experiments and hardware, including two new solar arrays for the space station's power grid. Approximately 9 minutes after liftoff, the Falcon 9's first stage returned to Earth, landing on one of SpaceX's drone ships in the Atlantic Ocean in a smooth touchdown. The massive ship, called \"Of Course I Still Love You,\" is one of two in the company’s fleet of recovery vessels that catch falling boosters and return them to port for later reuse.\" [...]\n ",
    url: "https://www.space.com/spacex-dragon-crs-22-nasa-cargo-launch-success",
    curated_by: "João Alves <https://jpralves.net/>",
    title:
      "SpaceX launches new solar arrays to space station, nails rocket landing at sea"
  },
  {
    newsletter_id: "2021/318/",
    category: "Ciência e Tecnologia",
    image: "CT318_UltrasonicWeldingMakesPartsFor_s.jpg",
    text:
      '"A manufacturing innovation that has applications for NASA spacecraft is being transferred to the private sector to support a variety of industries here on Earth. A burst water main is always expensive and messy, but a pipe that fails in space can be mission-ending. That’s why NASA technologists work hard to make hardware as reliable as possible. Sometimes that means scrapping the old way of doing things and experimenting with a brand-new material – or fabrication process. This challenge spurred Scott Roberts, a technologist at NASA’s Jet Propulsion Laboratory in Southern California, to turn to a new kind of welding in the 3D printing industry. The private sector was already using this technique, called ultrasonic additive manufacturing (UAM)." [...]\n ',
    url:
      "https://www.jpl.nasa.gov/news/ultrasonic-welding-makes-parts-for-nasa-missions-commercial-industry",
    curated_by: "João Alves <https://jpralves.net/>",
    title:
      "Ultrasonic Welding Makes Parts for NASA Missions, Commercial Industry"
  },
  {
    newsletter_id: "2021/319/",
    category: "Projetos Maker",
    image: "PM319_Openrpncalc_s.jpg",
    text:
      '"OpenRPNCalc is a scientific calculator based on STM32 microcontroller. Its source code, schematics and 3D-printed case design files are released under open license. The hardware is inspired by the SwissMicros DM42 calculator (which itself mimics the famous HP-42), but designed from scratch. Firmware-wise, however, there is no intention to simulate programmable HP series. Currently, the calulator features: - Reverse Polish notation with 4-element stack. - Double-precision arithmetics." [...]\n ',
    url: "https://github.com/apoluekt/OpenRPNCalc",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "OpenRPNCalc"
  },
  {
    newsletter_id: "2021/319/",
    category: "Projetos Maker",
    image: "PM319_Jank_s.jpg",
    text:
      '"just another keypad 21 mechanical keys configured as a numerical keypad plus 4 programmable macro keys. Another write-up can be found at clews.pro. The main features of this keypad include: - HID compliant USB peripheral using an ATmega32U4 microcontroller with connectivity via a USB type-c connector configured as a USB 2 device. Power is also derived from the USB port. - 21 mechanical keys (gateron blues which are pin-compatible clones of Cherry MX switches) with variable brightness white LED backlight on each key. - In addition to the 17 standard keys of a numerical keypad, there is also a row of four keys across the top of the device which are programmable macros." [...]\n ',
    url: "https://hackaday.io/project/180104-jank",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "jank"
  },
  {
    newsletter_id: "2021/319/",
    category: "Projetos Maker",
    image: "PM319_TheRp2040RaspberryPiPicoMeetsL_s.jpg",
    text:
      '"In this post, we\'ll go over everything you need to know about the Raspberry Pi Pico Lora Expansion The Raspberry Pi Foundation\'s "Pico" board, which uses the RP2040 microprocessor, is the newest compact, fast, and adaptable Arduino Nano board. The board may be programmed using MicroPython and C/C++, as you may know. In this post, we\'ll go over everything you need to know about the Raspberry Pi Pico Lora Expansion. Raspberry Pi Pico LoRa™ Expansion is a low-power data transmission board that includes an onboard CH340 USB TO UART converter, Voltage Level Translator (74HC125V), E22-900T22S/E22-400T22S SMA antenna connector that covers the 868MHz/433MHz frequency bands, Onboard 1.14" LCD, IPEX antenna connector, and LoRa™ Spread Spectrum Modulation technology with auto multi-level repeating. Pico LoRa™ Expansion can now be purchased on SB Components with two different frequency 868MHz/433MHz. " [...]\n ',
    url:
      "https://www.hackster.io/kamaluddinkhan/the-rp2040-raspberry-pi-pico-meets-lora-146b37",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "The RP2040 Raspberry Pi Pico Meets LoRa"
  },
  {
    newsletter_id: "2021/319/",
    category: "Projetos Maker",
    image: "PM319_Mousemover_s.jpg",
    text:
      '"Moves the mouse cursor a tiny amount occasionally, simulating the user being at the computer, preventing the PC from going to sleep/lock. Overview Having worked in corporate America for the better part of 40 years, I’ve seen corporate computer security policies change over that time from almost none to nearly insane. Today many IT groups force the computers they maintain to require a password to be entered if the computer goes to sleep, which can occur in as few as 5 minutes, in some cases. A recent employer of mine also went to a two step authentication scheme using your password and a token device that displays a set of numbers that also have to be entered as a second password. While this security is nice and sometimes essential, it can be very annoying if you actually need to get something done (besides entering passwords). I can’t count the times I’ve been interrupted at my desk by a conversation with a co worker only to find that when I get back to my computer, the screen has gone to the lock screen and I have to enter the password and a token value to continue." [...]\n ',
    url: "https://www.hackster.io/Rick-G1/mousemover-5b178e",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "MouseMover"
  },
  {
    newsletter_id: "2021/319/",
    category: "Projetos Maker",
    image: "PM319_PortableFoldableScoreboard_s.jpg",
    text:
      '"A portable, scalable and foldable display, that can be used as a Scoreboard or Timekeeper in outdoor sport events, with minimal setup A simple, scalable and foldable display, that can be used as a Scoreboard or Timekeeper in sport matches. Quite useful for indoor and outdoor sports, as it\'s very easy to setup (all you need is a place to hang it!). The visibility is really good, it can be easily read from 50+ metres, even in sunny days Display is made with the popular WS2812 strips. The current prototypes use the IP65/30 version, fixed into PVC bars. The 15x9 resolution can then be achieved with a single 5m strip The frame is based in modified 3dprinter cable chain slabs, with fixings to held the PVC bars with the leds. The vertical separation of each bar matches the strip horizontal distance between LEDs, to keep the aspect ratio." [...]\n ',
    url: "https://hackaday.io/project/180017-portable-foldable-scoreboard",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "Portable Foldable Scoreboard"
  },
  {
    newsletter_id: "2021/319/",
    category: "Novidades da Semana",
    image: "NS319_MarsHelicopterIngenuityAces7Th_s.jpg",
    text:
      "\"NASA's Mars helicopter Ingenuity now has seven Red Planet flights under its belt. The 4-lb. (1.8 kilograms) chopper took to the Martian skies again on Tuesday (June 8), making its first sortie since battling through an in-flight anomaly on May 22. And there were no problems this time around. \"From a helicopter team member: 'No anomalies in flight 7, Ingenuity is healthy!' NASA's Jet Propulsion Laboratory (JPL), which manages Ingenuity's mission, wrote via Twitter on Tuesday evening Ingenuity lifted off around 12:34 local mean solar time on Tuesday, which corresponds to 11:54 a.m. EDT (1554 GMT).\" [...]\n ",
    url: "https://www.space.com/mars-helicopter-ingenuity-aces-seventh-flight",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "Mars helicopter Ingenuity aces 7th flight on the Red Planet"
  },
  {
    newsletter_id: "2021/319/",
    category: "Novidades da Semana",
    image: "NS319_MarsHelicopterIngenuityAces7Th_s.jpg",
    text:
      "\"NASA's Mars helicopter Ingenuity now has seven Red Planet flights under its belt. The 4-lb. (1.8 kilograms) chopper took to the Martian skies again on Tuesday (June 8), making its first sortie since battling through an in-flight anomaly on May 22. And there were no problems this time around. \"From a helicopter team member: 'No anomalies in flight 7, Ingenuity is healthy!' NASA's Jet Propulsion Laboratory (JPL), which manages Ingenuity's mission, wrote via Twitter on Tuesday evening Ingenuity lifted off around 12:34 local mean solar time on Tuesday, which corresponds to 11:54 a.m. EDT (1554 GMT).\" [...]\n ",
    url: "https://www.space.com/mars-helicopter-ingenuity-aces-seventh-flight",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "Mars helicopter Ingenuity aces 7th flight on the Red Planet"
  },
  {
    newsletter_id: "2021/319/",
    category: "Novidades da Semana",
    image: "NS319_NasaSelects2MissionsToStudyLos_s.jpg",
    text:
      '"NASA has selected two new missions to Venus, Earth’s nearest planetary neighbor. Part of NASA’s Discovery Program, the missions aim to understand how Venus became an inferno-like world when it has so many other characteristics similar to ours – and may have been the first habitable world in the solar system, complete with an ocean and Earth-like climate. These investigations are the final selections from four mission concepts NASA picked in February 2020 as part of the agency’s Discovery 2019 competition. Following a competitive, peer-review process, the two missions were chosen based on their potential scientific value and the feasibility of their development plans. The project teams will now work to finalize their requirements, designs, and development plans. NASA is awarding approximately $500 million per mission for development." [...]\n ',
    url:
      "https://www.nasa.gov/press-release/nasa-selects-2-missions-to-study-lost-habitable-world-of-venus",
    curated_by: "João Alves <https://jpralves.net/>",
    title: "NASA Selects 2 Missions to Study ‘Lost Habitable’ World of Venus"
  },
  {
    newsletter_id: "2021/319/",
    category: "Ciência e Tecnologia",
    image: "CT319_NewFormOfSiliconCouldEnableNex_s.jpg",
    text:
      '"A team led by Carnegie’s Thomas Shiell and Timothy Strobel developed a new method for synthesizing a novel crystalline form of silicon with a hexagonal structure that could potentially be used to create next-generation electronic and energy devices with enhanced properties that exceed those of the “normal” cubic form of silicon used today. Their work is published in Physical Review Letters. Silicon plays an outsized role in human life. It is the second most abundant element in the Earth’s crust. When mixed with other elements, it is essential for many construction and infrastructure projects. And in pure elemental form, it is crucial enough to computing that the longstanding technological hub of the U.S.—California’s Silicon Valley—was nicknamed in honor of it." [...]\n ',
    url:
      "https://carnegiescience.edu/news/new-form-silicon-could-enable-next-gen-electronic-and-energy-devices",
    curated_by: "João Alves <https://jpralves.net/>",
    title:
      "New Form Of Silicon Could Enable Next-Gen Electronic And Energy Devices"
  },
  {
    newsletter_id: "2021/319/",
    category: "Ciência e Tecnologia",
    image: "CT319_ResearchersTameSiliconToIntera_s.jpg",
    text:
      '"Skoltech researchers and their colleagues from RAS Institute for Physics of Microstructures, Lobachevsky State University of Nizhny Novgorod, ITMO University, Lomonosov Moscow State University, and A.M. Prokhorov General Physics Institute have found a way to increase photoluminescence in silicon, the notoriously poor emitter and absorber of photons at the heart of all modern electronics. This discovery may pave the way to photonic integrated circuits, boosting their performance. The paper was published in the journal Laser and Photonics Reviews. “Natural selection” in semiconductor technology over almost 80 years has led to silicon emerging as the predominant material for chips. Most digital microcircuits are created using CMOS technology (CMOS), which stands for complementary metal-oxide-semiconductor. Yet manufacturers have hit a wall on the way to increasing their performance even further: heat release due to high density of elements in CMOS circuits." [...]\n ',
    url:
      "https://www.skoltech.ru/en/2021/06/researchers-tame-silicon-to-interact-with-light-for-next-generation-microelectronics/",
    curated_by: "João Alves <https://jpralves.net/>",
    title:
      "Researchers tame silicon to interact with light for next-generation microelectronics"
  }
]
