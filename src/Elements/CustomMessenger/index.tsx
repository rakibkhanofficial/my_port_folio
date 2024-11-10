import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookMessenger, FaWhatsapp, FaLinkedin, FaWeixin, FaPaperPlane } from 'react-icons/fa';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { Input, Button, Avatar } from '@nextui-org/react';

type ChatBotType = 'messenger' | 'whatsapp' | 'linkedin' | 'wechat' | 'default';

interface FloatingChatBotProps {
  messengerUrl: string;
  chatBotType: ChatBotType;
  position: 'bottom-right' | 'bottom-left';
  size?: 'small' | 'medium' | 'large';
  brandName: string;
  brandLogo: string;
  activeHours: { start: number; end: number };
  faqs: string[];
}

const iconMap: Record<ChatBotType, React.ElementType> = {
  messenger: FaFacebookMessenger,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
  wechat: FaWeixin,
  default: FiMessageSquare,
};

const sizeMap = {
  small: 'w-12 h-12',
  medium: 'w-16 h-16',
  large: 'w-20 h-20',
};

const gradientMap: Record<ChatBotType, string> = {
  messenger: 'bg-gradient-to-br from-[#BE06D6FF] to-[#1919E6FF]',
  whatsapp: 'bg-[#25D366]',
  linkedin: 'bg-[#0A66C2]',
  wechat: 'bg-[#07C160]',
  default: 'bg-gradient-to-br from-blue-400 to-blue-600',
};

export const FloatingChatBot: React.FC<FloatingChatBotProps> = ({
  messengerUrl,
  chatBotType,
  position,
  size = 'medium',
  brandName,
  brandLogo,
  activeHours,
  faqs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [inputText, setInputText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const Icon = iconMap[chatBotType];
  const positionClass = position === 'bottom-right' ? 'right-4' : 'left-4';
  const sizeClass = sizeMap[size];
  const gradientClass = gradientMap[chatBotType];

  useEffect(() => {
    const checkActiveStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsActive(currentHour >= activeHours?.start && currentHour < activeHours?.end);
    };

    checkActiveStatus();
    const interval = setInterval(checkActiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [activeHours]);

  const handleSend = () => {
    const message = selectedQuestion || inputText;
    if (message) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`${messengerUrl}?text=${encodedMessage}`, '_blank');
      setSelectedQuestion('');
      setInputText('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className={`fixed bottom-20 lg:bottom-4 ${positionClass} ${sizeClass} rounded-full overflow-hidden cursor-pointer ${gradientClass} shadow-lg z-50`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-center w-full h-full text-white">
          <Icon 
            size={size === 'small' ? 24 : size === 'medium' ? 32 : 40}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${position === 'bottom-right' ? 'right-4' : 'left-4'} bottom-24 w-80 bg-white dark:bg-zinc-900 rounded-lg shadow-xl overflow-hidden z-50`}
          >
            <div className={`p-4 ${gradientClass} text-white`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Avatar src={brandLogo} className="mr-2 bg-white dark:bg-zinc-800" />
                  <h3 className="font-bold">{brandName}</h3>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-400' : 'bg-red-400'} mr-2`}></span>
                </div>
              </div>
            </div>
            <div className="p-4 max-h-60 custom-scrollbar overflow-y-auto">
              <h4 className="font-semibold mb-2 text-black dark:text-white">Frequently Asked Questions:</h4>
              {faqs?.map((faq, index) => (
                <Button
                  key={index}
                  variant={selectedQuestion === faq ? "solid" : "light"}
                  color={selectedQuestion === faq ? "success" : "default"}
                  className="w-full justify-start mb-2 text-left"
                  onClick={() => setSelectedQuestion(faq)}
                >
                  {faq}
                </Button>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <Input
                  value={selectedQuestion || inputText}
                  onValueChange={(value) => {
                    setSelectedQuestion('');
                    setInputText(value);
                  }}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button
                  color="secondary"
                  isIconOnly
                  className="ml-2"
                  onClick={handleSend}
                  isDisabled={!selectedQuestion && !inputText}
                >
                  <FaPaperPlane className='text-white' />
                </Button>
              </div>
            </div>
            <Button
              isIconOnly
              variant="light"
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FiX size={24} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatBot;
