
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FileShare | Upload",
  description: "Share your files instantly",
};

export default function layout({ children }) {
  return (
    <div>
        <Navbar/>
        {
            children
        }
    </div>
  );
}
