import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-bold text-xl mb-4">logo</div>
            <p className="text-sm text-gray-600 mb-6">
              We are marketing agency that help you find more talents to develop business
            </p>
            
            <div className="flex items-center">
              <Input 
                placeholder="Enter email" 
                className="rounded-r-none border-r-0"
              />
              <Button className="rounded-l-none bg-udm-darkblue hover:bg-udm-purple">
                Subscribe Now
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-sm uppercase mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Partner program</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Reviews</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Direct Mail Academy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Success stories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase mb-4">CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">support@UDM.com</span>
                </div>
                <p className="text-sm text-gray-600">Made with ❤️ UDM</p>
                <div className="flex space-x-2 pt-4">
                  <Button variant="outline" className="text-udm-darkblue">Login</Button>
                  <Button className="bg-udm-darkblue hover:bg-udm-purple text-white">Try it for free</Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">f</div>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">t</div>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">i</div>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">in</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
