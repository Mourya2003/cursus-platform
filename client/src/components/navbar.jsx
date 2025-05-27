const Navbar = () => (
  <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-10">
    <h1 className="text-xl font-bold text-gray-800 flex-1">Cursus Platform</h1>
    {/* Add user menu, notifications, etc here */}
    <div className="flex items-center gap-4">
      <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
        <span className="sr-only">Notifications</span>
        <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
    </div>
  </header>
);

export default Navbar;