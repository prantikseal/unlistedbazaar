'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BulkDealsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Buy Bulk
                        <span className="text-[#04dd2a]"> Deep Discounts</span> for Deep Pockets
                    </h2>

                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000"
                            alt="Bulk Deals"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <p className="text-xl md:text-2xl font-semibold mb-4">
                                    Special pricing for bulk orders
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#04dd2a] text-white px-8 py-3 rounded-lg 
                           shadow-lg hover:shadow-xl transition-all duration-300"
                                    onClick={() => window.open('https://wa.me/918333008904?text=I am interested in buying from unlistedbazaar')}                           >
                                    Contact for Bulk Deals
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 