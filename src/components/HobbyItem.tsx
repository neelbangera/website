interface HobbyItemProps {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    details: string;
}

export default function HobbyItem({icon:  icon, name, details }: HobbyItemProps){
    // This is correct: Alias the prop to a PascalCase variable.
    const Icon = icon;

    return(
        <div className = "flex items-start justify-between p-3 bg-slate-700 rounded-xl border border-slate-600 hover:border-yellow-400 transition-colors">
            <div className = "flex items-center space-x-3">
                <Icon className="w-6 h-6 text-teal-400"/>
                <div>
                    <div className="text-white font-semibold text-lg">{name}</div>
                    <div className = "text-gray-300 text-sm">{details}</div>
                </div>
            </div>
        </div>
    );
}