import Sidebar from "@/components/Sidebar/Sidebar";


const Layout = ({ children }) => {
  return (
    <div className="flex gap-4 ">
      {/* Sidebar */}
     <div className="w-64">
     <Sidebar />
     </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 min-h-screen p-4 mb-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
