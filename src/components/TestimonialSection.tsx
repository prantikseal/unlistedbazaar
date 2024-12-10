"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

interface Testimonial {
  name: string;
  newsletter: string;
  content: string;
  avatarColor: string;
  avatarImg: string;
}

// Dummy data remains the same
const dummytestimonials = [
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },
  {
    name: "Jennifer Pereira",
    newsletter: "CEO & Investor @ Celestial Group",
    content:
      "ThriveLetter brings skill, speed, and execution to the newsletter and media world. In just 12 issues, they’ve taken our newsletter to an unheard of 50% open rate. Their team is not only led by domain experts and authority, they are knowledgeable and fun people to work with.",
    avatarColor: "bg-blue-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQGJIb2EeYvHJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718149426078?e=1732147200&v=beta&t=5vXZ684AvmCD6-TTP_x1jwH5gPkOs8nxlWyTYfi6ubg",
  },
  {
    name: "Josh Cons",
    newsletter: "Founder @ Notice Media",
    content:
      "The ThriveLetter team helped us reach the exact audience I wanted to reach through my newsletter. Best part: I could 100% rely on them",
    avatarColor: "bg-purple-200",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/D5603AQF57gwCGkYoIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718222916535?e=1732147200&v=beta&t=OE4OaL7I9gYGLilleoxkuXC_uT2YxwtxXl2Om_WgX_w",
  },

  // Add more dummy testimonials as needed
];

const testimonials = [...dummytestimonials, ...dummytestimonials];

// TestimonialCard component
const TestimonialCard: React.FC<Testimonial> = ({
  name,
  newsletter,
  content,
  avatarColor,
  avatarImg,
}) => (
  <div className="bg-[#A1A1A1] rounded-lg p-6 w-80 flex-shrink-0 mx-2 flex flex-col h-96">
    <div className={`w-16 h-16 ${avatarColor} rounded-full mx-auto mb-4 relative`}>
      <img src={avatarImg} alt={name} className="w-16 h-16 rounded-full absolute" />
    </div>
    <h3 className="font-black text-center text-black">{name}</h3>
    <p className="text-sm text-center text-black mb-4">{newsletter}</p>
    <p className="text-sm bg-[#FFFFFF] p-6 rounded-lg text-black flex-grow overflow-y-auto">
      {content}
    </p>
  </div>
);

// Main TestimonialSection component
const TestimonialSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;

    const animate = async () => {
      await controls.start({
        x: [-clientWidth, -scrollWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isHovered ? 2000 : 300,
            ease: "linear",
          },
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <div className="pb-16 px-4 overflow-hidden min-h-screen mb-12">
      <h1 className="text-6xl md:text-[150px] font-bold text-center text-[#F5F5F5] opacity-[0.2] font-mango leading-relaxed">
        TESTIMONIALS
      </h1>
      <div className="relative mb-12 flex justify-center">
        <p className="text-yellow-400 text-right absolute">
          What our clients have to say
        </p>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div ref={carouselRef} className="flex" animate={controls}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-16">
        <Link
          href="https://calendly.com/thriveletter/15-minute-discovery-call"
          target="_blank"
          className="bg-yellow-500 text-[#292929] font-semibold text-xl py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          Book a Call Now
        </Link>
      </div>
    </div>
  );
};

export default TestimonialSection;
