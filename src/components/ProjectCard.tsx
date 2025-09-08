import React from "react";
import {FaGithub} from "react-icons/fa";
import {ExternalLink} from "lucide-react";

interface ProjectCardProps{
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export default function ProjectCard(
    {title, description, technologies, githubUrl, liveUrl, icon: Icon}:
ProjectCardProps){
    return(
        <div className = "bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 group overflow-hidden">
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="bg-yellow-400/10 p-2 rounded-lg">
                        {Icon ? (
                            <Icon className = "w-6 h-6 text-yellow-400" />
                        ) : (
                            <FaGithub className = "w-6 h-6 text-yellow-400" />
                        )}
                    </div>
                    <div className = "flex space-x-2">
                        {githubUrl && (
                            <a href = {githubUrl}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-gray-400 hover: text-white transition-colors"
                            >
                                <FaGithub className = "w-5 h-5"/>
                            </a>
                        )}
                        {liveUrl && (
                            <a 
                            href = {liveUrl}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = "text-gray-400 hover: text-white transition-colors"
                            >
                                <ExternalLink className = "w-5 h-5"/>
                            </a>
                        )}
                    </div>
                </div>
                <h3 className = "text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {title}
                </h3>

                <p className = "text-gray-300 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                <div className = "flex flex-wrap gap-2">
                    {technologies.map((tech,index) => (
                        <span
                        key = {index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-yellow-400/20"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
}