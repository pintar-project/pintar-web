import { browser } from '$app/environment';

const STORAGE_KEY = 'pintar_user';

function createAuthState() {
    let user = $state<User | null>(null);

    if (browser) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                user = JSON.parse(stored);
            } catch (e) {
                console.error('Failed to parse stored user', e);
            }
        }
    }

    return {
        get user() {
            return user;
        },
        set user(value: User | null) {
            user = value;
            if (browser) {
                if (value) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
                } else {
                    localStorage.removeItem(STORAGE_KEY);
                }
            }
        },
        logout() {
            this.user = null;
        }
    };
}

export const authState = createAuthState();