import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#262626] text-white py-6">
            <div className="container mx-auto px-8 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-[#C8A97E] hover:text-[#ffe4be] text-2xl" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-[#C8A97E] hover:text-[#ffe4be] text-2xl" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-[#C8A97E] hover:text-[#ffe4be] text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-[#C8A97E] hover:text-[#ffe4be] text-2xl" />
                    </a>
                </div>

                <p className="text-sm font-mono">© 2025 LATIN GRILL TAMPA Restaurant. <br /> All rights reserved.</p>
            </div>
        </footer>
    );
}
