"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{getTranslation('footerConnect', language)}</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {getTranslation('footerDescription', language)}
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:noureddine@example.com"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              {getTranslation('footerMade', language)} <Heart size={16} className="text-red-500" /> {getTranslation('footerBy', language)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} Noureddine Azinag. {getTranslation('footerRights', language)}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}