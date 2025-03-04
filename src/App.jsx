import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { QuestProvider } from '@questlabs/react-sdk';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import ToolGrid from './components/ToolGrid';
import FeedbackButton from './components/FeedbackButton';
import questConfig from './config/questConfig';
import './App.css';
import '@questlabs/react-sdk/dist/style.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <Router>
      <QuestProvider
        apiKey={questConfig.APIKEY}
        entityId={questConfig.ENTITYID}
        apiType="PRODUCTION"
      >
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <CategoryList
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
              <ToolGrid selectedCategory={selectedCategory} />
            </main>
            <FeedbackButton />
            <Toaster position="top-right" />
          </div>
        </AuthProvider>
      </QuestProvider>
    </Router>
  );
}

export default App;