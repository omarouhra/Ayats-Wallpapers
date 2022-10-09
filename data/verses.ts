class Verses {
    static getAllVerses() {
        return this.VERSES
    }

    static getVerseById(id:string) {
        return this.VERSES[id]
    }

    static addVerse(verse: any) {
        this.VERSES = {...this.VERSES, ...verse}
    }

    static removeVerse(id: string) {
        let updatedVERSES = this.VERSES
        delete updatedVERSES[id]
        this.setVerses(updatedVERSES)
    }

    static setVerses(newVerses: any) {
        this.VERSES = newVerses
    }

    static VERSES: {[index: string]:any} = {
        "999:1-2": {
            source: "Aya 1-2, Chapter Al-Talaq",
            verseAr: "وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
            verseEn: "And whoever is mindful of Allah, He will make a way out for them, and provide for them from sources they could never imagine.",
        },
        "999:40": {
            source: "Aya 40, Chapter Al-Tawbah",
            verseAr: "لَا تَحْزَنْ إِنَّ ٱللَّهَ مَعَنَا",
            verseEn: "Do not worry; Allah is certainly with us.",
        },
// {
//   source: "Aya 58, Chapter Al-Furqan",
//   verseAr:
//     "وَتَوَكَّلْ عَلَى ٱلْحَىِّ ٱلَّذِى لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِۦ ۚ وَكَفَىٰ بِهِۦ بِذُنُوبِ عِبَادِهِۦ خَبِيرًا",
//   verseEn:
//     "Put your trust in the Ever-Living, Who never dies, and glorify His praises. Sufficient is He as All-Aware of the sins of His servants.",
// },
// {
//   source: "Aya 5, Chapter Ash-Sharh",
//   verseAr: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
//   verseEn: "So, surely with hardship comes ease.",
// },
    }
    ;
}

export default Verses;
