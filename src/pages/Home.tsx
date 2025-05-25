import React from "react";

export function Home() {
  const [showMore, setShowMore] = React.useState(false);
  const [showMore2, setShowMore2] = React.useState(false);
  const [contactMessage, setContactMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [toolkitRipple, setToolkitRipple] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
                style={{ color: "#610064" }}
              >
                Fighting Cyber Violence Against Women and Girls
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                The Cyber Violence Against Women and Girls (CyVAWG) project was
                a three-month initiative (January – March 2025) led by Dr.
                Anitha Chinnaswamy, Programme Director for MSc Cyber Security
                Management and Deputy Director of the Cyber Security Innovation
                Research Centre at Aston University. Funded by Innovate UK and
                supported by the Department for Science, Innovation and
                Technology (DSIT) and West Midlands Police, the project explored
                the urgent and evolving issue of technology-facilitated abuse,
                specifically its impact on women and girls in the UK. As the
                digital world becomes more integrated into our daily lives, new
                forms of abuse, such as stalking via smart devices,
                non-consensual image sharing, online harassment, deepfake
                exploitation, and abuse in immersive environments like the
                metaverse, are increasingly prevalent. CyVAWG aimed to create
                awareness, equip communities, and inspire action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: "#610064" }}
          >
            Our Mission
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Survivor-Centred Case Studies
                  </h3>
                  <p className="text-gray-700">
                    Development of case studies highlighting the lived
                    experiences of women subjected to cyber violence, shedding
                    light on coercive control through digital surveillance and
                    manipulation.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Innovative Educational Tools
                  </h3>
                  <p className="text-gray-700">
                    Deliver workshops in collaboration with West Midlands
                    Police, tailored to help non-tech-savvy audiences,
                    particularly women and girls, recognise, understand, and
                    respond to online abuse in an immersive and accessible
                    format.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Toolkit for Everyone
                  </h3>
                  <p className="text-gray-700">
                    A comprehensive Toolkit developed to support anyone impacted
                    by or working to address cyber violence. Whether you're a
                    survivor, family member, educator, advocate, or
                    professional, the toolkit offers practical advice, safety
                    strategies, digital self-defence tips, and information to
                    better understand and respond to technology-facilitated
                    abuse.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Policy and Practice Recommendations
                  </h3>
                  <p className="text-gray-700">
                    Evidence-based guidelines and strategic insights to support
                    law enforcement, policymakers, educators, and tech
                    developers in creating more responsive systems and safer
                    digital environments.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Cross-Sector Collaboration
                  </h3>
                  <p className="text-gray-700">
                    Strong partnerships built with academic institutions, law
                    enforcement, technology experts, and survivor-led
                    organisations to foster sustained and meaningful impact.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#610064" }}
                  >
                    Capacity Building and Training
                  </h3>
                  <p className="text-gray-700">
                    Delivery of awareness sessions and training programmes that
                    equip individuals and communities with the tools needed to
                    recognise and challenge cyber violence.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic text-center max-w-3xl mx-auto">
              These outcomes reflect our commitment to inclusive,
              survivor-informed research and practical, community-driven
              solutions that prioritise safety, dignity, and justice.
            </p>
          </div>
        </div>
      </section>

      {/*  cards */}

      <section className="flex md:flex-row flex-col gap-[5%] bg-red-50  py-12 md:py-20 relative  justify-center">
        {/* Card 1 */}
        <div className="md:w-[40%] p-[1%] rounded-[5%] h-full flex flex-col gap-10 shadow-lg transition-transform hover:scale-105 bg-white">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Expand case study"
          >
            <img
              src="/homepage/case study.jpg"
              alt="case study"
              width="100%"
              className="rounded-[5%] text-justify cursor-pointer hover:opacity-90 transition-opacity"
            />
          </button>
          <p className="transition-all duration-300">
            Digital technology has enabled new forms of abuse, often targeting
            women and marginalized groups. Samantha Billingham, a survivor of
            tech-enabled coercive control, now advocates for early intervention
            through her ABC Toolkit.
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="ml-2 text-purple-700 underline hover:text-purple-900"
              >
                Read More
              </button>
            )}
            {showMore && (
              <>
                {" "}
                Nina Jane Patel experienced sexual assault in Meta’s VR
                platform, revealing the lack of safeguards and legal recognition
                for virtual violence. Fashion designer Hannah Moore endured
                years of cyberstalking with no police action, exposing systemic
                failures in addressing digital abuse. After losing her daughter
                Honey to cyberbullying, Gemma Bentley founded Bee Kind for Honey
                to raise awareness and support youth mental health. Even public
                leaders face harm—Green Party co-leader Carla Denyer has
                received severe online harassment, highlighting the risks faced
                by women in public life. These cases underscore the urgent need
                for legal reform, platform accountability, and digital safety
                education.
                <button
                  onClick={() => setShowMore(false)}
                  className="ml-2 text-purple-700 underline hover:text-purple-900"
                >
                  Show Less
                </button>
              </>
            )}
          </p>
          <a href="/case-stories" className="mx-auto ">
         
          <button className="mt-4 bg-[#610064] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors shadow-md hover:scale-105">
            Case Studies
          </button>
           </a>
        </div>
        {/* Card 2 */}
        <div className="md:w-[40%] p-[1%] rounded-[5%] h-full  flex flex-col gap-10 shadow-lg transition-transform hover:scale-105 bg-white ">
          <img
            src="/homepage/toolkit.jpg"
            alt="education"
            width="100%"
            className="rounded-[5%] text-justify cursor-pointer hover:opacity-90 transition-opacity"
          />
          <p className="transition-all duration-300">
            In today’s digital age, a range of toolkits has been developed to
            help individuals, educators, and communities navigate online
            challenges and promote digital safety.
            {!showMore2 && (
              <button
                onClick={() => setShowMore2(true)}
                className="ml-2 text-purple-700 underline hover:text-purple-900"
              >
                Read More
              </button>
            )}
            {showMore2 && (
              <>
                {" "}
                In today’s digital age, a range of toolkits has been developed
                to help individuals, educators, and communities navigate online
                challenges and promote digital safety. The Andrew Tate Schools
                Toolkit equips schools to counter harmful online influences by
                fostering critical thinking and offering structured lesson
                plans, discussion guides, and response strategies. Similarly,
                the Digital Safety Toolkit provides essential resources on
                password protection, two-factor authentication, safe browsing,
                and mobile security, regularly updated to meet evolving threats.
                To address online abuse, the Online Harassment Prevention
                Toolkit offers prevention and response strategies, including
                privacy tools, reporting procedures, and support network
                templates. The Cyberbullying Response Guide focuses on both
                immediate intervention and long-term support, offering
                documentation protocols, legal resources, and educational
                prevention frameworks. Finally, the Social Media Safety Toolkit
                teaches users how to protect their privacy, manage content,
                respond to crises, and maintain digital well-being across
                platforms. Collectively, these toolkits provide a comprehensive
                approach to fostering safer, more respectful digital spaces for
                all users.
                <button
                  onClick={() => setShowMore2(false)}
                  className="ml-2 text-purple-700 underline hover:text-purple-900"
                >
                  Show Less
                </button>
              </>
            )}
          </p>
          <a href="/toolkit" className="mx-auto">
          <button className="mt-4 bg-[#610064] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors mx-auto shadow-md hover:scale-105">
            Toolkit
          </button>
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            style={{ color: "#610064" }}
          ></h2>
          <div className="space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-center items-center">
                <a
                  href="https://research.aston.ac.uk/en/persons/anitha-chinnaswamy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="\pics\e5f54562-7f4d-4dd3-b7bb-681a27cc44e0.jpeg"
                    alt="dr.Anita"
                    className="w-64 h-auto object-contain"
                  />
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Led by Dr. Anitha Chinnaswamy at Aston University, CyVAWG brings
                together a team of experts, researchers, and stakeholders who
                are committed to raising awareness, conducting in-depth
                research, and developing practical solutions to protect
                vulnerable communities from the growing threat of cyber
                violence.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img
                src="\pics\aston.jpeg"
                alt="Aston University Logo"
                className="w-full object-contain"
              />
              <img
                src="\pics\38657e45-efc0-4287-8bf3-42d6517819e5.jpeg"
                alt="Department for Science, Innovation & Technology Logo"
                className="w-full object-contain"
              />
              <img
                src="\pics\050bf6bf-2299-44e9-8558-d9d9650ad9ae.jpeg"
                alt="Innovate UK Logo"
                className="w-full object-contain"
              />
              <img
                src="\pics\450b4284-1f6e-4ed4-b5e6-af89841d819d.jpeg"
                alt="West Midlands Police Logo"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}

      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setContactMessage("");
          }}
          className="max-w-xl mx-auto bg-white p-6 rounded shadow-md flex flex-col gap-4"
        >
          <p
            className="text-xl font-semibold mb-2"
            style={{ color: "#610064" }}
          >
            Contact Us
          </p>
          <textarea
            name="contact"
            id="contact"
            placeholder="Enter your concern"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            className="border border-gray-300 rounded p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-fit self-end"
          >
            Submit
          </button>
          {submitted && (
            <span className="text-green-600 font-medium">
              Thank you for contacting us!
            </span>
          )}
        </form>
      </section>
    </>
  );
}
