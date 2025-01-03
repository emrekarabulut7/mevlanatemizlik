// Tema değiştirme fonksiyonu
function setTheme(themeName) {
    // Tema class'ını body'e ekle
    document.body.className = themeName + '-mode';
    
    // Tüm tema butonlarını güncelle (hem masaüstü hem mobil)
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(themeName + '-mode')) {
            btn.classList.add('active');
        }
    });
    
    // Temayı localStorage'a kaydet
    localStorage.setItem('theme', themeName);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş temayı kontrol et
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Mobil tema butonlarına click event listener ekle
    document.querySelectorAll('.theme-switcher-mobile .theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.classList.contains('light-mode') ? 'light' : 'dark';
            setTheme(theme);
        });
    });

    // Masaüstü tema butonlarına click event listener ekle
    document.querySelectorAll('.theme-switcher .theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.classList.contains('light-mode') ? 'light' : 'dark';
            setTheme(theme);
        });
    });
}); 