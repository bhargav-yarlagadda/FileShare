
import Navbar from "@/components/Navbar";
import UploadSidebar from "@/components/UploadSidebar";
export const metadata = {
  title: "FileShare | Upload",
  description: "Share your files instantly",
};

export default function layout({ children }) {
  return (
    <div className="md:min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1  md:min-h-screen md:grid-cols-4 gap-4">
        {/* UploadFile should appear first on smaller screens */}
        <div className="order-2 md:order-1 col-span-1 md:col-span-1">
          <UploadSidebar />
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
