import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Profile Picture"
            width={300}
            height={300}
          />
        </div>
        <div className="card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">John Doe</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-6">Web Developer</p>
          <div className="border-t border-b border-gray-300 dark:border-gray-700 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-200 font-bold">
                Followers
              </span>
              <span className="text-gray-700 dark:text-gray-200">5.2K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200 font-bold">
                Following
              </span>
              <span className="text-gray-700 dark:text-gray-200">3.8K</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">About Me</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              scelerisque nisi non neque aliquet, vel sodales felis rutrum.
              Vivamus sagittis arcu id eros sollicitudin, sit amet cursus sapien
              aliquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
