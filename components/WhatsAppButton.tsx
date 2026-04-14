'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { brandData } from '@/GlobalData';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(brandData.whatsappMessage);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
}
