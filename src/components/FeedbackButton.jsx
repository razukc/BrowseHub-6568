import { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import { useAuth } from '../contexts/AuthContext';
import questConfig from '../config/questConfig';

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-l-lg transform rotate-90 origin-right hover:bg-blue-700 transition shadow-lg"
      >
        Feedback
      </button>

      {isOpen && (
        <FeedbackWorkflow
          uniqueUserId={currentUser?.email || questConfig.USER_ID}
          questId={questConfig.QUEST_FEEDBACK_QUESTID}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          accent={questConfig.PRIMARY_COLOR}
        >
          <FeedbackWorkflow.ThankYou />
        </FeedbackWorkflow>
      )}
    </>
  );
}