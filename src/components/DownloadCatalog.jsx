import { Download } from "lucide-react";

function DownloadCatalog({ file, title = "Download Catalogue" }) {
  return (
    <a
      href={file}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#0B1F3A] hover:bg-[#123A68] text-white px-6 py-3 rounded-full font-semibold transition duration-300"
    >
      <Download size={20} />
      {title}
    </a>
  );
}

export default DownloadCatalog;