import React from "react";
import { Link } from "react-router-dom";

export function Home() {
 
  const [contactMessage, setContactMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

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

            <div className="flex flex-col items-center gap-2">
              <p>
                The Cyber Violence Against Women and Girls (CyVAWG) project was
                a three-month initiative (January – March 2025) led by Dr.
                Anitha Chinnaswamy, Programme Director for MSc Cyber Security
                Management and Deputy Director of the Cyber Security Innovation
                Research Centre at Aston University.
              </p>
              <p>
                Funded by Innovate UK and supported by the Department for
                Science, Innovation and Technology (DSIT) and West Midlands
                Police, the project explored the urgent and evolving issue of
                technology-facilitated abuse, specifically its impact on women
                and girls in the UK.
              </p>

              <p>
                As the digital world becomes more integrated into our daily
                lives, new forms of abuse, such as stalking via smart devices,
                non-consensual image sharing, online harassment, deepfake
                exploitation, and abuse in immersive environments like the
                metaverse, are increasingly prevalent. CyVAWG aimed to create
                awareness, equip communities, and inspire action.
              </p>
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

      <section className="flex md:flex-row flex-col md:gap-[5%] gap-11 bg-red-50  py-12 md:py-20 md:px-0 px-6 relative  justify-center lg:h-[550px] md:h-[650px] h-full">
        {/* Card 1 */}
         <div className="md:w-[40%] md:p-[1%] p-10 rounded-[5%] h-full flex flex-col gap-10 shadow-lg transition-transform hover:scale-105 bg-white text-justify relative   ">    
          <h1 className="text-[#610064] text-2xl font-bold">Case Studies</h1>

          <p className="font-bold ">
            Six anonymised case studies offering insight into real-life
            experiences of cyber violence, such as:
          </p>

          <p>
            {/* Abuse via smart home tech and IoT devices <br />
            Deepfake and online impersonation <br />
            Harassment in immersive environments (e.g. the metaverse) <br />
            Prolonged digital stalking and data weaponisation <br />
            Coercive control through digital surveillance <br />
            These stories centre lived experience and serve to educate
            practitioners, policymakers, and the wider public. */}
         The Case Studies feature six anonymised real-life accounts highlighting forms of cyber violence, including deepfakes, IoT abuse, and digital stalking. These narratives centre survivor experiences to inform and educate professionals, policymakers, and the public on emerging tech-facilitated harms.
          </p>
          <Link to="/case-stories" className="flex">
            <button className="mt-4 bg-[#610064] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors shadow-md hover:scale-105 md:w-3/5 w-full md:absolute bottom-10 md:mx-[20%] mx-auto">
              Know more about Case Studies
            </button>
          </Link>
        </div>
        {/* Card 2 */}
        <div className="md:w-[40%] md:p-[1%] p-10 rounded-[5%] h-full flex flex-col gap-10 shadow-lg transition-transform hover:scale-105 bg-white text-justify relative    ">
          <h1 className="text-[#610064] text-2xl font-bold">CyVAWG Toolkit</h1>

          <p className="font-bold ">
            A practical, survivor-informed digital resource that will include:
          </p>

          <p>
            {/* Cyber abuse self-assessment tools <br />
            Guidance on recognising red flags and abusive tech behaviours <br />
            Strategies for online safety and digital hygiene <br />
            Legal and reporting advice <br />
            Signposting to national and local support services */}
            The CyVAWG Toolkit is a survivor-informed digital resource offering self-assessment tools, safety strategies, and legal guidance to help individuals identify and respond to tech-facilitated abuse. It also provides clear signposting to national and local support services 
            <br />
          </p>
          <Link to="/toolkit" className="flex">
            <button className="mt-4 bg-[#610064] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors shadow-md hover:scale-105 md:w-3/5 w-full md:absolute bottom-10 md:mx-[20%] mx-auto ">
              Know more about CyVAWG Toolkit
            </button>
          </Link>
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

      {/* Join the CyVAWG */}
      <section className="mx-auto px-4 md:px-6">
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
            style={{ color: "#610064" }}
          >
            Join the CyVAWG Network
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            As we take the next steps, we are building a community of partners
            who share our commitment to ending cyber violence against women and
            girls. Whether you're a charity, academic, healthcare professional,
            police officer, legal advocate, survivor-led group, or tech expert,
            we want to work with you.
          </p>
          <br />
          <h1 className="font-bold">We invite you to:
</h1>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Be featured as a partner on our website</li>
            <li>Share your resources and services to be signposted to those seeking help</li>
            <li>Contribute to the toolkit or future workshops</li>
            <li>Support awareness campaigns and community outreach</li>
            <li>Co-create research, policy, or training initiatives</li>
          </ul>

 
        
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
            placeholder="To express your interest, partner with us, or learn more about the CyVAWG project"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            className="border border-gray-300 rounded p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="bg-[#610064] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-fit self-end"
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
