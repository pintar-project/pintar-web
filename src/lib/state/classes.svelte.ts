import { browser } from '$app/environment';

export interface Class {
    id: string;
    name: string;
    description: string;
    studentCount: number;
    code: string;
    color: string;
}

const STORAGE_KEY = 'pintar_classes';

function createClassesState() {
    let classes = $state<Class[]>([]);

    if (browser) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                classes = JSON.parse(stored);
            } catch (e) {
                console.error('Failed to parse stored classes', e);
            }
        }
    }

    return {
        get list() {
            return classes;
        },
        addClass(newClass: Omit<Class, 'id' | 'studentCount' | 'code' | 'color'>) {
            const id = crypto.randomUUID();
            const colors = ['#5b5fc7', '#e8a5ac', '#b4e1fa', '#c7cbf1'];
            const color = colors[classes.length % colors.length];
            const code = Math.random().toString(36).substring(2, 8).toUpperCase();
            
            const fullClass: Class = {
                ...newClass,
                id,
                studentCount: 0,
                code,
                color
            };

            classes.push(fullClass);
            this.save();
            return fullClass;
        },
        save() {
            if (browser) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
            }
        }
    };
}

export const classesState = createClassesState();
