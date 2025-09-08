import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GalleryCard = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{title}</h3>
      {items && items.length > 0 && (
        <ul className="space-y-2 text-sm sm:text-base">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.link}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300"
              >
                <ArrowRight size={16} className="text-blue-500" />
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery Highlights
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-12 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Welding Automation */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl border border-gray-300/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <GalleryCard
              title="Welding Automation"
              items={[
                { name: "Robotic Automation", link: "/robotic-automation" },
                { name: "Plasma Transferred Arc Welding System", link: "/plasma-welding" },
                { name: "Welding Rotator", link: "/welding-rotator" },
                { name: "Pull-Through Welding Automation System", link: "/pull-through-welding" },
                { name: "MIG-Welding System", link: "/mig-welding" },
                { name: "TIG Longitudinal Welding SPM", link: "/tig-welding" },
                { name: "SAW-Submerged Arc Welding", link: "/saw-welding" },
                { name: "Column And Boom", link: "/column-and-boom" },
                { name: "Port Welding Machine SPM", link: "/port-welding" },
                { name: "Head & Tailstock Units", link: "/head-tailstock" },
                { name: "Hydraulic End Cap Welding SPM", link: "/hydraulic-end-cap" },
              ]}
            />
          </motion.div>

          {/* Welding Positioners + Plasma CNC + Accessories */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl border border-gray-300/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <GalleryCard
              title="Welding Positioners"
              items={[
                { name: "Welding Positioners", link: "/welding-positioners" },
                { name: "L-Type Positioner", link: "/l-type-positioner" },
                { name: "Scissor Rollers", link: "/scissor-rollers" },
                { name: "Welding Turn Table", link: "/welding-turntable" },
              ]}
            />
            <GalleryCard
              title="Plasma CNC Cutting Machine"
              items={[{ name: "View More", link: "/plasma-cnc-cutting" }]}
            />
            <GalleryCard
              title="Machine Accessories"
              items={[
                { name: "Torch Weaving Unit", link: "/torch-weaving-unit" },
                { name: "AVC Unit", link: "/avc-unit" },
                { name: "Laser Seam Tracking Unit", link: "/laser-seam-tracking-unit" },
                { name: "Welding Torch", link: "/welding-torch" },
                { name: "Cross Slides", link: "/cross-slides" },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ================= CORE VALUES SECTION ===================
const ValueCard = ({ title, text, delay }) => {
  return (
    <motion.div
      className="relative p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/40 backdrop-blur-2xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-sm sm:text-base mb-6 flex-grow">{text}</p>
      <a
        href="#"
        className="inline-block text-sm font-semibold text-gray-700 bg-black/5 px-4 py-2 rounded-lg hover:bg-black/10 transition-colors"
      >
        Learn More
      </a>
    </motion.div>
  );
};

const CoreValuesSection = () => {
  const values = [
    {
      title: "Innovation in Automation",
      text: "We specialize in advanced welding and cutting automation, pushing the boundaries of what's possible.",
    },
    {
      title: "Excellence in Engineering",
      text: "With nearly two decades of experience, our name is synonymous with quality and precision.",
    },
    {
      title: "Your Trusted Partner",
      text: "We provide high-performance, reliable solutions across a wide range of industries.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-12 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ValueCard key={i} title={v.title} text={v.text} delay={0.1 + i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= EXPORT BOTH ===================
const CombinedSections = () => {
  return (
    <>
      <GallerySection />
      <CoreValuesSection />
    </>
  );
};

export default CombinedSections;
