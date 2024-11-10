import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Textarea, Button, Card, CardBody } from "@nextui-org/react";
import { 
  FiMessageSquare, 
  FiSend, 
  FiCheck, 
  FiGithub,
  FiLinkedin,
  FiTwitter 
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationState {
  name: { valid: boolean; message: string };
  email: { valid: boolean; message: string };
  subject: { valid: boolean; message: string };
  message: { valid: boolean; message: string };
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validation, setValidation] = useState<ValidationState>({
    name: { valid: true, message: '' },
    email: { valid: true, message: '' },
    subject: { valid: true, message: '' },
    message: { valid: true, message: '' },
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (
    name: keyof FormData,
    value: string
  ): { valid: boolean; message: string } => {
    switch (name) {
      case 'name':
        if (!value.trim()) return { valid: false, message: 'Name is required' };
        if (value.length < 2) return { valid: false, message: 'Name must be at least 2 characters' };
        return { valid: true, message: '' };

      case 'email':
        if (!value.trim()) return { valid: false, message: 'Email is required' };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { valid: false, message: 'Invalid email format' };
        return { valid: true, message: '' };

      case 'subject':
        if (!value.trim()) return { valid: false, message: 'Subject is required' };
        if (value.length < 3) return { valid: false, message: 'Subject must be at least 3 characters' };
        return { valid: true, message: '' };

      case 'message':
        if (!value.trim()) return { valid: false, message: 'Message is required' };
        if (value.length < 10) return { valid: false, message: 'Message must be at least 10 characters' };
        return { valid: true, message: '' };

      default:
        return { valid: true, message: '' };
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const fieldName = name as keyof FormData;
    setValidation(prev => ({
      ...prev,
      [fieldName]: validateField(fieldName, value)
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResults = (Object.keys(formData) as Array<keyof FormData>).reduce(
      (acc, key) => ({
        ...acc,
        [key]: validateField(key, formData[key])
      }),
      {} as ValidationState
    );

    setValidation(validationResults);

    // if (!Object.values(validationResults).every(field => field.valid)) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccess(true);
    setLoading(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const socialLinks = [
    { icon: <FiGithub className="h-6 w-6" />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin className="h-6 w-6" />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter className="h-6 w-6" />, href: '#', label: 'Twitter' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-6 inline-block rounded-full bg-blue-100 p-4 dark:bg-blue-900/30"
          >
            <FiMessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            Get in Touch
          </h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-gray-600 dark:text-gray-300">
            {"Have a question or want to work together? Send me a message and I'll get back to you as soon as possible."}
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <CardBody className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="name"
                      label="Your Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="bordered"
                      isInvalid={!validation.name.valid && formData.name !== ''}
                      errorMessage={!validation.name.valid && formData.name !== '' ? validation.name.message : ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="bordered"
                      isInvalid={!validation.email.valid && formData.email !== ''}
                      errorMessage={!validation.email.valid && formData.email !== '' ? validation.email.message : ''}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    name="subject"
                    label="Subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="bordered"
                    isInvalid={!validation.subject.valid && formData.subject !== ''}
                    errorMessage={!validation.subject.valid && formData.subject !== '' ? validation.subject.message : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="bordered"
                    minRows={6}
                    isInvalid={!validation.message.valid && formData.message !== ''}
                    errorMessage={!validation.message.valid && formData.message !== '' ? validation.message.message : ''}
                  />
                </div>

                <Button
                  type="submit"
                  isLoading={loading}
                  color="primary"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  startContent={!loading && <FiSend className="h-4 w-4" />}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-8 flex items-center justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/30">
                <CardBody className="flex items-center space-x-2 p-4">
                  <FiCheck className="h-5 w-5 text-green-500" />
                  <p className="text-green-700 dark:text-green-300">
                    Message sent successfully!
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
