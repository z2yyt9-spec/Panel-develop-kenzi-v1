import { action, Action } from 'easy-peasy';

export interface KenziSettings {
    customCopyright: boolean;
    copyright: string;
    isUnderMaintenance: boolean;
    maintenance: string;
    themeSelector: boolean;
    sidebarLogout: boolean;
    allocationBlur: boolean;
    alertType: string;
    alertMessage: string;
    statusCardLink: string;
    supportCardLink: string;
    billingCardLink: string;
    alwaysShowKillButton: boolean;
}

export interface KenziSettingsStore {
    data?: KenziSettings;
    setKenzi: Action<KenziSettingsStore, KenziSettings>;
}

const reviactyl: KenziSettingsStore = {
    data: undefined,

    setKenzi: action((state, payload) => {
        state.data = payload;
    }),
};

export default reviactyl;
