
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t py-6 text-center text-sm text-amber-950 bg-amber-200">
      <div className="mb-3 flex justify-center gap-6 text-amber-950">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={20} />
        </a>
      </div>
      <p>
        &copy; 2025 <strong>Royal Palms</strong> — All rights reserved. <br />
        Design & Developed by <strong>H.A.K.N.N.Hapugoda</strong>
      </p>
    </footer>
  );
}