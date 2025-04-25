import React from 'react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#610064' }}>Fighting Cyber Violence Against Women and Girls</h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The increasing reach of the internet, the rapid spread of mobile information, and the widespread use of social media, coupled with the existing pandemic of violence against women and girls (VAWG), has led to the emergence of cyber VAWG as a growing global problem with potentially significant economic and societal consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" style={{ color: '#610064' }}>Our Mission</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Survivor-Centred Case Studies</h3>
                  <p className="text-gray-700">Development of case studies highlighting the lived experiences of women subjected to cyber violence, shedding light on coercive control through digital surveillance and manipulation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Innovative Educational Tools</h3>
                  <p className="text-gray-700">Deliver workshops in collaboration with West Midlands Police, tailored to help non-tech-savvy audiences, particularly women and girls, recognise, understand, and respond to online abuse in an immersive and accessible format.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Toolkit for Everyone</h3>
                  <p className="text-gray-700">A comprehensive Toolkit developed to support anyone impacted by or working to address cyber violence. Whether you're a survivor, family member, educator, advocate, or professional, the toolkit offers practical advice, safety strategies, digital self-defence tips, and information to better understand and respond to technology-facilitated abuse.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Policy and Practice Recommendations</h3>
                  <p className="text-gray-700">Evidence-based guidelines and strategic insights to support law enforcement, policymakers, educators, and tech developers in creating more responsive systems and safer digital environments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Cross-Sector Collaboration</h3>
                  <p className="text-gray-700">Strong partnerships built with academic institutions, law enforcement, technology experts, and survivor-led organisations to foster sustained and meaningful impact.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#610064' }}>Capacity Building and Training</h3>
                  <p className="text-gray-700">Delivery of awareness sessions and training programmes that equip individuals and communities with the tools needed to recognise and challenge cyber violence.</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic text-center max-w-3xl mx-auto">These outcomes reflect our commitment to inclusive, survivor-informed research and practical, community-driven solutions that prioritise safety, dignity, and justice.</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" style={{ color: '#610064' }}></h2>
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
              Led by Dr. Anitha Chinnaswamy at Aston University, CyVAWG brings together a team of experts, researchers, and stakeholders who are committed to raising awareness, conducting in-depth research, and developing practical solutions to protect vulnerable communities from the growing threat of cyber violence.
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
    </>
  );
}