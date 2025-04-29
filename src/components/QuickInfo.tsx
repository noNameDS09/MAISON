import { Clock, MapPin, Phone } from 'lucide-react';

export default function QuickInfo() {
  const openGoogleMaps = () => {
    const locationLink = "https://maps.app.goo.gl/5nEkjevzYzpL3H6N8";
    window.open(locationLink, "_blank");
  };

  return (
    <div className="bg-[#161616] py-16 mx-auto">
      <div className="container mx-auto px-4 flex justify-around items-center">
        <div className="flex items-center gap-4">
          <Clock className="h-8 w-8 text-[#C8A97E]" />
          <div>
            <h3 className="font-serif text-lg">Opening Hours</h3>
            <p className="text-gray-400">Mon - Sun: 18:00 - 23:00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-8 w-8 text-[#C8A97E]" />
          <div>
            <h3 className="font-serif text-lg">Reservations</h3>
            <p className="text-gray-400">+1 347-808-0087</p>
          </div>
        </div>
        <div
          className="flex items-center gap-4 hover:cursor-pointer"
          onClick={openGoogleMaps}
        >
          <MapPin className="h-8 w-8 text-[#C8A97E]" />
          <div>
            <h3 className="font-serif text-lg">Location</h3>
            <p className="text-gray-400">123 Luxury Lane, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
}
