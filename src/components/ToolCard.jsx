import { motion } from 'framer-motion';
import { FiStar, FiMessageCircle } from 'react-icons/fi';

export default function ToolCard({ tool }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{tool.name}</h3>
            <p className="text-sm text-gray-500">by {tool.author}</p>
          </div>
        </div>
        
        <p className="mt-3 text-gray-600">{tool.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiStar className="text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{tool.rating}</span>
            </div>
            <div className="flex items-center">
              <FiMessageCircle className="text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">{tool.reviews}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {tool.chromeUrl && (
              <a
                href={tool.chromeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"
              >
                Chrome
              </a>
            )}
            {tool.firefoxUrl && (
              <a
                href={tool.firefoxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition"
              >
                Firefox
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}