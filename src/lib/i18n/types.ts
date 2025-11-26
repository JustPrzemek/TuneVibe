export type Language = 'en' | 'pl' | 'de' | 'ru' | 'es' | 'cn';

export interface Dictionary {
    common: {
        title: string;
        description: string;
        footer: string;
        privacyPolicy: string;
        contact: string;
        getApp: string;
        tuner: string;
        metronome: string;
        about: string;
    };
    about: {
        title: string;
        subtitle: string;
        heroDesc: string;
        mission: {
            item1: { title: string; desc: string };
            item2: { title: string; desc: string };
            item3: { title: string; desc: string };
        };
        story: {
            title: string;
            p1: string;
            p2: string;
            cta: string;
        };
        features: {
            title: string;
            list: string[];
        };
    };
    tuner: {
        autoMode: string;
        manualMode: string;
        reset: string;
        downloadTitle: string;
        downloadDesc: string;
        instruments: {
            guitar: string;
            bass: string;
            ukulele: string;
        };
        seo: {
            article1: { title: string; content: string };
            article2: { title: string; content: string };
            article3: { title: string; content: string };
        };
    };
    metronome: {
        bpm: string;
        tap: string;
        seo: {
            article1: { title: string; content: string };
            article2: { title: string; content: string };
            article3: { title: string; content: string };
        };
    };
    privacy: {
        title: string;
        lastUpdated: string;
        section1: { title: string; content: string; warning: string };
        section2: { title: string; content: string };
        section3: { title: string; content: string };
    };
    contact: {
        title: string;
        intro: string;
        getInTouch: string;
        emailLabel: string;
    };
}
