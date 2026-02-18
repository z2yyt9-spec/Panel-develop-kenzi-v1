import { createStore } from 'easy-peasy';
import flashes, { FlashStore } from '@/state/flashes';
import user, { UserStore } from '@/state/user';
import permissions, { GloablPermissionsStore } from '@/state/permissions';
import settings, { SettingsStore } from '@/state/settings';
import reviactyl, { KenziSettingsStore } from '@/state/reviactyl';
import progress, { ProgressStore } from '@/state/progress';

export interface ApplicationStore {
    permissions: GloablPermissionsStore;
    flashes: FlashStore;
    user: UserStore;
    settings: SettingsStore;
    progress: ProgressStore;
    reviactyl: KenziSettingsStore;
}

const state: ApplicationStore = {
    permissions,
    flashes,
    user,
    settings,
    progress,
    reviactyl,
};

export const store = createStore(state);
