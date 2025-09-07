# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features an embedded PDF viewer for your LaTeX resume.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 📄 **PDF Resume Viewer**: Interactive PDF viewer with zoom, navigation, and download functionality
- ⚡ **Fast Loading**: Built with Next.js 15 and optimized for performance
- 🎯 **SEO Optimized**: Proper meta tags and structure for search engines
- 🔗 **Social Links**: Easy integration with GitHub, LinkedIn, and email

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Add your resume:

   - Export your LaTeX resume as a PDF
   - Place the PDF file in the `public` folder
   - Name it `resume.pdf` (or update the path in `src/components/ResumeViewer.tsx`)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit `src/app/page.tsx` to update:

- Your name and title
- About section content
- Project information
- Contact details and social links

### Resume Configuration

The resume viewer is configured in `src/components/ResumeViewer.tsx`. You can:

- Change the PDF path
- Customize the viewer controls
- Modify the styling

### Styling

The project uses Tailwind CSS. You can:

- Update colors in the gradient themes
- Modify spacing and layout
- Add custom animations
- Change typography

### Adding Projects

Update the projects section in `src/app/page.tsx`:

1. Replace the placeholder project cards
2. Add real project data, images, and links
3. Include technology tags and descriptions

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── resume/
│       └── page.tsx         # Dedicated resume page
├── components/
│   └── ResumeViewer.tsx     # PDF viewer component
public/
└── resume.pdf               # Your resume (add this file)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- AWS Amplify
- Railway
- Any platform that supports Node.js

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React PDF**: PDF viewing capability
- **Lucide React**: Modern icon library

## Contributing

Feel free to submit issues and pull requests to improve this template!

## License

This project is open source and available under the MIT License.
