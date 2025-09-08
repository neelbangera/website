"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ResumeViewer from "@/components/ResumeViewer";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
            <div className="h-6 w-px bg-slate-300"></div>
            <h1 className="text-2xl font-bold text-slate-900">Resume</h1>
          </div>
        </div>
      </header>

      {/* Resume Viewer */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ResumeViewer pdfPath="/resume.pdf" />

        <div className="mt-8 text-center bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Setup Instructions
          </h3>
          <div className="space-y-2 text-sm text-slate-600 max-w-2xl mx-auto">
            <p>1. Export your LaTeX resume as a PDF</p>
            <p>
              2. Place the PDF file in the{" "}
              <code className="bg-slate-200 px-2 py-1 rounded">public</code>{" "}
              folder
            </p>
            <p>
              3. Name it{" "}
              <code className="bg-slate-200 px-2 py-1 rounded">resume.pdf</code>{" "}
              or update the path in the component
            </p>
            <p>4. The viewer will automatically load and display your resume</p>
          </div>
        </div>
      </main>
    </div>
  );
}
