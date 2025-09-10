"use client";

import React from "react";
import { IconMail } from "@tabler/icons-react";
import Loader from "../ui/loader";

const ContactContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Bloc informations */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Informations de contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <IconMail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">contact@oark.io</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 text-center">📱</div>
              <span className="text-sm sm:text-base">+33 6 67 42 07 74</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 text-center">📍</div>
              <span className="text-sm sm:text-base">Nice, France</span>
            </div>
            <div className="mt-4">
              <Loader />
            </div>
          </div>
        </div>

        {/* Bloc formulaire */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Nous contacter</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 sm:p-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
