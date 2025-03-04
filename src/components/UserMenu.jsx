import { useState } from 'react';
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function UserMenu() {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">
            {currentUser?.email?.[0].toUpperCase()}
          </span>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-900">
              {currentUser?.email}
            </p>
          </div>
          
          <button
            onClick={() => {}}
            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <FiSettings />
            <span>Settings</span>
          </button>
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}