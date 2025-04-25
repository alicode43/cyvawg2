import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

const caseStories = [
  {
    id: 1,
    title: "Samantha Billingham – A Survivor's Journey and Advocacy Against Cyber-Enabled Domestic Abuse",
    preview: "Samantha Billingham's journey from victim to advocate highlights the urgent need for digital safety, early abuse recognition, and stronger support systems against tech-facilitated coercive control.",
    description: "Samantha Billingham details her transformative journey from enduring covert, technology-facilitated abuse to emerging as a resilient advocate for survivors. Her experience highlights the subtle, yet pervasive nature of coercive control, where digital tools are misused to isolate and manipulate, resulting in significant psychological and emotional impacts. Through her personal narrative, Samantha underscores the critical need for early recognition of abuse and the importance of supportive interventions. Her development of the ABC Toolkit stands as a practical resource, empowering others to identify red flags and seek help. This case study is a compelling call to action for improved legal protections, comprehensive digital safety education, and robust support systems for those affected by cyber-enabled domestic abuse.",
    downloadUrl: "/cases/case1.pdf"
  },
  {
    id: 2,
    title: "Nina Jane Patel",
    preview: "Implementation of digital safety education programs in universities to protect female students from cyber violence.",
    description: "Psychotherapist and metaverse researcher Nina Jane Patel was sexually assaulted by male avatars within minutes of entering Meta’s Horizon Worlds VR platform. Despite the immersive trauma—triggering panic attacks and professional repercussions—Meta dismissed the incident as non-consensual imagery, not rape, and took no action. Patel faced victim-blaming and found no legal recourse, as virtual assault lacks evidentiary frameworks and legal recognition. Her case exposes systemic failures: VR platforms lack moderation, reporting tools, and accountability, while laws lag behind tech-enabled abuse. Patel now advocates for VR safety reforms, underscoring the urgent need for platform accountability, trauma-informed policies, and legal updates to address virtual violence as a real-world harm.",
    downloadUrl: "/cases/case2.pdf"
  },
  {
    id: 3,
    title: "Hannah Moore",
    preview: "Strategies and tools for protecting women and girls from harassment and abuse on social media platforms.",
    description: "Fashion designer Hannah Moore met Kin Hung at London Fashion Week, which led to a years-long cyberstalking campaign against her. The offender used her personal information to arrange identity theft, harassment, and threats. Despite extensive evidence, UK police failed to act. Moore's life was deeply affected, revealing systemic flaws in addressing digital gender-based violence. The case was exposed by journalist Carole Cadwalladr in the 'Stalked' podcast. It revealed how digital abuse is often dismissed compared to physical stalking. Moore's experience calls for urgent reforms in law enforcement training, cyberstalking legislation, and platform accountability to protect women online.",
    downloadUrl: "/cases/case3.pdf"
  },
  {
    id: 4,
    title: "Honey cook",
    preview: "Strategies and tools for protecting women and girls from harassment and abuse on social media platforms.",
    description: "Unrelenting cyberbullying by strangers ended the life of 15-year-old Honey Cook in 2021; her mother, Gemma Bentley, was unaware of the abuse until it was too late on her phone. Devastated but resolute, Gemma used her sorrow to launch Bee Kind for Honey, a nonprofit organization that addresses cyberbullying and promotes the mental health of young people. ...",
    downloadUrl: "/cases/case4.pdf"
  },
  {
    id: 5,
    title: "Carla Denyer",
    preview: "Strategies and tools for protecting women and girls from harassment and abuse on social media platforms.",
    description: "In 2021, Carla Denyer became co-leader of the Green Party, becoming the first openly bisexual woman to run a major English political party. ...",
    downloadUrl: "/cases/case5.pdf"
  },
  {
    id: 6,
    title: "Nicola Thorp",
    preview: "Implementation of digital safety education programs in universities to protect female students from cyber violence.",
    description: "In 2021, Carla Denyer became co-leader of the Green Party, making her the first openly bisexual woman to lead a major English political party. ...",
    downloadUrl: "/cases/case6.pdf"
  }
];

export function CaseStories() {
  const [expandedCases, setExpandedCases] = useState<number[]>([]);

  const toggleCase = (id: number) => {
    setExpandedCases(prev =>
      prev.includes(id)
        ? prev.filter(caseId => caseId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" style={{ color: '#610064' }}>
          Case Study
        </h1>

        <div className="space-y-6 md:space-y-8">
          {caseStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#610064' }}>
                  {story.title}
                </h2>

                <div className="mb-4">
                  <p className="text-gray-600">{story.preview}</p>

                  <div className={`mt-4 transition-all duration-300 ${expandedCases.includes(story.id) ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">{story.description}</p>
                  </div>

                  <button
                    onClick={() => toggleCase(story.id)}
                    className="mt-2 text-purple-600 hover:text-purple-800 flex items-center gap-1 transition-colors"
                  >
                    {expandedCases.includes(story.id) ? (
                      <>
                        Read Less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <button
                  className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors"
                  style={{ backgroundColor: '#610064' }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = '#4e0050')}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = '#610064')}
                  onClick={() => window.open(story.downloadUrl, '_blank')}
                >
                  <Download className="h-5 w-5" />
                  <span>Download Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
