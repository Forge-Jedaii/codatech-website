// components/ui/Loader.tsx
import React from 'react';

interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loader: React.FC<LoaderProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-24 h-32',
    lg: 'w-32 h-40'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        className={`${sizeClasses[size]} overflow-visible`}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 94 136"
      >
        <path 
          stroke="#4B22B5" 
          d="M87.3629 108.433L49.1073 85.3765C47.846 84.6163 45.8009 84.6163 44.5395 85.3765L6.28392 108.433C5.02255 109.194 5.02255 110.426 6.28392 111.187L44.5395 134.243C45.8009 135.004 47.846 135.004 49.1073 134.243L87.3629 111.187C88.6243 110.426 88.6243 109.194 87.3629 108.433Z"
          className="animate-bounce-lines"
        />
        <path 
          stroke="#5728CC" 
          d="M91.0928 95.699L49.2899 70.5042C47.9116 69.6734 45.6769 69.6734 44.2986 70.5042L2.49568 95.699C1.11735 96.5298 1.11735 97.8767 2.49568 98.7074L44.2986 123.902C45.6769 124.733 47.9116 124.733 49.2899 123.902L91.0928 98.7074C92.4712 97.8767 92.4712 96.5298 91.0928 95.699Z"
          className="animate-bounce-lines-delayed"
        />
        <g className="animate-bounce-lines-delayed-2">
          <path 
            fill="url(#paint0_linear_204_217)" 
            d="M2.48637 72.0059L43.8699 96.9428C45.742 98.0709 48.281 97.8084 50.9284 96.2133L91.4607 71.7833C92.1444 71.2621 92.4197 70.9139 92.5421 70.1257V86.1368C92.5421 86.9686 92.0025 87.9681 91.3123 88.3825C84.502 92.4724 51.6503 112.204 50.0363 113.215C48.2352 114.343 45.3534 114.343 43.5523 113.215C41.9261 112.197 8.55699 91.8662 2.08967 87.926C1.39197 87.5011 1.00946 86.5986 1.00946 85.4058V70.1257C1.11219 70.9289 1.49685 71.3298 2.48637 72.0059Z" 
          />
          <path 
            stroke="url(#paint2_linear_204_217)" 
            fill="url(#paint1_linear_204_217)" 
            d="M91.0928 68.7324L49.2899 43.5375C47.9116 42.7068 45.6769 42.7068 44.2986 43.5375L2.49568 68.7324C1.11735 69.5631 1.11735 70.91 2.49568 71.7407L44.2986 96.9356C45.6769 97.7663 47.9116 97.7663 49.2899 96.9356L91.0928 71.7407C92.4712 70.91 92.4712 69.5631 91.0928 68.7324Z" 
          />
          
          {/* Masques et géométrie du serveur */}
          <mask id="mask0_204_217" maskUnits="userSpaceOnUse" x={13} y={50} width={67} height={41}>
            <path 
              fill="white" 
              d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z" 
            />
          </mask>
          <g mask="url(#mask0_204_217)">
            <path 
              fill="#332C94" 
              d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z" 
            />
            
            {/* Couches du serveur */}
            <path fill="#5E5E5E" d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z" />
            <path fill="#71B1C6" d="M70.1311 69.3884L48.42 56.303C47.3863 55.6799 45.7103 55.6799 44.6765 56.303L22.5275 69.6523C21.4938 70.2754 21.4938 71.2855 22.5275 71.9086L44.2386 84.994C45.2723 85.617 46.9484 85.617 47.9821 84.994L70.1311 71.6446C71.1648 71.0216 71.1648 70.0114 70.1311 69.3884Z" />
            <path fill="#80C0D4" d="M70.131 70.8923L48.4199 57.8069C47.3862 57.1839 45.7101 57.1839 44.6764 57.8069L22.5274 71.1562C21.4937 71.7793 21.4937 72.7894 22.5274 73.4125L44.2385 86.4979C45.2722 87.1209 46.9482 87.1209 47.982 86.4979L70.131 73.1486C71.1647 72.5255 71.1647 71.5153 70.131 70.8923Z" />
            <path fill="#89D3EB" d="M69.751 72.1675L48.4199 59.3111C47.3862 58.6881 45.7101 58.6881 44.6764 59.3111L23.2004 72.2548C22.1667 72.8779 22.1667 73.888 23.2004 74.5111L44.5315 87.3674C45.5653 87.9905 47.2413 87.9905 48.2751 87.3674L69.751 74.4238C70.7847 73.8007 70.7847 72.7905 69.751 72.1675Z" />
            <path fill="#97E6FF" d="M68.5091 72.9231L48.4199 60.8153C47.3862 60.1922 45.7101 60.1922 44.6764 60.8153L24.8146 72.7861C23.7808 73.4091 23.7808 74.4193 24.8146 75.0424L44.9038 87.1502C45.9375 87.7733 47.6135 87.7733 48.6473 87.1502L68.5091 75.1794C69.5428 74.5563 69.5428 73.5462 68.5091 72.9231Z" />
            <path fill="#97E6FF" d="M66.6747 73.3219L48.4199 62.3197C47.3862 61.6966 45.7101 61.6966 44.6764 62.3197L26.4412 73.3101C25.4075 73.9332 25.4075 74.9433 26.4412 75.5664L44.696 86.5686C45.7297 87.1917 47.4058 87.1917 48.4395 86.5686L66.6747 75.5782C67.7084 74.9551 67.7084 73.945 66.6747 73.3219Z" />
            
            <path 
              strokeWidth="0.5" 
              stroke="#F4F4F4" 
              d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z" 
            />
          </g>
        </g>
        
        {/* Particules animées */}
        <g className="animate-fade-particles">
          <circle cx="43.5" cy="30.7" r="1.9" fill="url(#paint3_linear_204_217)" className="animate-float-up-1" />
          <circle cx="50" cy="46.5" r="1.9" fill="url(#paint4_linear_204_217)" className="animate-float-up-2" />
          <circle cx="40.3" cy="61.1" r="1.5" fill="url(#paint5_linear_204_217)" className="animate-float-up-3" />
          <circle cx="50.8" cy="71.3" r="2.3" fill="url(#paint6_linear_204_217)" className="animate-float-up-4" />
          <circle cx="48.6" cy="75.8" r="1.1" fill="url(#paint7_linear_204_217)" className="animate-float-up-5" />
          <circle cx="52.9" cy="66.8" r="0.4" fill="url(#paint8_linear_204_217)" className="animate-float-up-6" />
          <circle cx="52.2" cy="42.7" r="1.1" fill="url(#paint9_linear_204_217)" className="animate-float-up-7" />
          <circle cx="57.2" cy="28.4" r="1.1" fill="url(#paint10_linear_204_217)" className="animate-float-up-8" />
          <circle cx="43.9" cy="34.1" r="0.8" fill="url(#paint11_linear_204_217)" className="animate-float-up-9" />
        </g>
        
        {/* Reflets */}
        <g className="animate-bounce-lines-delayed-2">
          <path 
            fillOpacity="0.2" 
            fill="url(#paint12_linear_204_217)" 
            d="M49.2037 57.0009L68.7638 68.7786C69.6763 69.3089 69.7967 69.9684 69.794 70.1625V13.7383C69.7649 13.5587 69.6807 13.4657 69.4338 13.3096L48.4832 0.601307C46.9202 -0.192595 46.0788 -0.208238 44.6446 0.601307L23.6855 13.2118C23.1956 13.5876 23.1966 13.7637 23.1956 14.4904L23.246 70.1625C23.2948 69.4916 23.7327 69.0697 25.1768 68.2447L43.9084 57.0008C44.8268 56.4344 45.3776 56.2639 46.43 56.2487C47.5299 56.2257 48.1356 56.4222 49.2037 57.0009Z" 
          />
          <path 
            fillOpacity="0.2" 
            fill="url(#paint13_linear_204_217)" 
            d="M48.8867 27.6696C49.9674 26.9175 68.6774 14.9197 68.6774 14.9197C69.3063 14.5327 69.7089 14.375 69.7796 13.756V70.1979C69.7775 70.8816 69.505 71.208 68.7422 71.7322L48.9299 83.6603C48.2003 84.1258 47.6732 84.2687 46.5103 84.2995C45.3295 84.2679 44.8074 84.1213 44.0907 83.6603L24.4348 71.8149C23.5828 71.3313 23.2369 71.0094 23.2316 70.1979L23.1884 13.9816C23.1798 14.8398 23.4982 15.3037 24.7518 16.0874C24.7518 16.0874 42.7629 26.9175 44.2038 27.6696C45.6447 28.4217 46.0049 28.4217 46.5452 28.4217C47.0856 28.4217 47.806 28.4217 48.8867 27.6696Z" 
          />
        </g>
        
        {/* Panneaux droits */}
        <g className="animate-bounce-lines-delayed-2">
          <path 
            fill="#91DDFB" 
            d="M72 91.8323C72 90.5121 72.9268 88.9068 74.0702 88.2467L87.9298 80.2448C89.0731 79.5847 90 80.1198 90 81.44V81.44C90 82.7602 89.0732 84.3656 87.9298 85.0257L74.0702 93.0275C72.9268 93.6876 72 93.1525 72 91.8323V91.8323Z" 
          />
          <path 
            fill="#91DDFB" 
            d="M67 94.6603C67 93.3848 67.8954 91.8339 69 91.1962V91.1962C70.1046 90.5584 71 91.0754 71 92.3509V92.5129C71 93.7884 70.1046 95.3393 69 95.977V95.977C67.8954 96.6147 67 96.0978 67 94.8223V94.6603Z" 
          />
        </g>
        
        {/* Définitions des dégradés */}
        <defs>
          <linearGradient id="paint0_linear_204_217" x1="1.00946" y1="92.0933" x2="92.5421" y2="92.0933" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5727CC" />
            <stop offset="1" stopColor="#4354BF" />
          </linearGradient>
          <linearGradient id="paint1_linear_204_217" x1="92.5" y1="70" x2="6.72169" y2="91.1638" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4559C4" />
            <stop offset="0.29" stopColor="#332C94" />
            <stop offset="1" stopColor="#5727CB" />
          </linearGradient>
          <linearGradient id="paint2_linear_204_217" x1="92.5" y1="70" x2="3.55544" y2="85.0762" gradientUnits="userSpaceOnUse">
            <stop stopColor="#91DDFB" />
            <stop offset="1" stopColor="#8841D5" />
          </linearGradient>
          <linearGradient id="paint3_linear_204_217" x1="43.5482" y1="28.7976" x2="43.5482" y2="32.558" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint4_linear_204_217" x1="50.0323" y1="44.5915" x2="50.0323" y2="48.3519" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint5_linear_204_217" x1="40.3062" y1="59.6332" x2="40.3062" y2="62.6416" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint6_linear_204_217" x1="50.7527" y1="68.6583" x2="50.7527" y2="73.9229" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint7_linear_204_217" x1="48.5913" y1="74.675" x2="48.5913" y2="76.9312" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint8_linear_204_217" x1="52.9153" y1="66.402" x2="52.9153" y2="67.1541" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint9_linear_204_217" x1="52.1936" y1="41.5832" x2="52.1936" y2="43.8394" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint10_linear_204_217" x1="57.2367" y1="27.2935" x2="57.2367" y2="29.5497" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint11_linear_204_217" x1="43.9084" y1="33.3102" x2="43.9084" y2="34.8144" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5927CE" />
            <stop offset="1" stopColor="#91DDFB" />
          </linearGradient>
          <linearGradient id="paint12_linear_204_217" x1="62.9858" y1="16.0743" x2="67.8638" y2="88.5145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#97E6FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint13_linear_204_217" x1="31.4515" y1="39.4139" x2="36.2597" y2="88.0938" gradientUnits="userSpaceOnUse">
            <stop stopColor="#97E6FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      <style jsx>{`
        @keyframes fade-particles {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        
        @keyframes bounce-lines {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-fade-particles {
          animation: fade-particles 5s infinite alternate;
        }
        
        .animate-float-up-1 { animation: floatUp 2.2s linear infinite; }
        .animate-float-up-2 { animation: floatUp 2.5s linear infinite 0.3s; }
        .animate-float-up-3 { animation: floatUp 2s linear infinite 0.6s; }
        .animate-float-up-4 { animation: floatUp 2.8s linear infinite 0.2s; }
        .animate-float-up-5 { animation: floatUp 2.3s linear infinite 0.4s; }
        .animate-float-up-6 { animation: floatUp 3s linear infinite 0.1s; }
        .animate-float-up-7 { animation: floatUp 2.1s linear infinite 0.5s; }
        .animate-float-up-8 { animation: floatUp 2.6s linear infinite 0.2s; }
        .animate-float-up-9 { animation: floatUp 2.4s linear infinite 0.3s; }
        
        .animate-bounce-lines {
          animation: bounce-lines 3s ease-in-out infinite alternate;
        }
        
        .animate-bounce-lines-delayed {
          animation: bounce-lines 3s ease-in-out infinite alternate 0.2s;
        }
        
        .animate-bounce-lines-delayed-2 {
          animation: bounce-lines 3s ease-in-out infinite alternate 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Loader;