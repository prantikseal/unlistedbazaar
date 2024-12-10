'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Price Discovery',
    description: 'Get the most accurate and up-to-date pricing information',
    icon: ChartBarIcon,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000'
  },
  {
    title: 'Up to Date Inventory',
    description: 'Access real-time stock availability and market data',
    icon: ClockIcon,
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000'
  },
  {
    title: '10-20% Lesser Than Grey Market Price',
    description: 'Competitive pricing below market rates',
    icon: CurrencyDollarIcon,
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1000'
  },
  {
    title: 'End to End Support',
    description: 'Complete assistance from purchase to delivery',
    icon: ShieldCheckIcon,
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1000'
  },
  {
    title: 'Direct to Your Demat',
    description: 'Seamless transfer to your demat account',
    icon: TruckIcon,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000'
  },
  {
    title: 'B2B Bulk Deals',
    description: 'Special pricing for bulk institutional orders',
    icon: UserGroupIcon,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Unlisted Bazaar?</h2>
          <p className="text-xl text-gray-600">
            Your trusted partner in unlisted securities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <feature.icon className="absolute top-4 right-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Buying Unlisted Stock is Hard, But its Price Discovery is Harder
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We simplify both processes with our extensive network and market expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
} 