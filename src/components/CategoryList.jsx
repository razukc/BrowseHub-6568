import { motion } from 'framer-motion';
import { categories } from '../data/tools';

export default function CategoryList({ selectedCategory, onCategorySelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.03 }}
          className={`bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
            selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => onCategorySelect(category.id)}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{category.icon}</span>
            <span className="font-medium text-gray-900">{category.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}