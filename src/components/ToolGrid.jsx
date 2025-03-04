import ToolCard from './ToolCard';
import { sampleTools } from '../data/tools';

export default function ToolGrid({ selectedCategory }) {
  const filteredTools = selectedCategory
    ? sampleTools.filter(tool => tool.category === selectedCategory)
    : sampleTools;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTools.map(tool => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}