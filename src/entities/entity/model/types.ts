export type FileType = 'image' | 'document' | 'video' | 'folder';

export interface FileItem {
    id: string;
    name: string;
    type: FileType;
    size: number;
    updatedAt: string; // ISO Date string
}