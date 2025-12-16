import { FileText, Image, Video, Folder } from 'lucide-react';
import type {FileType} from "../model/types.ts";


interface FileIconProps {
    type: FileType;
    className?: string;
}

export const FileIcon = ({ type, className }: FileIconProps) => {
    const icons = {
        document: FileText,
        image: Image,
        video: Video,
        folder: Folder,
    };

    const Icon = icons[type];
    return <Icon className={className} />;
};